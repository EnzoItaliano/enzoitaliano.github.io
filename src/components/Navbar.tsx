import React from 'react';
import {
    Box,
    Flex,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    useColorMode,
    HStack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open navigation'}
                    display={['inherit', 'inherit', 'none']}
                    onClick={onToggle}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Box>Logo</Box>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={{ base: 'none', md: 'flex' }}
                    >
                        {['Home', 'About', 'Contact'].map((link) => (
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue(
                                        'gray.200',
                                        'gray.700'
                                    ),
                                }}
                                key={link}
                                href={'#'}
                            >
                                {link}
                            </Link>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems={'center'}>
                    <IconButton
                        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                        onClick={toggleColorMode}
                        aria-label={''}
                    />
                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={['inherit', 'inherit', 'none']}>
                    <HStack as={'nav'} spacing={4}>
                        {['Home', 'About', 'Contact'].map((link) => (
                            <Link
                                px={2}
                                py={1}
                                rounded={'md'}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue(
                                        'gray.200',
                                        'gray.700'
                                    ),
                                }}
                                key={link}
                                href={'#'}
                            >
                                {link}
                            </Link>
                        ))}
                    </HStack>
                </Box>
            ) : null}
        </Box>
    );
};

export default Navbar;
