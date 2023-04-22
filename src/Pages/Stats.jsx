import { Box, Center, Grid, Wrap } from "@chakra-ui/react";
import React from "react";
import '../Styles/Styles.css'
const Stats = () => {
  return (
    <Center py={12}>
      <Box>
        <a href="https://github.com/JyotiranjanGhibila" target="-blank">
          <img
            
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=JyotiranjanGhibila"
            alt="git"
          />
        </a>
      </Box>
      <Box>
        <a href="https://github.com/JyotiranjanGhibila" target="-blank">
          <img
           
            src="https://github-readme-stats.vercel.app/api?username=JyotiranjanGhibila&count_private=true&show_icons=true"
            alt="git"
          />
        </a>
      </Box>
      <Box>
        <a href="https://github.com/JyotiranjanGhibila" target="-blank">
          <img
           
            src="https://github-readme-streak-stats.herokuapp.com/?user=JyotiranjanGhibila"
            alt="calender"
          />
        </a>
      </Box>
    </Center>
  );
};

export default Stats;
