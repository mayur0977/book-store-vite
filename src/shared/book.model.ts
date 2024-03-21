export interface IBookResponse {
  status: string;
  message: string;
  data: Data;
}
export interface Data {
  books: Book[];
}
export interface Book {
  categories: string[];
  authors: string[];
  _id: string;
  title: string;
  subTitle?: string;
  description: string;
  publisher?: string;
  publishedDate: string;
  language: string;
  pageCount: number;
  thumbnail: string;
  previewLink: string;
  price: number;
}
