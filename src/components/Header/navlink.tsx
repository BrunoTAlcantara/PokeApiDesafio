import { Link as ChakraLink, Text, LinkProps } from '@chakra-ui/react';

import { ActiveLink } from '../ActiveLink';

interface INavLinkProps extends LinkProps {
  children: string;
  href: string;
}

export default function NavLink({
  href,
  children,

  ...rest
}: INavLinkProps): JSX.Element {
  return (
    <ChakraLink
      textDecor="none"
      href={href}
      style={{ textDecoration: 'none !important' }}
      display="flex"
      align="center"
      {...rest}
    >
      <Text
        ml="4"
        _hover={{
          color: 'yellow.400',
        }}
        fontSize="xl"
        fontWeight="extrabold"
      >
        {children}
      </Text>
    </ChakraLink>
  );
}
