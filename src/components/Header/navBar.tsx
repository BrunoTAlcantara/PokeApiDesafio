import { Stack, useColorModeValue } from '@chakra-ui/react';

import NavLink from './navlink';

export function SideBarNav(): JSX.Element {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing="2"
      align="flex-start"
      color={useColorModeValue('blue.500', 'red.500')}
    >
      <NavLink
        _hover={{
          color: 'yellow.500',
        }}
        href="/"
      >
        Home
      </NavLink>

      <NavLink
        _hover={{
          color: 'yellow.500',
        }}
        textDecorationLine="none"
        href="/pokemons"
      >
        Pokemons
      </NavLink>

      <NavLink
        _hover={{
          color: 'yellow.500',
        }}
        href="/create"
      >
        Novo Pokemon
      </NavLink>
    </Stack>
  );
}
