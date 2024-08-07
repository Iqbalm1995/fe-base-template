import Lottie from "lottie-react";
import logoBjbFile from "../../base_templates/json/bjb_loading_v01.json";
import { Box, Center } from "@chakra-ui/react";

const LoadingScreen = () => {
  return (
    <Center h="100vh">
      <Box boxSize="sm">
        <Lottie
          autoplay
          loop
          animationData={logoBjbFile}
          style={{ height: "60%", width: "60%" }}
        />
      </Box>
    </Center>
  );
};

export default LoadingScreen;
