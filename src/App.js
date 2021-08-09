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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import SearchBar from './SearchBar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="4rem">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
            <GridItem>
              Can Mandi have...
            </GridItem>
          <VStack
              alignSelf='center'
              justifySelf='center'
              height='650px'
              width='336px'
              spacing={4}>
            <GridItem>
                <SearchBar/>
            </GridItem>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
