import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spacer,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import SignatureLineColor from "@/components/BottomLineSignature";
import CaptionCarousel from "@/components/HeadSliders";
import ProductsComponents from "@/components/ProductComponents";
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
import { truncateText } from "@/helper/MasterHelper";
import { useState } from "react";
import { bg } from "date-fns/locale";
import { ArrowForwardIcon, Search2Icon } from "@chakra-ui/icons";
import { mainColor } from "@/constants/MasterConstant";
import { MdCheckCircle } from "react-icons/md";
import Link from "next/link";
import TopHeadWebMenu from "@/components/TopHeadWebMenu";
import LayoutAdmin from "@/base_templates/layout/admin/LayoutAdmin";
import BreadcrumbAdmin, {
  AdminTittleBreadcrumb,
} from "@/base_templates/layout/admin/BreadcrumbAdmin";
import { ButtonSignature1 } from "@/base_templates/components/SignatureComponents";

const HeadPageName: AdminTittleBreadcrumb = {
  titlePage: "Home",
  breadCrumbPath: ["Admin", "Home"],
};

const HomeAdmin = () => {
  return (
    <>
      <LayoutAdmin>
        <BreadcrumbAdmin HeadData={HeadPageName} />
        <VStack spacing={2} alignItems={"start"} w={"full"} pt={5}>
          <AppDrawBeta />
        </VStack>
      </LayoutAdmin>
    </>
  );
};

const AppDrawAlpha = () => {
  const [AppsViewMode, setAppsViewMode] = useState<"list" | "grid">("grid");
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4} w={"full"}>
      <GridItem colSpan={{ base: 12, md: 12 }}>
        <Box w={"full"}>
          <Grid templateColumns="repeat(2, 1fr)" gap={4} w={"full"}>
            <GridItem>
              <Flex h={"full"} alignItems={"center"} py={2}>
                <Text fontSize="lg" fontWeight={550} color={"gray.600"}>
                  Channels Apps
                </Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex justifyContent={"end"} py={2}>
                <HStack divider={<StackDivider />}>
                  <Button
                    variant={"ghost"}
                    isActive={AppsViewMode == "grid" ? true : false}
                    onClick={() => setAppsViewMode("grid")}
                  >
                    <HiOutlineViewGrid size={"1.5em"} />
                  </Button>
                  <Button
                    variant={"ghost"}
                    isActive={AppsViewMode == "list" ? true : false}
                    onClick={() => setAppsViewMode("list")}
                  >
                    <HiOutlineViewList size={"1.5em"} />
                  </Button>
                </HStack>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </GridItem>
      <GridItem colSpan={{ base: 12, md: 3 }}>
        <Box p={2}>
          <Stack spacing={5}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search2Icon color={mainColor} />
              </InputLeftElement>
              <Input type="text" placeholder="Cari Apps" />
            </InputGroup>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  <Text
                    textAlign="left"
                    fontWeight={600}
                    fontSize={"sm"}
                    color={mainColor}
                  >
                    Filter Apps
                  </Text>
                  <Spacer />
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <List spacing={1} pl={2}>
                    <ListItem>
                      <Button variant="link" size={"sm"}>
                        Favorites
                      </Button>
                    </ListItem>
                    <ListItem>
                      <Button variant="link" size={"sm"}>
                        Active
                      </Button>
                    </ListItem>
                    <ListItem>
                      <Button variant="link" size={"sm"}>
                        Not Signed
                      </Button>
                    </ListItem>
                    <ListItem>
                      <Button variant="link" size={"sm"}>
                        InActive
                      </Button>
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Box>
      </GridItem>
      <GridItem colSpan={{ base: 12, md: 9 }}>
        <Box w={"full"}>
          <>
            <Flex
              roundedTop={"lg"}
              w={"full"}
              boxShadow="lg"
              bgColor={"gray.50"}
              h={{
                base: "600px",
                sm: "600px",
                md: "600px",
                lg: "450px",
              }}
              p={6}
              justifyContent={"center"}
              overflowY={"auto"}
            >
              {AppsViewMode == "grid" ? (
                <Grid templateColumns="repeat(6, 1fr)" gap={5}>
                  {dataApps.map((item, idx) => (
                    <GridItem
                      key={idx}
                      colSpan={{ base: 3, sm: 2, md: 2, lg: 1 }}
                    >
                      <AppsDrawSquare data={item} />
                    </GridItem>
                  ))}
                </Grid>
              ) : (
                <VStack
                  divider={<StackDivider borderColor="gray.200" />}
                  spacing={4}
                  align="stretch"
                  w={{
                    base: "full",
                    sm: "full",
                    md: "70%",
                    lg: "50%",
                  }}
                >
                  {dataApps.map((item, idx) => (
                    <AppsDrawList key={idx} data={item} />
                  ))}
                </VStack>
              )}
            </Flex>
            <SignatureLineColor />
          </>
        </Box>
      </GridItem>
    </Grid>
  );
};

