import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const AboutUs = () => {
    return (
        <Box marginTop="5%" paddingTop="8%" paddingLeft="5%" width="100%" backgroundImage="https://hips.hearstapps.com/hmg-prod/images/athlete-in-a-gym-royalty-free-image-1651055064.jpg" id='about-us'>
            <Box height="600px" marginLeft={{sm:'22%',md:"0%",base:"22%"}}>
                <Box textAlign="start" color="white" width={["70%","70%","60%","50%","45%",]} bgPosition="center" fontSize="18px">
                    <Heading>ABOUT US</Heading>
                    <Text>
                        Welcome to our gym website! We are a premier fitness facility dedicated to helping you achieve your health and fitness goals. Our gym is equipped with state-of-the-art equipment and offers a variety of services and amenities to support your fitness journey.
                        </Text>
                        <Text>
                        Our team of certified personal trainers is passionate about helping you reach your full potential. Whether you're just starting out or looking to take your fitness to the next level, our trainers can provide personalized coaching and guidance to help you achieve your goals.</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutUs