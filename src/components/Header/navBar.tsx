import { HStack } from '@chakra-ui/react';

import NavLink from './navlink';

export function SideBarNav(): JSX.Element {
  return (
    <HStack spacing="2" align="flex-start">
      <NavLink style={{ textDecoration: 'none !important' }} href="/dashboard">
        Home
      </NavLink>

      <NavLink textDecorationLine="none" href="/pokemons">
        Pokemons
      </NavLink>

      <NavLink href="/pokemons/create">Novo Pokemon</NavLink>
    </HStack>
  );
}
