import { Box, Container } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Login from "./pages/Login";
import { Hero } from "./components/Hero";

function App() {
  return (
    <Box style={{ minHeight: "100vh", backgroundColor: "#f6f0e6" }}>
      <Container maw={"1536px"}>
        <Header />
        <Hero />

        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
