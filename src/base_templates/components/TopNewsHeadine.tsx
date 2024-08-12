import { ArrowForwardIcon, SmallCloseIcon } from "@chakra-ui/icons";
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
  ButtonGroup,
  Tooltip,
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

const TopNewsHeadine = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [HideNotif, setHideNotif] = useState(false);

  const ToggleShowNotif = () => {
    setHideNotif(!HideNotif);
  };

  return (
    <Flex
      // minWidth="max-content"
      // bg={"#1b517e"}
      transition="transform 0.3s ease-in-out"
      bgGradient={"linear(to-r, secondary.400, secondary.800)"}
      color={"white"}
      gap="2"
      px={8}
      py={1}
      justifyContent={"center"}
      display={HideNotif ? "none" : "flex"}
    >
      <Wrap py={{ base: 2, md: 0 }}>
        <WrapItem>
          <Flex
            justifyContent={{ base: "center", md: "end" }}
            h={"full"}
            gap={2}
          >
            <Tooltip
              label="Sembunyikan Berita Notifikasi"
              aria-label="news notif tooltip"
            >
              <Button
                size={{ base: "xs", md: "sm" }}
                variant={"link"}
                color={"white"}
                onClick={ToggleShowNotif}
              >
                <SmallCloseIcon />
              </Button>
            </Tooltip>
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
            <ButtonGroup isAttached>
              <Button
                rightIcon={<ArrowForwardIcon />}
                size={{ base: "xs", md: "sm" }}
                colorScheme="blackAlpha"
                _hover={{
                  bg: "yellow.400",
                  color: "white",
                }}
                onClick={onOpen}
              >
                Selengkapnya
              </Button>
            </ButtonGroup>
          </Flex>
        </WrapItem>
      </Wrap>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Papan Informasi</DrawerHeader>
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
        bgGradient={"linear(to-br, white, secondary.50)"}
        color={"gray.700"}
        boxShadow={"md"}
      >
        <Stack alignItems={"start"} spacing={3}>
          <Heading color={"#1b517e"} as="h3" size="md">
            {data.title}
          </Heading>
          <Text fontSize={"sm"} color={"gray.500"}>
            Kamis, 17 Agustus 2024 19.45
          </Text>
          <Box p={1}>
            <p>{data.desc}</p>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default TopNewsHeadine;
