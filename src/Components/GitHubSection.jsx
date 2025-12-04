
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import React from "react";

const GitHubSection = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt="22px"
      w="100%"
      background="rgba(255,255,255,0.05)"
      borderRadius="16px"
      backdropFilter="blur(5px)"
            padding={{ base: "25px", md: "40px", lg: "85px" }}

    >
      {/* ---- HEADING ---- */}
      <Heading
        backgroundImage="linear-gradient(0deg, #4039a7, #d647db)"
        backgroundClip="text"
        color="transparent"
        fontSize={{ base: "24px", md: "30px", lg: "38px" }}
        fontWeight={900}
        mb="25px"
      >
        GitHub Contributions
      </Heading>

      {/* ---- CONTRIBUTION CALENDAR ---- */}
      <Box mb="40px">
        <GitHubCalendar
          username="JyotiranjanGhibila"
          blockSize={15}
          blockMargin={5}
          blockRadius={5}
          fontSize={16}
          style={{ color: "white" }}
        />
      </Box>

      {/* ---- STATS GRID ---- */}
      {/* <Flex
        gap={{ base: "15px", md: "25px" }}
        wrap="wrap"
        justifyContent="center"
      >
        <Box
          w={{ base: "300px", md: "350px" }}
          background="rgba(255,255,255,0.08)"
          backdropFilter="blur(6px)"
          border="1px solid rgba(255,255,255,0.15)"
          borderRadius="18px"
          p="10px"
          boxShadow="0 8px 20px rgba(0,0,0,0.25)"
          transition="0.3s"
          _hover={{
            transform: "translateY(-6px)",
            boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
          }}
        >
          <Image
            src="https://github-readme-stats.vercel.app/api?username=JyotiranjanGhibila&show_icons=true&theme=radical&hide_border=true"
            alt="GitHub Stats"
            borderRadius="10px"
          />
        </Box>

        <Box
          w={{ base: "300px", md: "350px" }}
          background="rgba(255,255,255,0.08)"
          backdropFilter="blur(6px)"
          border="1px solid rgba(255,255,255,0.15)"
          borderRadius="18px"
          p="10px"
          boxShadow="0 8px 20px rgba(0,0,0,0.25)"
          transition="0.3s"
          _hover={{
            transform: "translateY(-6px)",
            boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
          }}
        >
          <Image
            src="https://streak-stats.demolab.com?user=JyotiranjanGhibila&theme=radical&hide_border=true"
            alt="GitHub Streak"
            borderRadius="10px"
          />
        </Box>

        <Box
          w={{ base: "300px", md: "350px" }}
          background="rgba(255,255,255,0.08)"
          backdropFilter="blur(6px)"
          border="1px solid rgba(255,255,255,0.15)"
          borderRadius="18px"
          p="10px"
          boxShadow="0 8px 20px rgba(0,0,0,0.25)"
          transition="0.3s"
          _hover={{
            transform: "translateY(-6px)",
            boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
          }}
        >
          <Image
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=JyotiranjanGhibila&layout=compact&theme=radical&hide_border=true"
            alt="Top Languages"
            borderRadius="10px"
          />
        </Box>
      </Flex> */}
    </Flex>
  );
};

export default GitHubSection;
