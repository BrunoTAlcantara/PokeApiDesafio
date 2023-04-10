import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme } from '../styles/theme';

import { PokemonProvider } from '../context/PokemonProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PokemonProvider>
        <Component {...pageProps} />
      </PokemonProvider>
    </ChakraProvider>
  );
}
