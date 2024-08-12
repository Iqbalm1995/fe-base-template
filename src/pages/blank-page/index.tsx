import {
  HeadingGeneralComponents,
  HeadingGeneralInterface,
} from "@/base_templates/components/HeadingGeneralComponents";
import HeadTittleWeb from "@/base_templates/components/HeadTittleWeb";
import { BaseContentBody } from "@/base_templates/components/LayoutContentBody";
import FooterLanding from "@/base_templates/layout/landing/FooterLanding";
import LayoutLanding from "@/base_templates/layout/landing/LayoutLanding";
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
  tittlePage: "Blank Page",
  dataBreadcrumb: ["Home", "Blank Page"],
};

const BlankPage = () => {
  return (
    <LayoutLanding>
      <HeadTittleWeb tittlePage={PageDescription.tittlePage} />
      <HeadingGeneralComponents data={PageDescription} />
      <BaseContentBody tittleContent="Content Data">
        <Flex minH={500}></Flex>
      </BaseContentBody>
      <FooterLanding />
    </LayoutLanding>
  );
};

export default BlankPage;
