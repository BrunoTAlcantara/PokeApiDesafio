import Image from 'next/image';

export function Logo(): JSX.Element {
  return <Image src="/pokemonLogo.png" alt="Logo" width={190} height={70} />;
}
