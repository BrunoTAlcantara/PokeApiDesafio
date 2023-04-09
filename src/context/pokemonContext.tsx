import { createContext } from 'react';

type PokemonContextType = {
  pokemons: Pokemons[];
  countPokemons: number;
  allPokemons: Pokemons[];
};

export const pokemonContext = createContext<PokemonContextType>({
  pokemons: [],
  allPokemons: [],
  countPokemons: 0,
});
