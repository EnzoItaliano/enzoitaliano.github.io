import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import CleanDeskImage from '../assets/CleanDeskPolicy_221.jpg';

const About = () => (
    <Box display="flex" alignItems="center" id="about">
        <Image
            src={CleanDeskImage}
            alt="Clean Desk"
            w={'50%'}
            borderRadius={'0.9375em'}
            maxW={'667px'}
        />
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            maxW="555px"
            pl={20}
        >
            <Text
                // fontSize="1.5em"
                fontSize={'2x1'}
                textAlign="left"
                w="100%"
                className="poppins-medium"
                color="rgba(173, 0, 255, 1)"
            >
                About me
            </Text>
            <Text
                // fontSize="2em"
                fontSize={'3xl'}
                textAlign="left"
                w="100%"
                className="poppins-semibold"
            >
                A committed FullStack Developer based in Bragança, Portugal{' '}
                <Image
                    src="https://pic.sopili.net/pub/emoji/twitter/2/72x72/1f1f5-1f1f9.png"
                    w={10}
                    h={10}
                    display="unset"
                />
            </Text>
            <Text
                // fontSize="1.25em"
                fontSize={'xl'}
                textAlign="left"
                w="100%"
                className="poppins-regular"
            >
                During my journey on web development, bachelor and master
                degree, it was possible to gather knowledge that would allow me
                to build amazing websites with good appearance and following the
                best code practices. My main tech technologies include Python,
                Javascript, ReactJS and SQL or NoSQL databases. I also excel as
                a collaborative team player, thriving in partnerships with
                cross-functional teams to deliver exceptional web applications.
            </Text>
        </Box>
    </Box>
);
export default About;
