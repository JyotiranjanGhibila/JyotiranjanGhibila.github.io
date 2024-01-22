import React, { useEffect } from "react";
import { Box, Center, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import CircleMarquee from "./CircleMarquee";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/javascript.png";
import react from "../assets/skills/react.png";
import reactrouter from "../assets/skills/router.png";
import typescript from "../assets/skills/typescript.png";
import nextjs from "../assets/skills/nextjs.png";
import redux from "../assets/skills/redux.png";
import svelte from "../assets/skills/svelte-icon.png";
import tailwind from "../assets/skills/tailwind-css.png";
import chakraui from "../assets/skills/chakraui.png";
import bootstrap from "../assets/skills/bootstrap.png";
import mongoDb from "../assets/skills/mongodb.png";
import nodejs from "../assets/skills/node-js.png";
import mongoose from "../assets/skills/mongoose.png";
import express from "../assets/skills/express.png";
import chatgpt from "../assets/tools/chatgpt.png";
import figma from "../assets/tools/figma.png";
import git from "../assets/tools/git.png";
import github from "../assets/tools/github.png";
import jira from "../assets/tools/jira.png";
import postman from "../assets/tools/postman.png";
import vscode from "../assets/tools/vscode.png";
import projectStyle from "../styles/projects.module.css";

const Skills = () => {
  const skillLogo = {
    logo: [
      [
        { border: "#e65026b0", bg: "#f5a48e83", icn: html },
        { border: "#2196F3", bg: "#d3e6f792", icn: css },
        { border: "#F7DF1E", bg: "#f5eec38d", icn: js },
        { border: "#77CDE4", bg: "#aee9fa83", icn: react },
        { border: "#D10215", bg: "#f7c1c68d", icn: reactrouter },
        { border: "#77CDE4", bg: "#d5eef583", icn: typescript },
        { border: "#000000", bg: "#dddddd86", icn: nextjs },
        { border: "#8D68BD", bg: "#dbc6f786", icn: redux },
        { border: "#e65026b0", bg: "#f5a48e86", icn: svelte },
        { border: "#F7DF1E", bg: "#f5eec389", icn: tailwind },
        { border: "#86f553", bg: "#c9faaf8d", icn: chakraui },
        { border: "#8D68BD", bg: "#e2d2f786", icn: bootstrap },
        { border: "#499D4A", bg: "#c1fac290", icn: mongoDb },
        { border: "#8AB149", bg: "#dff8b75c", icn: nodejs },
        { border: "#F7DF1E", bg: "#f5eec381", icn: mongoose },
        { border: "#48dff3", bg: "#bde5f87a", icn: express },
      ],
      [
        { border: "#e65026b0", bg: "#f5a48e83", icn: git },
        { border: "#2196F3", bg: "#d3e6f792", icn: github },
        { border: "#f7801e", bg: "#f5c1868d", icn: postman },
        { border: "#77CDE4", bg: "#aee9fa83", icn: vscode },
        { border: "#2faef7", bg: "#83d3f390", icn: jira },
        { border: "#46e4bc", bg: "#97fcd583", icn: chatgpt },
        { border: "#f13b96", bg: "#eea9e285", icn: figma },
      ],
    ],
  };

  const exp = [
    {
      name: "Masai School",
      role: "SDE intern",
      summary:
        "As a SDE intern, successfully engineered an elegant Average Performance, resulting in a commendable 15% improvement in user satisfaction. I leveraged AWS services to optimize email and SMS functionalities, achieving a remarkable 30% reduction in server response times. Through strategic optimization of API design, I accomplished a tenfold or more reduction in server costs.",
    },
    {
      name: "Dranzo ",
      role: "Software Developer",
      summary:
        "As a Software Developer at Dranzo, I played a key role in optimizing API endpoints, exceeding performance benchmarks. I successfully implemented cost-effective hosting solutions on AWS, leading to a notable reduction in expenses by over 20%. Additionally, I actively contributed to the creation of innovative solutions for clients in the IT service and consulting domain.",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.getElementsByClassName(projectStyle.card);

      for (const card of cards) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    document
      .getElementsByClassName(projectStyle.cards)[0]
      .addEventListener("mousemove", handleMouseMove);

    return () => {
      document
        .getElementsByClassName(projectStyle.cards)[0]
        .removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Flex
      mt={"12px"}
      overflow={"hidden"}
      flexDir={{ base: "column", md: "column", lg: "row" }}
      background={"rgba(255,255,255,0.04)"}
      style={{
        WebkitBackdropFilter: "blur(3px)",
      }}
      borderRadius={"12px"}
      backdropFilter={"blur(3px)"}
      alignItems={"center"}
      justifyContent={"space-around"}
      padding={{ base: "5px", sm: "8px", md: "12px", lg: "18px" }}
    >
      <CircleMarquee pack={skillLogo} />
      <Flex flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"}>
        <Heading 
         backgroundImage={"linear-gradient(0deg, #4039a7, #d647db)"}
         backgroundClip={"text"}
         color={"transparent"}
        fontSize={{base:"20px",md:"23px",lg:"39px"}} fontWeight={900} mb={{base:"10px",md:"17px",lg:"22px"}}>1 year of Experience</Heading>
        <Grid
          className={projectStyle.cards}
          gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)"}}
          gap={"8px"}
        >
          {
            exp?.map((el,i)=>{
              return(
                <Box
                key={i}
                className={projectStyle.card}
                height={{ base: "260px", md: "280px", lg: "300px" }}
              >
                <Box className={projectStyle.cardborder}></Box>
                <Box
                  className={projectStyle.cardcontent}
                  overflow={"hidden"}
                  padding={{ base: "20px", md: "22px", lg: "30px" }}
                >
                  <Center
                    color={"#fff"}
                    fontWeight={600}
                    fontSize={{ base: "15px", md: "20px", lg: "30px" }}
                  >
                   {el.name}
                  </Center>
                  <Center
                    color={"#fff"}
                    fontWeight={200}
                    fontSize={{ base: "15px", md: "17px", lg: "20px" }}
                  >
                    {el.role}
                  </Center>
                  <Text textAlign={"center"} fontSize={{base:"12px",md:"13px",lg:"10px"}} width={{base:"200px",md:"250px",lg:"200px"}} color={"#c2c2c2"}>{el.summary}</Text>
                </Box>
              </Box>
              )
            })
          }
         
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Skills;
