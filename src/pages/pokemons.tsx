import { SimpleGrid } from '@chakra-ui/react';

import Layout from '../layout';
import CardPokemon from '../components/CardPokemon';
import { SearchBox } from '../components/SearchBox';
import { useContext } from 'react';
import { pokemonContext } from '../context/pokemonContext';

export default function Dashboard(): JSX.Element {
  const { pokemons } = useContext(pokemonContext);
  return (
    <>
      <Layout>
        <SearchBox />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="250px"
          alignItems="flex-start"
        >
          {pokemons.map((pokemon) => (
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
          ))}
        </SimpleGrid>
      </Layout>
    </>
  );
}
