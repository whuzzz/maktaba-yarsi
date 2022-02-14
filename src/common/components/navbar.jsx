import Link from "next/link";
import { useEffect } from "react";
import useDarkMode, { DarkModeToggler } from "use-dark-mode-hook";
import { NAV_LIST } from "../constant";
import { addDarkColorScheme } from "../helpers";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  const [isDarkMode, toggleDarkMode] = useDarkMode({ element: "html" });
  useEffect(addDarkColorScheme, [isDarkMode, toggleDarkMode]);

  return (
    <nav className="fixed top-0 z-50 mb-14 flex w-full items-center justify-between border-b border-black/10 bg-white px-10 py-3.5 text-slate-700 dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200">
      <Link href="/">
        <a className="text-2xl font-semibold text-green-600 dark:text-green-500">
          YASLAB
        </a>
      </Link>
      <div className="flex items-center space-x-8">
        <ul className="flex items-center space-x-8 font-semibold">
          {NAV_LIST.map(({ list }) => (
            <Link key={list} href={`/${list}`}>
              <a className="capitalize hover:text-green-600 dark:hover:text-green-500">
                {list}
              </a>
            </Link>
          ))}
        </ul>
        <div className="flex items-center border-l border-black/10 pl-6 dark:border-gray-800">
          <DarkModeToggler
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            buttonClassName="dark:text-green-500 text-green-600"
          />
          <a
            href="https://github.com/ReySuryanom/yaslab"
            target="_blank"
            rel="noreferrer"
            className="ml-6 text-xl text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
