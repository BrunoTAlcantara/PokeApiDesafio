import { createContext } from 'react';
import { Pokemons } from '../types/Pokemons';

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
