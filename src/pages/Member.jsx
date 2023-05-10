import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Input,
  FormControl,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../store";
import { postMembership } from "../redux/memberReducer/action";
import Navbar from "../Components/Navbar";

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function Member() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [price, setPrice] = useState("");
  const [planType, setPlanType] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lasttname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const IndividualPlan = () => {
    setPrice(55);
    setPlanType("Individual");
  };
  const PlusPlan = () => {
    setPrice(80);
    setPlanType("BeFit Plus");
  };
  const VipPlan = () => {
    setPrice(98);
    setPlanType("VIP");
  };

  const addDetails = () => {
    let flag = false;
    let data = {
      price,
      planType,
      fullname: `${firstname} ${lasttname}`,
      email,
    };
    if (data.fullname !== "" && data.email !== "") {
      // for(let i=0;i<Data.length;i++){

      // }
      dispatch(postMembership(data));
      // window.alert("Plan added successfully");
      toast({
        title: "Plan Successfully Applied",
        description: "Congratualation Now You Are a Member",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      // console.log(Data)
    } else {
      window.alert("Something went wrong");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <>
      <Navbar />
      <hr
        style={{
          marginTop: "0px",
          border: "0",
          height: "2px",
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))",
        }}
      ></hr>
      <Box
        backgroundColor="#091315"
        paddingTop={{ xl: "6%", md: "7%", base: "15%", sm: "12%" }}
      >
        <VStack spacing={2} textAlign="center">
          <Heading marginTop="15px" as="h1" color="#E1F4F6">
            PRICING PLAN FOR TEAMS OF ALL SIZES
          </Heading>
          <Text fontSize="lg" color="#E1F4F6">
            Start with 14-day free trial. No credit card needed. Cancel at
            anytime.
          </Text>
        </VStack>
        <Stack
          width="80%"
          margin="auto"
          direction={{ base: "column", md: "row", xl: "row" }}
          textAlign={{ base: "center", md: "center", xl: "center" }}
          justifyContent={{ base: "center", md: "center", xl: "center" }}
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          <PriceWrapper>
            <Box border="solid #27596A" color="#E1F4F6" borderRadius="10px">
              <Box py={4} px={12} textAlign="start" bgColor="#06181C">
                <Text fontWeight="500" fontSize="x-large" color="#2FB0DA">
                  Individual
                </Text>
                <HStack justifyContent="flex-start">
                  <Text fontSize="x-large" fontWeight="600" color="#E1F4F6">
                    $
                  </Text>
                  <Text fontSize="x-large" fontWeight="900" color="#E1F4F6">
                    55
                  </Text>
                  <Text fontSize="3xl" color="gray">
                    /month
                  </Text>
                </HStack>
              </Box>
              <VStack bgColor="#091315" py={4} borderBottomRadius={"xl"}>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon
                      as={FaCheckCircle}
                      color="#2FB0DA"
                      marginRight="5px"
                    />
                    Access of Areas
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaCheckCircle}
                      color="#2FB0DA"
                      marginRight="5px"
                    />
                    Initial Personal Tarining
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaCheckCircle}
                      color="#2FB0DA"
                      marginRight="5px"
                    />
                    Unlimited Standard Classes
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button
                    onMouseEnter={IndividualPlan}
                    onClick={onOpen}
                    w="full"
                    colorScheme="red"
                    color="#06181C"
                    bgColor="#2FB0DA"
                    width="90%"
                    padding="5px"
                    marginTop="20%"
                    marginBottom="8%"
                    fontWeight="bold"
                    cursor="pointer"
                    borderRadius="5px"
                  >
                    MONTHLY BILLING
                  </Button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>

          <PriceWrapper>
            <Box
              position="relative"
              border="solid #27596A"
              color="#E1F4F6"
              borderRadius="10px"
            >
              <Box
                position="absolute"
                top="-25px"
                left="50%"
                style={{ transform: "translate(-50%)" }}
              >
                <Text
                  textTransform="uppercase"
                  bgColor="#E65100"
                  px={3}
                  py={2}
                  color="black"
                  fontSize="sm"
                  fontWeight="600"
                  borderRadius="5px"
                >
                  Most Popular
                </Text>
              </Box>
              <Box py={4} px={12} textAlign="start" bgColor="#06181C">
                <Text fontWeight="500" fontSize="x-large" color="#2FB0DA">
                  BeFit Plus
                </Text>
                <HStack justifyContent="flex-start">
                  <Text fontSize="x-large" fontWeight="600" color="#E1F4F6">
                    $
                  </Text>
                  <Text fontSize="x-large" fontWeight="900" color="#E1F4F6">
                    80
                  </Text>
                  <Text fontSize="3xl" color="gray">
                    /month
                  </Text>
                </HStack>
              </Box>
              <VStack bgColor="#091315" py={4} borderBottomRadius={"xl"}>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon
                      as={FaCheckCircle}
                      color="#2FB0DA"
                      marginRight="5px"
                    />
                    Access of Areas
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaCheckCircle}
                      color="#2FB0DA"
                      marginRight="5px"
                    />
                    Initial Personal Training
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaCheckCircle}
                      color="#2FB0DA"
                      marginRight="5px"
                    />
                    Unlimited Standard Classes
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaCheckCircle}
                      color="#2FB0DA"
                      marginRight="5px"
                    />
                    24 Hour Support Responce Time
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaCheckCircle}
                      color="#2FB0DA"
                      marginRight="5px"
                    />
                    Complimentory 3D Body Scan
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button
                    onMouseEnter={PlusPlan}
                    onClick={onOpen}
                    w="full"
                    colorScheme="red"
                    color="#06181C"
                    bgColor="#2FB0DA"
                    width="90%"
                    padding="5px"
                    marginTop="20%"
                    marginBottom="8%"
                    fontWeight="bold"
                    cursor="pointer"
                    borderRadius="5px"
                  >
                    MONTHLY BILLING
                  </Button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
          <PriceWrapper>
            <Box
              width="100%"
              bgColor="#06181C"
              border="solid #27596A"
              color="#E1F4F6"
              borderRadius="10px"
            >
              <Box py={4} px={12} textAlign="start">
                <Text fontWeight="500" fontSize="x-large" color="#2FB0DA">
                  VIP
                </Text>
                <HStack justifyContent="flex-start">
                  <Text fontSize="x-large" fontWeight="600">
                    $
                  </Text>
                  <Text fontSize="x-large" fontWeight="900">
                    98
                  </Text>
                  <Text fontSize="3xl" color="gray">
                    /month
                  </Text>
                </HStack>
              </Box>
              <VStack bgColor="#091315" py={4} borderBottomRadius={"xl"}>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon
                      as={FaCheckCircle}
                      color="#2FB0DA"
                      marginRight="5px"
                    />
                    Access of Areas
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaCheckCircle}
                      color="#2FB0DA"
                      marginRight="5px"
                    />
                    Initial Personal Training
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={FaCheckCircle}
                      color="#2FB0DA"
                      marginRight="5px"
                    />
                    24 Hour Support Responce Time
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button
                    onMouseEnter={VipPlan}
                    onClick={onOpen}
                    colorScheme="red"
                    color="#06181C"
                    bgColor="#2FB0DA"
                    width="90%"
                    padding="5px"
                    marginTop="20%"
                    marginBottom="8%"
                    fontWeight="bold"
                    cursor="pointer"
                    borderRadius="5px"
                  >
                    MONTHLY BILLING
                  </Button>

                  <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    size={"medium"}
                  >
                    {/* <ModalOverlay /> */}
                    <ModalContent
                      marginBottom="100px"
                      paddingTop="50px"
                      paddingLeft="50px"
                      ml="200px"
                      mr="200px"
                      bgColor="#06181C"
                      width="500px"
                      borderRadius="30px"
                      color="white"
                      border="solid"
                      borderColor="#2FB0DA"
                      mt="100px"
                      height="80%"
                    >
                      {/* <ModalCloseButton paddingRight="20px"/> */}

                      <ModalBody paddingRight="50px">
                        <Text color="#2FB0DA" fontSize="30px">
                          Your Plan{" "}
                        </Text>
                        <Text fontSize="20px">Plan Type : {planType}</Text>

                        <Text fontSize="20px">Price : ${price}</Text>

                        <ModalHeader fontSize="30px" paddingLeft="0px">
                          Entre Your Details
                        </ModalHeader>
                        <FormControl paddingRight={2}>
                          <FormLabel>First name</FormLabel>
                          <Input
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            ref={initialRef}
                            placeholder="First name"
                          />
                        </FormControl>

                        <FormControl paddingRight={2} mt="20px">
                          <FormLabel>Last name</FormLabel>
                          <Input
                            value={lasttname}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            placeholder="Last name"
                          />
                        </FormControl>
                        <FormControl paddingRight={2} mt="20px">
                          <FormLabel>Email</FormLabel>
                          <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                          />
                        </FormControl>
                      </ModalBody>

                      <ModalFooter paddingLeft="60px">
                        <Button
                          position="absolute"
                          top="520px"
                          borderRadius="7px"
                          width="100px"
                          height="40px"
                          bgColor="#2FB0DA"
                          colorScheme="red"
                          onClick={addDetails}
                        >
                          Save
                        </Button>
                        <Button
                          size="md"
                          bgColor="#2FB0DA"
                          mt="-300%"
                          mr="-2%"
                          colorScheme="red"
                          onClick={onClose}
                        >
                          X
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
        </Stack>
      </Box>
      
    </>
  );
}
