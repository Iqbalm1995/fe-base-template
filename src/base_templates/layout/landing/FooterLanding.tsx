import { ReactNode } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import logoBjbWhite from "../../../../public/img/logo-bjb-white.png";
import logoOjk from "../../../../public/img/ojk.png";
import logoLps from "../../../../public/img/lps.png";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { mainColor, PaddingLanding } from "@/constants/MasterConstant";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={600} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function FooterLanding() {
  return (
    <Box
      bg={useColorModeValue("#1b517e", "gray.900")}
      //   bg={"#1b517e"}
      px={PaddingLanding}
      //   bgGradient={"linear(to-r, #1b517e, #063154)"}
      color={useColorModeValue("white", "gray.200")}
    >
      <Container as={Stack} maxW={"container.xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
          mb={8}
        >
          <Stack spacing={5}>
            <Box width={"100px"}>
              <Image src={logoBjbWhite} alt={"Bank bjb"} />
            </Box>
            <Text fontSize={"sm"}>Copyright © 2024 bank bjb</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Kantor Pusat bank bjb</ListHeader>
            <Box as="text">Menara bank bjb Divisi Corporate Secretary</Box>
            <Box as="text">Jl.Naripan No. 12-14 Bandung - 40111</Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Kontak bank bjb</ListHeader>
            <Box as="text">Telp : 022 - 4234868</Box>
            <Box as="text">Fax : 022 - 4206099</Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Tautan</ListHeader>
            <Box as="text">bjb Call 14049</Box>
            <Box as="text">Pengaduan Nasabah</Box>
            <Box as="a" href={"https://eproc.bankbjb.co.id/"}>
              E-proc bank bjb
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow us</ListHeader>
            <HStack>
              <Box as={"a"} href={"https://www.facebook.com/bankbjb/"}>
                <FaFacebook />
              </Box>
              <Box as={"a"} href={"https://twitter.com/infobankbjb?lang=en"}>
                <FaXTwitter />
              </Box>
              <Box
                as={"a"}
                href={
                  "https://www.youtube.com/channel/UCqIQe66udrm49l8kjCtVB5g"
                }
              >
                <FaYoutube />
              </Box>
              <Box as={"a"} href={"https://www.instagram.com/bankbjb/?hl=en"}>
                <FaInstagram />
              </Box>
              <Box as={"a"} href={"https://www.tiktok.com/@infobankbjb"}>
                <FaTiktok />
              </Box>
            </HStack>
          </Stack>
        </SimpleGrid>
        <Divider borderColor={"#0B79CA"} />
        <FooterOjkLps />
      </Container>
    </Box>
  );
}

export const FooterOjkLps = () => {
  return (
    <Box mt={6}>
      <HStack spacing={6}>
        <Box>
          <Flex width={"70px"}>
            <Image src={logoOjk} alt={"Bank bjb"} />
          </Flex>
        </Box>
        <Box>
          <Flex width={"70px"}>
            <Image src={logoLps} alt={"Bank bjb"} />
          </Flex>
        </Box>
        <Box>
          <Text fontSize={"small"}>
            bank bjb Berizin dan Diawasi oleh OJK | bank bjb merupakan peserta
            penjamin LPS
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export const FooterAdmin = () => {
  return (
    <Box bg={mainColor} color={"white"} px={PaddingLanding} py={3}>
      {/* <Container as={Stack} maxW={"6xl"} py={6}> */}
      <Box>
        <HStack spacing={6}>
          <Box>
            <Flex width={"60px"}>
              <Image src={logoOjk} alt={"Bank bjb"} />
            </Flex>
          </Box>
          <Box>
            <Flex width={"60px"}>
              <Image src={logoLps} alt={"Bank bjb"} />
            </Flex>
          </Box>
          <Box>
            <Text fontSize={"small"}>
              bank bjb Berizin dan Diawasi oleh OJK | bank bjb merupakan peserta
              penjamin LPS
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Text fontSize={"small"}>Copyright © 2024 bank bjb</Text>
          </Box>
        </HStack>
      </Box>
      {/* </Container> */}
    </Box>
  );
};
