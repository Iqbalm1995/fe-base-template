import SignatureLineColor from "@/components/BottomLineSignature";
import LandingTextHeading from "@/components/LandingTextHeading";
import { PaddingLanding } from "@/constants/MasterConstant";
import { truncateText } from "@/helper/MasterHelper";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Circle,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Spacer,
  Stack,
  Text,
  Tooltip,
  VStack,
  chakra,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

const FrontLandingFeaturedProduct = () => {
  return (
    <Box mx={"auto"} bgColor={"white"} px={PaddingLanding}>
      <Box
        my={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={"full"}
            zIndex="2"
            my="2%"
            // bg={"blue"}
          >
            {/* Content Here */}
            <Stack spacing={3} py={3}>
              <Heading lineHeight={1} fontWeight={600} fontSize={"4xl"}>
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    // bg: "red.400",
                    zIndex: -1,
                  }}
                >
                  Layanan
                </Text>
              </Heading>
              <Text as={"p"}>Lorem Ipsum Dolor Sit amet</Text>
            </Stack>
            <Grid
              templateColumns="repeat(12, 1fr)"
              gap={{ base: 5, md: 10 }}
              w={"full"}
              p={{ base: 0, md: 5 }}
              pb={5}
            >
              {DataHighLightProduct.slice(0, 4).map((itemCard, index) => (
                <GridItem key={index} colSpan={{ base: 12, md: 6 }}>
                  <CardProduct key={index} data={itemCard} />
                </GridItem>
              ))}
            </Grid>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(#AFDCFF 2px, transparent 1px)",
                "radial(#AFDCFF 2px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

interface CardProduct {
  title: string;
  desc: string;
  link: string;
  imageURL: string;
}

const DataHighLightProduct: Array<CardProduct> = [
  {
    title: "Pendaftaran IBC",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, culpa ullam saepe veniam sapiente cupiditate explicabo voluptatem libero eaque eos perferendis, repellendus mollitia cumque alias ratione iure obcaecati non sed!",
    link: "/form/registration-ibc/",
    imageURL: "/img/business/corp-assets-003.jpg",
  },
  {
    title:
      "Permohonan Pembukaan Surat Kredit Berdokumen Dalam Negeri (PPSKBDN)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, culpa ullam saepe veniam sapiente cupiditate explicabo voluptatem libero eaque eos perferendis, repellendus mollitia cumque alias ratione iure obcaecati non sed!",
    link: "#",
    imageURL: "/img/business/corp-assets-002.jpg",
  },
  {
    title: "Permohonan Pembukaan Kredit Berdokumen (PPLC)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, culpa ullam saepe veniam sapiente cupiditate explicabo voluptatem libero eaque eos perferendis, repellendus mollitia cumque alias ratione iure obcaecati non sed!",
    link: "#",
    imageURL: "/img/business/corp-assets-006.jpg",
  },
  {
    title: "Pembukaan Rekening Non Perorangan",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, culpa ullam saepe veniam sapiente cupiditate explicabo voluptatem libero eaque eos perferendis, repellendus mollitia cumque alias ratione iure obcaecati non sed!",
    link: "#",
    imageURL: "/img/business/corp-assets-004.jpg",
  },
  {
    title: "Permohonan Penggunaan bjb Garansi Bank Online",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus mollitia cumque alias ratione iure obcaecati non sed!",
    link: "#",
    imageURL: "/img/business/corp-assets-004.jpg",
  },
  {
    title: "Formulir Virtual Account Update Offline & Online",
    desc: "Lorem ipsum dolor sit!",
    link: "#",
    imageURL: "/img/business/corp-assets-004.jpg",
  },
  {
    title: "Formulir Virtual Account Service Agreement Offline & Online",
    desc: "Lorem ipsum dolor sit!",
    link: "#",
    imageURL: "/img/business/corp-assets-004.jpg",
  },
  {
    title: "Form Pembukaan Custody",
    desc: "Lorem ipsum dolor sit!",
    link: "#",
    imageURL: "/img/business/corp-assets-004.jpg",
  },
];

function CardProduct({ data }: { data: CardProduct }) {
  const TextDescTruncade = useBreakpointValue({
    base: 60,
    md: 100,
  });
  return (
    // <Flex w="full" alignItems="center" justifyContent="center">
    <>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        // maxW="sm"
        borderWidth="1px"
        roundedTop="lg"
        shadow="2xl"
        position="relative"
        // h={{ base: "full", md: "530px" }}
        h={{ base: "full", md: "full" }}
      >
        <Flex
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={`url(${data.imageURL})`}
          // alt={`Picture of ${data.title}`}
          roundedTop="lg"
          objectFit={"cover"}
          w={"full"}
          h={{ base: "20vh", md: "20vh", lg: "35vh" }}
          pos={"relative"}
        >
          <Box
            pos="absolute"
            top="0"
            left="0"
            w="full"
            h="full"
            bgGradient="linear(to-b, rgba(17, 17, 17, 0) 0%, rgba(17, 17, 17, 0.85) 100%)"
            // bg={"red"}
          />
        </Flex>

        <Box p={5}>
          <VStack alignItems={"start"} w={"full"} spacing={4}>
            <Flex alignContent="center">
              <Text fontSize={{ base: 18, md: 23 }} fontWeight={600}>
                {data.title}
              </Text>
            </Flex>
            <Flex alignContent="center">
              <VStack>
                <Text>{truncateText(data.desc, TextDescTruncade || 100)}</Text>
              </VStack>
            </Flex>
            <Flex alignContent="center">
              <Button
                rightIcon={<ArrowForwardIcon />}
                size={"sm"}
                colorScheme={"bjb_color_theme"}
              >
                Daftar Sekarang
              </Button>
            </Flex>
          </VStack>
        </Box>
      </Box>
      <SignatureLineColor />
    </>
    // </Flex>
  );
}

export default FrontLandingFeaturedProduct;
