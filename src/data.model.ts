export type Book = {
  'Book Id': number;
  Title: string;
  Author: string;
  'My Rating': number;
  ISBN13: number;
  'Date Read': string;
  'Author l-f': string;
};

export type SearchResult = {
  start: number;
  num_found: number;
  docs: Doc[];
};

export type Doc = {
	key: string;
  author_name: string[];
  title: string;
	cover_i: number;
  isbn?: string[];
};

export interface AppliedFilter {
  category: 'author' | 'rating' | 'year';
  value: string | number;
}

export type SortType =
  | 'Book Id'
  | 'Title'
  | 'Author'
  | 'My Rating'
  | 'Date Read';