const AppDrawBeta = () => {
  const [AppsViewMode, setAppsViewMode] = useState<"list" | "grid">("grid");
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4} w={"full"} py={4}>
      <GridItem
        colStart={{ base: 1, sm: 1, md: 3, lg: 3 }}
        colEnd={{ base: 13, sm: 13, md: 10, lg: 10 }}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none" boxSize={12} h={"full"}>
            <Search2Icon color={mainColor} />
          </InputLeftElement>
          <Input
            type="text"
            placeContent={"center"}
            placeholder="Cari Apps"
            rounded={"3xl"}
            bg={"white"}
            size={"lg"}
          />
        </InputGroup>
      </GridItem>
      <GridItem colSpan={{ base: 12, md: 12 }}>
        <Box w={"full"}>
          <Grid templateColumns="repeat(2, 1fr)" gap={4} w={"full"}>
            <GridItem>
              <Flex h={"full"} alignItems={"center"} py={2}>
                <Text fontSize="lg" fontWeight={550} color={"gray.600"}>
                  Channels Apps | {AppsViewMode}
                </Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex justifyContent={"end"} py={2}>
                <HStack divider={<StackDivider />}>
                  <Button
                    variant={"ghost"}
                    isActive={AppsViewMode == "grid" ? true : false}
                    onClick={() => setAppsViewMode("grid")}
                    colorScheme={"gray"}
                  >
                    <HiOutlineViewGrid size={"1.5em"} />
                  </Button>
                  <Button
                    variant={"ghost"}
                    isActive={AppsViewMode == "list" ? true : false}
                    onClick={() => setAppsViewMode("list")}
                    colorScheme={"gray"}
                  >
                    <HiOutlineViewList size={"1.5em"} />
                  </Button>
                </HStack>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </GridItem>
      <GridItem colSpan={{ base: 12, md: 12 }}>
        <Box w={"full"}>
          <>
            <Flex roundedTop={"lg"} w={"full"} justifyContent={"center"}>
              <Grid templateColumns="repeat(6, 1fr)" gap={4} w={"full"}>
                {dataApps.map((item, idx) =>
                  AppsViewMode == "grid" ? (
                    <GridItem
                      key={idx}
                      colSpan={{ base: 3, sm: 2, md: 2, lg: 1 }}
                      w={"full"}
                      transition="transform 0.3s ease-in-out"
                    >
                      <AppsDrawSquareV2 data={item} />
                    </GridItem>
                  ) : (
                    <GridItem
                      key={idx}
                      colSpan={6}
                      w={"full"}
                      transition="transform 0.3s ease-in-out"
                    >
                      <AppsDrawListV2 data={item} />
                    </GridItem>
                  )
                )}
              </Grid>
            </Flex>
          </>
        </Box>
      </GridItem>
    </Grid>
  );
};

