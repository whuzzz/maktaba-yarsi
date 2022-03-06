export type BookInfo = {
  title: string;
  author: string;
  publish: string;
  pages: number;
  price: number;
  category: string;
  desc: string;
};

export type Content = {
  page: number;
  text: string;
};

export type Outline = Content & {
  head?: boolean;
  tail?: boolean;
  sub?: Outline[];
};

export type Book = {
  id: string;
  info: BookInfo;
  tableOfContents: Outline[];
  content: Content[];
};

export type Categories = {
  category: string;
};
