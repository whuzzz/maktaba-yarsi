import { useEffect } from "react";
import useDarkMode, { DarkModeToggler } from "use-dark-mode-hook";
import { addDarkColorScheme } from "../helpers";

function Navbar() {
  const [isDarkMode, toggleDarkMode] = useDarkMode({ element: "html" });
  useEffect(addDarkColorScheme, [isDarkMode, toggleDarkMode]);

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-black/10 bg-white px-10 py-3.5 text-slate-700 duration-150 dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200">
      <p className="text-2xl font-semibold text-green-600 dark:text-green-500">
        YASLAB
      </p>
      <ul className="flex items-center">
        <li>Book</li>
        <li>
          <DarkModeToggler
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            buttonClassName="dark:text-green-500 text-green-600"
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
