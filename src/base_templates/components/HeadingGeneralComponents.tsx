import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export interface HeadingGeneralInterface {
  tittlePage: string;
  dataBreadcrumb: string[];
}

export const HeadingGeneralComponents = ({
  data,
}: {
  data: HeadingGeneralInterface;
}) => {
  return (
    <>
      <Flex
        pos={"relative"}
        h={{ base: "35vh", sm: "35vh", md: "45vh", lg: "45vh" }} // Responsive heights for different screen sizes
        w={"full"}
        bgGradient={"linear(to-r, #1b517e, #063154)"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`url(./img/bjb-head-image.jpg)`}
        alignItems={"center"}
        justifyContent={"center"}
        mt={"-60px"}
        zIndex={1}
      >
        <Box
          pos={"absolute"}
          top="0"
          left="0"
          w="full"
          h="full"
          bgGradient="linear(to-l, rgba(9, 27, 42, 0.4) 0%, rgba(9, 27, 42, 0.9) 90%)"
          // bg={"red"}
        >
          <Container as={Stack} maxW={"container.xl"}>
            <Flex
              justifyContent={"start"}
              alignItems={"end"}
              h={{ base: "35vh", sm: "35vh", md: "45vh", lg: "45vh" }}
              color={"white"}
              pb={7}
            >
              <VStack justifyContent={"start"} w={"full"}>
                <Heading
                  as="h2"
                  size={{ base: "md", sm: "md", md: "md", lg: "xl" }}
                  color={"white"}
                  // bg={"blue"}
                  w={"full"}
                >
                  {data.tittlePage}
                </Heading>
                <Breadcrumb
                  w={"full"}
                  spacing="8px"
                  separator={<ChevronRightIcon color="gray.500" />}
                >
                  {data.dataBreadcrumb.map((dt, idx) => (
                    <BreadcrumbItem key={idx}>
                      <BreadcrumbLink href="#">{dt}</BreadcrumbLink>
                    </BreadcrumbItem>
                  ))}
                </Breadcrumb>
              </VStack>
            </Flex>
          </Container>
        </Box>
      </Flex>
    </>
  );
};

export const HeadingGeneralComponentsLite = ({
  data,
}: {
  data: HeadingGeneralInterface;
}) => {
  return (
    <>
      <Flex
        pos={"relative"}
        h={{ base: "35vh", sm: "35vh", md: "45vh", lg: "45vh" }} // Responsive heights for different screen sizes
        w={"full"}
        bgGradient={"linear(to-r, #1b517e, #063154)"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`url(./img/bjb-head-image.jpg)`}
        alignItems={"center"}
        justifyContent={"center"}
        mt={"-60px"}
        zIndex={1}
      >
        <Box
          pos={"absolute"}
          top="0"
          left="0"
          w="full"
          h="full"
          bgGradient="linear(to-l, rgba(9, 27, 42, 0.4) 0%, rgba(9, 27, 42, 0.9) 90%)"
          // bg={"red"}
        >
          <Container as={Stack} maxW={"container.xl"}>
            <Flex
              justifyContent={"start"}
              alignItems={"end"}
              h={{ base: "35vh", sm: "35vh", md: "45vh", lg: "45vh" }}
              color={"white"}
              pb={7}
            >
              <VStack justifyContent={"start"} w={"full"}>
                <Heading
                  as="h2"
                  size={{ base: "md", sm: "md", md: "md", lg: "xl" }}
                  color={"white"}
                  // bg={"blue"}
                  w={"full"}
                >
                  {data.tittlePage}
                </Heading>
                <Breadcrumb
                  w={"full"}
                  spacing="8px"
                  separator={<ChevronRightIcon color="gray.500" />}
                >
                  {data.dataBreadcrumb.map((dt, idx) => (
                    <BreadcrumbItem key={idx}>
                      <BreadcrumbLink href="#">{dt}</BreadcrumbLink>
                    </BreadcrumbItem>
                  ))}
                </Breadcrumb>
              </VStack>
            </Flex>
          </Container>
        </Box>
      </Flex>
    </>
  );
};

export const HeadingGeneralComponentsCustoms = ({
  data,
  imgHeadUrl,
}: {
  data: HeadingGeneralInterface;
  imgHeadUrl: string;
}) => {
  return (
    <>
      <Flex
        pos={"relative"}
        h={{ base: "35vh", sm: "35vh", md: "45vh", lg: "45vh" }} // Responsive heights for different screen sizes
        w={"full"}
        bgGradient={"linear(to-r, #1b517e, #063154)"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`url(${imgHeadUrl})`}
        alignItems={"center"}
        justifyContent={"center"}
        mt={"-60px"}
        zIndex={1}
      >
        <Box
          pos={"absolute"}
          top="0"
          left="0"
          w="full"
          h="full"
          bgGradient="linear(to-l, rgba(9, 27, 42, 0.4) 0%, rgba(9, 27, 42, 0.9) 90%)"
          // bg={"red"}
        >
          <Container as={Stack} maxW={"container.xl"}>
            <Flex
              justifyContent={"start"}
              alignItems={"end"}
              h={{ base: "35vh", sm: "35vh", md: "45vh", lg: "45vh" }}
              color={"white"}
              pb={7}
            >
              <VStack justifyContent={"start"} w={"full"}>
                <Heading
                  as="h2"
                  size={{ base: "md", sm: "md", md: "md", lg: "xl" }}
                  color={"white"}
                  // bg={"blue"}
                  w={"full"}
                >
                  {data.tittlePage}
                </Heading>
                <Breadcrumb
                  w={"full"}
                  spacing="8px"
                  separator={<ChevronRightIcon color="gray.500" />}
                >
                  {data.dataBreadcrumb.map((dt, idx) => (
                    <BreadcrumbItem key={idx}>
                      <BreadcrumbLink href="#">{dt}</BreadcrumbLink>
                    </BreadcrumbItem>
                  ))}
                </Breadcrumb>
              </VStack>
            </Flex>
          </Container>
        </Box>
      </Flex>
    </>
  );
};
