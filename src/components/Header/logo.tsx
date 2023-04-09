import { useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';

export function Logo(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      {!isWideVersion ? (
        <Image src="/pokemonLogo.png" alt="Logo" width={140} height={40} />
      ) : (
        <Image src="/pokemonLogo.png" alt="Logo" width={190} height={55} />
      )}
    </>
  );
}
