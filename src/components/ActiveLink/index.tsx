import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react';

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref,
  ...rest
}: IActiveLinkProps): JSX.Element {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) ||
      asPath.startsWith(String(rest.href)))
  ) {
    isActive = true;
  }
  return (
    <Link {...rest} style={{ textDecoration: 'none' }}>
      {cloneElement(children, {
        color: isActive ? 'orange.400' : 'gray.50',
      })}
    </Link>
  );
}
