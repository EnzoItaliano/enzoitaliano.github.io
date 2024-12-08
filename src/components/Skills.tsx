import React from 'react';
import { Box, Text, SimpleGrid, Icon, Flex } from '@chakra-ui/react';
import {
    SiHtml5,
    SiCss3,
    SiReact,
    SiJavascript,
    SiNodedotjs,
    SiPostgresql,
    SiMongodb,
    SiTypescript,
    SiPython,
    SiFastapi,
} from 'react-icons/si';

const Skills = () => (
    <Box
        py={20}
        id="skills"
        display="flex"
        flexDirection="column"
        alignItems="center"
    >
        <Flex
            align="center"
            textAlign="center"
            flexDirection={{ base: 'column', md: 'row' }}
        >
            <Text
                borderColor={'black'}
                borderBottomWidth={{ base: 2, md: 0 }}
                borderRightWidth={{ base: 0, md: 2 }}
                px={{ base: 0, md: 3 }}
                mb={{ base: 3, md: 0 }}
                fontSize="2xl"
                fontWeight="regular"
                className="poppins-regular"
                textAlign="center"
            >
                Stack
            </Text>
            <SimpleGrid
                columns={[3, 5, 10]}
                spacing={1}
                px={3}
                justifyItems="center"
            >
                <Icon as={SiHtml5} w={10} h={10} color="#E34F26" />
                <Icon as={SiCss3} w={10} h={10} color="#1572B6" />
                <Icon as={SiReact} w={10} h={10} color="#61DAFB" />
                <Icon as={SiJavascript} w={10} h={10} color="#F0DB4F" />
                <Icon as={SiTypescript} w={10} h={10} color="#3178C6" />
                <Icon as={SiNodedotjs} w={10} h={10} color="#3C873A" />
                <Icon as={SiPython} w={10} h={10} color="#3776AB" />
                <Icon as={SiFastapi} w={10} h={10} color="#47A248" />
                <Icon as={SiPostgresql} w={10} h={10} color="#336791" />
                <Icon
                    as={SiMongodb}
                    w={10}
                    h={10}
                    color="#47A248"
                    gridColumn={{ base: 2, sm: 'inherit' }}
                />
            </SimpleGrid>
        </Flex>
    </Box>
);

export default Skills;
