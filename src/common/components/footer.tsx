function Footer({ className }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={`${className} flex items-center justify-between border-t border-black/10 pt-10 pr-5 text-sm text-slate-400 dark:border-gray-800 dark:text-slate-500`}
    >
      <div className="flex items-center">
        <p className="mr-5 border-r border-black/10 pr-5 dark:border-gray-800">
          Copyright &copy; {currentYear} YARSI University
        </p>
        <a
          className="hover:text-slate-800 dark:hover:text-slate-300"
          href="https://github.com/ReySuryanom"
          target="_blank"
          rel="noreferrer"
        >
          M. Raihan S.
        </a>
      </div>
      <div className="space-x-5">
        <a
          className="hover:text-slate-800 dark:hover:text-slate-300"
          href="https://github.com/ReySuryanom/buku-islam-api"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </a>
        <a
          className="hover:text-slate-800 dark:hover:text-slate-300"
          href="https://github.com/ReySuryanom/buku-islam-api"
          target="_blank"
          rel="noreferrer"
        >
          API
        </a>
      </div>
    </footer>
  );
}

export default Footer;
