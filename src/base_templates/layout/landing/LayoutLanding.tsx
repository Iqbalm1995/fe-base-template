import { ReactNode } from "react";
import WithSubnavigation from "@/components/Navbar";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BottomLineSignature } from "@/base_templates/components/BottomLineSignature";
import TopNewsHeadine from "@/base_templates/components/TopNewsHeadine";
import TopNavigationLanding from "./TopNavigationLanding";

const LayoutLanding = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <TopNewsHeadine />
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
        <TopNavigationLanding />
        <HeadingContentLanding />
        {children}
      </Box>
      <BottomLineSignature />
    </>
  );
};

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
                <Flex
                  justifyContent={"start"}
                  alignItems={"center"}
                  h={"full"}
                  color={"white"}
                >
                  <VStack
                    pt={{ base: 0, sm: 0, md: "150", lg: "150" }}
                    spacing={10}
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
                    ></Flex>
                  </VStack>
                </Flex>
              </GridItem>
              <GridItem w="full" colSpan={{ base: 12, sm: 12, md: 12, lg: 4 }}>
                <Flex
                  justifyContent={"center"}
                  h={"full"}
                  pt={{ base: 0, sm: 0, md: "85", lg: "85" }}
                  // bg={"red"}
                ></Flex>
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

export default LayoutLanding;
