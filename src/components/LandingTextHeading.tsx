import { Heading, Stack, Text } from "@chakra-ui/react";

const LandingTextHeading = ({
  HeadingText,
  SubHeadingText,
}: {
  HeadingText: string;
  SubHeadingText: string;
}) => {
  return (
    <Stack spacing={3}>
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
          {HeadingText}
        </Text>
      </Heading>
      <Text as={"p"}>
        {SubHeadingText}
      </Text>
    </Stack>
  );
};

export default LandingTextHeading;
