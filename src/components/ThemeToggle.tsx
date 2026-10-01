import { useTheme } from '../hooks/useTheme';
import { MoonIcon, SunIcon } from './Icons';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative grid size-10 place-items-center rounded-full border border-line bg-surface-2/70 text-fg-muted transition-[color,border-color,background-color] duration-300 hover:border-line-strong hover:text-accent ${className ?? ''}`}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <SunIcon
        className={`absolute size-[1.15rem] transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          isDark ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
        }`}
      />
      <MoonIcon
        className={`absolute size-[1.15rem] transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          isDark ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
      />
    </button>
  );
}