import {
  HeadingGeneralComponents,
  HeadingGeneralComponentsLite,
  HeadingGeneralInterface,
} from "@/base_templates/components/HeadingGeneralComponents";
import HeadTittleWeb from "@/base_templates/components/HeadTittleWeb";
import { BaseContentBody } from "@/base_templates/components/LayoutContentBody";
import FooterLanding from "@/base_templates/layout/landing/FooterLanding";
import LayoutLandingAlt from "@/base_templates/layout/landing/LayoutLandingAlt";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";

const PageDescription: HeadingGeneralInterface = {
  tittlePage: "Registrasi",
  dataBreadcrumb: ["Home", "Registrasi"],
};

const RegistrationPage = () => {
  return (
    <LayoutLandingAlt>
      <HeadTittleWeb tittlePage={PageDescription.tittlePage} />
      <HeadingGeneralComponentsLite data={PageDescription} />
      <BaseContentBody tittleContent="Form Registrasi">
        <Flex minH={500}></Flex>
      </BaseContentBody>
      <FooterLanding />
    </LayoutLandingAlt>
  );
};

export default RegistrationPage;
