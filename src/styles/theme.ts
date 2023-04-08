import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: {
    body: {
      bg: 'gray.100',
      color: 'blue.600',
    },
  },
};

const config = {
  initialColorMode: 'light',
};

export const theme = extendTheme({
  config,
  styles,
});
