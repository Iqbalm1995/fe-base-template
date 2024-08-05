import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Switch,
  HStack,
  StackDivider,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Grid,
  GridItem,
  VStack,
  Center,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Spacer,
  Image,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ViewOffIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { PaddingLanding } from "@/constants/MasterConstant";
import { LogoApps } from "@/base_templates/components/LogoApps";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";
import { ButtonSignature1 } from "@/base_templates/components/SignatureComponents";
import TopNewsHeadine from "@/base_templates/components/TopNewsHeadine";

export default function TopNavigationLandingAlt() {
  const { isOpen, onToggle } = useDisclosure();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bg = useColorModeValue("white", "gray.800");
  const boxShadow = scrollY > 0 ? "sm" : "none";

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      width="100%"
      zIndex={10}
      bg={scrollY > 0 ? bg : "transparent"}
      boxShadow={boxShadow}
      transition="background-color 0.3s, box-shadow 0.3s"
    >
      <TopNewsHeadine />
      <Container
        as={Stack}
        maxW={"container.xl"}
        // bgGradient={scrollY > 0 ? "none" : "linear(to-r, #1b517e, #063154)"}
      >
        <Flex
          color={"white"}
          minH={"60px"}
          py={{ base: 2 }}
          align={"center"}
          pos={"relative"}
          zIndex={2}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
              colorScheme={scrollY > 0 ? "secondary" : "white"}
            />
          </Flex>
          {/* Logo Apps */}
          <>
            <HStack divider={<StackDivider />} spacing={4}>
              <Image
                w={{ base: "50px", sm: "50px", md: "60px", lg: "60px" }}
                src={"./img/logo-bjb.png"}
                display={"flex"}
              ></Image>
              <Text
                fontWeight={600}
                fontSize={"xl"}
                letterSpacing={5}
                color={scrollY > 0 ? "secondary.300" : "white"}
              >
                PORTAL
              </Text>
            </HStack>
          </>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "end" }}
            pr={5}
          >
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <LanguageSelector />
            <AuthPanelModal />
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>
    </Box>
  );
}

interface AuthCorporateUserModel {
  username: string;
  password: string;
}

const initialValueAuthEx: AuthCorporateUserModel = {
  username: "",
  password: "",
};

const FormSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const AuthPanelModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isCentered = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
  });

  return (
    <>
      <ButtonSignature1 textStr={"Masuk"} onClick={onOpen} boxShadow={"md"} />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"4xl"}
        isCentered={isCentered}
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(5px)" />
        <ModalContent rounded={"xl"} m={{ base: 3, sm: 3, md: 0, lg: 0 }}>
          {/* <ModalHeader>Login Otentikasi</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody p={0}>
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={0}
              p={0}
              h={{ base: "65vh", sm: "65vh", md: "620px", lg: "620px" }}
            >
              <GridItem
                colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }}
                w={"full"}
                h={"full"}
                // bg="blue.500"
                roundedLeft={"xl"}
                display={{ base: "none", sm: "none", md: "flex", lg: "flex" }}
              >
                <Flex
                  roundedLeft={"xl"}
                  w={"full"}
                  h={"full"}
                  bgGradient={"linear(to-r, #1b517e, #063154)"}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  backgroundImage={`url(./img/currency-bg.png)`}
                  pos={"relative"}
                  zIndex={1}
                >
                  <Box
                    pos={"absolute"}
                    top="0"
                    left="0"
                    w="full"
                    h="full"
                    bgGradient="linear(to-b, rgba(17, 17, 17, 0) 0%, rgba(17, 17, 17, 0.9) 100%)"
                    // bg={"red"}
                  ></Box>
                </Flex>
              </GridItem>
              <GridItem
                colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }}
                w={"full"}
                h={"full"}
                roundedRight={"xl"}
              >
                <Flex
                  w={"full"}
                  h={"full"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  p={8}
                  overflowY={"auto"}
                >
                  <AuthForm />
                </Flex>
              </GridItem>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const AuthForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValueAuthEx,
    validationSchema: FormSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      console.log("Login");
      console.log(values);
      router.push("/home");
    },
  });
  return (
    <VStack width={"full"} spacing={3} align="stretch">
      <Box>
        <Center>
          <Flex width={"80px"} py={2}>
            <Image src={"./img/logo-bjb.png"} alt="Bank bjb" />
          </Flex>
        </Center>
      </Box>
      <Box>
        <Text fontWeight={600} fontSize={"20px"}>
          Selamat Datang
        </Text>
      </Box>
      <Box>
        <Text>Gunakan akun Portal bjb untuk masuk aplikasi.</Text>
      </Box>
      <Box>
        {/* FORM AUTH */}
        <form onSubmit={formik.handleSubmit}>
          <VStack>
            <FormControl
              id="username"
              isInvalid={formik.errors.username ? true : false}
              isRequired
            >
              <FormLabel>Username</FormLabel>
              <Input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder="Isi Username..."
              />
              <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="password"
              isInvalid={formik.errors.password ? true : false}
              isRequired
            >
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Isi Password..."
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>
            <Box w={"full"}>
              <Flex>
                <Spacer />
                <Link href="#">
                  <Text fontSize={"small"}>Lupa password</Text>
                </Link>
              </Flex>
            </Box>
            <ButtonSignature1
              rightIcon={<FiLogIn />}
              colorScheme="bjb_color_theme"
              variant={"solid"}
              type={"submit"}
              w={"full"}
              textStr={"Masuk"}
            />
          </VStack>
        </form>
      </Box>
      <Box>
        <Flex>
          <Spacer />
          <Text>Belum punya akun?</Text>
          <Link href="#">
            <Text fontWeight={650} fontStyle={"italic"} pl={1}>
              Daftar Sekarang
            </Text>
          </Link>
        </Flex>
      </Box>
    </VStack>
  );
};

export const LanguageSelector = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HStack divider={<StackDivider />}>
        <ButtonGroup size="xs" isAttached>
          <Button
            colorScheme={"secondary"}
            variant={"solid"}
            size={"xs"}
            isActive
          >
            ID
          </Button>
          <Button colorScheme={"gray"} variant={"solid"} size={"xs"}>
            EN
          </Button>
        </ButtonGroup>
      </HStack>
    </>
  );
};

const DesktopNav = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bg = useColorModeValue("white", "gray.800");
  const boxShadow = scrollY > 0 ? "sm" : "none";

  const linkColor = scrollY > 0 ? "secondary.900" : "white";
  const linkHoverColor = scrollY > 0 ? "secondary.400" : "gray.200";
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={600}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{
        bg: useColorModeValue("blue.50", "gray.900"),
      }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "secondary.400" }}
            fontWeight={500}
            color={"gray.800"}
          >
            {label}
          </Text>
          <Text
            fontSize={"sm"}
            color={"gray.400"}
            transition={"all .3s ease"}
            _groupHover={{ color: "gray.800" }}
          >
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"secondary.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      p={4}
      display={{ md: "none" }}
      mb={"60px"}
      bg={"white"}
      rounded={"xl"}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          // color={useColorModeValue("gray.600", "gray.200")}
          color={"secondary.800"}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
            color={"secondary.800"}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("secondary.800", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box
                color={"secondary.800"}
                as="a"
                key={child.label}
                href={child.href}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  // {
  //   label: "Beranda",
  //   href: "/",
  // },
  {
    label: "Produk",
    children: [
      {
        label: "Sub menu 1",
        subLabel: "Desc sub menu 1",
        href: "#",
      },
      {
        label: "Sub menu 2",
        subLabel: "Desc sub menu 2",
        href: "#",
      },
    ],
  },
  {
    label: "Tentang Kami",
    href: "#",
  },
  {
    label: "Hubungi Kami",
    href: "#",
  },
  // {
  //   label: "Blank Page",
  //   href: "/landing/blank-page",
  // },
];
