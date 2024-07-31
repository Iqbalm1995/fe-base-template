"use client";

import { PaddingLanding } from "@/constants/MasterConstant";
import { truncateText } from "@/helper/MasterHelper";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function MidContentLanding() {
  const TextDescTruncade = useBreakpointValue({
    base: 999,
    md: 999,
  });
  return (
    <Box
      bgImage={"./img/currency-bg.png"}
      backgroundPosition={"center"}
      objectFit={"cover"}
      px={PaddingLanding}
      color={"white"}
      py={4}
    >
      <Grid templateColumns="repeat(12, 1fr)" gap={3} py={{ base: 5, md: 10 }}>
        <GridItem colSpan={{ base: 12, md: 9 }}>
          <Stack spacing={5}>
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
                Segera Daftar
              </Text>
            </Heading>
            <Text color={"white"}>
              Daftar sekarang di Portal dan mulailah eksplorasi berbagai layanan
              bjb yang kami tawarkan! Tidak punya rekening bjb? Jangan khawatir,
              itu bukan masalah. Dengan mendaftar, Anda akan mendapatkan akses
              ke banyak penawaran menarik yang dirancang khusus untuk memenuhi
              kebutuhan bisnis Anda.
            </Text>
          </Stack>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 3 }} h={"full"}>
          <Flex h={"full"} justifyContent={"center"} alignItems={"center"}>
            <Button
              //   colorScheme={"gray"}
              rightIcon={<ArrowForwardIcon />}
              // color={"white"}
              // _hover={{ color: "white" }}
              colorScheme={"whiteAlpha"}
              variant={"solid"}
              size={{ base: "md", md: "lg" }}
            >
              Daftar Sekarang
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
