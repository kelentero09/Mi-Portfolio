#!/usr/bin/env node
/**
 * Refreshes src/data/contributions.json — the data behind the GitHub activity
 * graph — from GitHub's GraphQL API (the same source as the profile page).
 *
 *     npm run activity
 *
 * Needs a token: `GITHUB_TOKEN` / `GH_TOKEN` in the environment (the deploy
 * workflow provides one), or a logged-in `gh` CLI locally.
 *
 * It never fails the build. If there is no token or the request fails, the
 * snapshot already committed to the repo is left in place and used as-is.
 */

import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const LOGIN = 'kelentero09';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outFile = join(root, 'src', 'data', 'contributions.json');

const LEVELS = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
};

const QUERY = `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

function readToken() {
  const fromEnv = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (fromEnv) return fromEnv;
  try {
    return execFileSync('gh', ['auth', 'token'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return '';
  }
}

async function main() {
  const token = readToken();
  if (!token) {
    console.warn('No GitHub token found — keeping the existing activity snapshot.');
    return;
  }

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'User-Agent': 'portfolio-activity-graph',
    },
    body: JSON.stringify({ query: QUERY, variables: { login: LOGIN } }),
  });

  if (!response.ok) throw new Error(`GitHub API responded ${response.status}`);

  const payload = await response.json();
  const calendar = payload?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) {
    throw new Error(`Unexpected response: ${JSON.stringify(payload?.errors ?? payload).slice(0, 300)}`);
  }

  const days = calendar.weeks.flatMap((week) => week.contributionDays);

  // Compact on purpose: a start date plus one count and one level per day.
  // GitHub weeks start on Sunday, so `start` is always a Sunday.
  const snapshot = {
    login: LOGIN,
    updatedAt: new Date().toISOString(),
    total: calendar.totalContributions,
    start: days[0].date,
    counts: days.map((day) => day.contributionCount),
    levels: days.map((day) => LEVELS[day.contributionLevel] ?? 0).join(''),
  };

  writeFileSync(outFile, `${JSON.stringify(snapshot)}\n`, 'utf8');
  console.log(
    `Saved ${days.length} days (${snapshot.total} contributions, ${snapshot.start} to ${days[days.length - 1].date}).`,
  );
}

try {
  await main();
} catch (error) {
  console.warn(`Could not refresh GitHub activity — keeping the existing snapshot. ${error.message}`);
}
