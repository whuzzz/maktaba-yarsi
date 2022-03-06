import React, { FunctionComponent, ReactElement } from 'react';

type NestedContentProps = {
  listStyle: string;
  eventHandler: (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<HTMLAnchorElement>
  ) => void;
  indent: number;
  text: string;
  elements: ReactElement[];
};

const NestedContent: FunctionComponent<NestedContentProps> = ({
  listStyle,
  eventHandler,
  indent,
  text,
  elements,
}) => {
  return (
    <details
      className={`${listStyle} space-y-2 marker:text-primary-light dark:marker:text-primary-dark`}
      open
    >
      <summary>
        <a
          role="button"
          tabIndex={0}
          href="#!"
          onClick={(e) => eventHandler(e)}
          onKeyDown={(e) => eventHandler(e)}
          className={indent >= 0 ? 'font-medium' : ''}
        >
          {text}
        </a>
      </summary>
      <ul className="space-y-2.5 border-l border-dashed border-black/20 pl-8 dark:border-gray-700">
        {elements}
      </ul>
    </details>
  );
};

export default NestedContent;
