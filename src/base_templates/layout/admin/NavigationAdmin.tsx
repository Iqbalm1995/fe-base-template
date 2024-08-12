import React, { ReactNode, Suspense, useEffect, useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useColorMode,
  Image,
  Heading,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormLabel,
  SimpleGrid,
  Spacer,
  Tooltip,
  Table,
  Tr,
  Td,
  Tbody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  StackDivider,
  Stack,
  Container,
} from "@chakra-ui/react";
import {
  FiHome,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiCircle,
  FiUsers,
  FiUser,
  FiHeart,
  FiPenTool,
  FiBox,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import {
  AddIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  InfoIcon,
  InfoOutlineIcon,
  RepeatIcon,
  ViewIcon,
  ViewOffIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";
import { Scrollbars } from "react-custom-scrollbars-2";

import Link from "next/link";
import { motion } from "framer-motion";
import { BiCog } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { RxActivityLog } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BottomLineSignature } from "@/base_templates/components/BottomLineSignature";
import {
  LogoApplications,
  LogoApplicationsLite,
  LogoApps,
  LogoApps2,
} from "@/base_templates/components/LogoApps";
import { useToastHelperShort } from "@/helper/ToastMessagesHelper";
import { FooterAdmin } from "../landing/FooterLanding";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "@/utils/localStorageUtils";
import { RiMenu2Line } from "react-icons/ri";
import TopNewsHeadine from "@/base_templates/components/TopNewsHeadine";
import { FaPowerOff } from "react-icons/fa6";
import { FooterAdminPanel } from "@/components/Footer";

// Page Split
// const ProfileModal = React.lazy(
//   () => import("../_pieces/profile/Profile-modal")
// );

const MotionBox = motion(Box);

interface LinkItemProps {
  name: string;
  icon: IconType;
  link: string;
  role: string[];
  menuID: string;
  children: LinkItemProps[];
}

const LinkItems: LinkItemProps[] = [
  {
    name: "Home",
    icon: FiHome,
    link: "/home",
    role: ["admin"],
    menuID: "1",
    children: [],
  },
  {
    name: "Template",
    icon: FiPenTool,
    link: "#",
    role: ["admin"],
    menuID: "2",
    children: [
      {
        name: "Color Palette",
        icon: FiBox,
        link: "/template/color-palette",
        role: ["admin"],
        menuID: "2-1",
        children: [],
      },
      {
        name: "Tables",
        icon: FiBox,
        link: "/template/tables",
        role: ["admin"],
        menuID: "2-2",
        children: [],
      },
      {
        name: "Button",
        icon: FiBox,
        link: "/template/buttons",
        role: ["admin"],
        menuID: "2-2",
        children: [],
      },
      {
        name: "Card",
        icon: FiBox,
        link: "/template/cards",
        role: ["admin"],
        menuID: "2-2",
        children: [],
      },
    ],
  },
  {
    name: "Produk",
    icon: FiHeart,
    link: "#",
    role: ["admin"],
    menuID: "1",
    children: [],
  },
  {
    name: "Market",
    icon: GrTransaction,
    link: "#",
    role: ["admin"],
    menuID: "1",
    children: [],
  },
  {
    name: "Task",
    icon: FaTasks,
    link: "#",
    role: ["admin"],
    menuID: "1",
    children: [],
  },
  {
    name: "Management",
    icon: FiUsers,
    link: "#",
    role: ["admin"],
    menuID: "2",
    children: [
      {
        name: "Users",
        icon: FiUser,
        link: "#",
        role: ["admin"],
        menuID: "2-1",
        children: [],
      },
      {
        name: "Teams",
        icon: FiUsers,
        link: "#",
        role: ["admin"],
        menuID: "2-2",
        children: [],
      },
    ],
  },
  {
    name: "Pengaturan",
    icon: BiCog,
    link: "#",
    role: ["admin"],
    menuID: "1",
    children: [],
  },
  {
    name: "Aktivitas",
    icon: RxActivityLog,
    link: "#",
    role: ["admin"],
    menuID: "1",
    children: [],
  },
];

export default function NavigationAdmin({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [LiteMode, setLiteMode] = useState<boolean>(false);

  useEffect(() => {
    // Retrieve the value from local storage when the component mounts
    const savedLiteMode = getFromLocalStorage("LiteMode");
    if (savedLiteMode !== null) {
      setLiteMode(savedLiteMode);
    }
  }, []);

  const toggleLiteMode = () => {
    const newValue = !LiteMode;
    setLiteMode(newValue);
    saveToLocalStorage("LiteMode", newValue);
  };

  return (
    <>
      <Box minH="100vh" bg={"gray.100"}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
          LiteModeTrigger={LiteMode}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="md"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} LiteModeTrigger={false} />
          </DrawerContent>
        </Drawer>
        <>
          <Flex
            transition="0.5s ease"
            ml={{ base: 0, md: LiteMode ? "95px" : 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue("white", "gray.900")}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent={{ base: "space-between", md: "flex-end" }}
            backgroundPosition="left"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            // bgGradient={"linear(to-r, white, red.900)"}
            // backgroundImage={`url(./img/agustus-navbar-bg-2.png)`}
            // bgColor={"red"}
          >
            <IconButton
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
              variant="ghost"
              aria-label="open menu"
              icon={<FiMenu />}
            />

            <Box display={{ base: "none", md: "flex" }} w={"full"}>
              <IconButton
                onClick={toggleLiteMode}
                variant="ghost"
                // colorScheme={"secondary"}
                aria-label="lite mode"
                icon={<RiMenu2Line />}
                size={"lg"}
              />
            </Box>

            <Box display={{ base: "flex", md: "none" }}>
              {LiteMode ? (
                <LogoApplicationsLite colorText="secondary.500" />
              ) : (
                <LogoApplications colorText="secondary.500" />
              )}
            </Box>

            <HStack spacing={{ base: "2", md: "6" }}>
              <Flex alignItems={"start"}>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<FiBell />}
                    variant="ghost"
                    transition="all 0.3s"
                    _focus={{ boxShadow: "none" }}
                  />
                  <MenuList>
                    <MenuItem icon={<AddIcon />}>65 New Data</MenuItem>
                    <MenuItem icon={<InfoOutlineIcon />}>
                      10 Pending Approval
                    </MenuItem>
                    <MenuItem icon={<WarningTwoIcon />}>
                      23 Inactive API
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem justifyContent="center">Show More</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>

              <Flex alignItems={"center"}>
                <Menu>
                  <MenuButton
                    py={2}
                    transition="all 0.3s"
                    _focus={{ boxShadow: "none" }}
                  >
                    <HStack>
                      <Avatar
                        size={"sm"}
                        src={"/img/default-user-img.jpg"}
                        mr="2"
                      />
                      <VStack
                        display={{ base: "none", md: "flex" }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2"
                        mr="2"
                      >
                        <Text fontSize="sm" fontWeight={600}>
                          John Doe
                        </Text>
                        <HStack
                          divider={<StackDivider borderColor="gray.200" />}
                        >
                          <Text fontSize="xs" color="gray.600">
                            User8732569435
                          </Text>
                          <Text fontSize="xs" color="gray.600">
                            Approver
                          </Text>
                        </HStack>
                      </VStack>
                      <Box display={{ base: "none", md: "flex" }}>
                        <FiChevronDown />
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList
                    bg={useColorModeValue("white", "gray.900")}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                  >
                    {/* <MenuDivider /> */}
                    <Link href={"/"}>
                      <MenuItem
                        _hover={{
                          bg: "red.600",
                          color: "white",
                        }}
                      >
                        Keluar
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Menu>
              </Flex>
            </HStack>
          </Flex>
        </>
        <Box
          transition="0.5s ease"
          ml={{ base: 0, md: LiteMode ? "95px" : 60 }}
        >
          <TopNewsHeadine />
          <Box minH={"100vh"} pt={2}>
            <Box mx={"auto"} bgColor={"gray.100"}>
              <Container
                maxW={"8xl"}
                px={{ base: 5, sm: 5, md: 12, lg: 12 }}
                pb={12}
                pt={2}
                minH={"100vh"}
              >
                {children}
              </Container>
              {/* <FooterAdminPanel /> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
  LiteModeTrigger: boolean;
}

const SidebarContent = ({
  onClose,
  LiteModeTrigger,
  ...rest
}: SidebarProps) => {
  return (
    <Box
      transition="0.5s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: LiteModeTrigger ? "95px" : 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="5" justifyContent="space-between">
        {LiteModeTrigger ? (
          <LogoApplicationsLite colorText="secondary.500" />
        ) : (
          <LogoApplications colorText="secondary.500" />
        )}
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <Flex pt={5} pb={2} mx={3} h={"full"}>
        <VStack w={"full"} h={"90%"} align={"start"}>
          <Heading pl={2} as="h6" size="xs">
            Menu
          </Heading>
          <Box w={"full"} overflowY={"auto"}>
            {LinkItems.map((link) => (
              <NavItem key={link.name} data={link} mode={LiteModeTrigger} />
            ))}
          </Box>
          <Spacer />
          {/* <AdditionalBarAdvertis /> */}
          <AdditionalBarAlt />
        </VStack>
      </Flex>
    </Box>
  );
};

const NavItem = ({ data, mode }: { data: LinkItemProps; mode: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = data.children && data.children.length > 0;
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box w={"full"}>
      <Link href={data.link} onClick={hasChildren ? handleToggle : undefined}>
        <Flex
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          align="center"
          px="4"
          py="3"
          my="1"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            transition: "0.2s ease-in-out",
            bg: "secondary.500",
            color: "white",
            pl: mode ? "4" : "5",
          }}
          //   bg={"white"}
          color={"black.500"}
          justifyContent={"center"}
        >
          <Flex
            w={"full"}
            h={"full"}
            alignItems={"center"}
            // transition={"all 0.2s ease-in-out"}
            transform={
              isHovered && !mode ? "translateX(10px)" : "translateY(0)"
            }
            justifyContent={"center"}
          >
            {data.icon && (
              <Icon
                mr={mode ? "0" : "6"}
                fontSize={mode ? "25" : "20"}
                _groupHover={{
                  color: "white",
                }}
                as={data.icon}
              />
            )}
            <Flex
              // transition="0.2s ease-in-out"
              //   transition="transform 0.3s ease-in-out"
              w={"full"}
              h={"full"}
              alignItems={"center"}
              display={mode ? "none" : "flex"}
            >
              <Text>{data.name}</Text>
              {hasChildren && (
                <Icon
                  ml="auto"
                  as={isOpen ? ChevronDownIcon : ChevronRightIcon}
                />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Link>
      {isOpen && hasChildren && (
        <MotionBox
          pl={3}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          overflow="hidden"
        >
          {data.children.map((child) => (
            <NavItem key={child.name} data={child} mode={mode} />
          ))}
        </MotionBox>
      )}
    </Box>
  );
};

function AdditionalBarAdvertis() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const showToast = useToastHelperShort();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Box w={"full"}>
        <Flex
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          align="center"
          px="4"
          py="4"
          my="1"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          bgGradient={"linear(to-r, red.500, red.800)"}
          //   bg={"white"}
          color={"white"}
          justifyContent={"center"}
        >
          <Flex
            w={"full"}
            h={"full"}
            alignItems={"center"}
            transition={"all .25s ease-in-out"}
            justifyContent={"center"}
          >
            <Flex
              transition="0.5s ease-in-out"
              w={"full"}
              h={"full"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Text>Some Text Here</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

function AdditionalBarAlt() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const showToast = useToastHelperShort();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Box w={"full"}>
        <Flex
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          align="center"
          px="4"
          py="4"
          my="1"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          color="gray.700"
          bgGradient={"linear(to-r, gray.200, gray.300)"}
          _hover={{
            // transition: "0.2s ease-in-out",
            bgGradient: "linear(to-r, red.500, red.600)",
            color: "white",
          }}
          boxShadow={"sm"}
          //   bg={"white"}
          justifyContent={"center"}
        >
          <Flex
            w={"full"}
            h={"full"}
            alignItems={"center"}
            transition={"all .25s ease-in-out"}
            justifyContent={"center"}
          >
            <Flex
              transition="0.5s ease-in-out"
              w={"full"}
              h={"full"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaPowerOff />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

function AdditionalBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const showToast = useToastHelperShort();

  return (
    <>
      <Box
        bgGradient={"linear(to-r, #1b517e, #063154)"}
        m={2}
        mr={3}
        borderRadius={8}
      >
        <Flex px={3} pt={3} pb={2}>
          <Heading as="h6" size="xs" textColor={"white"}>
            <Flex>
              <Box pt={1} pr={1}>
                Saldo
              </Box>
              <Box>
                <Tooltip label="Tampilkan Saldo" placement="top">
                  <Button
                    colorScheme="bjb_color_theme"
                    color={"white"}
                    variant={"ghost"}
                    size="xs"
                    p={0}
                    m={0}
                    // onClick={handleShowNominal}
                  >
                    {show ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </Tooltip>
              </Box>
              <Box>
                <Tooltip label="Perbaharui Saldo" placement="top">
                  <Button
                    colorScheme="bjb_color_theme"
                    color={"white"}
                    variant={"ghost"}
                    size="xs"
                    p={0}
                    m={0}
                    // onClick={() => handleRefreshBalance()}
                  >
                    <RepeatIcon />
                  </Button>
                </Tooltip>
              </Box>
              <Box>
                <Tooltip label="Informasi Detail" placement="top">
                  <Button
                    colorScheme="bjb_color_theme"
                    color={"white"}
                    variant={"ghost"}
                    size="xs"
                    p={0}
                    m={0}
                    onClick={onOpen}
                  >
                    <InfoIcon />
                  </Button>
                </Tooltip>
              </Box>
            </Flex>
          </Heading>
        </Flex>
        <Flex bgColor={"#0e283f"} px={3} py={2} borderRadius={8}>
          <Box>
            <Text as="b" textColor={"white"}>
              {show ? "0" : "Rp ********"}
            </Text>
          </Box>
        </Flex>
      </Box>
      {/* MODAL STATE */}
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Informasi Akun Dan Saldo</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={10}>
            {/* <pre>{JSON.stringify(DataBalance, null, 2)}</pre> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
