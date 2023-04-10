import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Divider,
  VStack,
  HStack,
  Button,
  useToast,
} from '@chakra-ui/react';

import * as yup from 'yup';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Layout from '../layout';
import { useState } from 'react';
import { Input } from '../components/Input';

type Gender = 'Feminino' | 'Masculino';

export type CreatePokemonFormData = {
  name: string;
  size: number;
  gender: Gender;
};

const createPokemonFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  size: yup.number().required('Tamanho obrigatório'),
  gender: yup
    .string()
    .required('Gênero obrigatório')
    .oneOf(['Feminino', 'Masculino']),
});

export default function CreatePokemon(): JSX.Element {
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createPokemonFormSchema),
  });

  const handleCreatePokemon = async () => {
    setIsLoading(true);
    try {
      // simulando uma requisição bem-sucedida
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast({
        title: `'Novo Pokemon Criado`,
        status: 'success',
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: `'Não foi possível criar o pokemon!`,
        status: 'error',
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      <Box
        as="form"
        onSubmit={handleSubmit(handleCreatePokemon)}
        flex="1"
        borderRadius={8}
        p={['6', '8']}
      >
        <Heading size="md" fontWeight="normal">
          Novo Pokemon
        </Heading>

        <Divider my="6" borderColor="gray.700" />

        <VStack spacing="8">
          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <Input
              label="Nome "
              error={formState.errors.name}
              {...register('name')}
            />
            <Input
              label="Tamanho do Pokemon"
              error={formState.errors.size?.message}
              {...register('size')}
            />
          </SimpleGrid>

          <Input
            label="Gênero"
            as="select"
            {...register('gender')}
            error={formState.errors.gender}
          >
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
          </Input>
        </VStack>

        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Button type="submit" isLoading={isLoading} colorScheme="blue">
              Salvar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Layout>
  );
}
