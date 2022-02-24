function DisplayContent({ content }) {
  return (
    <div
      className="book-page my-3 min-h-screen border-y border-black/10 py-8 dark:border-gray-800"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default DisplayContent;
