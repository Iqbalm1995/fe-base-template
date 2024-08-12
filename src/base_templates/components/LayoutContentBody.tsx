import { Container, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

export const BaseContentBody = ({
  tittleContent,
  children,
}: {
  tittleContent: string;
  children: ReactNode;
}) => {
  return (
    <>
      <Container as={Stack} maxW={"container.xl"} py={10}>
        <VStack w={"full"} gap={8}>
          <Flex justifyContent={"flex-start"} w={"full"}>
            <Heading as="h3" size="lg" color={"secondary.900"}>
              {tittleContent}
            </Heading>
          </Flex>
          <Flex justifyContent={"flex-start"} w={"full"}>
            {children}
          </Flex>
        </VStack>
      </Container>
    </>
  );
};