const AppsDrawList = ({ data }: { data: AppsData }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Flex
      w={"full"}
      h={"full"}
      // bg={"red"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      p={2}
      rounded="2xl"
      border="2px solid transparent" // Ensure the border is initially transparent
      transition="border-color 0.3s ease-in-out, background 0.3s ease-in-out" // Transition properties
      _hover={
        data.isActive
          ? {
              bgColor: "gray.200",
              // borderColor: "#A3D5FF",
              cursor: "pointer",
            }
          : {
              // borderColor: "#A3D5FF",
              opacity: 0.7, // Reduce opacity on hover
              cursor: "not-allowed", // Change cursor to indicate it's not clickable
            }
      }
      _active={
        data.isActive
          ? {
              boxShadow: "0 0 10px rgba(0, 139, 255, 0.5)",
            }
          : {}
      }
    >
      <HStack w={"full"}>
        <Flex
          boxShadow={"md"}
          rounded={"3xl"}
          w={"85px"}
          h={"85px"}
          bg={"white"}
          p={3}
          bgGradient={"linear(to-b, white, gray.300)"}
        >
          <Image
            rounded={"xl"}
            src={data.logoApps}
            w={"full"}
            h={"full"}
            filter={data.isActive ? "grayscale(0%)" : "grayscale(100%)"}
            draggable={false} // Prevent image from being draggable
          />
        </Flex>
        {/* <Spacer /> */}
        <Flex
          // w={"full"}
          // h={"full"}
          // pt={3}
          // px={6}
          h={"85px"}
          // justifyContent={"start"}
          alignItems={"center"}
          // bg={"red"}
        >
          <Text
            // px={5}
            // textAlign="center"
            // w={"full"}
            fontWeight={500}
            color={"gray.600"}
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
            userSelect="none" // Prevent text from being selectable
          >
            {truncateText(data.nameApps, isHovered ? 999 : 999)}
          </Text>
        </Flex>
      </HStack>
    </Flex>
  );
};

