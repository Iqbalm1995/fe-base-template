import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Switch,
  HStack,
  StackDivider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { LogoApplication } from "./LogoApplication";
import { PaddingLanding } from "@/constants/MasterConstant";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bgGradient={"linear(to-r, #1b517e, #063154)"}>
      <Flex
        // bg={useColorModeValue("white", "gray.800")}
        // bg={"red"}
        // color={useColorModeValue("gray.600", "white")}
        color={"white"}
        minH={"60px"}
        py={{ base: 2 }}
        // px={{ base: 4 }}
        px={PaddingLanding}
        // borderBottom={1}
        // borderStyle={"solid"}
        // borderColor={"rgba(27, 81, 126, 0.2)"}
        align={"center"}
        pos={"relative"}
        zIndex={2}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            colorScheme={"white"}
          />
        </Flex>
        {/* Logo Apps */}
        <LogoApplication />
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "end" }} pr={5}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <LanguageSelector />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

export const LanguageSelector = () => {
  return (
    <>
      <HStack divider={<StackDivider />}>
        <Button colorScheme="whiteAlpha" variant="ghost" size={"xs"} isActive>
          ID
        </Button>
        <Button colorScheme="whiteAlpha" variant="ghost" size={"xs"}>
          EN
        </Button>
      </HStack>
    </>
  );
};

const DesktopNav = () => {
  const linkColor = "white";
  const linkHoverColor = "gray.200";
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={550}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("#E6F3FF", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#246ca8" }}
            fontWeight={500}
            color={"gray.800"}
          >
            {label}
          </Text>
          <Text fontSize={"sm"} color={"gray.500"}>
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#246ca8"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }} mb={"60px"}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          // color={useColorModeValue("gray.600", "gray.200")}
          color={"gray.200"}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
            color={"gray.200"}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box
                color={"gray.200"}
                as="a"
                key={child.label}
                py={2}
                href={child.href}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  // {
  //   label: "Beranda",
  //   href: "/",
  // },
  // {
  //   label: "Produk",
  //   children: [
  //     {
  //       label: "Sub menu 1",
  //       subLabel: "Desc sub menu 1",
  //       href: "#",
  //     },
  //     {
  //       label: "Sub menu 2",
  //       subLabel: "Desc sub menu 2",
  //       href: "#",
  //     },
  //   ],
  // },
  {
    label: "Tentang Kami",
    href: "#",
  },
  {
    label: "Hubungi Kami",
    href: "#",
  },
  // {
  //   label: "Blank Page",
  //   href: "/landing/blank-page",
  // },
];
