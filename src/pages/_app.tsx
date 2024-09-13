import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LanguageProvider } from "@/context/LanguageContext";

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
  secondary: {
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
  },
  gray: {
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
  },
  yellow: {
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
  },
  green: {
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
  },
  teal: {
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
  },
  cyan: {
    50: "#f1fcfe",
    100: "#c1f2fa",
    200: "#a3ebf8",
    300: "#7ee3f5",
    400: "#16c5e4",
    500: "#14b5d2",
    600: "#12a4bd",
    700: "#0f879c",
    800: "#0c6f81",
    900: "#0a5664",
  },
  blue: {
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
  },
  purple: {
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
  },
  pink: {
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
  },
  orange: {
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
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading:
      "Avenir, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
    body: "Avenir, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </ChakraProvider>
  );
}
