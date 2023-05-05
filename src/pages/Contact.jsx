import React from 'react'
import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
const Contact = () => {
    return (
        <Box display="flex" width="100%" id='contact-us'>
            <Flex width="45%" height="550px" backgroundSize="900px 660px" backgroundImage="https://image1.masterfile.com/getImage/NjMyLTA2MzE3OTk0ZW4uMDAwMDAwMDA=ADAWK4/632-06317994en_Masterfile.jpg" flexDirection="column" paddingLeft="5%" >
                <Heading marginTop="12%" color="white">CONTACT INFO</Heading>
                <Text width="90%" color="gray" marginBottom="30px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse animi sapiente quod dolores impedit doloribus vero deserunt autem repellat modi.</Text>
                <HStack marginBottom="7px">
                    <EmailIcon color="white" />
                    <Text color="lightgray">support@website.com</Text>
                </HStack>
                <HStack>
                    <PhoneIcon color="white" />
                    <Text color="lightgray">(480) 555 0103</Text>
                </HStack>
            </Flex>
            <Flex color="white" width="45%" paddingLeft="5%" flexDirection="column">
                <Heading marginTop="10%" marginBottom="30px">SEND US A MESSAGE</Heading>
                <Box >
                    <form>
                        <div >
                            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                                <div style={{ marginRight: "10px", marginBottom: "20px" }}>
                                    <label>Your Name</label>
                                    <br />
                                    <input
                                        required
                                        style={{
                                            backgroundColor: "#091315",
                                            height: "40px",
                                            width: "240px",
                                            borderColor: "#06181C",
                                            borderRadius: "8px",
                                            marginTop: "6px",
                                            paddingLeft: "5px",
                                            color:"white"
                                        }}
                                        type="text"
                                        placeholder="Enter your name"
                                    ></input>
                                </div>
                                <div>
                                    <label>Email Address</label>
                                    <br />
                                    <input
                                        required
                                        style={{
                                            backgroundColor: "#091315",
                                            height: "40px",
                                            width: "240px",
                                            borderColor: "#06181C",
                                            borderRadius: "8px",
                                            marginTop: "6px",
                                            paddingLeft: "5px",
                                            color:"white"
                                        }}
                                        type="email"
                                        placeholder="Enter Your Email"
                                    ></input>
                                </div>
                            </div>
                            <div style={{ display: "flex", }}>
                                <div style={{ marginRight: "10px", marginBottom: "20px" }}>
                                    <label>Phone Number</label>
                                    <br />
                                    <input
                                        required
                                        style={{
                                            backgroundColor: "#091315",
                                            height: "40px",
                                            width: "240px",
                                            borderColor: "#06181C",
                                            borderRadius: "8px",
                                            marginTop: "6px",
                                            paddingLeft: "5px",
                                            color:"white"
                                        }}
                                        type="number"
                                        placeholder="Enter Your Number"
                                    ></input>
                                </div>
                                <div>
                                    <label>Subject</label>
                                    <br />
                                    <input
                                        required
                                        style={{
                                            backgroundColor: "#091315",
                                            height: "40px",
                                            width: "240px",
                                            borderColor: "#06181C",
                                            borderRadius: "8px",
                                            marginTop: "6px",
                                            paddingLeft: "5px",
                                            color:"white"
                                        }}
                                        type="text"
                                        placeholder="Type here"
                                    ></input>
                                </div>

                            </div>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <textarea
                                        required
                                        style={{
                                            backgroundColor: "#091315",
                                            height: "100px",
                                            width: "510px",
                                            borderColor: "#2FB0DA",
                                            borderRadius: "8px",
                                            marginTop: "6px",
                                            color: "gray",
                                            marginBottom:"20px",
                                            color:"white"
                                        }}
                                        rows="4"
                                        name="comment"
                                        form="usrform"
                                        placeholder="Enter message here..."
                                    ></textarea>
                                </div>

                            </div>
                            <div >
                                <input
                                    required
                                    style={{
                                        backgroundColor: "#2FB0DA",
                                        height: "40px",
                                        width: "20%",
                                        borderColor: "#06181C",
                                        borderRadius: "8px",
                                        marginTop: "6px",
                                        color: "#06181C",
                                        marginBottom: "28px",
                                        fontWeight: "bold",
                                        marginLeft: "5px",
                                        cursor: "pointer",
                                        fontSize: "18px"
                                    }}
                                    type="submit"
                                ></input>
                            </div>
                        </div>
                    </form>

                </Box>
            </Flex>
        </Box>
    )
}

export default Contact