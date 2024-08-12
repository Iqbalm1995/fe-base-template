import {
  Box,
  Center,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Button,
  ButtonGroup,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import SignatureLineColor from "./BottomLineSignature";
import { Link } from "@chakra-ui/next-js";
import { FaLocationArrow } from "react-icons/fa";

const IMAGE = "/img/placeholder-header-sm.png";

interface CardProduct {
  title: string;
  desc: string;
  link: string;
}

const DataHighLightProduct: Array<CardProduct> = [
  {
    title: "Pendaftaran IBC",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, culpa ullam saepe veniam sapiente cupiditate explicabo voluptatem libero eaque eos perferendis, repellendus mollitia cumque alias ratione iure obcaecati non sed!",
    link: "/form/registration/",
  },
  {
    title: "Pendaftaran IBC Alternative",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, culpa ullam saepe veniam sapiente cupiditate explicabo voluptatem libero eaque eos perferendis, repellendus mollitia cumque alias ratione iure obcaecati non sed!",
    link: "/form/registration-ibc/",
  },
  {
    title:
      "Permohonan Pembukaan Surat Kredit Berdokumen Dalam Negeri (PPSKBDN)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, culpa ullam saepe veniam sapiente cupiditate explicabo voluptatem libero eaque eos perferendis, repellendus mollitia cumque alias ratione iure obcaecati non sed!",
    link: "#",
  },
  {
    title: "Permohonan Pembukaan Kredit Berdokumen (PPLC)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, culpa ullam saepe veniam sapiente cupiditate explicabo voluptatem libero eaque eos perferendis, repellendus mollitia cumque alias ratione iure obcaecati non sed!",
    link: "#",
  },
  {
    title: "Pembukaan Rekening Non Perorangan",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, culpa ullam saepe veniam sapiente cupiditate explicabo voluptatem libero eaque eos perferendis, repellendus mollitia cumque alias ratione iure obcaecati non sed!",
    link: "#",
  },
  {
    title: "Permohonan Penggunaan bjb Garansi Bank Online",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus mollitia cumque alias ratione iure obcaecati non sed!",
    link: "#",
  },
  {
    title: "Formulir Virtual Account Update Offline & Online",
    desc: "Lorem ipsum dolor sit!",
    link: "#",
  },
  {
    title: "Formulir Virtual Account Service Agreement Offline & Online",
    desc: "Lorem ipsum dolor sit!",
    link: "#",
  },
  {
    title: "Form Pembukaan Custody",
    desc: "Lorem ipsum dolor sit!",
    link: "#",
  },
];

const SectionHighlightProductStack = () => {
  return (
    <>
      <Stack spacing={4} textAlign={"center"} mb={5}>
        <Heading fontSize={{ base: "lx", sm: "2xl" }} fontWeight={"bold"}>
          Registration
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>
      <Flex flexWrap="wrap" gridGap={6} justify="center">
        {DataHighLightProduct.map((itemCard) => (
          <ProductSimple
            key={itemCard.title}
            title={itemCard.title}
            desc={itemCard.desc}
            link={itemCard.link}
          />
        ))}
      </Flex>
    </>
  );
};

const ProductSimple = (data: CardProduct) => {
  return (
    <Card w={"sm"} borderRadius={"lg"} boxShadow={"lg"}>
      <CardBody>
        <Image
          src={IMAGE}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          height={"200px"}
          width={"full"}
          objectFit={"cover"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{data.title}</Heading>
          <Text>{data.desc}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Spacer />
        <Button
          as={"a"}
          variant="solid"
          colorScheme="bjb_color_theme"
          borderRadius={"lg"}
          href={data.link}
        >
          Daftar Sekarang
        </Button>
      </CardFooter>

      <SignatureLineColor />
    </Card>
  );
};

export default SectionHighlightProductStack;
