import React from 'react'

import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
const Home = () => {
    return (
        <>
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
                marginTop:"0px",
                border: "0",
                height: "3px",
                backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))"
            }}></hr>
        </>


    )
}

export default Home