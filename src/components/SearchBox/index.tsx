import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Center,
  chakra,
  Icon,
  useColorModeValue,
  InputProps,
  Grid,
  VStack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
interface SearchBoxProps extends InputProps {
  queryText: string;
  searchResults: Pokemons[];
}
Image;
import { Search } from 'lucide-react';
import { Pokemons } from '../../types/Pokemons';

export const SearchBox = ({
  queryText,
  searchResults,
  ...rest
}: SearchBoxProps) => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemons | null>(null);

  const handlePokemonClick = (pokemon: Pokemons) => {
    setSelectedPokemon(pokemon);
  };

  useEffect(() => {
    if (selectedPokemon) {
      rest.onChange?.({
        target: { value: selectedPokemon.name },
      } as ChangeEvent<HTMLInputElement>);
    }
  }, [selectedPokemon]);

  return (
    <Box
      sx={{
        rounded: 'lg',
        overflow: 'hidden',
        bg: 'transparent',
        shadow: 'lg',
        maxW: '600px',
        width: '60%',
        mt: '1rem',
        mx: 'auto',
      }}
    >
      <Flex pos="relative" color="white" align="strech">
        <chakra.input
          type=""
          bg={useColorModeValue('blue.500', 'blue.500')}
          autoComplete="true"
          autoCorrect="off"
          spellCheck="false"
          color="white"
          _placeholder={{
            color: 'white',
          }}
          maxLength={64}
          sx={{
            w: '100%',
            h: '68px',
            pl: '68px',
            fontWeight: 'medium',
            outline: 0,
          }}
          placeholder="Procure seus Pokemons"
          value={queryText}
          {...rest}
        />

        <Center pos="absolute" left={7} h="68px">
          <Icon as={Search} />
        </Center>
      </Flex>

      {queryText.length >= 3 && (
        <Box maxH="70vh" p="0" overflowY="auto">
          <Box px={4}>
            <Box borderTopWidth="1px" pt={2} pb={4}>
              <Grid gridRowGap="1rem">
                {searchResults.map((pokemon) => (
                  <Box
                    key={pokemon?.id}
                    onClick={() => handlePokemonClick(pokemon)}
                    borderRadius={'md'}
                    _hover={{
                      background: 'blue.500',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                    p=".5rem 1rem"
                  >
                    <Grid
                      sx={{
                        gridTemplateColumns: '50px 1fr',
                        gridColumnGap: '1rem',
                        height: '40px',
                        overflow: 'hidden',
                      }}
                    >
                      <Box>
                        <Image
                          src={
                            pokemon?.sprites.other['official-artwork']
                              .front_default
                          }
                          height="40px"
                          width="40px"
                        />
                      </Box>

                      <VStack align="start">
                        <Text noOfLines={1}>{pokemon?.name}</Text>
                      </VStack>
                    </Grid>
                  </Box>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
