import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const CustomHeading = () => {
  const text="JyotiRanjan"
  return (
    <Heading as="h1" fontFamily={"-moz-initial"} 
    
            fontSize={{ base: "30px", md: "35px", lg: "62px" }}
            
    >
      {text &&
        text.split("").map((char, index) => (
          <Box
            as="span"
            key={index}
          >
            {char}
          </Box>
        ))}
    </Heading>
  );
};

export default CustomHeading;
