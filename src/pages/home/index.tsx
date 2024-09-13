import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Badge,
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
  const [AppsViewMode, setAppsViewMode] = useState<"list" | "grid">("grid");
  return (
    <>
      <LayoutAdmin>
        <BreadcrumbAdmin HeadData={HeadPageName} />
        <Flex
          pos={"relative"}
          zIndex={1}
          w={"full"}
          h={"35vh"}
          bgGradient={"linear(to-r, primary.500, secondary.500, yellow.500)"}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={`url(./img/bjb-head-image.jpg)`}
          rounded={"xl"}
          mt={2}
        >
          <Flex
            pos={"absolute"}
            top="0"
            left="0"
            w="full"
            h="full"
            bgGradient="linear(to-b, rgba(17, 17, 17, 0.2) 0%, rgba(17, 17, 17, 0.9) 100%)"
            rounded={"xl"}
            justifyContent={"center"}
            alignItems={"center"}
            p={5}
          >
            <VStack w={"full"} spacing={5}>
              <Heading as="h2" size="xl" color={"white"} opacity={"100%"}>
                Selamat Datang, John Doe
              </Heading>
              <InputGroup
                w={{ base: "full", sm: "full", md: "60%", lg: "60%" }}
              >
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
              <HStack
                w={"full"}
                justifyContent={"center"}
                overflowX={"auto"}
                mb={2}
              >
                <Heading as="h4" size="md" color={"white"} px={5}>
                  Favorites
                </Heading>
                <AppLauncherSmall />
                <AppLauncherSmall />
                <AppLauncherSmall />
                <AppLauncherSmall />
                <AppLauncherSmall />
                <AppLauncherSmall />
              </HStack>
            </VStack>
          </Flex>
        </Flex>
        <VStack spacing={2} alignItems={"start"} w={"full"} pt={5}>
          <Grid templateColumns="repeat(12, 1fr)" gap={4} w={"full"} py={4}>
            <GridItem
              colStart={{ base: 1, sm: 1, md: 3, lg: 3 }}
              colEnd={{ base: 13, sm: 13, md: 10, lg: 10 }}
            ></GridItem>
            <GridItem colSpan={{ base: 12, md: 12 }}>
              <Box w={"full"}>
                <Grid templateColumns="repeat(2, 1fr)" gap={4} w={"full"}>
                  <GridItem>
                    <Flex h={"full"} alignItems={"center"} py={2}>
                      <HStack divider={<StackDivider borderColor="gray.400" />}>
                        <Text fontSize="lg" fontWeight={550} color={"gray.600"}>
                          Channels Apps
                        </Text>
                        {AppsViewMode == "grid" ? (
                          <Badge colorScheme="secondary" fontSize="0.8em">
                            Grid View
                          </Badge>
                        ) : (
                          <Badge colorScheme="secondary" fontSize="0.8em">
                            List View
                          </Badge>
                        )}
                      </HStack>
                    </Flex>
                  </GridItem>
                  <GridItem>
                    <Flex justifyContent={"end"} py={2}>
                      <HStack divider={<StackDivider borderColor="gray.400" />}>
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
                  <Box
                    rounded={"xl"}
                    w={"full"}
                    h={"60vh"}
                    p={5}
                    // bgGradient={"linear(to-b, gray.100, gray.100, gray.400)"}
                    overflowY={"auto"}
                  >
                    <Grid templateColumns="repeat(6, 1fr)" gap={5} w={"full"}>
                      {dataApps.map((item, idx) =>
                        AppsViewMode == "grid" ? (
                          <GridItem
                            key={idx}
                            colSpan={{ base: 3, sm: 2, md: 2, lg: 1 }}
                          >
                            <AppsDrawSquareV2 data={item} />
                          </GridItem>
                        ) : (
                          <GridItem key={idx} colSpan={6} w={"full"}>
                            <AppsDrawListV2 data={item} />
                          </GridItem>
                        )
                      )}
                    </Grid>
                  </Box>
                </>
              </Box>
            </GridItem>
          </Grid>
        </VStack>
      </LayoutAdmin>
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
];

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
        // transition="border-color 0.3s ease-in-out, background 0.3s ease-in-out" // Transition properties
        _hover={
          data.isActive
            ? {
                backgroundColor: "secondary.500",
                // bgGradient: "linear(to-br, secondary.500, secondary.400)",
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
                bgGradient: "linear(to-br, primary.500, secondary.500)",
                transform: "scale(0.99)", // Slightly scale down on click
                boxShadow: "0 0 15px rgba(0, 139, 255, 0.5)", // Optionally add a shadow for depth
              }
            : {}
        }
        color={"gray.600"}
        transition="transform 0.2s ease-in-out, background-color 0.2s ease, box-shadow 0.2s ease-in-out" // Animate transform and box-shadow
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

const AppLauncherSmall = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      _hover={{
        backgroundColor: "secondary.500",
        color: "white",
        cursor: "pointer",
      }}
      _active={{
        backgroundColor: "secondary.500",
        transform: "scale(0.99)",
      }}
      transition="background-color 0.2s ease"
      p={2}
      rounded={"xl"}
      w={"110px"}
      h={"110px"}
    >
      <VStack w={"full"}>
        <Box
          w={"60px"}
          h={"60px"}
          bg={"white"}
          p={3}
          rounded={"full"}
          draggable={false} // Prevent image from being draggable
        >
          <Image
            userSelect="none"
            src={"/img/digi-logo.jpg"}
            // rounded={"3xl"}
            draggable={false} // Prevent image from being draggable
            w={"full"}
            h={"full"}
            rounded={"xl"}
          />
        </Box>
        <Flex h={"full"} justifyContent={"center"}>
          <Text
            textAlign={"center"}
            userSelect="none"
            color={"white"}
            fontWeight={600}
          >
            Apps Name
          </Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default HomeAdmin;
