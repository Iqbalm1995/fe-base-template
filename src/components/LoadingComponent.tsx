import { Box, Center, Spinner, Text, VStack } from "@chakra-ui/react";

export const LoadingSpinnerLG = () => {
  return (
    <Box p={8}>
      <Center>
        <VStack spacing={4} align="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
          <Text fontSize={"small"}>Mohon Tunggu</Text>
        </VStack>
      </Center>
    </Box>
  );
};
