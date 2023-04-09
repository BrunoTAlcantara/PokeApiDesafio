import {
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
  Text,
} from '@chakra-ui/react';

import { Logo } from './logo';

import { Menu } from 'lucide-react';
import { SideBarNav } from './navBar';

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
      pt="10px"
      borderBottom="3px solid"
      px={{ base: '5px', md: '80px' }}
      align="center"
      boxShadow="md"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={Menu} />}
          fontSize="24"
          variant="unstyled"
          mr="2"
        />
      )}

      <Logo />

      <Flex align="center" ml="auto">
        {isWideVersion && <SideBarNav />}
      </Flex>
    </Flex>
  );
}
