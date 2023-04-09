import { useState, useEffect, ReactNode } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useToast } from '@chakra-ui/react';
import { pokemonContext } from './pokemonContext';
import { pokemonTypes } from '../types/pokemonsTypes';

export const apiPokemon = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

type Pokemon = {
  name: string;
  url: string;
};

type PokeApiRequest = {
  count: number;
  next: string;
  previou: string;
  results: Pokemon[];
};

type PokemonProviderProps = {
  children: ReactNode;
};

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [offset, setOffset] = useState<number>(0);
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [allPokemons, setallPokemons] = useState<Pokemons[]>([]);
  const [pokemonLoaded, setPokemonLoaded] = useState(false);
  const [countPokemons, setcountPokemons] = useState(0);
  const toast = useToast();

  const getPokemons = async (limit = 20) => {
    try {
      const result: AxiosResponse<PokeApiRequest> = await apiPokemon.get(
        `pokemon?${limit}&offset=${offset}`,
      );

      const data: Pokemon[] = await result.data.results;
      const count: number = await result.data.count;
      setcountPokemons(count);

      const promises = data.map(async (pokemon: Pokemon) => {
        const result: AxiosResponse<Pokemons> = await apiPokemon.get(
          pokemon.url,
        );

        return result.data;
      });

      const results: Pokemons[] = await Promise.all(promises);

      setPokemons(results);
      setPokemonLoaded(true);
    } catch (error: any) {
      toast({
        title: 'Erro ao buscar Pokémons!',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const getAllPokemons = async () => {
    try {
      const result: AxiosResponse<{
        results: Pokemon[];
      }> = await apiPokemon.get(`pokemon?limit=100000&offset=0`);

      const data: Pokemon[] = await result.data.results;

      const promises = data.map(async (pokemon: Pokemon) => {
        const result: AxiosResponse<Pokemons> = await apiPokemon.get(
          pokemon.url,
        );

        return result.data;
      });
      const results: Pokemons[] = await Promise.all(promises);
      setallPokemons(results);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getPokemonByID = async (id: string) => {
    const baseURL = 'https://pokeapi.co/api/v2/';

    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getPokemons();
  }, [offset]);
  useEffect(() => {
    getAllPokemons();
  }, []);

  useEffect(() => {
    if (pokemonLoaded) {
      toast({
        title: `Pokemons capturados com sucesso!`,
        status: 'success',
        isClosable: true,
        colorScheme: 'blue',
      });
    }
  }, [pokemonLoaded]);

  return (
    <pokemonContext.Provider value={{ pokemons, countPokemons, allPokemons }}>
      {children}
    </pokemonContext.Provider>
  );
};
