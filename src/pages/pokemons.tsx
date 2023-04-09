import { SimpleGrid } from '@chakra-ui/react';

import Layout from '../layout';
import CardPokemon from '../components/CardPokemon';
import { SearchBox } from '../components/SearchBox';

export default function Dashboard(): JSX.Element {
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
          <CardPokemon
            name="Charizard"
            id="001"
            imageSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
            color="orange"
          />
          <CardPokemon
            name="Charizard"
            id="001"
            imageSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
            color="orange"
          />
          <CardPokemon
            name="Charizard"
            id="001"
            imageSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
            color="orange"
          />
          <CardPokemon
            name="Charizard"
            id="001"
            imageSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
            color="orange"
          />
          <CardPokemon
            name="Charizard"
            id="001"
            imageSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
            color="orange"
          />
          <CardPokemon
            name="Charizard"
            id="001"
            imageSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
            color="orange"
          />
          <CardPokemon
            name="Charizard"
            id="001"
            imageSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
            color="orange"
          />
          <CardPokemon
            name="Charizard"
            id="001"
            imageSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
            color="orange"
          />
          <CardPokemon
            name="Charizard"
            id="001"
            imageSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
            color="orange"
          />
          <CardPokemon
            name="Charizard"
            id="001"
            imageSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
            color="orange"
          />
          <CardPokemon
            name="Charizard"
            id="001"
            imageSrc="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
            color="orange"
          />
        </SimpleGrid>
      </Layout>
    </>
  );
}
