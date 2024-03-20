import { Box, Flex, Text } from "@mantine/core";
import { BookCardView } from "./BookCard";
import { Book } from "../shared/book.service";
interface IBookListProps {
  bookList: Book[];
}

function BookList(props: IBookListProps) {
  const { bookList } = props;
  return (
    <Box bg={"#f0cd71"}>
      <Text>All Books</Text>
      <Flex px={4} wrap={"wrap"} rowGap={20} justify={"space-between"}>
        {bookList.map((book) => (
          <BookCardView key={book._id} book={book} />
        ))}
      </Flex>
    </Box>
  );
}

export default BookList;
