import { Box, Button, Flex, Text, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <Flex
      justify={"center"}
      direction={"column"}
      align={"center"}
      h={"100vh"}
      style={{ borderTop: "8px solid #bd2c1c" }}
    >
      <Box
        p={{ base: 20, md: 40 }}
        w={{ base: "100%", md: 500 }}
        h={300}
        bg={"#FFFFFF"}
        style={{
          border: "1px solid #202010",
          boxShadow: "-10px 10px #bd2c1c",
        }}
      >
        <Flex
          direction={"column"}
          justify={"space-between"}
          align={"center"}
          h={"100%"}
        >
          <Box
            w={"100%"}
            maw={"300px"}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            mb={20}
          >
            <TextInput radius={0} w={"100%"} placeholder="Email" />
            <TextInput radius={0} placeholder="Password" type={"password"} />
          </Box>
          <Button bg={"#020101"} radius={0} color={"#f6f0e6"} tt={"uppercase"}>
            Login
          </Button>

          <Text>or</Text>
          <Text
            style={{ color: "#bd2c1c", cursor: "pointer" }}
            tt={"uppercase"}
            lts={4}
            fw={700}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign up
          </Text>
        </Flex>
      </Box>
      <Text
        style={{ cursor: "pointer" }}
        td={"underline"}
        onClick={() => {
          navigate("/");
        }}
        mt={48}
      >
        Go to home page
      </Text>
    </Flex>
  );
}

export default Login;
