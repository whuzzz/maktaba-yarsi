import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { NAV_LIST } from '../constant';
import { isDarkTheme } from '../helpers';

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
          <button
            className="text-2xl text-primary-light dark:text-primary-dark"
            type="button"
            onClick={() => setTheme(isDarkTheme(resolvedTheme))}
          >
            {resolvedTheme === 'dark' ? <MdDarkMode /> : <MdLightMode />}
          </button>
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
