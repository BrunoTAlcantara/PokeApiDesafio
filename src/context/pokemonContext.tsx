/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { Pokemons } from '../types/Pokemons';

type PokemonContextType = {
  pokemons: Pokemons[];
  countPokemons: number;
  offset: number;
  allPokemons: Pokemons[];
  nextPage: () => void;
  prevPage: () => void;
};

export const pokemonContext = createContext<PokemonContextType>({
  pokemons: [],
  nextPage: () => {},
  prevPage: () => {},
  allPokemons: [],
  countPokemons: 0,
  offset: 0,
});
