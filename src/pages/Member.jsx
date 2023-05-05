
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
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper({ children }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    );
}

export default function Member() {
    return (
        <>
        <hr style={{
            marginTop: "0px",
            border: "0",
            height: "2px",
            backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0), #2FD0DA, rgba(0, 0, 0, 0))"
        }}></hr> 
        <Box py={12}>
            <VStack spacing={2} textAlign="center" marginBottom="20px">
                <Heading as="h1" color="#E1F4F6">
                    PRICING PLAN FOR TEAMS OF ALL SIZES
                </Heading>
                <Text fontSize="lg" color="#E1F4F6">
                    Start with 14-day free trial. No credit card needed. Cancel at
                    anytime.
                </Text>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}>
                <PriceWrapper>
                    <Box border="solid #27596A" color="#E1F4F6" marginRight="10px" borderRadius="10px">
                        <Box py={4} px={12} textAlign="start" bgColor="#06181C">
                            <Text fontWeight="500" fontSize="x-large" color="#2FB0DA" >
                                Individual
                            </Text>
                            <HStack justifyContent="flex-start" >
                                <Text fontSize="x-large" fontWeight="600" color="#E1F4F6">
                                    $
                                </Text>
                                <Text fontSize="x-large" fontWeight="900" color="#E1F4F6">55
                                </Text>
                                <Text fontSize="3xl" color="gray">
                                    /month
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bgColor="#091315"
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="#2FB0DA" marginRight="5px" />
                                    Access of Areas
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="#2FB0DA" marginRight="5px"/>
                                    Initial Personal Tarining
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="#2FB0DA" marginRight="5px"/>
                                    Unlimited Standard Classes
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" colorScheme="red" variant="outline" color="#06181C" bgColor="#E1F4F6" width="90%" padding="5px" marginTop="20%" marginBottom="8%" fontWeight="bold" cursor="pointer" borderRadius="5px">
                                    MONTHLY BILLING
                                </Button>
                            </Box>
                        </VStack>
                    </Box>

                </PriceWrapper>

                <PriceWrapper>
                    <Box position="relative" border="solid #27596A" color="#E1F4F6" marginRight="10px" borderRadius="10px">
                        <Box
                            position="absolute"
                            top="-25px"
                            left="50%"
                            style={{ transform: 'translate(-50%)' }} >
                            <Text
                                textTransform="uppercase"
                                bgColor="#E65100"
                                px={3}
                                py={1}
                                color="black"
                                fontSize="sm"
                                fontWeight="600"
                                borderRadius="5px">
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
                        <VStack
                            bgColor="#091315"
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="#2FB0DA" marginRight="5px"/>
                                    Access of Areas
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="#2FB0DA" marginRight="5px"/>
                                    Initial Personal Training
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="#2FB0DA" marginRight="5px"/>
                                    Unlimited Standard Classes
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="#2FB0DA" marginRight="5px"/>
                                    24 Hour Support Responce Time
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="#2FB0DA" marginRight="5px"/>
                                    Complimentory 3D Body Scan
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" colorScheme="red" color="#06181C" bgColor="#2FB0DA" width="90%" padding="5px" marginTop="20%" marginBottom="8%" fontWeight="bold" cursor="pointer" borderRadius="5px">
                                MONTHLY BILLING
                                </Button>
                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>
                <PriceWrapper >
                    <Box bgColor="#06181C" border="solid #27596A" color="#E1F4F6" borderRadius="10px">
                        <Box py={4} px={12} textAlign="start">
                            <Text fontWeight="500" fontSize="x-large" color="#2FB0DA">
                                VIP
                            </Text>
                            <HStack justifyContent="flex-start" >
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
                        <VStack
                            bgColor="#091315"
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="#2FB0DA" marginRight="5px"/>
                                    Access of Areas
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="#2FB0DA" marginRight="5px"/>
                                    Initial Personal Training
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="#2FB0DA" marginRight="5px"/>
                                    24 Hour Support Responce Time
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button variant='ghost' colorScheme="red" color="#06181C" bgColor="#E1F4F6" width="90%" padding="5px" marginTop="20%" marginBottom="8%" fontWeight="bold" cursor="pointer" borderRadius="5px">
                                MONTHLY BILLING
                                </Button>
                            </Box>
                        </VStack>
                    </Box>

                </PriceWrapper>
            </Stack>
        </Box>
        </>
        
    );
}