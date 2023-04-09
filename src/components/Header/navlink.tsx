import { Link, Text, LinkProps } from '@chakra-ui/react';

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
    <ActiveLink href={href} passHref>
      <Link
        textDecor="none"
        style={{ textDecoration: 'none !important' }}
        display="flex"
        align="center"
        {...rest}
      >
        <Text
          ml="4"
          color="blue.600"
          _hover={{
            color: 'yellow.400',
          }}
          fontSize="xl"
          fontWeight="extrabold"
        >
          {children}
        </Text>
      </Link>
    </ActiveLink>
  );
}
