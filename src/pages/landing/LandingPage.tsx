import FooterLanding from "@/base_templates/layout/landing/FooterLanding";
import LayoutLanding from "@/base_templates/layout/landing/LayoutLanding";
import { ReactNode, useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import ButtonSignatureIcon1, {
  ButtonSignature1,
} from "@/base_templates/components/SignatureComponents";
import HeadTittleWeb from "@/base_templates/components/HeadTittleWeb";

const LandingPage = () => {
  return (
    <LayoutLanding>
      <HeadTittleWeb tittlePage={""} />
      <HeadingContentLanding />
      <MiddleContentLanding />
      <MiddleContentLanding2 />
      <MiddleContentLanding3 />
      <FooterLanding />
    </LayoutLanding>
  );
};

const HeadingContentLanding = () => {
  return (
    <>
      <Flex
        pos={"relative"}
        h={{ base: "140vh", sm: "140vh", md: "120vh", lg: "110vh" }} // Responsive heights for different screen sizes
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
          bgGradient="linear(to-b, rgba(17, 17, 17, 0.2) 0%, rgba(17, 17, 17, 0.9) 100%)"
          // bg={"red"}
        >
          <Center>
            {/* Your content here */}
            {/* <HeaderContent1 /> */}

            <Container as={Stack} maxW={"container.xl"}>
              <Grid
                templateColumns="repeat(12, 1fr)"
                gap={5}
                // w={"85%"}
                w={"full"}
                h={"full"}
                pt={{ base: "90px", md: "50px" }}
                // bg={"yellow"}
              >
                <GridItem
                  w="full"
                  colSpan={{ base: 12, sm: 12, md: 12, lg: 8 }}
                >
                  <Flex
                    justifyContent={"start"}
                    alignItems={"center"}
                    h={"70vh"}
                    color={"white"}
                    // bg={"red"}
                  >
                    <VStack
                      pt={{
                        base: "120px",
                        sm: "120px",
                        md: "150px",
                        lg: "150px",
                      }}
                      spacing={8}
                    >
                      <Heading
                        as="h2"
                        size="xl"
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
                    </VStack>
                  </Flex>
                </GridItem>
                <GridItem
                  w="full"
                  colSpan={{ base: 12, sm: 12, md: 12, lg: 4 }}
                >
                  <Flex
                    justifyContent={"center"}
                    h={"full"}
                    // bg={"red"}
                  ></Flex>
                </GridItem>
                <GridItem
                  w="full"
                  colSpan={12}
                  // bg={"green"}
                >
                  {/* <StaticHighlightLanding /> */}
                </GridItem>
              </Grid>
            </Container>
          </Center>
        </Box>
      </Flex>
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
        px={{ base: 0, sm: 0, md: "50px" }}
        // py={5}
        mb={{ base: 2, md: 5 }}
        // bg={"red"}
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
    nominalStatic: "Rp 100T",
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
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          {data.nominalStatic}
        </Text>
        <Box fontSize={"sm"}>{data.desc}</Box>
      </Flex>
    </>
  );
};

interface cardLandingProps {
  label: string;
  imgUrl: string;
}

const BaseContentBodyLanding = ({
  tittleContent,
  children,
}: {
  tittleContent: string;
  children: ReactNode;
}) => {
  return (
    <>
      <Container as={Stack} maxW={"container.xl"} py={10}>
        <VStack w={"full"} gap={8}>
          <Flex justifyContent={"flex-start"} w={"full"}>
            <Heading as="h3" size="lg" color={"secondary.900"}>
              {tittleContent}
            </Heading>
          </Flex>
          <Flex justifyContent={"flex-start"} w={"full"}>
            {children}
          </Flex>
        </VStack>
      </Container>
    </>
  );
};

const BaseBackgoundContentBodyLanding = ({
  tittleContent,
  children,
}: {
  tittleContent: string;
  children: ReactNode;
}) => {
  return (
    <>
      <Container as={Stack} maxW={"container.xl"} py={10}>
        <VStack w={"full"} gap={8}>
          <Flex justifyContent={"flex-start"} w={"full"}>
            <Heading as="h3" size="lg" color={"white"}>
              {tittleContent}
            </Heading>
          </Flex>
          <Flex justifyContent={"flex-start"} w={"full"}>
            {children}
          </Flex>
        </VStack>
      </Container>
    </>
  );
};

const MiddleContentLanding = () => {
  const dataContent: cardLandingProps[] = [
    {
      label: "IBC Registration",
      imgUrl: "/img/business/new-business-images06.jpg",
    },
    {
      label: "Virtual Account Debit",
      imgUrl: "/img/business/new-business-images02.jpg",
    },
    {
      label: "Bank Bjb | Digi SMB",
      imgUrl: "/img/business/new-business-images05.jpg",
    },
  ];

  const dataTag: string[] = ["All", "Produk", "Penawaran", "Promo"];
  return (
    <>
      <BaseContentBodyLanding tittleContent={"Untuk Anda"}>
        <Grid templateColumns="repeat(12, 1fr)" w={"full"} gap={8}>
          <GridItem w={"full"} colSpan={{ base: 12, sm: 12, md: 10, lg: 10 }}>
            <HStack>
              {dataTag.map((t, idx) => (
                <ButtonSignature1
                  textStr={t}
                  colorScheme={idx == 0 ? "secondary" : "secondary"}
                  _hover={{
                    bg: "yellow.400",
                    color: "white",
                  }}
                  variant={idx == 0 ? "solid" : "outline"}
                  size={"sm"}
                  key={idx}
                  px={5}
                />
              ))}
            </HStack>
          </GridItem>
          <GridItem w={"full"} colSpan={{ base: 12, sm: 12, md: 2, lg: 2 }}>
            <Flex
              justifyContent={"flex-end"}
              w={"full"}
              h={"full"}
              alignItems={"center"}
            >
              <Button
                colorScheme={"secondary"}
                variant={"link"}
                rightIcon={<ArrowForwardIcon />}
              >
                Selengkapnya
              </Button>
            </Flex>
          </GridItem>
          {dataContent.map((c, idx) => (
            <GridItem
              w={"full"}
              colSpan={{ base: 12, sm: 6, md: 4, lg: 4 }}
              key={idx}
            >
              <CustomCardLanding data={c} />
            </GridItem>
          ))}
        </Grid>
      </BaseContentBodyLanding>
    </>
  );
};

const CustomCardLanding = ({ data }: { data: cardLandingProps }) => {
  const RoundedConst: string = "2xl";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      w={"full"}
      h={400}
      rounded={RoundedConst}
      boxShadow={"md"}
      cursor={"pointer"}
      pos={"relative"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      overflow="hidden" // Ensure the overlay doesn't extend beyond the box
      transition="transform 0.3s ease-in-out"
      transform={isHovered ? "translateY(-10px)" : "translateY(0)"}
      bg={"white"}
    >
      <Flex
        roundedTop={RoundedConst}
        w={"full"}
        h={250}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={`url(${data.imgUrl})`}
        alignItems={"center"}
        justifyContent={"center"}
      />
      <Box p={5} h={20}>
        <Heading as="h4" size="md" color={"secondary.900"}>
          {data.label}
        </Heading>
      </Box>
      <Box p={5}>
        <Text color={"gray.500"}>Kamis, 17 Agustus 2024 19.45</Text>
      </Box>
      <Box
        pos="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="rgba(0, 0, 0, 0.2)" // Transparent black color
        bgGradient="linear(to-b, rgba(0, 119, 254, 0.9) 0%, rgba(0, 50, 107, 0.9) 100%)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        rounded={RoundedConst}
        opacity={isHovered ? 1 : 0}
        transition="opacity 0.3s ease-in-out"
        p={5}
      >
        <VStack spacing={8} w={"full"}>
          <Flex w={"full"} justifyContent={"center"}>
            <Heading
              as="h4"
              size="md"
              color={"white"}
              textAlign={"center"}
              letterSpacing={1}
            >
              {data.label}
            </Heading>
          </Flex>
          <Flex w={"full"} justifyContent={"center"}>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme={"gray"}
              variant={"link"}
              size={"lg"}
              color={"white"}
            >
              Selengkapnya
            </Button>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

const MiddleContentLanding2 = () => {
  const dataTag: string[] = ["All", "Event", "Consult", "News"];
  const settings = {
    dots: false,
    arrows: false,
    // fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const RoundedConst: string = "xl";
  const [slider, setSlider] = useState<Slider | null>(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "20px" });
  const cards = [
    {
      title: "Digital Operating Capital",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "/img/business/corp-assets-004.jpg",
    },
    {
      title: "Strategy Advisor Data-Driven",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "/img/business/corp-assets-005.jpg",
    },
    {
      title: "Single SignOn Ecosystem",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "/img/business/corp-assets-006.jpg",
    },
  ];
  return (
    <>
      <BaseContentBodyLanding tittleContent={"Yang Baru"}>
        <Grid templateColumns="repeat(12, 1fr)" w={"full"} gap={8}>
          <GridItem w={"full"} colSpan={{ base: 12, sm: 12, md: 10, lg: 10 }}>
            <HStack>
              {dataTag.map((t, idx) => (
                <ButtonSignature1
                  textStr={t}
                  colorScheme={idx == 0 ? "secondary" : "secondary"}
                  _hover={{
                    bg: "yellow.400",
                    color: "white",
                  }}
                  variant={idx == 0 ? "solid" : "outline"}
                  size={"sm"}
                  key={idx}
                  px={5}
                />
              ))}
            </HStack>
          </GridItem>
          <GridItem w={"full"} colSpan={{ base: 12, sm: 12, md: 2, lg: 2 }}>
            <Flex
              justifyContent={"flex-end"}
              w={"full"}
              h={"full"}
              alignItems={"center"}
            >
              <Button
                colorScheme={"secondary"}
                variant={"link"}
                rightIcon={<ArrowForwardIcon />}
              >
                Selengkapnya
              </Button>
            </Flex>
          </GridItem>

          <GridItem w={"full"} colSpan={{ base: 12, sm: 12, md: 12, lg: 12 }}>
            <Box
              position={"relative"}
              height={{ base: "380px", sm: "380px", md: "450px", lg: "550px" }}
              width={"full"}
              overflow={"hidden"}
            >
              {/* CSS files for react-slick */}
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />
              {/* Left Icon */}
              <ButtonSignatureIcon1
                aria-label="left-arrow"
                variant="solid"
                position="absolute"
                left={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
              >
                <BiLeftArrowAlt size="40px" />
              </ButtonSignatureIcon1>
              {/* Right Icon */}
              <ButtonSignatureIcon1
                aria-label="right-arrow"
                variant="solid"
                position="absolute"
                right={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickNext()}
              >
                <BiRightArrowAlt size="40px" />
              </ButtonSignatureIcon1>
              {/* Slider */}
              <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                  <Flex
                    key={index}
                    w={"full"}
                    height={{
                      base: "380px",
                      sm: "380px",
                      md: "450px",
                      lg: "550px",
                    }}
                    overflow="hidden"
                  >
                    <Center w={"full"} h={"full"}>
                      <Flex
                        bg={"white"}
                        h={"95%"}
                        w={"95%"}
                        borderWidth={1}
                        rounded={RoundedConst}
                        boxShadow={"lg"}
                      >
                        <Grid
                          templateColumns="repeat(2, 1fr)"
                          w={"full"}
                          h={"full"}
                          gap={0}
                        >
                          <GridItem
                            w={"full"}
                            colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            p={70}
                          >
                            <Flex w={"full"} align="center" justify="center">
                              {/* Content for the left side */}
                              <VStack w={"full"} spacing={5}>
                                <Flex w={"full"} justifyContent={"start"}>
                                  <Heading
                                    as="h4"
                                    size="md"
                                    color={"secondary.900"}
                                  >
                                    {card.title}
                                  </Heading>
                                </Flex>
                                <Flex w={"full"} justifyContent={"start"}>
                                  <Text color={"gray.500"}>
                                    Kamis, 17 Agustus 2024 19.45
                                  </Text>
                                </Flex>
                                <Flex w={"full"} justifyContent={"start"}>
                                  <Text color={"gray.800"}>{card.text}</Text>
                                </Flex>
                                <Flex w={"full"} justifyContent={"start"}>
                                  <Button
                                    rightIcon={<ArrowForwardIcon />}
                                    colorScheme={"secondary"}
                                    variant={"link"}
                                    size={"lg"}
                                  >
                                    Selengkapnya
                                  </Button>
                                </Flex>
                              </VStack>
                            </Flex>
                          </GridItem>
                          <GridItem
                            w={"full"}
                            colSpan={{ base: 2, sm: 2, md: 1, lg: 1 }}
                          >
                            <Box
                              w={"full"}
                              h={"full"}
                              backgroundPosition="center"
                              backgroundRepeat="no-repeat"
                              backgroundSize="cover"
                              backgroundColor="#ECF6FF"
                              backgroundImage={`url(${card.image})`}
                              roundedRight={RoundedConst}
                            />
                          </GridItem>
                        </Grid>
                      </Flex>
                    </Center>
                  </Flex>
                ))}
              </Slider>
            </Box>
          </GridItem>
        </Grid>
      </BaseContentBodyLanding>
    </>
  );
};

interface ContentTextCard {
  tittle: string;
  desc: string;
  link: string;
}

const MiddleContentLanding3 = () => {
  const RoundedConst: string = "2xl";
  const [isHovered, setIsHovered] = useState(false);

  const dataContent: ContentTextCard[] = [
    {
      tittle: "Lorem Ipsum Dolor 1.",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam animi excepturi dolorem, voluptatum corrupti obcaecati consequuntur, beatae quia a blanditiis et ut doloremque culpa eos ea molestiae dolore nesciunt exercitationem.",
      link: "#",
    },
    {
      tittle: "Lorem Ipsum Dolor 2.",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam animi excepturi dolorem, voluptatum corrupti culpa eos ea molestiae dolore nesciunt exercitationem.",
      link: "#",
    },
    {
      tittle: "Lorem Ipsum Dolor 3.",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam animi excepturi dolorem, voluptatum corrupti obcaecati consequuntur, beatae quia a blanditiis et.",
      link: "#",
    },
  ];

  return (
    <>
      <Flex
        bgImage={"/img/currency-bg.png"}
        backgroundPosition={"center"}
        objectFit={"cover"}
      >
        <BaseBackgoundContentBodyLanding tittleContent={"Bantuan?"}>
          <Grid templateColumns="repeat(12, 1fr)" w={"full"} gap={8}>
            <GridItem w={"full"} colSpan={12}>
              <Text color={"white"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur, odio.
              </Text>
            </GridItem>
            {dataContent.map((dt, idx) => (
              <GridItem
                w={"full"}
                colSpan={{ base: 12, sm: 12, md: 3, lg: 3 }}
                key={idx}
              >
                <CardBasicHighlight data={dt} />
              </GridItem>
            ))}
            <GridItem w={"full"} colSpan={{ base: 12, sm: 12, md: 3, lg: 3 }}>
              <Box
                w={"full"}
                h={420}
                rounded={RoundedConst}
                boxShadow={"md"}
                cursor={"pointer"}
                pos={"relative"}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                overflow="hidden" // Ensure the overlay doesn't extend beyond the box
                transition="transform 0.3s ease-in-out"
                transform={isHovered ? "translateY(-10px)" : "translateY(0)"}
                bg={"secondary.500"}
                p={9}
              >
                <Flex
                  w={"full"}
                  h={"full"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme={"secondary"}
                    variant={"link"}
                    size={"lg"}
                    color={"white"}
                  >
                    Lebih Lengkap
                  </Button>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </BaseBackgoundContentBodyLanding>
      </Flex>
    </>
  );
};

const CardBasicHighlight = ({ data }: { data: ContentTextCard }) => {
  const RoundedConst: string = "2xl";
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      w={"full"}
      h={420}
      rounded={RoundedConst}
      boxShadow={"md"}
      cursor={"pointer"}
      pos={"relative"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      overflow="hidden" // Ensure the overlay doesn't extend beyond the box
      transition="transform 0.3s ease-in-out"
      transform={isHovered ? "translateY(-10px)" : "translateY(0)"}
      bg={"white"}
      p={9}
    >
      <VStack w={"full"} h={"full"} spacing={5} justify={"start"}>
        <Flex w={"full"}>
          <Heading as="h4" size="md" color={"secondary.900"}>
            {data.tittle}
          </Heading>
        </Flex>
        <Flex w={"full"}>
          <Text color={"gray.900"}>{data.desc}</Text>
        </Flex>
        <Spacer />
        <Flex w={"full"}>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme={"secondary"}
            variant={"link"}
            size={"lg"}
          >
            Selengkapnya
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default LandingPage;
