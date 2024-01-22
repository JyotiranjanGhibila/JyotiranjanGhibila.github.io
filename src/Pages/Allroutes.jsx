import { Box } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import Aboutme from '../components/Aboutme'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Touch from '../components/Touch'
import Aos from 'aos'


const Allroutes = () => {
  const home = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  useEffect(()=>{
    Aos.init({duration: 3000})
  },[]);
 
  const hHom = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  const hSkills = () => {
    window.scrollTo({
      top: skills.current.offsetTop,
      behavior: "smooth",
    });
  };
 
  const hProjects = () => {
    window.scrollTo({
      top: projects.current.offsetTop,
      behavior: "smooth",
    });
  };

  const hContact = () => {
    window.scrollTo({
      top: contact.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Box>
        <Navbar
        hHom={hHom}
        hSkills={hSkills}
        hProjects={hProjects}
        hContact={hContact}
        />
        <Box data-aos="fade-in" ref={home}>
          <Aboutme/>
        </Box>
        <Box data-aos="zoom-in" ref={skills}>
          <Skills/>
        </Box>
        <Box data-aos="zoom-in" ref={projects}>
          <Projects/>
        </Box>
        <Box data-aos="zoom-in" ref={contact}>
          <Touch/>
        </Box>
    </Box>
  )
}

export default Allroutes