import React from 'react';
import { Box, IconButton, Text } from '@chakra-ui/react';
import { GrMapLocation } from 'react-icons/gr';
import { TfiEmail } from 'react-icons/tfi';

const Contact = () => (
    <Box display="flex" flexDirection={'column'} id="contact" w={'80%'} pt={48}>
        <Text
            w={'100%'}
            textAlign={'left'}
            className="poppins-medium"
            // fontSize={'1.5em'}
            fontSize={'2x1'}
            color={'#AD00FF'}
            mb={5}
        >
            Contact me
        </Text>
        <Box display={'flex'} justifyContent={'left'}>
            <IconButton
                isRound={true}
                color="#767676"
                bgColor="black"
                as="a"
                fontSize="2em"
                href="https://github.com/your-profile"
                icon={<GrMapLocation />}
                aria-label="Location"
                h="2em"
                w="2em"
                mx={3}
            />
            <Box display={'flex'} flexDirection={'column'} mr={10}>
                <Text
                    className="poppins-medium"
                    // fontSize={'1.5em'}
                    fontSize={'2x1'}
                >
                    Location
                </Text>
                <Text
                    className="poppins-medium"
                    // fontSize={'1.25em'}
                    fontSize={'xl'}
                    color="#767676"
                >
                    Bragança, Portugal
                </Text>
            </Box>
            <IconButton
                isRound={true}
                color="#767676"
                bgColor="black"
                as="a"
                fontSize="2em"
                href="https://github.com/your-profile"
                icon={<TfiEmail />}
                aria-label="Mail"
                h="2em"
                w="2em"
                mx={3}
            />
            <Box display={'flex'} flexDirection={'column'}>
                <Text
                    className="poppins-medium"
                    // fontSize={'1.5em'}
                    fontSize={'2x1'}
                >
                    Email
                </Text>
                <Text
                    className="poppins-medium"
                    // fontSize={'1.25em'}
                    fontSize={'xl'}
                    color="#767676"
                >
                    enzo.ditaliano@gmail.com
                </Text>
            </Box>
        </Box>
    </Box>
);
export default Contact;
