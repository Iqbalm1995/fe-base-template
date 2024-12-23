import BreadcrumbAdmin, {
  AdminTittleBreadcrumb,
} from "@/base_templates/layout/admin/BreadcrumbAdmin";
import LayoutAdmin from "@/base_templates/layout/admin/LayoutAdmin";
import {
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const HeadPageName: AdminTittleBreadcrumb = {
  titlePage: "Color Palette",
  breadCrumbPath: ["Admin", "Template", "Color Palette"],
};

interface colorInterface {
  point: string;
  codeHex: string;
}

const primary: { [key: number]: string } = {
  50: "#6cabe0",
  100: "#4293d7",
  200: "#2d87d2",
  300: "#2979bd",
  400: "#246ca8",
  500: "#1b517e",
  600: "#123654",
  700: "#0e283f",
  800: "#091b2a",
  900: "#000000",
};

const secondary: { [key: number]: string } = {
  50: "#f2f8ff",
  100: "#cae3ff",
  200: "#9acaff",
  300: "#5da9ff",
  400: "#3795ff",
  500: "#0077fe",
  600: "#0065d7",
  700: "#0051ad",
  800: "#004593",
  900: "#00326b",
};

const gray: { [key: number]: string } = {
  50: "#f9fafa",
  100: "#f1f1f2",
  200: "#e6e7e9",
  300: "#d2d4d7",
  400: "#a9adb2",
  500: "#797f88",
  600: "#4d5560",
  700: "#2e3744",
  800: "#19202b",
  900: "#141a23",
};

const yellow: { [key: number]: string } = {
  50: "#fffefb",
  100: "#fdf9e7",
  200: "#f9edb7",
  300: "#f5df7d",
  400: "#eec924",
  500: "#c6a513",
  600: "#9e840f",
  700: "#7b670c",
  800: "#5c4d09",
  900: "#4c4007",
};

const green: { [key: number]: string } = {
  50: "#f2fef8",
  100: "#b6f9d6",
  200: "#4bf19b",
  300: "#15da74",
  400: "#13bf65",
  500: "#10a457",
  600: "#0d8848",
  700: "#0a6a38",
  800: "#08572e",
  900: "#074726",
};

const teal: { [key: number]: string } = {
  50: "#ebfdfd",
  100: "#9ef7f6",
  200: "#17ece8",
  300: "#14d3cf",
  400: "#11b3b0",
  500: "#0f9996",
  600: "#0c7c7a",
  700: "#09605f",
  800: "#08504f",
  900: "#064241",
};

const blue: { [key: number]: string } = {
  50: "#eff7fe",
  100: "#c5e1fb",
  200: "#9acbf7",
  300: "#6ab1f3",
  400: "#3897f0",
  500: "#1680e2",
  600: "#126bbd",
  700: "#0e5291",
  800: "#0c4377",
  900: "#093761",
};

const purple: { [key: number]: string } = {
  50: "#f8f6fe",
  100: "#e5dafc",
  200: "#d1befa",
  300: "#b495f7",
  400: "#9f77f4",
  500: "#824ff1",
  600: "#6b2eef",
  700: "#5415da",
  800: "#4512b4",
  900: "#340d87",
};

const pink: { [key: number]: string } = {
  50: "#fef5fa",
  100: "#fcd7ea",
  200: "#f9b5d9",
  300: "#f685c0",
  400: "#f25eab",
  500: "#e91784",
  600: "#c81371",
  700: "#a4105d",
  800: "#810d49",
  900: "#600936",
};

const orange: { [key: number]: string } = {
  50: "#fefaf5",
  100: "#fcead9",
  200: "#f9d2ad",
  300: "#f4ad6c",
  400: "#ee882a",
  500: "#d57115",
  600: "#b45f11",
  700: "#8f4c0e",
  800: "#713c0b",
  900: "#5d3109",
};

const ColorPalettePage = () => {
  const fixedH: string = "full";

  const primaryArray: colorInterface[] = Object.keys(primary).map((key) => ({
    point: key,
    codeHex: primary[Number(key)], // Using Number(key) to ensure the key is treated as a number
  }));

  const secondaryArray: colorInterface[] = Object.keys(secondary).map(
    (key) => ({
      point: key,
      codeHex: secondary[Number(key)], // Using Number(key) to ensure the key is treated as a number
    })
  );

  const grayArray: colorInterface[] = Object.keys(gray).map((key) => ({
    point: key,
    codeHex: gray[Number(key)], // Using Number(key) to ensure the key is treated as a number
  }));

  const yellowArray: colorInterface[] = Object.keys(yellow).map((key) => ({
    point: key,
    codeHex: yellow[Number(key)], // Using Number(key) to ensure the key is treated as a number
  }));

  const greenArray: colorInterface[] = Object.keys(green).map((key) => ({
    point: key,
    codeHex: green[Number(key)], // Using Number(key) to ensure the key is treated as a number
  }));

  const tealArray: colorInterface[] = Object.keys(teal).map((key) => ({
    point: key,
    codeHex: teal[Number(key)], // Using Number(key) to ensure the key is treated as a number
  }));

  const blueArray: colorInterface[] = Object.keys(blue).map((key) => ({
    point: key,
    codeHex: blue[Number(key)], // Using Number(key) to ensure the key is treated as a number
  }));

  const purpleArray: colorInterface[] = Object.keys(purple).map((key) => ({
    point: key,
    codeHex: purple[Number(key)], // Using Number(key) to ensure the key is treated as a number
  }));

  const pinkArray: colorInterface[] = Object.keys(pink).map((key) => ({
    point: key,
    codeHex: pink[Number(key)], // Using Number(key) to ensure the key is treated as a number
  }));

  const orangeArray: colorInterface[] = Object.keys(orange).map((key) => ({
    point: key,
    codeHex: orange[Number(key)], // Using Number(key) to ensure the key is treated as a number
  }));

  return (
    <>
      <LayoutAdmin>
        <BreadcrumbAdmin HeadData={HeadPageName} />
        <VStack spacing={2} alignItems={"start"} w={"full"} pt={5}>
          <Card w={"full"} minH={"100vh"}>
            <CardBody p={10}>
              <VStack>
                <Flex
                  bg={"gray.100"}
                  w={"full"}
                  h={fixedH}
                  rounded={"md"}
                  p={4}
                >
                  <VStack w={"full"} justifyItems={"start"}>
                    <Heading
                      as="h5"
                      size="sm"
                      w={"full"}
                      color={"secondary.900"}
                    >
                      Primary Color
                    </Heading>
                    <Grid
                      templateColumns="repeat(10, 1fr)"
                      gap={1}
                      w={"full"}
                      pt={1}
                    >
                      {primaryArray.map((dt, idx) => (
                        <GridItem
                          w={"full"}
                          h={"full"}
                          colSpan={{ base: 12, sm: 12, md: 1, lg: 1 }}
                          key={idx}
                        >
                          <ColorBoxPalette data={dt} />
                        </GridItem>
                      ))}
                    </Grid>
                  </VStack>
                </Flex>
                {/* TH */}
                <Flex
                  bg={"gray.100"}
                  w={"full"}
                  h={fixedH}
                  rounded={"md"}
                  p={4}
                >
                  <VStack w={"full"} justifyItems={"start"}>
                    <Heading
                      as="h5"
                      size="sm"
                      w={"full"}
                      color={"secondary.900"}
                    >
                      Secondary Color
                    </Heading>
                    <Grid
                      templateColumns="repeat(10, 1fr)"
                      gap={1}
                      w={"full"}
                      pt={1}
                    >
                      {secondaryArray.map((dt, idx) => (
                        <GridItem
                          w={"full"}
                          h={"full"}
                          key={idx}
                          colSpan={{ base: 12, sm: 12, md: 1, lg: 1 }}
                        >
                          <ColorBoxPalette data={dt} />
                        </GridItem>
                      ))}
                    </Grid>
                  </VStack>
                </Flex>
                {/* TH */}
                <Flex
                  bg={"gray.100"}
                  w={"full"}
                  h={fixedH}
                  rounded={"md"}
                  p={4}
                >
                  <VStack w={"full"} justifyItems={"start"}>
                    <Heading
                      as="h5"
                      size="sm"
                      w={"full"}
                      color={"secondary.900"}
                    >
                      Secondary Color
                    </Heading>
                    <Grid
                      templateColumns="repeat(10, 1fr)"
                      gap={1}
                      w={"full"}
                      pt={1}
                    >
                      {grayArray.map((dt, idx) => (
                        <GridItem
                          w={"full"}
                          h={"full"}
                          key={idx}
                          colSpan={{ base: 12, sm: 12, md: 1, lg: 1 }}
                        >
                          <ColorBoxPalette data={dt} />
                        </GridItem>
                      ))}
                    </Grid>
                  </VStack>
                </Flex>
                {/* TH */}
                <Flex
                  bg={"gray.100"}
                  w={"full"}
                  h={fixedH}
                  rounded={"md"}
                  p={4}
                >
                  <VStack w={"full"} justifyItems={"start"}>
                    <Heading
                      as="h5"
                      size="sm"
                      w={"full"}
                      color={"secondary.900"}
                    >
                      Secondary Color
                    </Heading>
                    <Grid
                      templateColumns="repeat(10, 1fr)"
                      gap={1}
                      w={"full"}
                      pt={1}
                    >
                      {yellowArray.map((dt, idx) => (
                        <GridItem
                          w={"full"}
                          h={"full"}
                          key={idx}
                          colSpan={{ base: 12, sm: 12, md: 1, lg: 1 }}
                        >
                          <ColorBoxPalette data={dt} />
                        </GridItem>
                      ))}
                    </Grid>
                  </VStack>
                </Flex>
                {/* TH */}
                <Flex
                  bg={"gray.100"}
                  w={"full"}
                  h={fixedH}
                  rounded={"md"}
                  p={4}
                >
                  <VStack w={"full"} justifyItems={"start"}>
                    <Heading
                      as="h5"
                      size="sm"
                      w={"full"}
                      color={"secondary.900"}
                    >
                      Secondary Color
                    </Heading>
                    <Grid
                      templateColumns="repeat(10, 1fr)"
                      gap={1}
                      w={"full"}
                      pt={1}
                    >
                      {greenArray.map((dt, idx) => (
                        <GridItem
                          w={"full"}
                          h={"full"}
                          key={idx}
                          colSpan={{ base: 12, sm: 12, md: 1, lg: 1 }}
                        >
                          <ColorBoxPalette data={dt} />
                        </GridItem>
                      ))}
                    </Grid>
                  </VStack>
                </Flex>
                {/* TH */}
                <Flex
                  bg={"gray.100"}
                  w={"full"}
                  h={fixedH}
                  rounded={"md"}
                  p={4}
                >
                  <VStack w={"full"} justifyItems={"start"}>
                    <Heading
                      as="h5"
                      size="sm"
                      w={"full"}
                      color={"secondary.900"}
                    >
                      Secondary Color
                    </Heading>
                    <Grid
                      templateColumns="repeat(10, 1fr)"
                      gap={1}
                      w={"full"}
                      pt={1}
                    >
                      {tealArray.map((dt, idx) => (
                        <GridItem
                          w={"full"}
                          h={"full"}
                          key={idx}
                          colSpan={{ base: 12, sm: 12, md: 1, lg: 1 }}
                        >
                          <ColorBoxPalette data={dt} />
                        </GridItem>
                      ))}
                    </Grid>
                  </VStack>
                </Flex>
                {/* TH */}
                <Flex
                  bg={"gray.100"}
                  w={"full"}
                  h={fixedH}
                  rounded={"md"}
                  p={4}
                >
                  <VStack w={"full"} justifyItems={"start"}>
                    <Heading
                      as="h5"
                      size="sm"
                      w={"full"}
                      color={"secondary.900"}
                    >
                      Secondary Color
                    </Heading>
                    <Grid
                      templateColumns="repeat(10, 1fr)"
                      gap={1}
                      w={"full"}
                      pt={1}
                    >
                      {blueArray.map((dt, idx) => (
                        <GridItem
                          w={"full"}
                          h={"full"}
                          key={idx}
                          colSpan={{ base: 12, sm: 12, md: 1, lg: 1 }}
                        >
                          <ColorBoxPalette data={dt} />
                        </GridItem>
                      ))}
                    </Grid>
                  </VStack>
                </Flex>
                {/* TH */}
                <Flex
                  bg={"gray.100"}
                  w={"full"}
                  h={fixedH}
                  rounded={"md"}
                  p={4}
                >
                  <VStack w={"full"} justifyItems={"start"}>
                    <Heading
                      as="h5"
                      size="sm"
                      w={"full"}
                      color={"secondary.900"}
                    >
                      Secondary Color
                    </Heading>
                    <Grid
                      templateColumns="repeat(10, 1fr)"
                      gap={1}
                      w={"full"}
                      pt={1}
                    >
                      {purpleArray.map((dt, idx) => (
                        <GridItem
                          w={"full"}
                          h={"full"}
                          key={idx}
                          colSpan={{ base: 12, sm: 12, md: 1, lg: 1 }}
                        >
                          <ColorBoxPalette data={dt} />
                        </GridItem>
                      ))}
                    </Grid>
                  </VStack>
                </Flex>
                {/* TH */}
                <Flex
                  bg={"gray.100"}
                  w={"full"}
                  h={fixedH}
                  rounded={"md"}
                  p={4}
                >
                  <VStack w={"full"} justifyItems={"start"}>
                    <Heading
                      as="h5"
                      size="sm"
                      w={"full"}
                      color={"secondary.900"}
                    >
                      Secondary Color
                    </Heading>
                    <Grid
                      templateColumns="repeat(10, 1fr)"
                      gap={1}
                      w={"full"}
                      pt={1}
                    >
                      {pinkArray.map((dt, idx) => (
                        <GridItem
                          w={"full"}
                          h={"full"}
                          key={idx}
                          colSpan={{ base: 12, sm: 12, md: 1, lg: 1 }}
                        >
                          <ColorBoxPalette data={dt} />
                        </GridItem>
                      ))}
                    </Grid>
                  </VStack>
                </Flex>
                {/* TH */}
                <Flex
                  bg={"gray.100"}
                  w={"full"}
                  h={fixedH}
                  rounded={"md"}
                  p={4}
                >
                  <VStack w={"full"} justifyItems={"start"}>
                    <Heading
                      as="h5"
                      size="sm"
                      w={"full"}
                      color={"secondary.900"}
                    >
                      Secondary Color
                    </Heading>
                    <Grid
                      templateColumns="repeat(10, 1fr)"
                      gap={1}
                      w={"full"}
                      pt={1}
                    >
                      {orangeArray.map((dt, idx) => (
                        <GridItem
                          w={"full"}
                          h={"full"}
                          key={idx}
                          colSpan={{ base: 12, sm: 12, md: 1, lg: 1 }}
                        >
                          <ColorBoxPalette data={dt} />
                        </GridItem>
                      ))}
                    </Grid>
                  </VStack>
                </Flex>
              </VStack>
            </CardBody>
          </Card>
        </VStack>
      </LayoutAdmin>
    </>
  );
};

const ColorBoxPalette = ({ data }: { data: colorInterface }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Flex
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        w={"full"}
        h={"full"}
        bg={data.codeHex}
        rounded={"md"}
        transition="transform 0.3s ease-in-out"
        transform={isHovered ? "translateY(-5px)" : "translateY(0)"}
        color={"white"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack spacing={0} gap={0} w={"full"} h={"full"}>
          <Text fontWeight={600}>{data.point}</Text>
          <Text fontWeight={300}>{data.codeHex}</Text>
        </VStack>
      </Flex>
    </>
  );
};

export default ColorPalettePage;
