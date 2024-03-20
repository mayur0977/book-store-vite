import { Box, Button, Divider, Flex, Text, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <Flex
      justify={"center"}
      align={"center"}
      direction={"column"}
      h={"100vh"}
      gap={48}
      style={{ borderTop: "8px solid #bd2c1c" }}
    >
      <Box
        p={40}
        w={500}
        h={350}
        bg={"#f6f0e6"}
        style={{
          border: "1px solid #202010",
          boxShadow: "-10px 10px #bd2c1c",
        }}
      >
        <Flex direction={"column"} justify={"center"} align={"center"} gap={4}>
          <Box
            p={24}
            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
          >
            <TextInput w={300} placeholder="Email" />
            <TextInput placeholder="Password" type={"password"} />
            <TextInput placeholder="Confirm Password" type={"password"} />
          </Box>
          <Button bg={"#020101"} radius={0} color={"#f6f0e6"} tt={"uppercase"}>
            Sign up
          </Button>
          <Divider />
          <Text> or</Text>
          <Text
            style={{ color: "#bd2c1c", cursor: "pointer" }}
            tt={"uppercase"}
            lts={4}
            fw={700}
            onClick={() => {
              navigate("/login");
            }}
          >
            Log in
          </Text>
        </Flex>
      </Box>
      <Text
        style={{ cursor: "pointer" }}
        td={"underline"}
        onClick={() => {
          navigate("/");
        }}
      >
        Go to home page
      </Text>
    </Flex>
  );
}

export default Register;
