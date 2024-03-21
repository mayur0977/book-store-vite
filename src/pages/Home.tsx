import { useEffect, useState } from "react";
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
      <Hero />
      <BookList bookList={bookList} />
    </>
  );
}

export default Home;
