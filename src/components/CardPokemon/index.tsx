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

interface ICardInfoProps {
  id: string;
  name: string;
  imageSrc: string;
  color: string;
}

export default function CardPokemon({
  id,
  name,
  imageSrc,

  color,
}: ICardInfoProps) {
  return (
    <Stack spacing={6}>
      <Card overflow="hidden" variant="elevated" bg={`${color}.500`}>
        <CardHeader>
          <Flex flexDirection="row" justify="space-between">
            <Text fontSize="2xl"> {name}</Text>
            <Text fontWeight="bold" fontSize="2xl">
              #{id}
            </Text>
          </Flex>
        </CardHeader>
        <Stack>
          <CardBody>
            <Flex mx="auto" justify="space-between" alignItems="center">
              <Flex flexDir="column">
                <Card
                  mb="10px"
                  variant="outline"
                  bg={`${color}.600`}
                  borderRadius="full"
                  flexDir="row"
                  px="10px"
                  py="2px"
                >
                  <Image
                    src={
                      'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/fire.svg'
                    }
                    height="15x"
                    width="15px"
                  ></Image>
                  <Tooltip
                    label="Pokémons do tipo fogo possuem habilidades como sopro de
                      fogo, manipulação do calor e combustão."
                    placement="top-start"
                  >
                    <Text mx="7px">Fire</Text>
                  </Tooltip>
                </Card>
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
