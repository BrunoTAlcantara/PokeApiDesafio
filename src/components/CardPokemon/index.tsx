import {
  Card,
  CardBody,
  Stack,
  Flex,
  Text,
  CardHeader,
  Tooltip,
} from '@chakra-ui/react';
import Image from 'next/image';
import { pokemonTypes } from '../../types/pokemonsTypes';

interface ICardInfoProps {
  id: number;
  name: string;
  imageSrc: string;
  color: string;
  types: { slot: number; type: { name: string; url: string } }[];
}

export default function CardPokemon({
  id,
  name,
  imageSrc,
  types,
}: ICardInfoProps) {
  const backgroundColors = types.map(({ type }) => {
    const [[, backgroundColor]] = Object.entries(pokemonTypes).filter(
      ([key, _]) => key === type.name,
    );

    return backgroundColor;
  });

  return (
    <Stack key={id} spacing={6}>
      <Card
        color="white"
        overflow="hidden"
        variant="elevated"
        bg={`${backgroundColors[0].color}.500`}
      >
        <CardHeader>
          <Flex flexDirection="row" justify="space-between">
            <Text fontWeight="bold" fontSize="2xl">
              {name}
            </Text>
            <Text fontWeight="thin" fontSize="2xl">
              #{id}
            </Text>
          </Flex>
        </CardHeader>
        <Stack>
          <CardBody>
            <Flex mx="auto" justify="space-between" alignItems="center">
              <Flex flexDir="column">
                {types.map((type, index) => (
                  <Card
                    color="white"
                    mb="10px"
                    key={type.slot}
                    variant="elevated"
                    bg={`${backgroundColors[index].color}.600`}
                    borderRadius="full"
                    flexDir="row"
                    px="10px"
                    py="2px"
                  >
                    <Image
                      src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${type.type.name}.svg`}
                      height="15x"
                      width="15px"
                    ></Image>
                    <Tooltip
                      label="Pokémons do tipo fogo possuem habilidades como sopro de
                         fogo, manipulação do calor e combustão."
                      placement="top-start"
                    >
                      <Text fontSize="small" mx="7px">
                        {type.type.name}
                      </Text>
                    </Tooltip>
                  </Card>
                ))}
              </Flex>
              <Image
                src={imageSrc}
                alt="ditto"
                quality="100"
                height="150"
                width="150"
              />
            </Flex>
          </CardBody>
        </Stack>
      </Card>
    </Stack>
  );
}
