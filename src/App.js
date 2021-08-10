import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  GridItem,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import SearchAnswer from './SearchAnswer';

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSubmit = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <ChakraProvider theme={theme}>
    {/* {fetchTacos()} */}
      <Box textAlign="center" fontSize="4rem">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <GridItem>Can Mandi have...</GridItem>
          <VStack
            alignSelf="center"
            justifySelf="center"
            height="650px"
            width="336px"
            spacing={4}
          >
              <SearchBar handleSubmit={handleSubmit}/>
              <SearchResult searchTerm={searchTerm}/>
              <SearchAnswer searchTerm={searchTerm} answer={searchTerm} reason={searchTerm} />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
