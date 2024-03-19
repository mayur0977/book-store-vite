import { Box, Text } from "@mantine/core";

export function Header() {
  return (
    <Box className="flex justify-between px-4 bg-slate-400" h={100}>
      <Text> This is HEader</Text>
      <button> This is HEader</button>
    </Box>
  );
}
