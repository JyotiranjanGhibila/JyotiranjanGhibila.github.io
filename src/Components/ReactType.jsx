import { Heading } from "@chakra-ui/react";
import React from "react";
import Typed from "react-typed";

const ReactType = () => {
  return (
    <Heading
      backgroundImage={"linear-gradient( #e44cb6, #ece9f5)"}
      backgroundClip={"text"}
      color={"transparent"}
      fontSize={{base:"22px",md:"35px"}}
    >
      <Typed
        strings={[
          "Full Stack Web Developer",
          "Software Developer",
          "MERN Developer ",
          "Problem Solver",
          "Life Long Learner",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      ></Typed>
    </Heading>
  );
};

export default ReactType;
