import { Button, Flex, Grid, GridItem, Select } from "@chakra-ui/react";
import {
  BsChevronBarLeft,
  BsChevronBarRight,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

function ControlTableSM({ table }: any) {
  return (
    <div style={{ overflowX: "auto" }}>
      <Flex minWidth="max-content" justifyContent="center" gap="2" my="3%">
        <Grid templateColumns="repeat(5, 1fr)" gap={2}>
          <GridItem colSpan={{ base: 5, sm: 5, md: 5, lg: 1 }}>
            <Button
              leftIcon={<BsChevronBarLeft />}
              onClick={() => table.setPageIndex(0)}
              isDisabled={!table.getCanPreviousPage()}
              size="sm"
              colorScheme="secondary"
              width={"100%"}
            ></Button>
          </GridItem>
          <GridItem colSpan={{ base: 5, sm: 5, md: 5, lg: 1 }}>
            <Button
              leftIcon={<BsChevronLeft />}
              onClick={() => table.previousPage()}
              isDisabled={!table.getCanPreviousPage()}
              size="sm"
              colorScheme="secondary"
              width={"100%"}
            ></Button>
          </GridItem>
          <GridItem colSpan={{ base: 5, sm: 5, md: 5, lg: 1 }}>
            <Flex gap="2" ml="15px" mr="15px" width={"100%"}>
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
              colorScheme="secondary"
              width={"100%"}
            ></Button>
          </GridItem>
          <GridItem colSpan={{ base: 5, sm: 5, md: 5, lg: 1 }}>
            <Button
              rightIcon={<BsChevronBarRight />}
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              isDisabled={!table.getCanNextPage()}
              size="sm"
              colorScheme="secondary"
              width={"100%"}
            ></Button>
          </GridItem>
        </Grid>
      </Flex>
    </div>
  );
}

export default ControlTableSM;
