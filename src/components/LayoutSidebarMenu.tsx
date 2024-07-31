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
import {
  useToastHelper,
  useToastHelperShort,
} from "../helper/ToastMessagesHelper";
import SignatureLineColor from "./BottomLineSignature";
import Link from "next/link";
import { FooterAdminPanel } from "./Footer";
import { LogoApplication } from "./LogoApplication";
import { motion } from "framer-motion";
import { BiCog } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { RxActivityLog } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";

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
  children?: LinkItemProps[];
}

const LinkItems: LinkItemProps[] = [
  {
    name: "Home",
    icon: FiHome,
    link: "/home",
    role: ["admin"],
    menuID: "1",
  },
  {
    name: "Produk",
    icon: FiHeart,
    link: "#",
    role: ["admin"],
    menuID: "1",
  },
  {
    name: "Market",
    icon: GrTransaction,
    link: "#",
    role: ["admin"],
    menuID: "1",
  },
  {
    name: "Task",
    icon: FaTasks,
    link: "#",
    role: ["admin"],
    menuID: "1",
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
      },
      {
        name: "Teams",
        icon: FiUsers,
        link: "#",
        role: ["admin"],
        menuID: "2-2",
      },
    ],
  },
  {
    name: "Pengaturan",
    icon: BiCog,
    link: "#",
    role: ["admin"],
    menuID: "1",
  },
  {
    name: "Aktivitas",
    icon: RxActivityLog,
    link: "#",
    role: ["admin"],
    menuID: "1",
  },
];

export default function LayoutSidebarMenu({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box minH="100vh" bg={"gray.100"}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }}>
          <Box minH={"100vh"}>{children}</Box>

          <FooterAdminPanel />
          <SignatureLineColor />
        </Box>
      </Box>
    </>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="2s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      {/* <Scrollbars style={{ width: "100%", height: "100%" }}> */}
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
        pl="2"
      >
        <LogoApplication />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      {/* <AdditionalBar /> */}

      <Flex pt={5} pl={2} pb={2} mx={3}>
        <Heading as="h6" size="xs">
          Menu
        </Heading>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} {...link} />
      ))}
      {/* <Box height={"200px"}></Box> */}
      {/* </Scrollbars> */}
    </Box>
  );
};

const NavItem = ({ icon, name, link, children }: LinkItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = children && children.length > 0;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <Link href={link} onClick={hasChildren ? handleToggle : undefined}>
        <Flex
          align="center"
          px="4"
          py="2"
          mx="4"
          my="1"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "gray.200",
            color: "#1b517e",
            pl: "5",
          }}
          bg={"white"}
          color={"black.500"}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "#1b517e",
              }}
              as={icon}
            />
          )}
          <Text>{name}</Text>
          {hasChildren && (
            <Icon ml="auto" as={isOpen ? ChevronDownIcon : ChevronRightIcon} />
          )}
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
          {children.map((child) => (
            <NavItem key={child.name} {...child} />
          ))}
        </MotionBox>
      )}
    </Box>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      // pos={"fixed"}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Box display={{ base: "flex", md: "none" }}>
        <LogoApplication />
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
              <MenuItem icon={<WarningTwoIcon />}>23 Inactive API</MenuItem>
              <MenuDivider />
              <MenuItem justifyContent="center">Show More</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Flex>
          <HStack divider={<StackDivider />}>
            <Button
              colorScheme="blackAlpha"
              variant="ghost"
              size={"xs"}
              isActive
            >
              ID
            </Button>
            <Button colorScheme="blackAlpha" variant="ghost" size={"xs"}>
              EN
            </Button>
          </HStack>
        </Flex>

        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src={"./img/default-user-img.jpg"} mr="2" />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                  mr="2"
                >
                  <Text fontSize="sm">Kobra</Text>
                  <HStack divider={<StackDivider borderColor="gray.200" />}>
                    <Text fontSize="xs" color="gray.600">
                      kobra777
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
  );
};

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
