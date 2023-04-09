import Layout from '../layout';
import Lottie from 'lottie-react';
import AnimatePokemon from '../../public/Animatepokemon.json';
import { useRouter } from 'next/router';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 5, md: 10 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 5 }}>
            <Heading
              lineHeight={1}
              fontWeight={800}
              fontSize={{ base: '3xl', sm: '4xl', lg: '7xl' }}
            >
              <Text>Encontre Seus Pokémons Favoritos.</Text>
            </Heading>
            <Text fontWeight="bold" color="blue.400" fontSize="4xl">
              {' '}
              Já são 1800 cadastrados!
            </Text>
            <Text color={'gray.200'}>
              PokeTracker é um site que permite que você encontre seus Pokémons
              favoritos e cadastre seus próprios.
            </Text>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                color="white"
                bg={'blue.500'}
                _hover={{ bg: 'blue.400' }}
                onClick={() => router.push('/pokemons')}
              >
                Encontre agora!
              </Button>
              <Button
                rounded={'full'}
                variant="ghost"
                border="2px solid"
                fontWeight={'normal'}
                py={6}
                onClick={() => router.push('/pokemons/create')}
              >
                Cadastre o seu
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Box height={'400px'} w="400px" overflow={'hidden'}>
              <Lottie animationData={AnimatePokemon} autoplay loop />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Layout>
  );
}
