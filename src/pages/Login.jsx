import { Navigate, useLocation } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/authReducer/action";
import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
  Spinner,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const isLoading = useSelector((store) => store.authReducer.isLoading);

  // const Toast = () => {
  //   return toast({
  //     title: "Account created.",
  //     description: "We've created your account for you.",
  //     status: "success",
  //     duration: 5000,
  //     position: "top",
  //     isClosable: true,
  //   });
  // };
  // function Toast1() {
  //   return toast({
  //     title: "Wrong.",
  //     description: "We've created your account for you.",
  //     status: "success",
  //     duration: 3000,
  //     position: "top",
  //     isClosable: true,
  //   });
  // }

  function handleClick(e) {
    e.preventDefault();
    const userDataObj = {
      email,
      password,
    };
    dispatch(login(userDataObj)).then(() => navigate(location.state));
    // {
    //   token ? Toast() : Toast1();
    // }
    setEmail("");
    setPassword("");

    // navigate("/");
  }

  return (
    <>
      <Button ref={btnRef} zIndex={200} colorScheme="teal" onClick={onOpen}></Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex
            minH={"80vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            {/* <h2>{isAuth ? "Login Successful!!!" : "Login To Continue"}</h2> */}

            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"}>
                  {isAuth ? "Login Successful!!!" : "Sign in to your account"}
                </Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  to enjoy all of our cool{" "}
                  <Link color={"blue.400"}>features</Link> ✌️
                </Text>
              </Stack>
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      placeholder="Enter Email Address"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Checkbox>Remember me</Checkbox>
                      <Link color={"blue.400"}>Forgot password?</Link>
                    </Stack>
                    <Link href="#" style={{ textDecoration: "none" }}>
                      <Button
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                        onClick={handleClick}
                      >
                        {isAuth ? "Log Out" : "Sign in"}{" "}
                        {isLoading ? <Spinner size="md" /> : null}
                      </Button>
                    </Link>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Login;
