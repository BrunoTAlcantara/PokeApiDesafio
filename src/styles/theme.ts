import { extendTheme } from '@chakra-ui/react';

const styles = {
  global: {
    body: {
      bg: 'blackAlpha.500',
      color: 'blue.600',
    },
  },
};

const config = {
  initialColorMode: 'light',
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles,
});
