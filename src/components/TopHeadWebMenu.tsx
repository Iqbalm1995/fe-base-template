import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Box,
  Link,
  Spacer,
  Breadcrumb,
  BreadcrumbItem,
  Text,
  BreadcrumbLink,
  Button,
  Badge,
  Stack,
  Grid,
  GridItem,
  Center,
  useBreakpointValue,
  Wrap,
  WrapItem,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaRegBell } from "react-icons/fa";

interface NewsInformationInterface {
  title: string;
  desc: string;
}

const DataNews: NewsInformationInterface[] = [
  {
    title: "News 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem amet eaque provident repellat, accusantium hic? Aut debitis consequatur laborum nobis mollitia ullam rerum nihil totam vero aliquam, eaque, nesciunt possimus.",
  },
  {
    title: "News 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem amet eaque provident repellat, accusantium hic? Aut debitis consequatur laborum nobis mollitia ullam rerum nihil totam vero aliquam, eaque, nesciunt possimus.",
  },
  {
    title: "News 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem amet eaque provident repellat, accusantium hic? Aut debitis consequatur laborum nobis mollitia ullam rerum nihil totam vero aliquam, eaque, nesciunt possimus.",
  },
  {
    title: "News 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem amet eaque provident repellat, accusantium hic? Aut debitis consequatur laborum nobis mollitia ullam rerum nihil totam vero aliquam, eaque, nesciunt possimus.",
  },
];

const TopHeadWebMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      // minWidth="max-content"
      // bg={"#1b517e"}
      bgGradient={"linear(to-r, #1b517e, #00BDFF)"}
      color={"white"}
      gap="2"
      px={8}
      py={1}
      justifyContent={"center"}
    >
      <Wrap py={{ base: 2, md: 0 }}>
        <WrapItem>
          <Flex justifyContent={{ base: "center", md: "end" }} h={"full"}>
            <HStack
              fontSize={"0.8em"}
              bgColor={"blue.300"}
              borderRadius={"30px"}
              py={1}
              my={{ base: 1, md: 0 }}
              display={{ base: "none", md: "flex" }}
              px={5}
            >
              <FaRegBell size={"1.2em"} />
              <Text
                fontSize={"sm"}
                fontWeight={600}
                display={{ base: "none", md: "block" }}
              >
                Informasi
              </Text>
            </HStack>
          </Flex>
        </WrapItem>
        <WrapItem>
          <Center h={"full"}>
            <Text fontSize={"xs"} pl={{ base: 2, md: 0 }}>
              Nasabah yang Terhormat, Sebagai upaya peningkatan layanan kepada
              nasabah Bank bjb. Ikuti informasi terbaru dari bjb Portal.
            </Text>
          </Center>
        </WrapItem>
        <WrapItem>
          <Flex
            justifyContent={{ base: "center", md: "start" }}
            h={"full"}
            alignItems={"center"}
          >
            <Button
              rightIcon={<ArrowForwardIcon />}
              size={{ base: "xs", md: "sm" }}
              colorScheme="blackAlpha"
              onClick={onOpen}
            >
              Selengkapnya
            </Button>
          </Flex>
        </WrapItem>
      </Wrap>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Informasi Portal</DrawerHeader>
          <DrawerBody>
            <VStack>
              {DataNews.map((data, index) => (
                  <BoxInformationData data={data} key={index} />
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

const BoxInformationData = ({ data }: { data: NewsInformationInterface }) => {
  return (
    <>
      <Flex
        p={4}
        rounded={"xl"}
        bgGradient={"linear(to-b, gray.100, gray.300)"}
        color={"gray.700"}
      >
        <Stack alignItems={"start"} spacing={3}>
          <Heading color={"#1b517e"} as="h3" size="md">
            {data.title}
          </Heading>
          <Box p={1}>
            <p>{data.desc}</p>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default TopHeadWebMenu;
