import React from 'react'

import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import AboutUs from './AboutUs'
import Coaches from './Coaches'
const Home = () => {
    return (
        <><hr style={{
            marginTop: "0px",
            border: "0",
            height: "2px",
            backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))"
        }}></hr>
            <Box display="flex" justifyContent="space-around" alignItems="center" backgroundColor="black">
                <Box width="50%">
                    <Heading color="white">
                        CREATE THE PATH TO YOURE EMPOWER
                    </Heading>
                    <Text color="white">
                        GET MORE WITH LOW-COST TRAINING PROGRAMS AND ADVACED FEATURES
                    </Text>
                    <Button borderRadius="2px" backgroundColor="#2FD0DA" border="none" padding="5px">JOIN NOW</Button>
                    <br />
                    <Image></Image>
                    <Image></Image>
                    <Image></Image>
                </Box>
                <Image width="50%" src='https://cdn.shopify.com/s/files/1/0504/5357/7879/articles/cef7245a383825edafdd44c054496756.jpg?v=1667233332' ></Image>

            </Box>
            <hr style={{
                marginTop: "0px",
                border: "0",
                height: "2px",
                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))"
            }}></hr>
            <AboutUs />
            <hr style={{
                marginTop: "0px",
                border: "0",
                height: "2px",
                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))"
            }}></hr>
            <br />
            <br />
            <br />
            <Box>
                <Box fontSize="18px" paddingLeft="5%" color="#E1F4F6" textAlign="start" marginRight="10%">
                    <Heading>GYM HALLS</Heading>
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt odio voluptas harum ea, expedita dolor accusantium possimus corrupti necessitatibus nesciunt, quas consequatur optio architecto facilis suscipit commodi quis, repudiandae tempore. Delectus a quaerat eaque pariatur!</Text>
                </Box>
                <br />
                <br />
                <br />
                <Box >
                    <Box className="parent" position="relative" top="0" bottom="0" display="flex" width="100%" margin="auto" justifyContent="center" color="#2FB0DA">
                        <Box textAlign="start" width="30%" position="relative" top="0" bottom="0">
                            <Image width="100%" className="image1" src="https://gray-kauz-prod.cdn.arcpublishing.com/resizer/DAHKaf3_iD_x8AqbiNnSGdhuwcQ=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/GMXYEKQVPNEBLALOWWECZV5Q7A.jpg" height="250px"></Image>
                            <Text>MARTIAL ARTS HALL</Text>
                            <hr style={{
                                marginTop: "0px",
                                border: "0",
                                height: "2px",
                                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))"
                            }}></hr>
                        </Box>
                        <Box textAlign="start" width="30%" position="relative" top="20" bottom="30">
                            <Image width="100%" className="image2" src="https://images.squarespace-cdn.com/content/v1/582173226b8f5b121612ca03/1675724866236-GUX1ULD6NI5BPP6R0ASF/Gym_Hawthorn_Group_Classes-77.jpg" height="250px"></Image>
                            <Text>GROUP TRAINING HALL</Text>
                            <hr style={{
                                marginTop: "0px",
                                border: "0",
                                height: "2px",
                                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))"
                            }}></hr>
                        </Box>
                        <Box textAlign="start" width="30%" position="relative" top="40" bottom="50">
                            <Image width="100%" className="image2" src="https://content.jdmagicbox.com/comp/mumbai/z6/022pxx22.xx22.210217121936.p9z6/catalogue/yoga365-borivali-west-mumbai-yoga-centres-wkyqftocqa.jpg" height="250px"></Image>
                            <Text >YOGA HALL</Text>
                            <hr style={{
                                marginTop: "0px",
                                border: "0",
                                height: "2px",
                                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))"
                            }}></hr>
                        </Box>


                    </Box>
                </Box>
            </Box>
            <br />
            <br />
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
            <br />
            <br />
            <br />
            <Box>
                <Box fontSize="18px" paddingLeft="5%" color="#E1F4F6" textAlign="start" marginRight="10%">
                    <Heading>GROUP TRAININGS</Heading>
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt odio voluptas harum ea, expedita dolor accusantium possimus corrupti necessitatibus nesciunt, quas consequatur optio architecto facilis suscipit commodi quis, repudiandae tempore. Delectus a quaerat eaque pariatur!</Text>
                </Box>
                <br />
                <br />
                <br />
                <Box display="flex" justifyContent="center" gap="12px" color="#2FD0DA" textAlign="start">
                    <Box width="22%" >
                        <Image borderRadius="15px" height="250px" width="100%" src='https://static.insydo.com/wp-content/uploads/2017/07/aqua-biking-1280x854.jpg'></Image>
                        <Text>AQUA SPINNING</Text>
                            <hr style={{
                                marginTop: "0px",
                                border: "0",
                                height: "2px",
                                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))"
                            }}></hr>
                    </Box>
                    <Box width="22%" >
                        <Image borderRadius="15px" height="250px" width="100%" src='https://media.gq-magazine.co.uk/photos/5d1390f3f81f9c550a603bbc/16:9/pass/Pilates_GQ_30Mar11.jpg'></Image>
                        <Text>PILATES</Text>
                            <hr style={{
                                marginTop: "0px",
                                border: "0",
                                height: "2px",
                                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))"
                            }}></hr>
                    </Box>
                    <Box width="22%" >
                        <Image borderRadius="15px" height="250px" width="100%" src='https://www.fitnessfirst.com.sg/-/media/project/evolution-wellness/fitness-first/south-east-asia/singapore/classes/hatha-yoga/hatha-yoga-fb.jpg'></Image>
                        <Text>HATHA YOGA</Text>
                            <hr style={{
                                marginTop: "0px",
                                border: "0",
                                height: "2px",
                                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))"
                            }}></hr>
                    </Box>
                    <Box width="22%" >
                        <Image borderRadius="15px" height="250px" width="100%" src='https://t4.ftcdn.net/jpg/01/49/42/27/360_F_149422723_Ie6ik2McMFZ344Gy7yCyZ9Il4n19J44R.jpg'></Image>
                        <Text>SKY JUMPING</Text>
                            <hr style={{
                                marginTop: "0px",
                                border: "0",
                                height: "2px",
                                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))"
                            }}></hr>
                    </Box>
                </Box>
            </Box>
            <br />
            <br />
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
            <br />
            <br />
            <br />
            <Coaches/>
        </>


    )
}

export default Home