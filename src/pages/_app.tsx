import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const colors = {
  bjb_color_theme: {
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
  },
  primary: {
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
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: "'Myriad Pro', Roboto, sans-serif",
    body: "'Myriad Pro', Roboto, sans-serif",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
