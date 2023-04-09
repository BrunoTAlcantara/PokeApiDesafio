import { useColorMode, Button, Icon } from '@chakra-ui/react';
import { Moon, Sun } from 'lucide-react';

export function ButtonColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button onClick={toggleColorMode} variant="outline">
        {colorMode === 'light' ? (
          <Icon as={Moon} color="blue.500" />
        ) : (
          <Icon as={Sun} />
        )}
      </Button>
    </>
  );
}
