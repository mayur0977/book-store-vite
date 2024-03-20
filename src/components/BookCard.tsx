import { IconGardenCart } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
} from "@mantine/core";

import { Book } from "../shared/book.service";

interface IBookCardProps {
  book: Book;
}

export function BookCardView(props: IBookCardProps) {
  const { book } = props;
  const { title, thumbnail, categories, description, language } = book;
  const catagoriesList = categories.map((badge) => (
    <Badge variant="light" key={badge}>
      {badge}
    </Badge>
  ));

  return (
    <Card
      withBorder
      radius="xs"
      p="md"
      padding={8}
      w={280}
      h={500}
      bg={"white"}
    >
      <Card.Section>
        <Image h={180} w={130} src={thumbnail} alt={title} height={180} />
      </Card.Section>

      <Card.Section style={{ borderBottom: "1px solid gray" }} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm" variant="light">
            {language}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs" lineClamp={3}>
          {description}
        </Text>
      </Card.Section>

      <Card.Section style={{ borderBottom: "1px solid gray" }}>
        <Text mt="md" fw={700} tt={"uppercase"} fz={14} c="dimmed">
          Other details
        </Text>
        <Group gap={7} mt={5}>
          {catagoriesList}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Read more
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconGardenCart color="#bd2c1c" width={24} height={24} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
