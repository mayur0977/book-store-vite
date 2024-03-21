import { Flex, Group, Text } from "@mantine/core";
import { IconBrandBooking, IconShoppingBag } from "@tabler/icons-react";

import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../core/AuthContext";
import { useEffect } from "react";

export function Header() {
  const navigate = useNavigate();

  const { authData } = useAuthContext();

  useEffect(() => {
    console.log("authData", authData);
  }, [authData]);
  return (
    <Flex justify={"space-between"} align={"center"} px={4} h={120}>
      <Group>
        <IconBrandBooking stroke={2} size={64} />

        <Text fz={24} fw={700} lts={2} lh={1.1} c={"#020101"}>
          Bookshelf <br />
          Bash
        </Text>
      </Group>
      {authData ? (
        <Group>
          <Text tt={"uppercase"} fw={700} lts={2}>
            {authData.name}
          </Text>
          <IconShoppingBag stroke={2} />
        </Group>
      ) : (
        <Text
          tt={"uppercase"}
          fw={700}
          lts={2}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Text>
      )}
    </Flex>
  );
}
