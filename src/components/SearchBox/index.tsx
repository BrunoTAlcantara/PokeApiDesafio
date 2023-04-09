import { useRef } from 'react';
import { Flex, Input, Icon } from '@chakra-ui/react';
import { Search } from 'lucide-react';

export function SearchBox(): JSX.Element {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      width={{ base: '250px', md: '500px' }}
      alignSelf="center"
      color="gray.200"
      position="relative"
      borderRadius="full"
      border="2px solid"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="2"
        placeholder="Buscar Pokemon"
        _placeholder={{ color: 'gray.400' }}
        ref={searchInputRef}
      />

      <Icon as={Search} fontSize="20" />
    </Flex>
  );
}
