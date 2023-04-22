
import { Box, Heading } from "@chakra-ui/react";
import Calen from "./Calen";
import Stats from "./Stats";

function Git() {
  return (
    <Box className="GitMain">
      <Box className="GitBox">
        <Heading
          mb="2%"
          color="green.400"
          fontWeight="bolder"
          fontSize={{ base: "25px", md: "35px", lg: "45px" }}
        >
         My Github Statistics
        </Heading>
        <Box width="100%">
          <Calen />
          <Stats width="100%"/>
        </Box>
        
      </Box>
    </Box>
  );
}
export default Git;
