import { Image, Text, Badge, Button, Box, Flex } from "@mantine/core";

import { Book } from "../shared/book.service";

interface IBookCardProps {
  book: Book;
}

export function BookCardView(props: IBookCardProps) {
  const { book } = props;
  const { title, thumbnail, categories, subTitle, language } = book;
  const catagoriesList = categories.map((badge) => (
    <Badge variant="light" key={badge}>
      {badge}
    </Badge>
  ));

  return (
    <Box
      style={{ boxShadow: "-2px 2px 1px #bd2c1c" }}
      p={8}
      bg={"#f6f0e6"}
      w={280}
    >
      <Flex gap={20} direction={"column"}>
        <Box
          style={{ alignSelf: "center", border: "3px solid #202010" }}
          w={150}
          h={200}
        >
          <Image w={"100%"} h={"100%"} src={thumbnail} alt={title} />
        </Box>

        <Text fz={20} fw={700}>
          {title}
        </Text>

        {subTitle && (
          <Text fz={15} fw={400}>
            {subTitle}
          </Text>
        )}
        <Text fz={15} fw={400}>
          {language}
        </Text>
        <Text fz={15} fw={400}>
          {catagoriesList}
        </Text>

        <Flex justify={"space-between"} align={"center"}>
          <Button
            variant="outline"
            radius={0}
            // rightSection={<IconFileDots />}
            color={"#946434"}
          >
            Read more
          </Button>
          <Button radius={0} variant="filled" color={"#202010"}>
            Add to Cart
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
