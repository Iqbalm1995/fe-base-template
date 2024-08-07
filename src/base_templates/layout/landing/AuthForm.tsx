import { ButtonSignature1 } from "@/base_templates/components/SignatureComponents";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import * as Yup from "yup";

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
                  <Button size={"sm"} variant={"link"}>
                    Lupa password?
                  </Button>
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
          <Link href="/registration">
            <Button pl={2} variant={"link"} colorScheme={"secondary"}>
              Daftar Sekarang
            </Button>
          </Link>
        </Flex>
      </Box>
    </VStack>
  );
};

export default AuthPanelModal;
