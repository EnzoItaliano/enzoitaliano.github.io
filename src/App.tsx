import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import About from './components/About';
import { Box } from '@chakra-ui/react';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <Box>
            <Navbar />
            <Box
                bg="rgb(250, 245, 255)"
                height="100vh"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Header />
                <Skills />
            </Box>
            <Box
                bg="rgb(255, 255, 255)"
                height="100vh"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <About />
            </Box>
            <Box
                bg="rgb(250, 245, 255)"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Projects />
            </Box>
            <Box
                bg="rgb(255, 255, 255)"
                height="100vh"
                display="flex"
                flexDirection="column"
                justifyContent="start"
                alignItems="center"
            >
                <Contact />
            </Box>
        </Box>
    );
}

export default App;
