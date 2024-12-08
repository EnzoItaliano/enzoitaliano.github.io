import React from 'react';
import {
    Box,
    Button,
    Text,
    Avatar,
    HStack,
    IconButton,
} from '@chakra-ui/react';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

const Header = () => (
    <Box display="flex" justifyContent="center" alignItems="center" id="header">
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            maxW="700px"
        >
            <Text
                // fontSize="4.5em"
                fontSize="7xl"
                textAlign="left"
                w="100%"
                className="poppins-regular"
            >
                <Text display="inline" color="#AD00FF">
                    FullStack
                </Text>{' '}
                Developer
            </Text>
            <Text
                mt={2}
                textAlign="left"
                className="poppins-regular"
                // fontSize="2.25em"
                fontSize="4xl"
            >
                Hi, I&apos;m Enzo Italiano. A passionate FullStack Developer
                based in Bragança, Portugal. 📍
            </Text>
            <HStack mt={4} textAlign="left" w="100%">
                <IconButton
                    isRound={true}
                    color="#AD00FF"
                    bgColor="black"
                    as="a"
                    fontSize="1.5em"
                    // fontSize={'2x1'}
                    href="https://github.com/your-profile"
                    icon={<FaGithubAlt />}
                    aria-label="GitHub"
                    h="2em"
                    w="2em"
                />
                <IconButton
                    isRound={true}
                    color="#AD00FF"
                    bgColor="black"
                    as="a"
                    fontSize="1.5em"
                    // fontSize={'2x1'}
                    href="https://linkedin.com/in/your-profile"
                    icon={<FaLinkedinIn />}
                    aria-label="LinkedIn"
                    h="2em"
                    w="2em"
                />
                <Button
                    as="a"
                    href="/path-to-your-cv"
                    color="#AD00FF"
                    className="poppins-regular"
                    fontSize="1.5em"
                    // fontSize={'2x1'}
                    w="10em"
                    h="2em"
                    ml={4}
                >
                    Download CV
                </Button>
            </HStack>
        </Box>
        <Avatar size="2xl" src="your-image-url" name="Profile Picture" />
    </Box>
);
export default Header;