const ProfileHead = () => {
  return (
    <>
      <Center>
        <Box
          // maxW={"270px"}
          // boxShadow={"xl"}
          rounded={"xl"}
          overflow={"hidden"}
          w={"full"}
        >
          <Box
            zIndex={0}
            pos={"relative"}
            h={"200px"}
            w={"full"}
            bgGradient={"linear(to-r, #1b517e, #063154)"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            // backgroundImage={`url(./img/business/corp-assets-005.jpg)`}
            backgroundImage={`url(./img/currency-bg.png)`}
            objectFit="cover"
            rounded={"xl"}
            boxShadow={"md"}
          >
            <Box
              rounded={"xl"}
              pos={"absolute"}
              top="0"
              left="0"
              w="full"
              h="full"
              bgGradient="linear(to-l, rgba(27, 81, 126, 0) 0%, rgba(8, 38, 64, 1) 100%)"
            ></Box>
          </Box>
          <Flex justify={"center"} mt={"-110px"} zIndex={2}>
            <Flex w={"full"} zIndex={2} mx={8} p={4}>
              <Wrap>
                <WrapItem
                  w={{
                    base: "full",
                    sm: "full",
                    md: "auto",
                    lg: "auto",
                  }}
                  // bg={"red"}
                  justifyContent={{
                    base: "center",
                    sm: "center",
                    md: "start",
                    lg: "start",
                  }}
                >
                  <Avatar
                    boxShadow={"lg"}
                    size={"2xl"}
                    src={"/img/corp.png"}
                    objectFit={"cover"}
                    css={{
                      border: "2px solid white",
                    }}
                  />
                </WrapItem>
                <WrapItem>
                  <VStack p={4} alignItems={"start"}>
                    <Heading
                      as="h3"
                      size="lg"
                      color={{
                        base: "gray.700",
                        sm: "gray.700",
                        md: "white",
                        lg: "white",
                      }}
                      isTruncated
                    >
                      Corporate Name
                    </Heading>
                    <Heading as="h6" size="xs" color={"gray.300"}>
                      (PT/CV/Etc.)
                    </Heading>
                  </VStack>
                </WrapItem>
              </Wrap>
            </Flex>
          </Flex>
          {/* <Flex justify={"center"} mt={"-60px"} zIndex={2}>
            <Flex
              bgColor="rgba(255, 255, 255, 0.8)" // Semi-transparent background color
              backdropFilter="blur(20px)" // Blur effect
              w={"full"}
              zIndex={2}
              mx={8}
              p={4}
              borderWidth={1}
              rounded={"xl"}
            >
              <Grid templateColumns="repeat(12, 1fr)" gap={4} w={"full"}>
                <GridItem colSpan={{ base: 12, md: 6 }} bg={"red"}>
                  <Avatar
                    size={"xl"}
                    src={
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                    }
                    css={{
                      border: "2px solid white",
                    }}
                  />
                </GridItem>
              </Grid>
            </Flex>
          </Flex> */}

          {/* <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                John Doe
              </Heading>
              <Text color={"gray.500"}>Frontend Developer</Text>
            </Stack>
          </Box> */}
        </Box>
      </Center>
    </>
  );
};

interface AppsData {
  logoApps: string;
  nameApps: string;
  isActive: boolean;
}

const dataApps: AppsData[] = [
  {
    logoApps: "/img/digi-logo.jpg",
    nameApps: "Internet Banking Corporate",
    isActive: true,
  },
  {
    logoApps: "/img/digi-logo.jpg",
    nameApps: "Virtual Account",
    isActive: true,
  },
  {
    logoApps: "/img/digi-logo.jpg",
    nameApps: "Garansi Bank Online",
    isActive: true,
  },
  {
    logoApps: "/img/digi-logo.jpg",
    nameApps: "Trade",
    isActive: false,
  },
  {
    logoApps: "/img/digi-logo.jpg",
    nameApps: "Value Chain",
    isActive: true,
  },
  {
    logoApps: "/img/digi-logo.jpg",
    nameApps: "Financial Dashboard",
    isActive: true,
  },
  {
    logoApps: "/img/digi-logo.jpg",
    nameApps: "Apps",
    isActive: false,
  },
  {
    logoApps: "/img/digi-logo.jpg",
    nameApps: "Apps",
    isActive: false,
  },
  {
    logoApps: "/img/digi-logo.jpg",
    nameApps: "Apps",
    isActive: false,
  },
  {
    logoApps: "/img/digi-logo.jpg",
    nameApps: "Apps",
    isActive: false,
  },
  {
    logoApps: "/img/digi-logo.jpg",
    nameApps: "Apps",
    isActive: false,
  },
  {
    logoApps: "/img/digi-logo.jpg",
    nameApps: "Apps",
    isActive: false,
  },
  {
    logoApps: "/img/digi-logo.jpg",
    nameApps: "Apps",
    isActive: false,
  },
  {
    logoApps: "/img/digi-logo.jpg",
    nameApps: "Apps",
    isActive: false,
  },
  {
    logoApps: "/img/digi-logo.jpg",
    nameApps: "Apps",
    isActive: false,
  },
];

const AppsDrawSquare = ({ data }: { data: AppsData }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      p={2}
      rounded="2xl"
      border="2px solid transparent" // Ensure the border is initially transparent
      transition="border-color 0.3s ease-in-out, background 0.3s ease-in-out" // Transition properties
      _hover={
        data.isActive
          ? {
              bgColor: "gray.200",
              // borderColor: "#A3D5FF",
              cursor: "pointer",
            }
          : {
              // borderColor: "#A3D5FF",
              opacity: 0.7, // Reduce opacity on hover
              cursor: "not-allowed", // Change cursor to indicate it's not clickable
            }
      }
      _active={
        data.isActive
          ? {
              boxShadow: "0 0 10px rgba(0, 139, 255, 0.5)",
            }
          : {}
      }
    >
      <Flex
        boxShadow={"md"}
        rounded={"3xl"}
        w={"100px"}
        h={"100px"}
        bg={"white"}
        p={4}
        bgGradient={"linear(to-b, white, gray.300)"}
      >
        <Image
          rounded={"xl"}
          src={data.logoApps}
          w={"full"}
          h={"full"}
          filter={data.isActive ? "grayscale(0%)" : "grayscale(100%)"}
          draggable={false} // Prevent image from being draggable
        />
      </Flex>
      <Flex w={"100px"} minH={"70px"} p={2} justifyContent={"center"}>
        <Text
          pt={1}
          textAlign="center"
          fontWeight={500}
          color={"gray.600"}
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
          userSelect="none" // Prevent text from being selectable
        >
          {truncateText(data.nameApps, isHovered ? 100 : 20)}
        </Text>
      </Flex>
    </Box>
  );
};

