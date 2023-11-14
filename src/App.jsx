import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from './Header'

function App() {

  return (
    <ChakraProvider>
      <Header />
      <Box />
    </ChakraProvider>
  );
}

export default App