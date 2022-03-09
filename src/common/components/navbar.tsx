import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode, MdOutlineComputer } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { NAV_LIST, THEME_LIST } from '../constant';

const THEME_ICONS = {
  light: <MdLightMode />,
  dark: <MdDarkMode />,
  system: <MdOutlineComputer />,
} as { [string: string]: JSX.Element };

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

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
          <button type="button">{THEME_ICONS[resolvedTheme]}</button>
          <ul
            className="dark:highlight-white/5 absolute top-full right-0 z-50 mt-4 w-36 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-900/10 dark:bg-slate-800 dark:text-slate-300 dark:ring-0"
            aria-orientation="vertical"
            role="listbox"
            tabIndex={0}
          >
            {THEME_LIST.map((color) => (
              <li
                key={color}
                className="flex cursor-pointer items-center py-1 px-2 capitalize"
                onClick={() => setTheme(color)}
                onKeyDown={() => setTheme(color)}
                role="option"
                aria-selected="true"
              >
                {color}
              </li>
            ))}
          </ul>
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
};

export default Navbar;
