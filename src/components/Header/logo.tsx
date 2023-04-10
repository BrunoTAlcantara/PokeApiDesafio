import { Text, useBreakpointValue } from '@chakra-ui/react';

export function Logo(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      {!isWideVersion ? (
        <Text fontSize="3xl" fontWeight="extrabold" color="blue.500">
          Poke
          <Text as="span" ml="1" color="red.500">
            Finder
          </Text>
        </Text>
      ) : (
        <Text fontSize="3xl" color="blue.500" fontWeight="extrabold">
          Poke
          <Text as="span" ml="1" color="red.500">
            Finder
          </Text>
        </Text>
      )}
    </>
  );
}
