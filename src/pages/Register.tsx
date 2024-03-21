import { Box, Button, Flex, Text, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import AuthService from "../core/Auth.service";
import useNotificationHook from "../shared/useNotificationHook";

function Register() {
  const navigate = useNavigate();
  const { notify } = useNotificationHook();
  const userRegister = () => {
    AuthService.userSignup({
      name: "test",
      email: "test@gmail.com",
      password: "test@123",
      passwordConfirm: "test@123",
    })
      .then((res) => {
        console.log("RES", res);
      })
      .catch((error) => {
        console.log("ERROR at component", error);

        notify({
          id: "register",
          title: "Error",
          message: error.message,
          errorType: "error",
        });
      });
  };
  return (
    <>
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
              <TextInput radius={0} w={"100%"} placeholder="Name" />
              <TextInput radius={0} w={"100%"} placeholder="Email" />
              <TextInput
                radius={0}
                w={"100%"}
                placeholder="Password"
                type={"password"}
              />
              <TextInput
                radius={0}
                w={"100%"}
                placeholder="Confirm Password"
                type={"password"}
              />
            </Box>
            <Button
              bg={"#020101"}
              radius={0}
              color={"#f6f0e6"}
              tt={"uppercase"}
              onClick={() => {
                userRegister();
              }}
            >
              Sign up
            </Button>

            <Text>or</Text>
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
          mt={48}
        >
          Go to home page
        </Text>
      </Flex>
    </>
  );
}

export default Register;
