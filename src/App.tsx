import { Box, Button, Container, Drawer, Text } from "@mantine/core";

import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";

import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [opened, setOpened] = useState(false);
  return (
    <Box className="bg-gray-50 h-full">
      <Container maw={"1536px"}>
        <Header />
        <Text className="text-red-700 underline" size="xl">
          check{" "}
        </Text>

        <Box className="bg-slate-500">dfgdfg</Box>

        <Button
          variant="outline"
          className="w-52 hover:bg-black hover:text-white"
          onClick={() => setOpened(true)}
        >
          {" "}
          Check button
        </Button>

        <Drawer opened={opened} onClose={() => setOpened(false)}>
          <Text>Drawer</Text>
        </Drawer>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </Box>
  );
}

// <Box className="bg-gray-50 h-full">
//       <Box className="container mx-auto px-4">
//         <Header />
//         <Text className="text-red-700 underline" size="xl">
//           check{" "}
//         </Text>

//         <Box className="bg-slate-500">dfgdfg</Box>

//         <Button variant="outline" c={"red"} className="w-52">
//           {" "}
//           Check button
//         </Button>
//         <Routes>
//           <Route path="/" element={<div>Home</div>} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </Box>
//     </Box>

export default App;
