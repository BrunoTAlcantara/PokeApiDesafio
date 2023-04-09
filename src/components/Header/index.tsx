import { Flex, useBreakpointValue, Text, Spacer } from '@chakra-ui/react';

import { Logo } from './logo';

import { SideBarNav } from './navBar';
import { NavMobile } from './navM';
import { ButtonColorMode } from '../buttonColorMode';

export default function Header(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="100px"
      mx="auto"
      py="50px"
      px={{ base: '5px', md: '80px' }}
      align="center"
      boxShadow="md"
      justifyContent="space-between" // altera a propriedade justifyContent
    >
      {!isWideVersion && (
        <NavMobile>
          <SideBarNav />
        </NavMobile>
      )}

      <Logo />

      {!isWideVersion && <ButtonColorMode />}

      {isWideVersion && (
        <Flex align="center">
          <SideBarNav />
          <Spacer mr="40px" />
          <ButtonColorMode />
        </Flex>
      )}
    </Flex>
  );
}
