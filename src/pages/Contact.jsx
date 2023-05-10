import React from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
export const Contact = () => {
  return (
    <Box
      paddingTop="8%"
      display="flex"
      width="100%"
      id="contact-us"
      flexDirection={{ xl: "row", sm: "column", md: "row", base: "column" }}
      marginLeft={{ sm: "22%", md: "0%", base: "22%" }}
    >
      <Flex
        width={["65%", "65%", "45%", "45%"]}
        height={{ xl: "660px", md: "600px", sm: "400px", base: "400px" }}
        opacity="2"
        backgroundSize={{
          xl: "900px 660px",
          md: "700px 600px",
          sm: "500px 400px",
          base: "400px 400px",
        }}
        backgroundImage="https://image1.masterfile.com/getImage/NjMyLTA2MzE3OTk0ZW4uMDAwMDAwMDA=ADAWK4/632-06317994en_Masterfile.jpg"
        flexDirection="column"
        paddingLeft="5%"
      >
        <Heading marginTop="12%" color="white">
          CONTACT INFO
        </Heading>
        <Text width="90%" color="gray" marginBottom="30px">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse animi
          sapiente quod dolores impedit doloribus vero deserunt autem repellat
          modi.
        </Text>
        <HStack marginBottom="7px">
          <EmailIcon color="white" />
          <Text color="lightgray">support@website.com</Text>
        </HStack>
        <HStack>
          <PhoneIcon color="white" />
          <Text color="lightgray">(480) 555 0103</Text>
        </HStack>
      </Flex>
      <Flex
        color="white"
        width={["65%", "65%", "45%", "45%"]}
        paddingLeft={{ sm: "0%", xl: "5%", md: "5%", base: "0%" }}
        flexDirection="column"
      >
        <Heading marginTop="10%" marginBottom="30px">
          SEND US A MESSAGE
        </Heading>
        <Box>
          <form>
            <div>
              <Box
                justifyContent="flex-start"
                display="flex"
                flexDirection={{
                  sm: "column",
                  md: "row",
                  xl: "row",
                  base: "column",
                }}
              >
                <div style={{ marginRight: "10px", marginBottom: "20px" }}>
                  <label>Your Name *</label>
                  <br />
                  <Input
                    required
                    width={["200px", "200px", "200px", "240px"]}
                    style={{
                      backgroundColor: "#091315",
                      height: "40px",

                      border: "solid #2FB0DA",
                      borderRadius: "8px",
                      marginTop: "6px",
                      paddingLeft: "5px",
                      color: "white",
                    }}
                    type="text"
                    placeholder="Enter your name"
                  ></Input>
                </div>
                <div>
                  <label>Email Address *</label>
                  <br />
                  <Input
                    required
                    width={["200px", "200px", "200px", "240px"]}
                    style={{
                      backgroundColor: "#091315",
                      height: "40px",

                      border: "solid #2FB0DA",
                      borderRadius: "8px",
                      marginTop: "6px",
                      paddingLeft: "5px",
                      color: "white",
                    }}
                    type="email"
                    placeholder="Enter Your Email"
                  ></Input>
                </div>
              </Box>
              <Box
                display="flex"
                flexDirection={{
                  sm: "column",
                  md: "row",
                  xl: "row",
                  base: "column",
                }}
              >
                <div style={{ marginRight: "10px", marginBottom: "20px" }}>
                  <label>Phone Number *</label>
                  <br />
                  <Input
                    required
                    width={["200px", "200px", "200px", "240px"]}
                    style={{
                      backgroundColor: "#091315",
                      height: "40px",

                      border: "solid #2FB0DA",
                      borderRadius: "8px",
                      marginTop: "6px",
                      paddingLeft: "5px",
                      color: "white",
                    }}
                    type="number"
                    placeholder="Enter Your Number"
                  ></Input>
                </div>
                <div>
                  <label>Subject *</label>
                  <br />
                  <Input
                    required
                    width={["200px", "200px", "200px", "240px"]}
                    style={{
                      backgroundColor: "#091315",
                      height: "40px",

                      border: "solid #2FB0DA",
                      borderRadius: "8px",
                      marginTop: "6px",
                      paddingLeft: "5px",
                      color: "white",
                    }}
                    type="text"
                    placeholder="Type here"
                  ></Input>
                </div>
              </Box>
              <div style={{ display: "flex" }}>
                <div>
                  <Textarea
                    required
                    width={["200px", "200px", "415px", "495px"]}
                    style={{
                      backgroundColor: "#091315",
                      height: "100px",

                      border: "solid #2FB0DA",
                      borderRadius: "8px",
                      marginTop: "6px",
                      color: "gray",
                      marginBottom: "20px",
                      color: "white",
                    }}
                    rows="4"
                    name="comment"
                    form="usrform"
                    placeholder="Enter message here..."
                  ></Textarea>
                </div>
              </div>
              <div>
                <Input
                  variant="outline"
                  required
                  width={["90px", "90px", "90px", "90px", "90px"]}
                  style={{
                    backgroundColor: "#2FB0DA",
                    height: "40px",
                    textAlign: "center",
                    border: "solid #2FB0DA",
                    borderRadius: "8px",
                    marginTop: "6px",
                    color: "#06181C",
                    marginBottom: "28px",
                    fontWeight: "bold",
                    marginLeft: "5px",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                  type="submit"
                ></Input>
              </div>
            </div>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
