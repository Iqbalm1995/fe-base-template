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
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";

export default function TopNavigationLanding() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container
      as={Stack}
      maxW={"container.xl"}
      bgGradient={"linear(to-r, #1b517e, #063154)"}
    >
      <Flex
        // bg={useColorModeValue("white", "gray.800")}
        // bg={"red"}
        // color={useColorModeValue("gray.600", "white")}
        color={"white"}
        minH={"60px"}
        py={{ base: 2 }}
        // px={{ base: 4 }}
        // px={PaddingLanding}
        // borderBottom={1}
        // borderStyle={"solid"}
        // borderColor={"rgba(27, 81, 126, 0.2)"}
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
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            colorScheme={"white"}
          />
        </Flex>
        {/* Logo Apps */}
        <LogoApps />
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "end" }} pr={5}>
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

  return (
    <>
      <Button onClick={onOpen} colorScheme={"secondary"} boxShadow={"md"}>
        Masuk
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={"4xl"} isCentered>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(5px)" />
        <ModalContent rounded={"xl"} m={{ base: 3, sm: 3, md: 0, lg: 0 }}>
          {/* <ModalHeader>Login Otentikasi</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody p={0}>
            <Grid templateColumns="repeat(2, 1fr)" gap={0} p={0} h={"65vh"}>
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
                  p={10}
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
            <Button
              rightIcon={<FiLogIn />}
              colorScheme="bjb_color_theme"
              variant={"solid"}
              type={"submit"}
              w={"full"}
              mt={5}
            >
              Masuk
            </Button>
          </VStack>
        </form>
      </Box>
      <Box>
        <Flex>
          <Spacer />
          <Link href="#">Lupa password?</Link>
        </Flex>
      </Box>
    </VStack>
  );
};

export const LanguageSelector = () => {
  return (
    <>
      <HStack divider={<StackDivider />}>
        <Button colorScheme="whiteAlpha" variant="ghost" size={"xs"} isActive>
          ID
        </Button>
        <Button colorScheme="whiteAlpha" variant="ghost" size={"xs"}>
          EN
        </Button>
      </HStack>
    </>
  );
};

const DesktopNav = () => {
  const linkColor = "white";
  const linkHoverColor = "gray.200";
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
      _hover={{ bg: useColorModeValue("#E6F3FF", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#246ca8" }}
            fontWeight={500}
            color={"gray.800"}
          >
            {label}
          </Text>
          <Text fontSize={"sm"} color={"gray.500"}>
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
          <Icon color={"#246ca8"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }} mb={"60px"}>
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
          color={"gray.200"}
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
            color={"gray.200"}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box
                color={"gray.200"}
                as="a"
                key={child.label}
                py={2}
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
