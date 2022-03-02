import Link from 'next/link';
import { useEffect } from 'react';
import useDarkMode, { DarkModeToggler } from 'use-dark-mode-hook';
import { FaGithub } from 'react-icons/fa';
import { NAV_LIST } from '../constant';
import { addDarkColorScheme } from '../helpers';

function Navbar() {
  const [isDarkMode, toggleDarkMode] = useDarkMode({ element: 'html' });
  useEffect(addDarkColorScheme, [isDarkMode, toggleDarkMode]);

  return (
    <nav className="fixed top-0 z-50 mb-14 flex w-full items-center justify-between border-b border-black/10 bg-light-100 py-3.5 pl-8 pr-10 text-dark-300 dark:border-gray-800 dark:bg-dark-100 dark:text-light-300">
      <Link href="/" passHref>
        <p className="cursor-pointer text-2xl font-semibold text-primary-light dark:text-primary-dark">
          YASLAB
        </p>
      </Link>
      <div className="flex items-center space-x-8">
        <ul className="flex items-center space-x-8 font-semibold">
          {NAV_LIST.map(({ list, route }) => (
            <Link key={list} href={route} passHref>
              <p className=" cursor-pointer capitalize hover:text-primary-light dark:hover:text-primary-dark">
                {list}
              </p>
            </Link>
          ))}
        </ul>
        <div className="flex items-center border-l border-black/10 pl-6 dark:border-gray-800">
          <DarkModeToggler
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            buttonClassName="dark:text-primary-dark text-primary-light"
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
