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
import { useRouter } from "next/router";
import SignatureLineColor from "@/components/BottomLineSignature";

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
    name: "Task",
    icon: FaTasks,
    link: "#",
    role: ["admin"],
    menuID: "1",
    children: [],
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
  const router = useRouter();

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
            // borderBottomWidth="1px"
            // borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent={{ base: "space-between", md: "flex-end" }}
            backgroundPosition="left"
            backgroundRepeat="no-repeat"
            backgroundSize="gray.900"
            // bgGradient={"linear(to-r, gray.200, white)"}
            color={"white"}
            // backgroundImage={`url(./img/agustus-navbar-bg-2.png)`}
            // bgColor={"red"}
            boxShadow={"md"}
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
                colorScheme={"gray"}
                aria-label="lite mode"
                icon={<RiMenu2Line />}
                size={"lg"}
                // rounded={"xl"}
              />
            </Box>

            <Flex
              display={{ base: "flex", md: "none" }}
              justifyContent={"center"}
              w={"full"}
            >
              {LiteMode ? (
                <LogoApplicationsLite colorText="secondary.500" />
              ) : (
                <LogoApplications colorText="secondary.500" />
              )}
            </Flex>

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
                      <Tooltip borderRadius={"xl"} hasArrow label={"John Doe"}>
                        <Avatar
                          size={"sm"}
                          // src={"/img/default-user-img.jpg"}
                          name={"John Doe"}
                          mr="2"
                        />
                      </Tooltip>
                      <Box
                        color={"gray.800"}
                        display={{ base: "none", md: "flex" }}
                      >
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
                        color={"gray.800"}
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
              <FooterAdminPanel />
              <SignatureLineColor />
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

      <AdditionalProfileBar LiteModeTrigger={LiteModeTrigger} />

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
          {/* <AdditionalBarAlt /> */}
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

  const [IsActiveNav, setIsActiveNav] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Split the pathname by "/" and get the first segment
    const firstSegment = router.pathname.split("/")[1];
    const currentPath = router.pathname;
    if (firstSegment === data.link.split("/")[1]) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }

    if (currentPath === data.link && data.children.length <= 0) {
      setIsActiveNav(true);
    } else {
      setIsActiveNav(false);
    }
  }, [router.pathname]);

  return (
    <Box w={"full"}>
      <Link href={data.children.length == 0 ? data.link : "#"}>
        <Tooltip
          label={data.name}
          placement="right-end"
          visibility={mode ? "visible" : "hidden"}
        >
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
            boxShadow={IsActiveNav ? "md" : "none"}
            _hover={{
              color: "white",
              // bg: "secondary.500",
              bgGradient: "linear(to-r, secondary.500, secondary.600)", // Default gradient
              pl: mode ? "4" : "5",
              boxShadow: "md",
            }}
            // bg={IsActiveNav ? "secondary.500" : "transparent"}
            bgGradient={
              IsActiveNav
                ? "linear(to-r, secondary.500, secondary.600)"
                : "linear(to-r, transparent, transparent)"
            }
            color={IsActiveNav ? "white" : "gray.900"}
            justifyContent={"center"}
            // onClick={() => {
            //   GoNavigationLink();
            // }}
            onClick={hasChildren ? handleToggle : undefined}
          >
            <Flex
              w={"full"}
              h={"full"}
              alignItems={"center"}
              transition={".2s ease"}
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
                  color={IsActiveNav ? "white" : "gray.900"}
                  as={data.icon}
                />
              )}
              <Flex
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
        </Tooltip>
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

function AdditionalProfileBar({
  LiteModeTrigger,
}: {
  LiteModeTrigger: boolean;
}) {
  const [show, setShow] = React.useState(false);
  const showToast = useToastHelperShort();

  return (
    <>
      <Box
        bgGradient={
          LiteModeTrigger
            ? "linear(to-r, white, white)"
            : "linear(to-r, gray.100, gray.200)"
        }
        m={2}
        mr={3}
        py={LiteModeTrigger ? 0 : 2}
        rounded={"lg"}
        transition="0.5s ease-in-out"
      >
        <Flex px={3} pt={3} pb={2} w={"full"}>
          <Flex w={"full"}>
            <Tooltip borderRadius={"xl"} hasArrow label={"John Doe"}>
              <Avatar size={"md"} name={"John Doe"} mr="2" />
            </Tooltip>
            <Flex
              w={"full"}
              h={"full"}
              alignItems={"center"}
              alignContent={"start"}
              display={LiteModeTrigger ? "none" : "flex"}
            >
              <VStack w={"full"} h={"full"} spacing={0} align={"start"} p={1}>
                <Text color={"gray.900"} fontSize={"sm"} fontWeight={700}>
                  John Doe
                </Text>
                <Text fontSize="xs" color="gray.600">
                  Approver
                </Text>
              </VStack>
            </Flex>
          </Flex>
        </Flex>
        {/* <Flex
          bgGradient={"linear(to-r, yellow.400, yellow.500)"}
          px={3}
          py={2}
          roundedBottom={"lg"}
        >
          <Box>
            <Text as="b" textColor={"white"}>
              {show ? "0" : "Rp ********"}
            </Text>
          </Box>
        </Flex> */}
      </Box>
    </>
  );
}
