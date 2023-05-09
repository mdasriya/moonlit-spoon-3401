import React from 'react'

import { Box, Button,  Heading,  Image,  Text } from '@chakra-ui/react'
import AboutUs from './AboutUs'
import Coaches from './Coaches'
import Navbar from '../Components/Navbar'
import Contact from './Contact'
import Footer1 from '../Components/Footer1'
const Home = () => {
    
    return (
        <>
        <Navbar/>
        <Box backgroundColor="#091315">
            <Box paddingTop={{sm:"10px",base:"10px"}} mt={["90px","95px","90px","80px","80px",]} display="flex" justifyContent="space-around" alignItems="center" backgroundColor="black" flexDirection={{xl:"row",sm:"column",md:"row",base:"column"}} width="100%">
                <Box width={["60%","50%","60%","50%","50%",]} display="flex" flexDirection="column" alignItems="start" marginLeft="5%">
                    <Heading color="white">
                        CREATE THE PATH TO YOURE EMPOWER
                    </Heading>
                    <Text marginTop="10px" color="white">
                        GET MORE WITH LOW-COST TRAINING PROGRAMS AND ADVACED FEATURES
                    </Text>
                    <Button marginTop="10px" cursor="pointer" width={["90px","90px","90px","90px","90px",]} borderRadius="2px" backgroundColor="#2FD0DA" border="none" padding="5px" color="#06181C" fontWeight="bold" position="static">JOIN NOW</Button>
                    <br />
                    <Box alignItems="center" width={["55%","55%","55%","35%","45%"]}  display="flex" justifyContent={{sm:'space-between',md:"space-between",base:"space-between",xl:"space-between"}}>
                    <Image width="60px" src='https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F67979fc2-9bc6-4ef1-a91a-9f8129c57645_1500x1500.jpeg'></Image>
                    <Image width="60px" src='https://thumbs.dreamstime.com/b/algeria-map-collection-253453223.jpg'></Image>
                    <Image width="60px" src='https://logos-world.net/wp-content/uploads/2020/04/Puma-Symbol.jpg'></Image>
                    <Image  width="60px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcopZiM1Ib6yZrqDX1yh0pwJ2NVklCWWpuDg&usqp=CAU'></Image>
                    </Box>
                    
                    
                </Box>
                <Image width={["80%","50%","60%","50%","50%",]} src='https://cdn.shopify.com/s/files/1/0504/5357/7879/articles/cef7245a383825edafdd44c054496756.jpg?v=1667233332' ></Image>

            </Box>

            <hr style={{
                marginTop: "0px",
                border: "0",
                height: "2px",
                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))"
            }}></hr>
           
            <AboutUs />
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
            <br />
            <Box>
                <Box  fontSize="18px" paddingLeft="5%" color="#E1F4F6" textAlign="start" marginRight="10%"  width={["70%","70%","60%","50%","65%",]} marginLeft={{sm:'22%',md:"0%",base:"22%"}}>
                    <Heading>GYM HALLS</Heading>
                    <Text marginTop="10px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt odio voluptas harum ea, expedita dolor accusantium possimus corrupti necessitatibus nesciunt, quas consequatur optio architecto facilis suscipit commodi quis, repudiandae tempore. Delectus a quaerat eaque pariatur!</Text>
                </Box>
                <br />
                <br />
                <br />
                <Box >
                    <Box className="parent"  top="0" bottom="0" display="flex" width="100%" margin="auto" justifyContent="center" color="#2FB0DA" flexDirection={{xl:"row",sm:"column",md:"row",base:"column"}} alignItems={{xl:"flex-start",sm:"center",md:"flex-start",base:"center"}}>
                        <Box textAlign="start" width={["45%","45%","30%","30%",]} >
                            <Image width="100%" className="image1" src="https://gray-kauz-prod.cdn.arcpublishing.com/resizer/DAHKaf3_iD_x8AqbiNnSGdhuwcQ=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/GMXYEKQVPNEBLALOWWECZV5Q7A.jpg" height="250px"></Image>
                            <Text marginTop="10px">MARTIAL ARTS HALL</Text>
                            <hr style={{
                                marginTop: "0px",
                                border: "0",
                                height: "2px",
                                backgroundImage: "linear-gradient(to right,  #2FD0DA,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))"
                            }}></hr>
                        </Box>
                        <Box textAlign="start" width={["45%","45%","30%","30%",]} marginTop="20px">
                            <Image width="100%" className="image2" src="https://images.squarespace-cdn.com/content/v1/582173226b8f5b121612ca03/1675724866236-GUX1ULD6NI5BPP6R0ASF/Gym_Hawthorn_Group_Classes-77.jpg" height="250px"></Image>
                            <Text marginTop="10px">GROUP TRAINING HALL</Text>
                            <hr style={{
                                marginTop: "0px",
                                border: "0",
                                height: "2px",
                                backgroundImage: "linear-gradient(to right,  #2FD0DA,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))"
                            }}></hr>
                        </Box>
                        <Box textAlign="start" width={["45%","45%","30%","30%",]} marginTop="40px">
                            <Image width="100%" className="image2" src="https://content.jdmagicbox.com/comp/mumbai/z6/022pxx22.xx22.210217121936.p9z6/catalogue/yoga365-borivali-west-mumbai-yoga-centres-wkyqftocqa.jpg" height="250px"></Image>
                            <Text marginTop="10px">YOGA HALL</Text>
                            <hr style={{
                                marginTop: "0px",
                                border: "0",
                                height: "2px",
                                backgroundImage: "linear-gradient(to right,  #2FD0DA,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))"
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
           
            <hr style={{
                marginTop: "0px",
                border: "0",
                height: "2px",
                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))"
            }}></hr>
            <br />
            <br />
            <br />
            <br />
            <Box>
                <Box marginLeft={{sm:'22%',md:"0%",base:"22%"}} width={["70%","70%","60%","50%","65%",]} fontSize="18px" paddingLeft="5%" color="#E1F4F6" textAlign="start" marginRight="10%">
                    <Heading marginBottom="10px">GROUP TRAININGS</Heading>
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt odio voluptas harum ea, expedita dolor accusantium possimus corrupti necessitatibus nesciunt, quas consequatur optio architecto facilis suscipit commodi quis, repudiandae tempore. Delectus a quaerat eaque pariatur!</Text>
                </Box>
                <br />
                <br />
                <br />
                <Box display="flex" flexDirection={{xl:"row",sm:"column",md:"row",base:"column"}} alignItems={{xl:"flex-start",sm:"center",md:"flex-start",base:"center"}} justifyContent="center" gap="12px" color="#2FD0DA" textAlign="start">
                    <Box width={["42%","45%","22%","22%",]}>
                        <Image borderRadius="15px" height="250px" width="100%" src='https://static.insydo.com/wp-content/uploads/2017/07/aqua-biking-1280x854.jpg'></Image>
                        <Text marginTop="10px">AQUA SPINNING</Text>
                        <hr style={{
                            marginTop: "0px",
                            border: "0",
                            height: "2px",
                            backgroundImage: "linear-gradient(to right,  #2FD0DA,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))"
                        }}></hr>
                    </Box>
                    <Box width={["45%","45%","22%","22%",]} >
                        <Image borderRadius="15px" height="250px" width="100%" src='https://media.gq-magazine.co.uk/photos/5d1390f3f81f9c550a603bbc/16:9/pass/Pilates_GQ_30Mar11.jpg'></Image>
                        <Text marginTop="10px">PILATES</Text>
                        <hr style={{
                            marginTop: "0px",
                            border: "0",
                            height: "2px",
                            backgroundImage: "linear-gradient(to right,  #2FD0DA,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))"
                        }}></hr>
                    </Box>
                    <Box width={["45%","45%","22%","22%",]} >
                        <Image borderRadius="15px" height="250px" width="100%" src='https://www.fitnessfirst.com.sg/-/media/project/evolution-wellness/fitness-first/south-east-asia/singapore/classes/hatha-yoga/hatha-yoga-fb.jpg'></Image>
                        <Text marginTop="10px">HATHA YOGA</Text>
                        <hr style={{
                            marginTop: "0px",
                            border: "0",
                            height: "2px",
                            backgroundImage: "linear-gradient(to right,  #2FD0DA,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))"
                        }}></hr>
                    </Box>
                    <Box width={["45%","45%","22%","22%",]} >
                        <Image borderRadius="15px" height="250px" width="100%" src='https://t4.ftcdn.net/jpg/01/49/42/27/360_F_149422723_Ie6ik2McMFZ344Gy7yCyZ9Il4n19J44R.jpg'></Image>
                        <Text marginTop="10px">SKY JUMPING</Text>
                        <hr style={{
                            marginTop: "0px",
                            border: "0",
                            height: "2px",
                            backgroundImage: "linear-gradient(to right,  #2FD0DA,rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))"
                        }}></hr>
                    </Box>
                </Box>
            </Box>
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
            
            <Coaches />
                       
            <Contact/>
            <br />
            <br />
            <hr style={{
                marginTop: "0px",
                border: "0",
                height: "2px",
                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))"
            }}></hr>
            <Footer1/>
            </Box>
        </>


    )
}

export default Home