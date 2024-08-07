import {
  HeadingGeneralComponents,
  HeadingGeneralComponentsLite,
  HeadingGeneralInterface,
} from "@/base_templates/components/HeadingGeneralComponents";
import HeadTittleWeb from "@/base_templates/components/HeadTittleWeb";
import { BaseContentBody } from "@/base_templates/components/LayoutContentBody";
import FooterLanding, {
  FooterAdminAlternate,
} from "@/base_templates/layout/landing/FooterLanding";
import LayoutLandingAlt from "@/base_templates/layout/landing/LayoutLandingAlt";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Spacer,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  useBreakpointValue,
  useSteps,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode, useState } from "react";
import { BsSend } from "react-icons/bs";

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
        <Flex minH={"80vh"} w={"full"}>
          <FormWizard />
        </Flex>
      </BaseContentBody>
      <FooterAdminAlternate />
    </LayoutLandingAlt>
  );
};

// Tab Navigation Component
const TabNavigation: React.FC<{
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}> = ({ currentTab, setCurrentTab }) => {
  const handleNext = () => {
    setCurrentTab(currentTab + 1);
  };

  const handlePrevious = () => {
    setCurrentTab(currentTab - 1);
  };

  return (
    <HStack spacing={4}>
      {currentTab > 1 && currentTab <= 3 && (
        <Button
          leftIcon={<ArrowBackIcon />}
          colorScheme="gray"
          onClick={handlePrevious}
          variant={"solid"}
        >
          Sebelumnya
        </Button>
      )}
      {currentTab < 3 && (
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="secondary"
          onClick={handleNext}
          variant={"solid"}
        >
          Selanjutnya
        </Button>
      )}
      {currentTab == 3 && (
        <Button
          rightIcon={<BsSend />}
          minW={"120px"}
          colorScheme="secondary"
          onClick={handleNext}
          variant={"solid"}
        >
          Submit
        </Button>
      )}
    </HStack>
  );
};

type Orientation = "horizontal" | "vertical";

// FormWizard Component
const FormWizard: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<number>(1);
  const orientation: Orientation =
    useBreakpointValue({
      base: "vertical",
      sm: "vertical",
      md: "horizontal",
      lg: "horizontal",
    }) || "horizontal"; // Default to "horizontal" if undefined

  const steps = [
    { title: "First", description: "Contact Info" },
    { title: "Second", description: "Date & Time" },
    { title: "Third", description: "Select Rooms" },
  ];

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Box w={"full"}>
      {/* Stepper for Tab Names */}

      <Box p={4}>
        <Stepper
          index={currentTab - 1}
          orientation={orientation || "horizontal"}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Body Content with Card */}
      <form>
        <Flex w={"full"} p={{ base: 0, sm: 0, md: 5, lg: 5 }}>
          {/* Tab Contents */}
          <VStack w={"full"}>
            <Flex w={"full"} justifyContent={"center"}>
              {/* NOTE TAB 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
              {currentTab === 1 && (
                <>
                  <Card
                    w={{ base: "full", sm: "full", md: "80vh", lg: "80vh" }}
                    boxShadow={"lg"}
                  >
                    <CardBody>
                      <VStack spacing={4}>
                        <Input
                          id={"id"}
                          type={"text"}
                          isDisabled
                          display={"none"}
                        />
                        <FormControl isInvalid={false} isRequired>
                          <FormLabel>Nama Corporate</FormLabel>
                          <Input
                            id={"input1"}
                            name={"input1"}
                            type={"text"}
                            placeholder="Isi Nama Corporate"
                          />
                          <FormErrorMessage>
                            {"Message Error Here"}
                          </FormErrorMessage>
                        </FormControl>
                      </VStack>
                    </CardBody>
                  </Card>
                </>
              )}

              {/* NOTE TAB 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
              {currentTab === 2 && (
                <div>
                  <h2>Tab 2 Content</h2>
                </div>
              )}

              {/* NOTE TAB 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
              {currentTab === 3 && (
                <div>
                  <h2>Tab 3 Content</h2>
                </div>
              )}
            </Flex>
            {/* Tab Navigation */}
            <Flex w={"full"} justifyContent={"end"}>
              <TabNavigation
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
              />
            </Flex>
          </VStack>
        </Flex>
      </form>
    </Box>
  );
};

export default RegistrationPage;
