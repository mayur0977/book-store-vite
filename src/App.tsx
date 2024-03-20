import { Box, Container } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Login from "./pages/Login";
import { Hero } from "./components/Hero";

function App() {
  return (
    <Box className="bg-gray-50 h-full">
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
