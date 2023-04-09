import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Icon,
  IconButton,
  DrawerCloseButton,
  DrawerHeader,
  useColorModeValue,
} from '@chakra-ui/react';
import { Menu } from 'lucide-react';
import { ReactNode } from 'react';

interface NavMobileProps {
  children: ReactNode;
}

export function NavMobile({ children }: NavMobileProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Open navigation"
        icon={<Icon as={Menu} />}
        fontSize="24"
        onClick={onOpen}
        color={useColorModeValue('blue.500', 'white')}
        variant="unstyled"
        mr="2"
      />
      <Drawer size="xs" placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent w="20">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>{children}</DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
