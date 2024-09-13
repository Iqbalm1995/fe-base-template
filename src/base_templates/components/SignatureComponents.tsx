import {
  Button,
  ButtonProps,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface btnSignatureInteface extends ButtonProps {
  textStr: string;
}

export const ButtonSignature1 = ({
  textStr,
  ...rest
}: btnSignatureInteface) => {
  return (
    <Button
      {...rest}
      colorScheme={"secondary"}
      _hover={{
        bg: "yellow.400",
        color: "white",
        // bgGradient: "linear(to-br, secondary.500, yellow.500)",
      }}
    >
      {textStr}
    </Button>
  );
};

interface btnSignatureIconInteface extends IconButtonProps {
  children: ReactNode;
}

export default function ButtonSignatureIcon1({
  children,
  ...rest
}: btnSignatureIconInteface) {
  return (
    <IconButton
      colorScheme={"secondary"}
      _hover={{
        bg: "yellow.400",
        color: "white",
      }}
      {...rest}
    >
      {children}
    </IconButton>
  );
}
