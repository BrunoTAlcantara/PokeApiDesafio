import { Flex, Box } from '@chakra-ui/react';
import Lottie from 'lottie-react';
import LoadingAnimate from '../../public/loading.json';

const LoadingPage = () => {
  return (
    <Flex
      align="center"
      flexDir="column"
      justify="center"
      bg="red.500"
      height="100vh"
    >
      <Box height={'500px'} w="500px">
        <Lottie animationData={LoadingAnimate} autoplay loop />
      </Box>
    </Flex>
  );
};

export default LoadingPage;
