import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, PointerEvent } from 'react';
import snapshot from '../data/contributions.json';
import { cn } from '../lib/cn';
import { observeReveal, unobserveReveal } from '../lib/revealObserver';

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

interface Day {
  date: Date;
  count: number;
  /** 0–4, GitHub's own quartile buckets. */
  level: number;
}

const DAY_MS = 86_400_000;

// Dates are handled in UTC throughout so a visitor's timezone can never shift
// a contribution onto the neighbouring day.
const formatDay = (date: Date) =>
  date.toLocaleDateString('en-US', {
    timeZone: 'UTC',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

const formatMonth = (date: Date) =>
  date.toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short' });

const plural = (count: number, word: string) => `${count} ${word}${count === 1 ? '' : 's'}`;

function buildDays(): Day[] {
  const start = Date.parse(`${snapshot.start}T00:00:00Z`);
  return snapshot.counts.map((count, index) => ({
    date: new Date(start + index * DAY_MS),
    count,
    level: Number(snapshot.levels[index] ?? 0),
  }));
}

function summarise(days: Day[]) {
  let activeDays = 0;
  let longestStreak = 0;
  let run = 0;
  let busiest = days[0];

  for (const day of days) {
    if (day.count > 0) {
      activeDays += 1;
      run += 1;
      longestStreak = Math.max(longestStreak, run);
    } else {
      run = 0;
    }
    if (day.count > busiest.count) busiest = day;
  }

  return { activeDays, longestStreak, busiest };
}

// The snapshot is static, so this is worked out once for the whole page.
const days = buildDays();
const stats = summarise(days);
const weekCount = Math.ceil(days.length / 7);

const levelClasses = [
  'bg-surface-3',
  'bg-accent/25',
  'bg-accent/50',
  'bg-accent/75',
  'bg-accent',
];

const weekdayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

/* -------------------------------------------------------------------------- */
/*  Graph                                                                     */
/* -------------------------------------------------------------------------- */

interface Tooltip {
  text: string;
  x: number;
  y: number;
}

export function ContributionGraph() {

  const frameRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);

  // Cells cascade in, week by week, the first time the graph is on screen.
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    observeReveal(frame, (entry) => {
      if (!entry.isIntersecting) return;
      setInView(true);
      unobserveReveal(frame);
    });
    return () => unobserveReveal(frame);
  }, []);

  // On narrow screens the graph scrolls sideways; start at the newest weeks.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller) scroller.scrollLeft = scroller.scrollWidth;
  }, []);

  const showTooltip = (event: PointerEvent<HTMLDivElement>) => {
    const cell = (event.target as HTMLElement).closest<HTMLElement>('[data-day]');
    const frame = frameRef.current;
    if (!cell || !frame) {
      setTooltip(null);
      return;
    }
    const day = days[Number(cell.dataset.day)];
    const cellBox = cell.getBoundingClientRect();
    const frameBox = frame.getBoundingClientRect();
    setTooltip({
      text: `${day.count === 0 ? 'No contributions' : plural(day.count, 'contribution')} on ${formatDay(day.date)}`,
      // Clamped so the label never hangs off either edge of the card.
      x: Math.min(Math.max(cellBox.left + cellBox.width / 2 - frameBox.left, 96), frameBox.width - 96),
      y: cellBox.top - frameBox.top,
    });
  };

  // Built once: hovering only re-renders the tooltip, not all ~370 cells.
  const cells = useMemo(() => {
    const columns = [];

    // Leading column: an empty corner, then the weekday labels.
    columns.push(<span key="corner" />);
    weekdayLabels.forEach((label, row) => {
      columns.push(
        <span
          key={`weekday-${row}`}
          className="flex items-center pr-2 font-mono text-[0.6rem] leading-none text-fg-subtle"
        >
          {label}
        </span>,
      );
    });

    let lastLabelWeek = -4;
    for (let week = 0; week < weekCount; week += 1) {
      const first = days[week * 7];
      const previous = week > 0 ? days[(week - 1) * 7] : undefined;
      const monthChanged = !previous || previous.date.getUTCMonth() !== first.date.getUTCMonth();
      // Skip a label that would collide with the previous one or run off the
      // right-hand edge.
      const showMonth = monthChanged && week - lastLabelWeek >= 3 && week < weekCount - 1;
      if (showMonth) lastLabelWeek = week;

      columns.push(
        <span
          key={`month-${week}`}
          className="h-4 font-mono text-[0.6rem] leading-none whitespace-nowrap text-fg-subtle"
        >
          {showMonth ? formatMonth(first.date) : null}
        </span>,
      );

      for (let row = 0; row < 7; row += 1) {
        const index = week * 7 + row;
        const day = days[index];
        columns.push(
          day ? (
            <span
              key={index}
              data-day={index}
              style={{ '--week': week } as CSSProperties}
              className={cn(
                'contribution-cell aspect-square rounded-[3px] outline-offset-1 hover:outline hover:outline-fg/60',
                levelClasses[day.level],
              )}
            />
          ) : (
            // Days after today in the final week.
            <span key={index} />
          ),
        );
      }
    }

    return columns;
  }, []);

  const last = days[days.length - 1];

  const facts = [
    { label: 'Contributions', value: snapshot.total.toLocaleString('en-US') },
    { label: 'Active days', value: String(stats.activeDays) },
    { label: 'Longest streak', value: plural(stats.longestStreak, 'day') },
    {
      label: 'Busiest day',
      value: `${stats.busiest.count} on ${stats.busiest.date.toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric' })}`,
    },
  ];

  return (
    <div
      ref={frameRef}
      className="relative rounded-2xl border border-line-strong bg-surface-2 p-5 shadow-soft sm:p-7"
    >
      {/* ---------------- summary ---------------- */}
      <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-b border-line pb-6 sm:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="font-mono text-[0.64rem] tracking-[0.14em] text-fg-subtle uppercase">
              {fact.label}
            </dt>
            <dd className="mt-1.5 text-[1.15rem] font-semibold tracking-tight text-fg">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* ---------------- calendar ---------------- */}
      <div
        ref={scrollerRef}
        className="-mx-5 mt-6 overflow-x-auto px-5 [scrollbar-width:thin] sm:-mx-7 sm:px-7"
      >
        <div
          role="img"
          aria-label={`GitHub contribution calendar for ${snapshot.login}: ${plural(snapshot.total, 'contribution')} between ${formatDay(days[0].date)} and ${formatDay(last.date)}, across ${plural(stats.activeDays, 'active day')}.`}
          onPointerOver={showTooltip}
          onPointerLeave={() => setTooltip(null)}
          className={cn(
            'grid min-w-[44rem] grid-flow-col gap-[3px]',
            inView && 'contribution-in',
          )}
          style={{
            gridTemplateRows: 'auto repeat(7, auto)',
            gridTemplateColumns: `auto repeat(${weekCount}, minmax(0, 1fr))`,
          }}
        >
          {cells}
        </div>
      </div>

      {/* ---------------- footer ---------------- */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <p className="font-mono text-[0.66rem] tracking-[0.06em] text-fg-subtle">
          {formatDay(days[0].date)} – {formatDay(last.date)}
        </p>
        <p
          aria-hidden="true"
          className="flex items-center gap-1.5 font-mono text-[0.66rem] text-fg-subtle"
        >
          Less
          {levelClasses.map((level) => (
            <span key={level} className={cn('size-2.5 rounded-[3px]', level)} />
          ))}
          More
        </p>
      </div>

      {/* ---------------- tooltip ---------------- */}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute top-0 left-0 z-20 rounded-lg border border-line-strong bg-surface px-2.5 py-1.5 text-[0.72rem] font-medium whitespace-nowrap text-fg shadow-lift transition-opacity duration-200',
          tooltip ? 'opacity-100' : 'opacity-0',
        )}
        style={
          tooltip ? { transform: `translate(${tooltip.x}px, ${tooltip.y - 8}px) translate(-50%, -100%)` } : undefined
        }
      >
        {tooltip?.text ?? ' '}
      </div>
    </div>
  );
}
