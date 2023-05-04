import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const AboutUs = () => {
    return (
        <Box paddingLeft="5%" width="100%" backgroundImage="https://hips.hearstapps.com/hmg-prod/images/athlete-in-a-gym-royalty-free-image-1651055064.jpg">
            <Box height="600px" display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                <Box textAlign="start" color="white" width="40%" bgPosition="center" fontSize="18px">
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