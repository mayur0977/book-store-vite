import { Box, Container } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AuthContextProvider from "./core/AuthContext";
import Interceptor from "./core/Interceptor";
import Register from "./pages/Register";
import { Header } from "./components/Header";

function App() {
  return (
    <Box
      style={{
        minHeight: "100vh",
        backgroundColor: "#f6f0e6",
      }}
    >
      <AuthContextProvider>
        <Interceptor />
        <Box bg={"#ffc5b7"} style={{ position: "sticky", top: 0, zIndex: 10 }}>
          <Container maw={"1536px"}>
            <Header />
          </Container>
        </Box>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </AuthContextProvider>
    </Box>
  );
}

export default App;
