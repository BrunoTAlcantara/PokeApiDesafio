import { Button, HStack, SimpleGrid, Skeleton } from '@chakra-ui/react';

import Layout from '../layout';
import CardPokemon from '../components/CardPokemon';
import { SearchBox } from '../components/SearchBox';
import {
  useContext,
  useState,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
} from 'react';
import { pokemonContext } from '../context/pokemonContext';
import { Pokemons } from '../types/Pokemons';

export default function Index(): JSX.Element {
  const [queryText, setQueryText] = useState('');
  const [searchResults, setSearchResults] = useState<Pokemons[]>([]);

  const {
    allPokemons,
    pokemons,
    prevPage,
    nextPage,
    offset,
    countPokemons,
  } = useContext(pokemonContext);

  const [dataPokemons, setDataPokemons] = useState<Pokemons[]>([]);
  const [isFetching, setIsFetching] = useState(true); // variável isFetching
  console.log(isFetching);

  useEffect(() => {
    setDataPokemons(pokemons);
  }, [pokemons]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsFetching(false);
    }, 3000); // atraso de 2 segundo

    return () => clearTimeout(delay);
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const filteredPokemons = allPokemons
        .filter((pokemon) => pokemon.name.includes(queryText))
        .slice(0, 20);

      setDataPokemons(filteredPokemons);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQueryText(e.target.value);
    if (queryText.length >= 2) {
      const filteredPokemons = allPokemons
        .filter((pokemon) => pokemon.name.includes(queryText))
        .slice(0, 3);

      setSearchResults(filteredPokemons);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      <Layout>
        <SearchBox
          searchResults={searchResults}
          onChange={handleChange}
          queryText={queryText}
          onKeyDown={handleKeyDown}
        />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="250px"
          justifyItems="center"
        >
          {isFetching ? ( // exibe o Loading Skeleton enquanto isFetching é true
            <>
              <Skeleton h="300px" w="290px" />
              <Skeleton h="300px" w="290px" />
              <Skeleton h="300px" w="290px" />
              <Skeleton h="300px" w="290px" />
            </>
          ) : (
            dataPokemons?.map((pokemon) => (
              <CardPokemon
                types={pokemon?.types}
                key={pokemon?.id}
                id={pokemon?.id}
                name={pokemon?.name}
                imageSrc={
                  pokemon?.sprites.other['official-artwork'].front_default
                }
                color={'orange'}
              />
            ))
          )}
        </SimpleGrid>

        <HStack mb="50" spacing="40px" justifyContent="center">
          <Button onClick={prevPage} disabled={offset === 0}>
            Página anterior
          </Button>
          <Button onClick={nextPage} disabled={offset + 20 >= countPokemons}>
            Próxima página
          </Button>
        </HStack>
      </Layout>
    </>
  );
}
