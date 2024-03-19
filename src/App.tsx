import "./App.css";
import "@mantine/core/styles.css";
import { Flex, MantineProvider } from "@mantine/core";

import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Notifications } from "@mantine/notifications";
import Login from "./pages/Login";

function App() {
  return (
    <MantineProvider>
      <Notifications position="top-center" zIndex={9999} />

      <Flex direction={"column"} h={"100%"}>
        <Header />

        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Flex>
    </MantineProvider>
  );
}

export default App;
