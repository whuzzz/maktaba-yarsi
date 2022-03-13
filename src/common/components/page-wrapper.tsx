import { ReactNode } from 'react';

type PageWrapperProps = {
  children: ReactNode;
  style?: string;
};

const PageWrapper = ({ children, style }: PageWrapperProps) => {
  return (
    <main className={`${style} relative w-full pt-14 text-slate-700 dark:text-slate-400`}>
      {children}
    </main>
  );
};

export default PageWrapper;
