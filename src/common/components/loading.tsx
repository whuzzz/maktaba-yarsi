import { FunctionComponent } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

const Loading: FunctionComponent = () => {
  return (
    <AiOutlineLoading className="m-auto block min-h-screen animate-spin text-8xl text-primary-light dark:text-primary-dark" />
  );
};

export default Loading;
