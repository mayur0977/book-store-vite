import { Box, Container } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AuthContextProvider from "./core/AuthContext";
import Interceptor from "./core/Interceptor";
import Register from "./pages/Register";

function App() {
  return (
    <Box style={{ minHeight: "100vh", backgroundColor: "#f6f0e6" }}>
      <AuthContextProvider>
        <Interceptor />
        <Container maw={"1536px"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
        </Container>
      </AuthContextProvider>
    </Box>
  );
}

export default App;
