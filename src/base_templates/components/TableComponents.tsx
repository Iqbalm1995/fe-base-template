import {
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Select,
  Text,
} from "@chakra-ui/react";
import {
  BsChevronBarLeft,
  BsChevronBarRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

export function ControlTable({ table }: any) {
  return (
    <div style={{ overflowX: "auto" }}>
      <Flex minWidth="max-content" justifyContent="center" gap="2" my="3%">
        <Grid templateColumns="repeat(12, 1fr)" gap={2} w={"full"}>
          <GridItem colSpan={{ base: 12, sm: 12, md: 6, lg: 6 }}>
            <Flex
              gap="2"
              w={"full"}
              h={"full"}
              alignItems={"center"}
              justifyContent={{
                base: "center",
                sm: "center",
                md: "start",
                lg: "start",
              }}
            >
              <Text fontWeight={600}>Halaman </Text>
              <Text> {table.getState().pagination.pageIndex + 1} </Text>/{" "}
              <Text> {table.getPageCount()} </Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 12, sm: 12, md: 6, lg: 6 }}>
            <Flex
              gap="2"
              w={"full"}
              h={"full"}
              alignItems={"center"}
              justifyContent={"end"}
            >
              <ButtonGroup
                size="md"
                w={{ base: "full", sm: "full", md: "auto", lg: "auto" }}
                isAttached
                variant="solid"
              >
                <Button
                  onClick={() => table.setPageIndex(0)}
                  isDisabled={!table.getCanPreviousPage()}
                  colorScheme={"secondary"}
                  variant={"solid"}
                  width={"full"}
                  minW={{ base: 0, sm: 0, md: "80px", lg: "80px" }}
                >
                  <BsChevronBarLeft />
                </Button>
                <Button
                  onClick={() => table.previousPage()}
                  isDisabled={!table.getCanPreviousPage()}
                  colorScheme={"secondary"}
                  variant={"solid"}
                  width={"full"}
                  minW={{ base: 0, sm: 0, md: "80px", lg: "80px" }}
                >
                  <BsChevronLeft />
                </Button>
                <Button
                  onClick={() => table.nextPage()}
                  isDisabled={!table.getCanNextPage()}
                  size="md"
                  colorScheme={"secondary"}
                  variant={"solid"}
                  width={"full"}
                  minW={{ base: 0, sm: 0, md: "80px", lg: "80px" }}
                >
                  <BsChevronRight />
                </Button>
                <Button
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  isDisabled={!table.getCanNextPage()}
                  size="md"
                  colorScheme={"secondary"}
                  variant={"solid"}
                  width={"full"}
                  minW={{ base: 0, sm: 0, md: "80px", lg: "80px" }}
                >
                  <BsChevronBarRight />
                </Button>
              </ButtonGroup>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </div>
  );
}

export function TableInputShowPage({ table }: any) {
  return (
    <GridItem colSpan={{ base: 12, sm: 12, md: 12, lg: 6 }}>
      <Flex
        justifyContent={{
          base: "center",
          sm: "center",
          md: "flex-end",
          lg: "flex-end",
        }}
        gap="2"
        alignItems={"center"}
      >
        <span>Tampil </span>
        <Select
          size="sm"
          w={{
            base: "full",
            sm: "full",
            md: "80px",
            lg: "80px",
          }}
          rounded={"md"}
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </Select>
      </Flex>
    </GridItem>
  );
}

export function ControlTableSM({ table }: any) {
  return (
    <div style={{ overflowX: "auto" }}>
      <Flex minWidth="max-content" justifyContent="end" gap="2" my="3%">
        <Grid templateColumns="repeat(5, 1fr)" gap={2}>
          <GridItem colSpan={{ base: 5, sm: 5, md: 5, lg: 1 }}>
            <Button
              leftIcon={<BsChevronBarLeft />}
              onClick={() => table.setPageIndex(0)}
              isDisabled={!table.getCanPreviousPage()}
              size="sm"
              colorScheme="bjb_color_theme"
              width={"full"}
            ></Button>
          </GridItem>
          <GridItem colSpan={{ base: 5, sm: 5, md: 5, lg: 1 }}>
            <Button
              leftIcon={<BsChevronLeft />}
              onClick={() => table.previousPage()}
              isDisabled={!table.getCanPreviousPage()}
              size="sm"
              colorScheme="bjb_color_theme"
              width={"full"}
            ></Button>
          </GridItem>
          <GridItem colSpan={{ base: 5, sm: 5, md: 5, lg: 1 }}>
            <Flex gap="2" ml="15px" mr="15px" width={"full"}>
              <strong>{table.getState().pagination.pageIndex + 1} </strong>/{" "}
              <strong> {table.getPageCount()} </strong>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 5, sm: 5, md: 5, lg: 1 }}>
            <Button
              rightIcon={<BsChevronRight />}
              onClick={() => table.nextPage()}
              isDisabled={!table.getCanNextPage()}
              size="sm"
              colorScheme="bjb_color_theme"
              width={"full"}
            ></Button>
            <Button
              rightIcon={<BsChevronBarRight />}
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              isDisabled={!table.getCanNextPage()}
              size="sm"
              colorScheme="bjb_color_theme"
              width={"full"}
            ></Button>
          </GridItem>
        </Grid>
      </Flex>
    </div>
  );
}
