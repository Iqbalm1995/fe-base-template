import {
  ControlTable,
  TableInputShowPage,
} from "@/base_templates/components/TableComponents";
import BreadcrumbAdmin, {
  AdminTittleBreadcrumb,
} from "@/base_templates/layout/admin/BreadcrumbAdmin";
import LayoutAdmin from "@/base_templates/layout/admin/LayoutAdmin";
import { makeData, Person } from "@/utils/dataMakerPerson";
import {
  AddIcon,
  DeleteIcon,
  EditIcon,
  InfoOutlineIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  Spacer,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useReducer, useState } from "react";

const HeadPageName: AdminTittleBreadcrumb = {
  titlePage: "Tables",
  breadCrumbPath: ["Admin", "Template", "Tables"],
};

const TablesPage = () => {
  const rerender = useReducer(() => ({}), {})[1];

  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "firstName",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.lastName,
        id: "lastName",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "age",
        header: () => "Age",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "visits",
        header: () => <span>Visits</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "status",
        header: "Status",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "progress",
        header: "Profile Progress",
        footer: (props) => props.column.id,
      },
      {
        accessorKey: "id",
        cell: (info) => (
          <>
            <Flex justifyContent="center">
              <ButtonGroup size="sm" isAttached variant="outline">
                <Button
                  colorScheme={"secondary"}
                  variant="solid"
                  size={"sm"}
                  onClick={() => {
                    console.log(info.getValue());
                  }}
                >
                  <EditIcon />
                </Button>
                <Button
                  colorScheme={"secondary"}
                  variant="solid"
                  size={"sm"}
                  onClick={() => {
                    console.log(info.getValue());
                  }}
                >
                  <InfoOutlineIcon />
                </Button>
                <Button
                  colorScheme={"red"}
                  variant="solid"
                  size={"sm"}
                  onClick={() => {
                    console.log(info.getValue());
                  }}
                >
                  <DeleteIcon />
                </Button>
              </ButtonGroup>
            </Flex>
          </>
        ),
        header: () => <span>Opsi</span>,
        size: 10,
        enableColumnFilter: false,
        enableSorting: false,
      },
    ],
    []
  );

  const [data, setData] = useState(() => makeData(500));
  const refreshData = () => setData(() => makeData(500));

  return (
    <>
      <LayoutAdmin>
        <Box mx={"auto"} bgColor={"gray.100"}>
          <Container maxW={"8xl"} px={12} pb={12} pt={2} minH={"100vh"}>
            <BreadcrumbAdmin HeadData={HeadPageName} />
            <VStack spacing={2} alignItems={"start"} w={"full"} pt={5}>
              <Card w={"full"} minH={"100vh"}>
                <CardBody p={10}>
                  <TableData
                    {...{
                      data,
                      columns,
                    }}
                  />
                </CardBody>
              </Card>
            </VStack>
          </Container>
        </Box>
      </LayoutAdmin>
    </>
  );
};

function TableData({
  data,
  columns,
}: {
  data: Person[];
  columns: ColumnDef<Person>[];
}) {
  const table = useReactTable({
    data,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //
    debugTable: true,
  });

  return (
    <>
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={12}>
          <Flex>
            <Spacer />
            <HStack>
              <Button
                colorScheme="secondary"
                leftIcon={<AddIcon />}
                variant="solid"
              >
                Tambah
              </Button>
              <Button colorScheme="gray" variant={"outline"}>
                <RepeatIcon />
              </Button>
            </HStack>
          </Flex>
        </GridItem>
        <GridItem colSpan={12}>
          <Box pt={5}>
            <Box p="2" mt={4}>
              <Grid
                templateColumns="repeat(12, 1fr)"
                minWidth="max-content"
                gap="2"
                mb="2%"
              >
                <GridItem colSpan={{ base: 12, sm: 12, md: 12, lg: 6 }}>
                  <Flex justifyContent="flex-start" gap="2">
                    <span>Pencarian : </span>
                    <Input
                      size="sm"
                      type="text"
                      width="200px"
                      value={""}
                      placeholder="Cari Data..."
                    />
                  </Flex>
                </GridItem>
                <TableInputShowPage table={table} />
              </Grid>
              <>
                <div style={{ overflowX: "auto" }}>
                  <Table variant="striped" colorScheme="gray">
                    <Thead>
                      {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                          <Th>#</Th>
                          {headerGroup.headers.map((header) => {
                            return (
                              <Th key={header.id} colSpan={header.colSpan}>
                                {header.isPlaceholder ? null : (
                                  <div>
                                    {flexRender(
                                      header.column.columnDef.header,
                                      header.getContext()
                                    )}
                                  </div>
                                )}
                              </Th>
                            );
                          })}
                        </Tr>
                      ))}
                    </Thead>
                    <Tbody>
                      {table.getRowModel().rows.length > 0 ? (
                        table.getRowModel().rows.map((row, index) => {
                          const startingNumber = index + 1;
                          return (
                            <Tr key={row.id}>
                              <Td key={index}>{startingNumber}</Td>
                              {row.getVisibleCells().map((cell) => {
                                return (
                                  <Td key={cell.id}>
                                    {flexRender(
                                      cell.column.columnDef.cell,
                                      cell.getContext()
                                    )}
                                  </Td>
                                );
                              })}
                            </Tr>
                          );
                        })
                      ) : (
                        <Tr>
                          <Td colSpan={table.options.columns.length + 1}>
                            <Flex justifyContent={"center"}>
                              Belum ada data
                            </Flex>
                          </Td>
                        </Tr>
                      )}
                    </Tbody>
                  </Table>
                </div>
                <ControlTable table={table} />
              </>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default TablesPage;
