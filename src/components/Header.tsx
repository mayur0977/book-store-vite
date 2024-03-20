import { Flex, Group, Text } from "@mantine/core";
import { IconBrandBooking, IconShoppingBag } from "@tabler/icons-react";
import { useState } from "react";

export function Header() {
  const [login] = useState(false);
  return (
    <Flex
      justify={"space-between"}
      bg={"#ffc5b7"}
      align={"center"}
      px={4}
      h={120}
    >
      <Group>
        <IconBrandBooking stroke={2} size={64} />

        <Text fz={24} fw={700} lts={2} lh={1.1} c={"#020101"}>
          Bookshelf <br />
          Bash
        </Text>
      </Group>
      {login ? (
        <IconShoppingBag stroke={2} />
      ) : (
        <Text tt={"uppercase"} fw={700} lts={2}>
          Login
        </Text>
      )}
    </Flex>
  );
}
