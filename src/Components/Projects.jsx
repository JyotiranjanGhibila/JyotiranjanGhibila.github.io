import { useEffect } from "react";
import { Box, Button, Center, Flex, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import Sliders from "./content/Sliders";
import projectStyle from "../styles/projects.module.css";
import { Link } from "react-router-dom";

const Projects = () => {

 
  return (
    <Box
      mt={"22px"}
      overflow={"hidden"}
      background={"rgba(255,255,255,0.05)"}
      style={{
        WebkitBackdropFilter: "blur(3px)",
      }}
      borderRadius={"12px"}
      backdropFilter={"blur(3px)"}
      // padding={{ base: "5px", sm: "8px", md: "12px", lg: "18px" }}
      padding={{ base: "25px", md: "40px", lg: "75px" }}

    >
      <Sliders/>
    
    </Box>
  );
};

export default Projects;
