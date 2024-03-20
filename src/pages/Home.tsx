import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import BookService, { Book } from "../shared/book.service";
import BookList from "../components/BookList";

function Home() {
  const [bookList, setBookList] = useState<Book[]>([]);
  useEffect(() => {
    BookService.getAllBooks().then((response) => {
      console.log(response);
      setBookList(response.data.books);
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <BookList bookList={bookList} />
    </>
  );
}

export default Home;
