import { formatDateToYYYYMMDD } from "@/helper/MasterHelper";
import {
  Box,
  Card,
  CardBody,
  Center,
  Checkbox,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
  ThemeProvider,
  VStack,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { ReactNode, useEffect, useState } from "react";

const phonePattern: RegExp = /^\+?\d*$/; // Define the phone number pattern

export const FormGorupCard = ({
  tittleCard,
  children,
}: {
  tittleCard: string;
  children: ReactNode; // Use ReactNode type for children
}) => {
  return (
    // <Card my={4} boxShadow={"md"}>
    //   <Box
    //     borderTopLeftRadius="md"
    //     borderTopRightRadius="md"
    //     bg={"#1b517e"}
    //     py={1}
    //     px={2}
    //   >
    //     <Center>
    //       <Text color={"gray.100"} fontSize={"sm"} fontWeight={600}>
    //         {tittleCard}
    //       </Text>
    //     </Center>
    //   </Box>
    //   <CardBody boxShadow={"md"}></CardBody>
    // </Card>
    <Box p={5}>
      <Text color={"gray.600"} fontSize={"lg"} fontWeight={700}>
        {tittleCard}
      </Text>
      <Divider my={2} />
      {children}
    </Box>
  );
};

export const LayoutInput = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      display={{ base: "block", md: "flex" }}
      flexDir={{ base: "column", md: "row" }}
      alignItems="center"
    >
      {children}
    </Box>
  );
};

export const InputPlainLayout = ({
  idInput,
  labelField,
  formikPropsErrors,
  children,
  isRequired,
}: {
  idInput: string;
  labelField: string;
  formikPropsErrors?: any;
  children: ReactNode; // Use ReactNode type for children
  isRequired: boolean;
}) => {
  return (
    <FormControl
      isInvalid={formikPropsErrors ? true : false}
      isRequired={isRequired}
    >
      <LayoutInput>
        <FormLabel htmlFor={idInput} flex={{ base: "none", md: "1" }}>
          {labelField}
        </FormLabel>
        <Box flex={{ base: "none", md: "3" }} mt={{ base: 2, md: 0 }}>
          {children}
          <FormErrorMessage>{formikPropsErrors}</FormErrorMessage>
        </Box>
      </LayoutInput>
    </FormControl>
  );
};

export const InputComps = ({
  typeInput,
  idInput,
  labelField,
  propsField,
  formikProps,
  formikPropsValues,
  formikPropsErrors,
  isDisableInput,
  maxLength,
  isRequired,
}: {
  typeInput: string;
  idInput: string;
  labelField: string;
  propsField: string;
  formikProps?: any;
  formikPropsValues?: any;
  formikPropsErrors?: any;
  isDisableInput: boolean;
  maxLength: number;
  isRequired: boolean;
}) => {
  return (
    <FormControl
      isInvalid={formikPropsErrors ? true : false}
      isRequired={isRequired}
    >
      <LayoutInput>
        <FormLabel htmlFor={idInput} flex={{ base: "none", md: "1" }}>
          {labelField}
        </FormLabel>
        <Box flex={{ base: "none", md: "3" }} mt={{ base: 2, md: 0 }}>
          <Input
            id={idInput}
            type={typeInput}
            {...formikProps.getFieldProps(propsField)}
            placeholder=""
            disabled={isDisableInput}
            maxLength={maxLength}
            required={isRequired}
          />
          <FormErrorMessage>{formikPropsErrors}</FormErrorMessage>
        </Box>
      </LayoutInput>
    </FormControl>
  );
};

export const DatePickerComps = ({
  idInput,
  labelField,
  propsField,
  formikProps,
  formikPropsValues,
  formikPropsErrors,
  isDisableInput,
  isRequired,
}: {
  idInput: string;
  labelField: string;
  propsField: string;
  formikProps?: any;
  formikPropsValues?: any;
  formikPropsErrors?: any;
  isDisableInput: boolean;
  isRequired: boolean;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(
    formikPropsValues[propsField] || new Date()
  );

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    formikProps.setFieldValue(propsField, formatDateToYYYYMMDD(date));
  };

  return (
    <FormControl
      isInvalid={formikPropsErrors ? true : false}
      isRequired={isRequired}
    >
      <LayoutInput>
        <FormLabel htmlFor={idInput} flex={{ base: "none", md: "1" }}>
          {labelField}
        </FormLabel>
        <Box flex={{ base: "none", md: "3" }} mt={{ base: 2, md: 0 }}>
          <SingleDatepicker
            id={idInput}
            date={selectedDate}
            onDateChange={handleDateChange}
            disabled={isDisableInput}
          />
          <FormErrorMessage>{formikPropsErrors}</FormErrorMessage>
        </Box>
      </LayoutInput>
    </FormControl>
  );
};

export const InputEmailComps = ({
  idInput,
  labelField,
  propsField,
  formikProps,
  formikPropsValues,
  formikPropsErrors,
  isDisableInput,
  isRequired,
}: {
  idInput: string;
  labelField: string;
  propsField: string;
  formikProps?: any;
  formikPropsValues?: any;
  formikPropsErrors?: any;
  isDisableInput: boolean;
  isRequired: boolean;
}) => {
  return (
    <FormControl
      isInvalid={formikPropsErrors ? true : false}
      isRequired={isRequired}
    >
      <LayoutInput>
        <FormLabel htmlFor={idInput} flex={{ base: "none", md: "1" }}>
          {labelField}
        </FormLabel>
        <Box flex={{ base: "none", md: "3" }} mt={{ base: 2, md: 0 }}>
          <Input
            id={idInput}
            type={"email"}
            // value={formikProps.values[propsField]} // Manually pass value
            // onChange={formikProps.handleChange} // Manually pass onChange
            // onBlur={formikProps.handleBlur} // Manually pass onBlur
            {...formikProps.getFieldProps(propsField)}
            placeholder=""
            disabled={isDisableInput}
            required={isRequired}
          />
          <FormErrorMessage>{formikPropsErrors}</FormErrorMessage>
        </Box>
      </LayoutInput>
    </FormControl>
  );
};

