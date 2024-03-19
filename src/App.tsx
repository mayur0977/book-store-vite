import { Button, Text } from "@mantine/core";

import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";

import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <Text className=" text-red-700 underline" size="xl">
        check{" "}
      </Text>

      <Button variant="outline" c={"red"} className="w-52">
        {" "}
        Check button
      </Button>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
