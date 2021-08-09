import React from 'react';
import {
    FormControl,
  FormLabel,
  Button,
  InputRightElement,
  FormHelperText,
  InputGroup,
  Input
} from '@chakra-ui/react';

function SearchBar() {
    return (
        <form style={{ width: '336px' }}>
        <FormControl>
          {/* <FormLabel htmlFor='punkNumber' p={2} m={0}>
            Can Mandi eat this?
          </FormLabel> */}
          <InputGroup size='lg'>
            <Input
              name='mandiEats'
              placeholder='food or ingredient...'
              type='text'
            //   value={punkName}
            //   onChange={handleChange}
            />
            <InputRightElement w='6rem'>
              <Button size='lg' h='3rem' colorScheme='pink' type='submit'>
                ?????
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </form>
    )
}

export default SearchBar