export const InputPhoneNumberComps = ({
  typeInput,
  idInput,
  labelField,
  propsField,
  formikProps,
  formikPropsValues,
  formikPropsErrors,
  isDisableInput,
  maxLength,
  isRequired,
}: {
  typeInput: string;
  idInput: string;
  labelField: string;
  propsField: string;
  formikProps?: any;
  formikPropsValues?: any;
  formikPropsErrors?: any;
  isDisableInput: boolean;
  maxLength: number;
  isRequired: boolean;
}) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: any) => {
    const { value }: any = event.target;
    if (phonePattern.test(value) || value === "") {
      setValue(value);
      formikProps.setFieldValue(propsField, value); // Update Formik value
    }
  };

  const isValidValue = (value: string): boolean => {
    return phonePattern.test(value);
  };

  return (
    <FormControl
      isInvalid={formikPropsErrors ? true : false}
      isRequired={isRequired}
    >
      <LayoutInput>
        <FormLabel htmlFor={idInput} flex={{ base: "none", md: "1" }}>
          {labelField}
        </FormLabel>
        <Box flex={{ base: "none", md: "3" }} mt={{ base: 2, md: 0 }}>
          <Input
            id={idInput}
            type={typeInput}
            value={value}
            onChange={handleChange}
            placeholder=""
            disabled={isDisableInput}
            maxLength={maxLength}
            pattern="^\d*$" // Add pattern attribute to enforce numeric input
            title="Please enter numbers only"
            isInvalid={!isValidValue(value)} // Set invalid state based on validity
            required={isRequired}
          />
          <FormErrorMessage>
            {!isValidValue(value) && "Please enter a valid phone number"}
          </FormErrorMessage>
        </Box>
      </LayoutInput>
    </FormControl>
  );
};

export const InputTextAreaComps = ({
  idInput,
  labelField,
  propsField,
  formikProps,
  formikPropsValues,
  formikPropsErrors,
  isDisableInput,
  maxLength,
  isRequired,
}: {
  idInput: string;
  labelField: string;
  propsField: string;
  formikProps?: any;
  formikPropsValues?: any;
  formikPropsErrors?: any;
  isDisableInput: boolean;
  maxLength: number;
  isRequired: boolean;
}) => {
  return (
    <FormControl
      isInvalid={formikPropsErrors ? true : false}
      isRequired={isRequired}
    >
      <LayoutInput>
        <FormLabel htmlFor={idInput} flex={{ base: "none", md: "1" }}>
          {labelField}
        </FormLabel>
        <Box flex={{ base: "none", md: "3" }} mt={{ base: 2, md: 0 }}>
          <Textarea
            id={idInput}
            {...formikProps.getFieldProps(propsField)}
            placeholder=""
            disabled={isDisableInput}
            minH={"4em"}
            required={isRequired}
          />
          <FormErrorMessage>{formikPropsErrors}</FormErrorMessage>
        </Box>
      </LayoutInput>
    </FormControl>
  );
};

export const CheckBoxComps = ({
  idInput,
  labelField,
  propsField,
  formikProps,
  isDisableInput,
  formikPropsValues,
  formikPropsErrors,
  valueEnum,
  valueLabel,
  isRequired,
}: {
  idInput: string;
  labelField: string;
  propsField: string;
  formikProps?: any;
  formikPropsValues?: any;
  formikPropsErrors?: any;
  isDisableInput: boolean;
  valueEnum: number[];
  valueLabel: string[];
  isRequired: boolean;
}) => {
  return (
    <FormControl
      isInvalid={formikPropsErrors ? true : false}
      isRequired={isRequired}
    >
      <LayoutInput>
        <FormLabel htmlFor={idInput} flex={{ base: "none", md: "1" }}>
          {labelField}
        </FormLabel>
        <Box flex={{ base: "none", md: "3" }} mt={{ base: 2, md: 0 }}>
          <Stack spacing={5} direction="row">
            {valueEnum.map((item, index) => (
              <Checkbox
                key={index}
                id={idInput + item.toString()}
                isChecked={formikPropsValues === item}
                onChange={(e) => {
                  formikProps.setFieldValue(
                    propsField,
                    e.target.checked ? item : 0
                  );
                }}
                disabled={isDisableInput}
              >
                {valueLabel[index]}
              </Checkbox>
            ))}
          </Stack>
          <FormErrorMessage>{formikPropsErrors}</FormErrorMessage>
        </Box>
      </LayoutInput>
    </FormControl>
  );
};

export const LayoutInputDynamic = ({
  labelForm,
  children,
}: {
  labelForm: string;
  children: ReactNode;
}) => {
  const labelGridMd = 1;
  const flexPointInputMd = 4;
  const mtPointInputBase = 2;
  const mtPointInputMd = 0;
  return (
    <Box
      display={{ base: "block", md: "flex" }}
      flexDir={{ base: "column", md: "row" }}
      alignItems="center"
    >
      <FormLabel flex={{ base: "none", md: labelGridMd }}>
        {labelForm}
      </FormLabel>
      <Box
        flex={{ base: "none", md: flexPointInputMd }}
        mt={{ base: mtPointInputBase, md: mtPointInputMd }}
      >
        {children}
      </Box>
    </Box>
  );
};
