export interface Book {
  'Book Id': number;
  Title: string;
  Author: string;
  'My Rating': number;
  ISBN13: number;
  'Date Read': string;
  'Author l-f': string;
  // [x: string | number | symbol]: unknown;
}

export interface AppliedFilter {
  category: 'author' | 'rating' | 'year';
  value: string | number;
}