import React, { useEffect, useRef } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Navbar from "../Components/Navbar";
import Foot from "../Components/Foot";
import About from "./About";
import Hom from "./Hom";
import Skills from "./Skills";
import Projects from "./Projects";
import Gith from "./Gith";
import Contact from "./Contact";

import { Box } from "@chakra-ui/react";
const Allroutes = () => {
  const hom = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const gith = useRef(null);
  const contact = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const hHom = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const hAbout = () => {
    window.scrollTo({
      top: about.current.offsetTop,
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
  const hGith = () => {
    window.scrollTo({
      top: gith.current.offsetTop,
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
    <>
      <Navbar
        hHom={hHom}
        hAbout={hAbout}
        hSkills={hSkills}
        hProjects={hProjects}
        hGith={hGith}
        hContact={hContact}
      />
      <>
        <div data-aos="fade-up" ref={hom}>
          <Hom />
        </div>
        <div>
          <About />
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          ref={skills}
        >
          <Skills />
        </div>
        <div data-aos="fade-up" ref={projects}>
          <Projects />
        </div>
        <div data-aos="flip-left" ref={gith}>
          <Gith />
        </div>
        <div data-aos="flip-right" ref={contact}>
          <Contact />
        </div>
        <div>
          <Foot />
        </div>
      </>
    </>
  );
};

export default Allroutes;