const AppsDrawSquareV2 = ({ data }: { data: AppsData }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        p={6}
        bg={"white"}
        rounded="2xl"
        border="2px solid transparent" // Ensure the border is initially transparent
        // transition="border-color 0.3s ease-in-out, background 0.3s ease-in-out" // Transition properties
        _hover={
          data.isActive
            ? {
                bgColor: "secondary.500",
                // borderColor: "#A3D5FF",
                color: "white",
                cursor: "pointer",
              }
            : {
                // borderColor: "#A3D5FF",
                opacity: 0.7, // Reduce opacity on hover
                cursor: "not-allowed", // Change cursor to indicate it's not clickable
              }
        }
        _active={
          data.isActive
            ? {
                // boxShadow: "0 0 10px rgba(0, 139, 255, 0.5)",
                borderWidth: "2px",
                borderColor: "secondary.500",
              }
            : {}
        }
        color={"gray.600"}
        transition="transform 0.3s ease-in-out"
        transform={
          isHovered && data.isActive ? "translateY(-10px)" : "translateY(0)"
        }
        justifyContent={"center"}
        alignItems={"center"}
        h={"220px"}
        onClick={data.isActive ? onOpen : onClose}
      >
        <VStack spacing={0}>
          <Box w={"80px"} h={"80px"} borderRadius={"2xl"} overflow={"hidden"}>
            <Image
              src={data.logoApps}
              // rounded={"3xl"}
              filter={data.isActive ? "grayscale(0%)" : "grayscale(100%)"}
              draggable={false} // Prevent image from being draggable
              w={"full"}
              h={"full"}
            />
          </Box>
          <Flex w={"100px"} minH={"70px"} p={2} justifyContent={"center"}>
            <Text
              pt={1}
              textAlign="center"
              fontWeight={600}
              userSelect="none" // Prevent text from being selectable
            >
              {truncateText(data.nameApps, isHovered ? 100 : 20)}
            </Text>
          </Flex>
        </VStack>
      </Flex>
      <Modal size={"lg"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(5px)" />
        <ModalContent rounded={"2xl"} m={2}>
          {/* <ModalHeader>Launch Apps</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody p={0}>
            <Flex minH={"40vh"}>
              <Box overflow={"hidden"} w={"full"}>
                <Box
                  zIndex={-1}
                  pos={"relative"}
                  h={"180px"}
                  w={"full"}
                  bgGradient={"linear(to-r, #1b517e, #063154)"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  // backgroundImage={`url(./img/business/corp-assets-005.jpg)`}
                  backgroundImage={`url(./img/currency-bg.png)`}
                  objectFit="cover"
                  // rounded={"xl"}
                  boxShadow={"md"}
                  roundedTop={"2xl"}
                >
                  <Box
                    // rounded={"xl"}
                    roundedTop={"2xl"}
                    pos={"absolute"}
                    top="0"
                    left="0"
                    w="full"
                    h="full"
                    bgGradient="linear(to-l, rgba(27, 81, 126, 0) 0%, rgba(8, 38, 64, 1) 100%)"
                  ></Box>
                </Box>
                <Flex justify={"center"} mt={"-80px"} zIndex={2}>
                  <Flex
                    w={"full"}
                    zIndex={2}
                    p={2}
                    justifyContent={"center"}
                    // bg={"blue"}
                  >
                    <Box
                      w={"120px"}
                      h={"120px"}
                      borderRadius={"3xl"}
                      overflow={"hidden"}
                      boxShadow={"lg"}
                    >
                      <Image
                        src={data.logoApps}
                        // rounded={"3xl"}
                        filter={
                          data.isActive ? "grayscale(0%)" : "grayscale(100%)"
                        }
                        draggable={false} // Prevent image from being draggable
                        w={"full"}
                        h={"full"}
                      />
                    </Box>
                  </Flex>
                </Flex>

                <Box p={6}>
                  <Stack spacing={0} align={"center"} gap={2} mb={5}>
                    <Heading fontSize={"2xl"} fontWeight={600}>
                      {data.nameApps}
                    </Heading>
                    <Text color={"gray.500"} fontStyle={"italic"}>
                      Masukan autentikasi pertama kali
                    </Text>
                    <Box
                      px={{ base: 0, sm: 0, md: 10, lg: 10 }}
                      gap={3}
                      w={"full"}
                    >
                      <FormControl isInvalid={false} isRequired py={4}>
                        <FormLabel textAlign={"center"}>Password</FormLabel>
                        <Input
                          id={"input1"}
                          name={"input1"}
                          type={"password"}
                          justifyContent={"center"}
                          placeholder="Isi Password Akun Anda"
                        />
                        <FormErrorMessage>
                          {"Message Error Here"}
                        </FormErrorMessage>
                      </FormControl>
                      <Link href={"https://www.bankbjb.co.id/"} target="_blank">
                        <ButtonSignature1
                          size={"lg"}
                          w={"full"}
                          textStr="Launch"
                        />
                      </Link>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const AppsDrawListV2 = ({ data }: { data: AppsData }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Flex
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      p={6}
      bg={"white"}
      rounded="2xl"
      border="2px solid transparent" // Ensure the border is initially transparent
      // transition="border-color 0.3s ease-in-out, background 0.3s ease-in-out" // Transition properties
      _hover={
        data.isActive
          ? {
              bgColor: "secondary.500",
              // borderColor: "#A3D5FF",
              color: "white",
              cursor: "pointer",
            }
          : {
              // borderColor: "#A3D5FF",
              opacity: 0.7, // Reduce opacity on hover
              cursor: "not-allowed", // Change cursor to indicate it's not clickable
            }
      }
      _active={
        data.isActive
          ? {
              // boxShadow: "0 0 10px rgba(0, 139, 255, 0.5)",
              borderWidth: "2px",
              borderColor: "secondary.500",
            }
          : {}
      }
      color={"gray.600"}
      transition="transform 0.3s ease-in-out"
      transform={
        isHovered && data.isActive ? "translateX(10px)" : "translateX(0)"
      }
      justifyContent={"center"}
      alignItems={"center"}
      h={"120px"}
    >
      <HStack spacing={5} w={"full"}>
        <Box
          w={{ base: "160px", sm: "160px", md: "90px", lg: "90px" }}
          h={"80px"}
          borderRadius={"2xl"}
          overflow={"hidden"}
        >
          <Image
            src={data.logoApps}
            // rounded={"3xl"}
            filter={data.isActive ? "grayscale(0%)" : "grayscale(100%)"}
            draggable={false} // Prevent image from being draggable
            w={"full"}
            h={"full"}
          />
        </Box>
        <Flex
          w={"full"}
          h={"full"}
          justifyContent={"start"}
          justifyItems={"center"}
        >
          <VStack w={"full"} align={"start"}>
            <Text
              fontWeight={600}
              fontSize={"larger"}
              userSelect="none" // Prevent text from being selectable
            >
              {truncateText(data.nameApps, isHovered ? 100 : 50)}
            </Text>
          </VStack>
        </Flex>
        <Spacer />
        <IconButton
          colorScheme={"gray"}
          variant={"ghost"}
          size={"lg"}
          aria-label="Launch App"
          icon={<ArrowForwardIcon />}
        />
      </HStack>
    </Flex>
  );
};

export default HomeAdmin;
