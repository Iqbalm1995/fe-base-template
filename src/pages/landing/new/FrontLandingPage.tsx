import HeaderContent1 from "@/components/HeaderContent1";
import LayoutLanding from "@/components/LayoutLandingPage";
import {
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
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import MidContentLanding from "./FrontLandingMidContent";
import { BsBox2HeartFill } from "react-icons/bs";
import FrontLandingFeaturedProduct from "./FrontLandingFeaturedProduct";
import { BorderRadiusConst, PaddingLanding } from "@/constants/MasterConstant";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FiLogIn } from "react-icons/fi";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import Link from "next/link";
import SignatureLineColor from "@/components/BottomLineSignature";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";

const FrontLandingPage = () => {
  return (
    <LayoutLanding>
      {/* <HeaderContent1 /> */}
      <HeadingContentLanding />
      <MidContentLanding />
      <MidContentCardLanding />
      <FrontLandingFeaturedProduct />
      {/* <BottomHighlightLanding /> */}
    </LayoutLanding>
  );
};

interface cardLandingProps {
  label: string;
  imgUrl: string;
}

const MidContentCardLanding = () => {
  const dataContent: cardLandingProps[] = [
    {
      label: "Digital Operating Capital",
      imgUrl: "/img/business/new-business-images06.jpg",
    },
    {
      label: "Strategy Advisor Data-Driven",
      imgUrl: "/img/business/new-business-images02.jpg",
    },
    {
      label: "Single SignOn Ecosystem",
      imgUrl: "/img/business/new-business-images05.jpg",
    },
    {
      label: "Finance Manager Corporations",
      imgUrl: "/img/business/new-business-images03.jpg",
    },
  ];

  return (
    <Box px={PaddingLanding} py={4} w={"full"}>
      <Grid templateColumns="repeat(12, 1fr)" gap={10} py={{ base: 5, md: 10 }}>
        {dataContent.map((data, idx) => (
          <GridItem colSpan={{ base: 12, md: 3 }} key={idx}>
            <Flex
              pos={"relative"}
              zIndex={1}
              bgGradient={"linear(to-b, #1b517e, #063154)"}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(${data.imgUrl})`}
              borderRadius={BorderRadiusConst}
              h={"170px"}
              color={"white"}
              p={10}
              boxShadow={"lg"}
            >
              <Flex
                pos={"absolute"}
                top="0"
                left="0"
                w="full"
                h="full"
                bgGradient="linear(to-b, rgba(8, 38, 64, 0.5) 0%, rgba(8, 38, 64, 1) 90%)"
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={BorderRadiusConst}
              >
                <Text textAlign={"center"} fontWeight={600} fontSize={"2xl"}>
                  {data.label}
                </Text>
              </Flex>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

const BottomHighlightLanding = () => {
  const imageData: string[] = [
    "/img/bjb/content-images-01.jpeg",
    "/img/bjb/content-images-02.jpg",
    "/img/bjb/content-images-03.jpg",
    "/img/bjb/content-images-04.jpg",
    "/img/bjb/content-images-05.jpg",
    "/img/bjb/content-images-06.jpg",
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <Box px={PaddingLanding} py={4} w={"full"}>
      <Slider {...settings}>
        {imageData.map((data, idx) => (
          <Box h={"350px"} p={4} key={idx}>
            <Flex
              key={idx}
              h={"full"}
              w={"full"}
              p={4}
              bgGradient={"linear(to-b, #1b517e, #063154)"}
              // bg={"#1b517e"}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              backgroundImage={`url(${data})`}
              borderRadius={BorderRadiusConst}
            >
              {/* <Image src={data} alt="Dan Abramov" /> */}
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

interface MitraHighlight {
  alt: string;
  imgSrc: string;
}

const DataMitraHighlight: MitraHighlight[] = [
  {
    alt: "Mitra 1",
    imgSrc: "/img/companies/Company-removebg-preview.png",
  },
  {
    alt: "Mitra 2",
    imgSrc: "/img/companies/Company-removebg-preview.png",
  },
  {
    alt: "Mitra 3",
    imgSrc: "/img/companies/Company-removebg-preview.png",
  },
  {
    alt: "Mitra 4",
    imgSrc: "/img/companies/Company-removebg-preview.png",
  },
];

const HeadingContentLanding = () => {
  return (
    <>
      <Flex
        pos={"relative"}
        h={{ base: "1830px", md: "155vh", lg: "960px" }} // Responsive heights for different screen sizes
        w={"full"}
        bgGradient={"linear(to-r, #1b517e, #063154)"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`url(./img/bjb-head-image.jpg)`}
        alignItems={"center"}
        justifyContent={"center"}
        mt={"-60px"}
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
        >
          <Center>
            {/* Your content here */}
            {/* <HeaderContent1 /> */}
            <Grid
              templateColumns="repeat(12, 1fr)"
              gap={5}
              w={"85%"}
              h={"full"}
              pt={{ base: "90px", md: "50px" }}
              // bg={"yellow"}
            >
              <GridItem w="full" colSpan={{ base: 12, sm: 12, md: 12, lg: 8 }}>
                <Flex justifyContent={"start"} h={"full"} color={"white"}>
                  <VStack
                    pt={{ base: 0, sm: 0, md: "90px", lg: "90px" }}
                    spacing={10}
                    // bg={"red"}
                  >
                    <Heading
                      as="h2"
                      size="2xl"
                      color={"white"}
                      lineHeight={"1.4"}
                      // bg={"blue"}
                      w={"full"}
                    >
                      Achieve Greater Efficiency <br />
                      Fleksibilitas Corporate Bisnis Anda
                    </Heading>
                    <Text>
                      Pelayanan perbankan lengkap untuk kebutuhan bisnis Anda
                      kini lebih mudah diakses dengan Portal, meningkatkan
                      efisiensi dan fleksibilitas operasional.
                    </Text>
                    <Flex
                      w={{
                        base: "320px",
                        sm: "320px",
                        md: "400px",
                        lg: "full",
                      }}
                      h={"150px"}
                    >
                      <VStack alignItems={"start"} spacing={5} w={"full"}>
                        <Text fontWeight={600}>Partner terpecaya bank bjb</Text>
                        <Marquee
                          play={false}
                          speed={20}
                          style={{ alignItems: "start" }}
                          gradient={false}
                        >
                          {DataMitraHighlight.map((data, index) => (
                            <Image
                              key={index}
                              src={data.imgSrc}
                              alt={data.alt}
                              h={"70px"}
                              px={10}
                              opacity={0.8}
                            />
                          ))}
                        </Marquee>
                      </VStack>
                    </Flex>
                  </VStack>
                </Flex>
              </GridItem>
              <GridItem w="full" colSpan={{ base: 12, sm: 12, md: 12, lg: 4 }}>
                <Flex
                  justifyContent={"center"}
                  h={"full"}
                  pt={{ base: 0, sm: 0, md: "70px", lg: "70px" }}
                  // bg={"red"}
                >
                  <AuthenticatnLanding />
                </Flex>
              </GridItem>
              <GridItem
                w="full"
                colSpan={12}
                // bg={"green"}
              >
                <StaticHighlightLanding />
              </GridItem>
            </Grid>
          </Center>
        </Box>
      </Flex>
    </>
  );
};

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

const AuthenticatnLanding = () => {
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
    <>
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
    </>
  );
};

const StaticHighlightLanding = () => {
  return (
    <>
      <Box
        mx={"auto"}
        color={"white"}
        // bgColor={"white"}
        // bgGradient={"linear(to-r, #1b517e, #063154)"}
        // color={useColorModeValue("white", "gray.200")}
        // px={PaddingLanding}
        py={5}
        mb={{ base: 2, md: 5 }}
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {StaticData.map((data, index) => (
            <GridItem w="100%" key={index}>
              <StaticDetail data={data} key={index} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

interface StatisticPercentageDetail {
  nominalStatic: string;
  desc: string;
}

const StaticData: StatisticPercentageDetail[] = [
  {
    nominalStatic: "80%",
    desc: "Transaksi digital skala besar di Indonesia didukung oleh bank bjb, meningkatkan efisiensi dan kemudahan bagi pelaku bisnis.",
  },
  {
    nominalStatic: "Rp 271T",
    desc: "Angka transaksi harian yang terjadi melalui bank bjb.",
  },
  {
    nominalStatic: "75%",
    desc: "Kontribusi bank bjb dalam pembayaran korporasi mitra memperkuat hubungan bisnis dan meningkatkan kepercayaan mitra.",
  },
];

const StaticDetail = ({ data }: { data: StatisticPercentageDetail }) => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        bgColor={"blackAlpha.600"}
        h={"full"}
        p={5}
        rounded={"xl"}
      >
        <Text fontSize={"5xl"} fontWeight={"bold"}>
          {data.nominalStatic}
        </Text>
        <Box fontSize={"sm"}>{data.desc}</Box>
      </Flex>
    </>
  );
};

export default FrontLandingPage;
