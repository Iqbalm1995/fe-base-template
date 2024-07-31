import SignatureLineColor from "@/components/BottomLineSignature";
import HeaderLandingContent, {
  HeadTittleBreadcrumb,
} from "@/components/HeaderLandingContent";
import LayoutLanding from "@/components/LayoutLandingPage";
import { decryptAES, encryptAES } from "@/helper/HashHelper";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Spacer,
  chakra,
  Card,
  CardBody,
  Text,
  HStack,
  Button,
  useSteps,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";

const HeadPageName: HeadTittleBreadcrumb = {
  titlePage: "Blank Page",
  breadCrumbPath: ["Home", "Blank Page"],
};

const BlankPage = () => {
  return (
    <LayoutLanding>
      <>
        <HeaderLandingContent HeadData={HeadPageName} />

        <Container maxW={"8xl"} py={8}>
          <Card boxShadow="lg">
            <CardBody>
              <Text color={"gray.600"} fontSize={"xl"} fontWeight={600} pb={3}>
                Content
              </Text>
              <p>
                KEY : BJBPortalAESKeys
                <br />
                WORD : P@ssw0rd
                <br />
                AES ENCRYPT : {encryptAES("P@ssw0rd")}
                <br />
                AES DECRYPT : {decryptAES(encryptAES("P@ssw0rd"))}
              </p>
              <Divider />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                odio, deserunt suscipit reiciendis temporibus, ratione
                reprehenderit maxime omnis consectetur facilis atque
                necessitatibus architecto, numquam praesentium quam adipisci.
                Optio, ab in.
              </p>
            </CardBody>
            <SignatureLineColor />
          </Card>

          <Box height={"500px"}>
            <FormWizard />
          </Box>
        </Container>
      </>
    </LayoutLanding>
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
    <HStack mt={4} spacing={4}>
      {currentTab > 1 && currentTab <= 3 && (
        <Button colorScheme="gray" onClick={handlePrevious}>
          Previous
        </Button>
      )}
      {currentTab < 3 && (
        <Button colorScheme="bjb_color_theme" onClick={handleNext}>
          Next
        </Button>
      )}
      {currentTab == 3 && (
        <Button colorScheme="linkedin" onClick={handleNext}>
          Submit
        </Button>
      )}
    </HStack>
  );
};

// FormWizard Component
const FormWizard: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<number>(1);

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
    <Box>
      {/* Stepper for Tab Names */}

      <Box p={4}>
        <Stepper index={currentTab - 1}>
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
      <Card
        borderWidth="1px"
        borderColor={"gray.100"}
        borderRadius="lg"
        boxShadow="md"
      >
        <CardBody>
          {/* Tab Contents */}
          {currentTab === 1 && (
            <div>
              <h2>Tab 1 Content</h2>
            </div>
          )}

          {currentTab === 2 && (
            <div>
              <h2>Tab 2 Content</h2>
            </div>
          )}

          {currentTab === 3 && (
            <div>
              <h2>Tab 3 Content</h2>
            </div>
          )}

          {/* Tab Navigation */}
          <Flex>
            <Spacer />
            <TabNavigation
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          </Flex>
        </CardBody>
      </Card>
    </Box>
  );
};

export default BlankPage;
