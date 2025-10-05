import { useTheme } from './themeContex'

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg border shadow-sm 
                 bg-gray-200 dark:bg-gray-700 dark:text-white
                 hover:scale-105 transition-transform"
    >
      {theme === "light" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}
