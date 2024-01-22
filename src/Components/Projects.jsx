import { useEffect } from "react";
import { Box, Button, Center, Flex, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import Sliders from "./Content/Sliders";
import projectStyle from "../styles/projects.module.css";
import { Link } from "react-router-dom";

const Projects = () => {

 
  return (
    <Box
      mt={"12px"}
      overflow={"hidden"}
      background={"rgba(255,255,255,0.05)"}
      style={{
        WebkitBackdropFilter: "blur(3px)",
      }}
      borderRadius={"12px"}
      backdropFilter={"blur(3px)"}
      padding={{ base: "5px", sm: "8px", md: "12px", lg: "18px" }}
    >
      <Sliders/>
    
    </Box>
  );
};

export default Projects;
