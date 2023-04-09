import { Flex } from '@chakra-ui/react';

import Header from '../components/Header';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex
        w="100%"
        px={{ base: '20px', md: '80px' }}
        my="6"
        maxWidth="1480"
        mx="auto"
      >
        <Flex w="100%" flexDir="column" gap={10}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
