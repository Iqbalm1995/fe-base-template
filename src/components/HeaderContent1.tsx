import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
  Grid,
  GridItem,
  VStack,
  Image,
  SimpleGrid,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Stack,
  Spacer,
  Link,
} from "@chakra-ui/react";
import CaptionCarousel from "./HeadSliders";
import SignatureLineColor, {
  SignatureLineColorWithBorderRadius,
} from "./BottomLineSignature";

import * as Yup from "yup";
import { useFormik } from "formik";
import React from "react";
import { FiLogIn } from "react-icons/fi";
import { useRouter } from "next/router";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { BorderRadiusConst } from "@/constants/MasterConstant";

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

export default function HeaderContent1() {
  const [show, setShow] = React.useState(false);
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
    <Box py={5} mx={"auto"} bgColor={"transparent"} px={12}>
      <Grid templateColumns="repeat(12, 1fr)" gap={5}>
        <GridItem w="full" colSpan={{ base: 12, sm: 12, md: 12, lg: 8 }}>
          <CaptionCarousel />
        </GridItem>
        <GridItem w="full" colSpan={{ base: 12, sm: 12, md: 12, lg: 4 }}>
          <Card h={500} boxShadow={"lg"}>
            <CardBody m={3}>
              <VStack width={"full"} spacing={3} align="stretch">
                <Box>
                  <Center>
                    <Flex width={"80px"} py={2}>
                      <Image src={"/img/logo-bjb.png"} alt="Bank bjb" />
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
                        <FormErrorMessage>
                          {formik.errors.username}
                        </FormErrorMessage>
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
                        <FormErrorMessage>
                          {formik.errors.password}
                        </FormErrorMessage>
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
            </CardBody>
            <SignatureLineColor />
          </Card>
        </GridItem>
      </Grid>
    </Box>
  );
}
