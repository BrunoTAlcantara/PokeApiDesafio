import { Stack } from '@chakra-ui/react';

import NavLink from './navlink';

export function SideBarNav(): JSX.Element {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing="2"
      align="flex-start"
    >
      <NavLink style={{ textDecoration: 'none !important' }} href="/dashboard">
        Home
      </NavLink>

      <NavLink textDecorationLine="none" href="/pokemons">
        Pokemons
      </NavLink>

      <NavLink href="/pokemons/create">Novo Pokemon</NavLink>
    </Stack>
  );
}
