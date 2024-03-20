import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import BookService, { Book } from "../shared/book.service";
import { Box, Flex, Text } from "@mantine/core";
import { BookCardView } from "../components/BookCard";

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

      <Box>
        <Text>All Books</Text>
        <Flex wrap={"wrap"} gap={12}>
          {bookList.map((book) => (
            <BookCardView key={book._id} book={book} />
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default Home;
