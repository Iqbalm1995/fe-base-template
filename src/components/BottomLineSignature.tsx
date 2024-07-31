import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import CaptionCarousel from "./HeadSliders";

export default function SignatureLineColor() {
  return (
    <Flex width="100%" alignItems="center">
      <Box width="50%" bg="#0B79CA" height="12px" roundedBottomLeft={"none"}>
        {/* Content for the first stack */}
      </Box>
      <Box width="25%" bg="#0078FF" height="12px">
        {/* Content for the second stack */}
      </Box>
      <Box width="25%" bg="#EDC817" height="12px" roundedBottomRight={"none"}>
        {/* Content for the third stack */}
      </Box>
    </Flex>
  );
}

export function SignatureLineColorWithBorderRadius({
  tl,
  tr,
  bl,
  br,
}: {
  tl: string;
  tr: string;
  bl: string;
  br: string;
}) {
  return (
    <Flex
      width="100%"
      alignItems="center"
      borderTopStartRadius={tl}
      borderTopEndRadius={tr}
      borderBottomStartRadius={bl}
      borderBottomEndRadius={br}
    >
      <Box width="50%" bg="#0B79CA" height="12px" borderBottomStartRadius={bl}>
        {/* Content for the first stack */}
      </Box>
      <Box width="25%" bg="#0078FF" height="12px">
        {/* Content for the second stack */}
      </Box>
      <Box width="25%" bg="#EDC817" height="12px" borderBottomEndRadius={br}>
        {/* Content for the third stack */}
      </Box>
    </Flex>
  );
}
