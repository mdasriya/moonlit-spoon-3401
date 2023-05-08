import React from 'react'

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

const Coaches = () => {
    return (
        <div id='coaches'>
            <Box paddingTop="8%">
                <Box fontSize="18px" paddingLeft="5%" color="#E1F4F6" textAlign="start" marginRight="10%" width={["70%","60%","70%","70%","65%",]} marginLeft={{sm:'22%',md:"0%",base:"22%"}}>
                    <Heading >COACHES</Heading>
                    
                    <Text marginTop="10px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt odio voluptas harum ea, expedita dolor accusantium possimus corrupti necessitatibus nesciunt, quas consequatur optio architecto facilis suscipit commodi quis, repudiandae tempore. Delectus a quaerat eaque pariatur!</Text>
                </Box>
                <br />
                <br />
                <br />
                <Box display="flex" flexDirection={{xl:"row",sm:"column",md:"row",base:"column"}} alignItems={{xl:"flex-start",sm:"center",md:"flex-start",base:"center"}} justifyContent="space-around" gap="12px" color="#E1F4F6" textAlign="center" marginLeft="3%" marginRight="3%">
                    <Box width={["45%","45%","20%","20%",]} >
                        <Image borderRadius="0px 35px 0px 35px" height="250px" width="100%" src='https://media.istockphoto.com/id/1369509413/photo/shot-of-a-handsome-young-man-taking-a-break-during-his-workout.jpg?b=1&s=170667a&w=0&k=20&c=MC2um7AEeVfi6Omt4i4ygVzO42upQt4jvI32tHgt0OE='></Image>
                        <Text marginTop="10px">JIM HOLLAND</Text>
                        
                        <p>certified personal trainer</p>
                        <Flex color="#2FD0DA" justifyContent="center">
                            <Text marginRight="10px">★</Text>
                            <Text marginRight="10px">★</Text>
                            <Text marginRight="10px">★</Text>
                            <Text marginRight="10px">★</Text>
                            <Text marginRight="10px">★</Text>
                        </Flex>
                    </Box>
                    <Box width={["45%","45%","20%","20%",]} >
                        <Image borderRadius="0px 35px 0px 35px" height="250px" width="100%" src='https://media.istockphoto.com/id/852401732/photo/happy-personal-trainer-working-at-the-gym.jpg?b=1&s=170667a&w=0&k=20&c=6OZXbwAbJndJ8kvWuusRqjgBxomisfcm8LNtDH2eurM='></Image>
                        <Text marginTop="10px">BROOKLINE SIMMONS</Text>
                        <p>certified personal trainer</p>
                        <Flex color="#2FD0DA" justifyContent="center">
                            <Text marginRight="10px">★</Text>
                            <Text marginRight="10px">★</Text>
                            <Text marginRight="10px">★</Text>
                            <Text marginRight="10px">★</Text>
                            <Text marginRight="10px">★</Text>
                        </Flex>
                    </Box>
                    <Box width={["45%","45%","20%","20%",]} >
                        <Image borderRadius="0px 35px 0px 35px" height="250px" width="100%" src='https://media.istockphoto.com/id/1324042769/photo/confident-gym-owner.jpg?b=1&s=170667a&w=0&k=20&c=iuz1kcCB1w8CBf44nub1mYr-F--88dLRjJvM-5uPahY='></Image>
                        <Text marginTop="10px">RALF EDWARDS</Text>
                        <p>certified personal trainer</p>
                        <Flex color="#2FD0DA" justifyContent="center">
                            <Text marginRight="10px">★</Text>
                            <Text marginRight="10px">★</Text>
                            <Text marginRight="10px">★</Text>
                            <Text marginRight="10px">★</Text>
                            <Text marginRight="10px">★</Text>
                        </Flex>
                    </Box>
                    <Box width={["45%","45%","20%","20%",]} >
                        <Image borderRadius="0px 35px 0px 35px" height="250px" width="100%" src='https://media.istockphoto.com/id/1132187883/photo/young-asian-healthy-and-happy-beautiful-fitness-female-athlete-in-sportswear-having-arms.jpg?s=612x612&w=0&k=20&c=KmlU9iGnRlmgyAbTTEX7wNwaQmmllR7zb8GKGET7k9M='></Image>
                        <Text marginTop="10px">JANE COOPER</Text>
                        <p>certified personal trainer</p>
                        <Flex color="#2FD0DA" justifyContent="center">
                            <Text marginRight="10px">★</Text>
                            <Text marginRight="10px">★</Text>
                            <Text marginRight="10px">★</Text>
                            <Text marginRight="10px">★</Text>
                            <Text marginRight="10px">★</Text>
                        </Flex>
                    </Box>
                </Box>
            </Box>
            <br />
            <br />
            <br />
            <br />
    
            <hr style={{
                marginTop: "0px",
                border: "0",
                height: "2px",
                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))"
            }}></hr>
        </div>
    )
}

export default Coaches