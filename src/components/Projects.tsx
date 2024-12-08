import React from 'react';
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Stack,
    Text,
    Image,
    Icon,
} from '@chakra-ui/react';
import SpiritedAway from '../assets/spiritaway.png';
import { SiHtml5, SiCss3 } from 'react-icons/si';
import { FaGithubAlt, FaLink } from 'react-icons/fa';

const Projects = () => (
    <Box
        display="flex"
        flexDirection={'column'}
        alignItems="center"
        id="projects"
        w={'80%'}
        py={28}
    >
        <Text
            w={'100%'}
            textAlign={'left'}
            className="poppins-medium"
            // fontSize={'1.5em'}
            fontSize={'2x1'}
            color={'#AD00FF'}
            mb={5}
        >
            Projects
        </Text>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            p={4}
            mt={5}
            maxW={{ base: '100%', sm: '1272px' }}
        >
            <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '600px' }}
                src={SpiritedAway}
                alt="Spirited Away Screenshot"
            />

            <Stack>
                <CardBody>
                    <Heading
                        textAlign={'center'}
                        className="poppins-medium"
                        size="md"
                        // fontSize={'2em'}
                        fontSize={'3xl'}
                    >
                        Studio Ghibli Landing Page
                    </Heading>

                    <Text
                        textAlign={'center'}
                        className="poppins-regular"
                        maxW={'441px'}
                        py="5"
                        // fontSize={'1.25em'}
                        fontSize={'xl'}
                    >
                        This landing page presents some movies produced by
                        Studio Ghibli allowing to watch their trailers, reading
                        their summaries and discover more about the studio.
                    </Text>
                </CardBody>

                <Box px={3} display={'flex'} justifyContent={'center'}>
                    <Icon as={SiHtml5} px={1} w={10} h={10} color="#E34F26" />
                    <Icon as={SiCss3} px={1} w={10} h={10} color="#1572B6" />
                </Box>

                <CardFooter display={'flex'} justifyContent="space-evenly">
                    <Button
                        as="a"
                        href="/path-to-your-cv"
                        className="poppins-regular"
                        minW={'162px'}
                        color="#AD00FF"
                    >
                        Code
                        <Icon
                            as={FaGithubAlt}
                            w={'1em'}
                            h={'1em'}
                            ml={1}
                            color="#AD00FF"
                        />
                    </Button>
                    <Button
                        as="a"
                        href="/path-to-your-cv"
                        className="poppins-regular"
                        color="#AD00FF"
                        minW={'162px'}
                    >
                        Live
                        <Icon
                            as={FaLink}
                            w={'1em'}
                            h={'1em'}
                            ml={1}
                            color="#AD00FF"
                        />
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            p={4}
            mt={5}
            maxW={{ base: '100%', sm: '1272px' }}
        >
            <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '600px' }}
                src={SpiritedAway}
                alt="Spirited Away Screenshot"
            />

            <Stack>
                <CardBody>
                    <Heading
                        textAlign={'center'}
                        className="poppins-medium"
                        size="md"
                        // fontSize={'2em'}
                        fontSize={'3xl'}
                    >
                        Studio Ghibli Landing Page
                    </Heading>

                    <Text
                        textAlign={'center'}
                        className="poppins-regular"
                        maxW={'441px'}
                        py="5"
                        // fontSize={'1.25em'}
                        fontSize={'xl'}
                    >
                        This landing page presents some movies produced by
                        Studio Ghibli allowing to watch their trailers, reading
                        their summaries and discover more about the studio.
                    </Text>
                </CardBody>

                <Box px={3} display={'flex'} justifyContent={'center'}>
                    <Icon as={SiHtml5} px={1} w={10} h={10} color="#E34F26" />
                    <Icon as={SiCss3} px={1} w={10} h={10} color="#1572B6" />
                </Box>

                <CardFooter display={'flex'} justifyContent="space-evenly">
                    <Button
                        as="a"
                        href="/path-to-your-cv"
                        className="poppins-regular"
                        minW={'162px'}
                        color="#AD00FF"
                    >
                        Code
                        <Icon
                            as={FaGithubAlt}
                            w={'1em'}
                            h={'1em'}
                            ml={1}
                            color="#AD00FF"
                        />
                    </Button>
                    <Button
                        as="a"
                        href="/path-to-your-cv"
                        className="poppins-regular"
                        color="#AD00FF"
                        minW={'162px'}
                    >
                        Live
                        <Icon
                            as={FaLink}
                            w={'1em'}
                            h={'1em'}
                            ml={1}
                            color="#AD00FF"
                        />
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            p={4}
            mt={5}
            maxW={{ base: '100%', sm: '1272px' }}
        >
            <Image
                objectFit="cover"
                maxW={{ base: '100%', sm: '600px' }}
                src={SpiritedAway}
                alt="Spirited Away Screenshot"
            />

            <Stack>
                <CardBody>
                    <Heading
                        textAlign={'center'}
                        className="poppins-medium"
                        size="md"
                        // fontSize={'2em'}
                        fontSize={'3xl'}
                    >
                        Studio Ghibli Landing Page
                    </Heading>

                    <Text
                        textAlign={'center'}
                        className="poppins-regular"
                        maxW={'441px'}
                        py="5"
                        // fontSize={'1.25em'}
                        fontSize={'xl'}
                    >
                        This landing page presents some movies produced by
                        Studio Ghibli allowing to watch their trailers, reading
                        their summaries and discover more about the studio.
                    </Text>
                </CardBody>

                <Box px={3} display={'flex'} justifyContent={'center'}>
                    <Icon as={SiHtml5} px={1} w={10} h={10} color="#E34F26" />
                    <Icon as={SiCss3} px={1} w={10} h={10} color="#1572B6" />
                </Box>

                <CardFooter display={'flex'} justifyContent="space-evenly">
                    <Button
                        as="a"
                        href="/path-to-your-cv"
                        className="poppins-regular"
                        minW={'162px'}
                        color="#AD00FF"
                    >
                        Code
                        <Icon
                            as={FaGithubAlt}
                            w={'1em'}
                            h={'1em'}
                            ml={1}
                            color="#AD00FF"
                        />
                    </Button>
                    <Button
                        as="a"
                        href="/path-to-your-cv"
                        className="poppins-regular"
                        color="#AD00FF"
                        minW={'162px'}
                    >
                        Live
                        <Icon
                            as={FaLink}
                            w={'1em'}
                            h={'1em'}
                            ml={1}
                            color="#AD00FF"
                        />
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    </Box>
);
export default Projects;
