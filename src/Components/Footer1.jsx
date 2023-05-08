import { Box, Button, Heading, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer1 = () => {
  return <Box bgColor="#06181C" paddingLeft="10%" color="lightgray" paddingTop="30px" paddingBottom="30px">
    <Text width="50%">Want to receive exclusive gym offers? subscribe to our newsletter!</Text>
    <Box width="50%" marginTop="20px" display="flex" flexDirection={{sm:"column",md:"row",base:"column"}}>
      <Input width={["95%","75%","60%","60%"]} borderColor="#2FB0DA" marginRight='20px'></Input>
      <Button color="#091315" bgColor="#2FB0DA" variant="outline" width={["55%","45%","30%","25%"]}>Subscribe</Button>
    </Box>
    <Box display="flex"  marginTop="20px" width="30%" justifyContent="space-between" flexDirection={{sm:"column",md:"row",base:"column"}}>
    <Box>
      <Text marginBottom="6px" cursor="pointer">Website</Text>
      <Text marginBottom="6px" cursor="pointer">Gym</Text>
      <Text marginBottom="6px" cursor="pointer">Class Graphic</Text>
      <Text marginBottom="6px" cursor="pointer">Invester Relations</Text>
    </Box>
    <Box>
      <Text marginBottom="6px" cursor="pointer">Help</Text>
      <Text marginBottom="6px" cursor="pointer">Learn how GMG works</Text>
      <Text marginBottom="6px" cursor="pointer">Terms and Conditions</Text>
      <Text marginBottom="6px" cursor="pointer">Legal Information</Text>
      <Text marginBottom="6px" cursor="pointer">About Us</Text>
    </Box>
    </Box>
    <VStack>
      <Heading color="#2FB0DA" fontSize="30px">BeFit</Heading>
      <Text>Copyright 2023. All Rights Reserved</Text>
    </VStack>
  </Box>;
};

export default Footer1;
