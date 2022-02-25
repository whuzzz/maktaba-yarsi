export default function NestedContent({ listStyle, eventHandler, indent, text, elements }) {
  return (
    <details
      className={`${listStyle} space-y-2 marker:text-primary-light dark:marker:text-primary-dark`}
      open
    >
      <summary>
        <a
          role="button"
          tabIndex="0"
          href="#!"
          onClick={eventHandler}
          onKeyDown={eventHandler}
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
}
