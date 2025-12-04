import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Stack,
  Tag,
  Wrap,
  WrapItem,

} from "@chakra-ui/react";
import Hero from "../assets/hero1.jpg";
import Hero2 from "../assets/avatar.jpg";

const Aboutme = () => {
  const [isHovered, setIsHovered] = useState(false);

  const heroSrc = isHovered ? Hero2 : Hero;
   const highlights = [
    "2+ Years Experience",
    "Full Stack Developer (MERN)",
    "Automation & Web Crawling Expert",
    "Builds Scalable Production Systems",
  ];

  const experiences = [
    {
      company: "Areness (2024 - 2025)",
      work: [
        "Developed scalable Case Management System using React, Redux, Node.js.",
        "Built automation microservice using Puppeteer/Selenium for real-time eCourt data scraping.",
      ],
    },
    {
      company: "Epic Software Consultancy (2023 - 2024)",
      work: [
        "Built AI-powered job search with Azure OpenAI for Happy Techies.",
        "Developed frontend for Intellisearch using React & CosmosDB.",
      ],
    },
    {
      company: "Nolan Edutech (2023)",
      work: [
        "Developed Interview Prime – AI-powered interview analysis tool.",
        "Converted Figma to responsive UI using Tailwind CSS.",
      ],
    },
  ];

  return (
    <Flex
      mt="22px"
      overflow="hidden"
      flexDirection={{ base: "column", lg: "row" }}
      background="rgba(255,255,255,0.08)"
      style={{ WebkitBackdropFilter: "blur(10px)" }}
      borderRadius="16px"
      backdropFilter="blur(10px)"
      alignItems="center"
      padding={{ base: "25px", md: "40px", lg: "75px" }}
      gap={{ base: "25px", lg: "40px" }}
    >
      {/* ---------------- IMAGE BLOCK ---------------- */}
      <Box
        width={{ base: "200px", md: "260px", lg: "300px" }}
        height={{ base: "200px", md: "260px", lg: "300px" }}
        borderRadius="50%"
        overflow="hidden"
        cursor="pointer"
        transition="0.4s ease"
        boxShadow="0px 0px 25px rgba(255, 255, 255, 0.15)"
        _hover={{ transform: "scale(1.05)" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={heroSrc}
          alt="Profile"
          width="100%"
          height="100%"
          objectFit="cover"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          transition=".6s"
        />
      </Box>

      {/* --------------------- Text Section --------------------- */}
      <Box width={{ base: "100%", lg: "60%" }}>
        <Heading
          fontSize={{ base: "25px", md: "32px", lg: "38px" }}
          bgGradient="linear(to-r, #7F00FF, #E100FF)"
          bgClip="text"
          fontWeight="800"
          mb="12px"
        >
          About Me
        </Heading>

        <Text
          color="#d5d5d5"
          fontSize={{ base: "14px", md: "16px" }}
          lineHeight="1.7"
          mb="18px"
        >
          I am <b>Jyotiranjan Ghibila</b>, a Full Stack Developer specializing in
          MERN stack, automation, and AI-powered application development.
          I build production-ready systems with scalable architectures, microservices,
          and modern UI engineering.
        </Text>

        {/* -------- Highlights -------- */}
        <Wrap spacing="10px" mb="22px">
          {highlights.map((item, i) => (
            <WrapItem key={i}>
              <Tag
                bg="rgba(255,255,255,0.1)"
                px="12px"
                py="8px"
                borderRadius="18px"
                backdropFilter="blur(4px)"
                color="white"
                fontSize="13px"
              >
                {item}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>

        {/* -------- Experience Cards -------- */}
        <Stack spacing="18px" mt="10px">
          {experiences.map((exp, i) => (
            <Box
              key={i}
              bg="rgba(255,255,255,0.06)"
              borderRadius="12px"
              p="15px"
              backdropFilter="blur(5px)"
              border="1px solid rgba(255,255,255,0.08)"
              transition="0.3s"
              _hover={{ transform: "translateY(-4px)" }}
            >
              <Heading
                fontSize={{ base: "16px", md: "20px" }}
                color="white"
                mb="6px"
              >
                {exp.company}
              </Heading>
              <ul style={{ marginLeft: "18px", color: "#cfcfcf" }}>
                {exp.work.map((w, idx) => (
                  <li key={idx} style={{ fontSize: "14px", marginBottom: "4px" }}>
                    {w}
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

export default Aboutme;
