"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function SectionCardWP() {
  return (
    <Box p={4}>
      <Stack spacing={4} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Short heading
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Flex flexWrap="wrap" gridGap={6} py={5} justify="center" p={"50px"}>
        <Card
          heading={"Heading"}
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
          href={"#"}
        />
        <Card
          heading={"Heading"}
          icon={<Icon as={FcCollaboration} w={10} h={10} />}
          description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
          href={"#"}
        />
        <Card
          heading={"Heading"}
          icon={<Icon as={FcDonate} w={10} h={10} />}
          description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
          href={"#"}
        />
        <Card
          heading={"Heading"}
          icon={<Icon as={FcManager} w={10} h={10} />}
          description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
          href={"#"}
        />
        <Card
          heading={"Heading"}
          icon={<Icon as={FcAbout} w={10} h={10} />}
          description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
          href={"#"}
        />
      </Flex>
    </Box>
  );
}
