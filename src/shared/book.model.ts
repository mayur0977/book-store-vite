import { IBase } from "./global.model";

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
export interface IBooks {
  books: Book[];
}
export interface IBookResponse extends IBase<IBooks> {}
