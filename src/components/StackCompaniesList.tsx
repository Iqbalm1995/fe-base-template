import { Box, Center, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";

import companyLogo from "../../public/img/companies/Company-removebg-preview.png";

const StackCompaniesList = () => {
  return (
    <Stack spacing={4} textAlign={"center"}>
      {/* <Heading fontSize={"3xl"}>This is the headline</Heading> */}
      <Text color={"gray.600"} fontSize={"xl"}>
        Trusted{" "}
        <Text as="b" color={"bjb_color_theme"}>
          2000+
        </Text>{" "}
        Companies
      </Text>
      <Box my={5}>
        <Wrap spacing="25px" justify="center">
          <WrapItem>
            <Center w="180px">
              <Image src={companyLogo} alt="Mitre" />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px">
              <Image src={companyLogo} alt="Mitre" />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px">
              <Image src={companyLogo} alt="Mitre" />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px">
              <Image src={companyLogo} alt="Mitre" />
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="180px">
              <Image src={companyLogo} alt="Mitre" />
            </Center>
          </WrapItem>
        </Wrap>
      </Box>
    </Stack>
  );
};

export default StackCompaniesList;
