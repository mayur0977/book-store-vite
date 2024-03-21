import axios from "axios";
import environment from "../environments/environment";
import { IAddToCartResponse, IBookResponse, ICartResponse } from "./book.model";

const { baseUrl } = environment;

const getAllBooks = (): Promise<IBookResponse> => {
  return axios.get(`${baseUrl}/api/v1/books`);
};
const addToCart = (value: { bookId: string }): Promise<IAddToCartResponse> => {
  return axios.post(`${baseUrl}/api/v1/cart/add`, value);
};
const getCartDetailByUser = (): Promise<ICartResponse> => {
  return axios.get(`${baseUrl}/api/v1/cart`);
};

const BookService = {
  getAllBooks,
  addToCart,
  getCartDetailByUser,
};

export default BookService;
