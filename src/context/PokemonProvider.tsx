import { useState, useEffect, ReactNode } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useToast } from '@chakra-ui/react';
import { pokemonContext } from './pokemonContext';
import { Pokemons } from '../types/Pokemons';
import useSWR from 'swr';

export const apiPokemon = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

//Types

type Pokemon = {
  name: string;
  url: string;
};

type PokeApiRequest = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
};

type PokemonProviderProps = {
  children: ReactNode;
};

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  // Estados
  const [offset, setOffset] = useState<number>(0);
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [allPokemons, setallPokemons] = useState<Pokemons[]>([]);
  const [pokemonLoaded, setPokemonLoaded] = useState(false);
  const [countPokemons, setcountPokemons] = useState(0);

  const toast = useToast();

  const { data: pokeApiRequest, error, isLoading } = useSWR(
    `pokemon?limit=20&offset=${offset}`,
    async (url: string) => {
      const result: AxiosResponse<PokeApiRequest> = await apiPokemon.get(url);
      setcountPokemons(result.data.count);
      return result.data;
    },
  );

  const { data: pokemonData, error: pokemonError } = useSWR(
    () => {
      const urls = pokeApiRequest?.results.map(
        (pokemon: Pokemon) => pokemon.url,
      );
      return urls;
    },
    async (urls: string[]) => {
      const promises = urls.map(async (url: string) => {
        const result: AxiosResponse<Pokemons> = await apiPokemon.get(url);
        return result.data;
      });

      const results: Pokemons[] = await Promise.all(promises);
      return results;
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
    },
  );

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

  const nextPage = () => {
    setOffset(offset + 20);
  };

  const prevPage = () => {
    setOffset(Math.max(offset - 20, 0));
  };

  useEffect(() => {
    if (pokemonData) {
      setPokemons(pokemonData);
      setPokemonLoaded(true);
    }
  }, [pokemonData]);

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
  }, [pokemonLoaded, offset, toast]);

  return (
    <>
      <pokemonContext.Provider
        value={{
          pokemons,
          countPokemons,
          allPokemons,
          prevPage,
          nextPage,
          offset,
        }}
      >
        {children}
      </pokemonContext.Provider>
    </>
  );
};
