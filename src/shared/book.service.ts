import axios from "axios";
import environment from "../environments/environment";

const { baseUrl } = environment;

export interface IBookResponse {
  status: string;
  requestTime: string;
  results: number;
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
const getAllBooks = (): Promise<IBookResponse> => {
  return axios.get(`${baseUrl}/api/v1/books`);
};

const BookService = {
  getAllBooks,
};

export default BookService;
