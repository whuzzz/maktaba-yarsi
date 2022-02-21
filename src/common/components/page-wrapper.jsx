export default function PageWrapper({ children, style }) {
  return (
    <main
      className={`${style} w-full pt-16 text-slate-700 dark:text-slate-400`}
    >
      {children}
    </main>
  );
}
