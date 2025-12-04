import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import Aos from 'aos';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Aboutme from '../components/Aboutme';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import GitHubSection from '../components/GitHubSection';
import Touch from '../components/Touch';

const Allroutes = () => {
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const github = useRef(null);
  const contact = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  // Scroll using refs
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Box>
      <Navbar
        hHom={() => scrollToSection(home)}
        hAbout={() => scrollToSection(about)}
        hSkills={() => scrollToSection(skills)}
        hProjects={() => scrollToSection(projects)}
        hGithub={() => scrollToSection(github)}
        hContact={() => scrollToSection(contact)}
      />

      <Box data-aos="fade-in" ref={home}>
        <Home />
      </Box>
      <Box data-aos="fade-in" ref={about}>
        <Aboutme />
      </Box>
      <Box data-aos="zoom-in" ref={skills}>
        <Skills />
      </Box>
      <Box data-aos="zoom-in" ref={projects}>
        <Projects />
      </Box>
      <Box data-aos="zoom-in" ref={github}>
        <GitHubSection />
      </Box>
      <Box data-aos="zoom-in" ref={contact}>
        <Touch />
      </Box>
    </Box>
  );
};

export default Allroutes;
