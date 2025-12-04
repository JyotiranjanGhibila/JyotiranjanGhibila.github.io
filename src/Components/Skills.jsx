import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Wrap,
  WrapItem,
  Tag,
} from "@chakra-ui/react";

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

  const skillTags = [
    "React.js", "Next.js", "Node.js", "TypeScript",
    "Express.js", "MongoDB", "Mongoose",
    "Redux", "REST API", "Web Crawling",
    "Puppeteer", "Selenium", "Automation",
    "FastAPI", "CosmosDB",
    "Tailwind CSS", "Chakra UI",
    "JWT Auth", "Microservices",
    "Git", "Postman", "Jira"
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
      ?.addEventListener("mousemove", handleMouseMove);

    return () => {
      document
        .getElementsByClassName(projectStyle.cards)[0]
        ?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Flex
      mt="22px"
      overflow="hidden"
      flexDir={{ base: "column", md: "column", lg: "row" }}
      background="rgba(255,255,255,0.04)"
      style={{ WebkitBackdropFilter: "blur(3px)" }}
      borderRadius="12px"
      backdropFilter="blur(3px)"
      alignItems="center"
      justifyContent="space-between"
      padding={{ base: "25px", md: "40px", lg: "85px" }}
      gap="20px"
    >
      <CircleMarquee pack={skillLogo} />

      {/* SKILL TAG CLOUD */}
      <Box display={{base:'none', md:'block'}} width={{ base: "100%", lg: "45%" }} mt="10px">
        <Wrap spacing="12px" justify={{ base: "center", lg: "flex-start" }}>
          {skillTags.map((tag, i) => (
            <WrapItem key={i}>
              <Tag
                padding="8px 14px"
                borderRadius="20px"
                bg="rgba(255,255,255,0.08)"
                color="white"
                fontSize="14px"
                backdropFilter="blur(6px)"
                _hover={{ bg: "purple.600", cursor: "pointer" }}
                transition="0.2s"
              >
                {tag}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Flex>
  );
};

export default Skills;
