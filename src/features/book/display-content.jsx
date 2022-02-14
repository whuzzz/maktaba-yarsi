function DisplayContent({ content }) {
  return (
    <div
      className="book-page my-3 min-h-screen border-y border-black/10 py-8 dark:border-gray-800"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default DisplayContent;
