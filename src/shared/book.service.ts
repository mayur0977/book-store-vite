import axios from "axios";
import environment from "../environments/environment";
import { IBookResponse } from "./book.model";

const { baseUrl } = environment;

const getAllBooks = (): Promise<IBookResponse> => {
  return axios.get(`${baseUrl}/api/v1/books`);
};

const BookService = {
  getAllBooks,
};

export default BookService;
