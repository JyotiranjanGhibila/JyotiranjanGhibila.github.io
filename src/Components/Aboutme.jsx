import React, { useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import Hero from "../assets/hero1.jpg";
import Hero2 from "../assets/avatar.jpg";

import ExpandableText from "./ExpandableText";
import DownloadBtn from "./DownloadBtn";
import ReactType from "./ReactType";
import CodeTool from "./CodeTool";
import CustomHeading from "./CustomHeading";
import resume from "../assets/Jyotiranjan_CV.pdf";
const Aboutme = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const heroSrc = isHovered ? Hero2 : Hero;
  return (
    <Flex
      mt={"12px"}
      overflow={"hidden"}
      flexDir={{ base: "column", md: "column", lg: "row" }}
      background={"rgba(255,255,255,0.05)"}
      style={{
        WebkitBackdropFilter: "blur(3px)",
      }}
      borderRadius={"12px"}
      backdropFilter={"blur(3px)"}
      alignItems={"center"}
      justifyContent={"space-around"}
      padding={{ base: "5px", sm: "8px", md: "12px", lg: "18px" }}
    >
      <Box
        width={"35%"}
        height={"32%"}
        borderRadius={"50%"}
        transition={"all ease 0.5s"}
        overflow={"hidden"}
        cursor={"pointer"}
      >
        <Image
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          src={heroSrc}
          alt="img"
          transition={".9s"}
          _hover={{
            transform: "scale(1.3)",
          }}
        />
      </Box>
      <Flex
        padding={{ base: "2px", md: "8px", lg: "10px" }}
        alignItems={"center"}
        flexDir={"column"}
      >
        <CustomHeading />
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"space-around"}
          mb={"10px"}
        >
          <Flex
            justifyContent={"space-between"}
            flexDir={{ base: "column", md: "row" }}
            alignItems={"center"}
            mb={"14px"}
          >
            <Avatar
              src="https://em-content.zobj.net/thumbs/160/apple/325/waving-hand_1f44b.png"
              name="hii"
            />
            <Heading
              backgroundImage={"linear-gradient(0deg, #4039a7, #d647db)"}
              backgroundClip={"text"}
              color={"transparent"}
            >
              Hello I'm a
            </Heading>
            <ReactType />
          </Flex>

          <ExpandableText />

          <CodeTool />

          <Flex
            mt={"18px"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <a
              href={resume}
              download="JyotiRanjan_CV"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1KuoZGtc5K2Y97RRt4h29uS55W2CkfNXi/view"
                );
              }}
            >
              <DownloadBtn title={"Download CV"} />
            </a>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Aboutme;
