import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';

import Lottie from 'lottie-react';
import AnimatePokemon from '../../public/Animatepokemon.json';

export default function CallToActionWithVideo() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 10 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}
            >
              PokeTracker
            </Text>
            <br />
            <Text fontSize="2xl" color={'red.400'}>
              Encontre seus Pokémons Favoritos!!
            </Text>
          </Heading>
          <Text color={'gray.500'}>
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
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}
            >
              Get started
            </Button>
            <Button rounded={'full'} size={'lg'} fontWeight={'normal'} px={6}>
              How It Works
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
  );
}
