import React, { useState } from "react";
import { Avatar, Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import resume from "../assets/Jyotiranjan_CV.pdf";
import Celeb from "../assets/celeb.gif";
import CelebDownload from "../assets/downloadCom.gif";
import { useScrollTop } from "../hooks/ScrollTop";
import "../../src/App.css";
import {
  Home as HomeIcon,
  Braces,
  MessageCircleCode,
  MonitorSmartphone,
  Contact,
  ArrowDownToLine,
} from "lucide-react";
import avatar from "../assets/avatar.jpg";
const Navbar = ({ hHom, hSkills, hProjects, hContact }) => {
  const scrolled = useScrollTop();
  const [downloadAnim, setDownloadAnim] = useState(false);
  const animsrc = downloadAnim ? CelebDownload : Celeb;

  const navSection = [
    {
      icon: HomeIcon,
      title: "Home",
      ref: hHom,
    },
    {
      icon: Braces,
      title: "About",
      ref: hHom,
    },
    {
      icon: MessageCircleCode,
      title: "Skills",
      ref: hSkills,
    },
    {
      icon: MonitorSmartphone,
      title: "Projects",
      ref: hProjects,
    },
    {
      icon: Contact,
      title: "Contact",
      ref: hContact,
    },
  ];

  const handleResumeDownload = async (e) => {
    setDownloadAnim(true);
    setTimeout(() => {
      setDownloadAnim(false);
    }, 9000);
  };
  return (
    <Flex
      position={"sticky"}
      top={0}
      zIndex={99999}
      border={scrolled ? "1px solid rgba(255,255,255,0.2)" : "none"}
      padding={{ base: "5px", sm: "8px", md: "12px", lg: "18px" }}
      borderRadius={"50px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      background={"rgba(255,255,255,0.14)"}
      style={{
        WebkitBackdropFilter: "blur(3px)",
      }}
      transition={"all ease 0.5s"}
      backdropFilter={"blur(3px)"}
      overflow={"hidden"}
      _hover={{
        boxShadow: "0px 0px 20px 1px #ffbb763f",
      }}
    >
      <Flex
        display={{ base: "none", md: "none", lg: "flex" }}
        alignItems={"center"}
      >
        <Avatar name="Jyoti Ranjan" src={avatar} />
      </Flex>
      {navSection?.map((el, i) => (
        <Flex key={i} alignItems={"center"} justifyContent={"space-around"}>
          <Flex
            padding={{ base: "2px", sm: "3px", md: "5px", lg: "7px" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={{ base: "column", md: "row" }}
            gap={{ base: "5px", md: "8px", lg: "10px" }}
            fontSize={{ base: "12px", sm: "13px", md: "20px" }}
            color={"white"}
            cursor={"pointer"}
            onClick={el.ref}
          >
            <Icon
              fontSize={{ base: "17px", md: "20px" }}
              as={el.icon}
              color={`${scrolled ? "#e9e5f8" : "#fff"}`}
            />
            <Text
              fontFamily={"-moz-initial"}
              fontWeight={700}
              background={`linear-gradient(0deg, #a8a8fd, ${
                scrolled ? "#c1b6f0" : "#fff"
              } 35%, #e00a95)`}
              backgroundSize={"200% auto"}
              WebkitBackgroundClip={"text"}
              backgroundClip={"text"}
              style={{
                WebkitTextFillColor: "transparent",
                animation: "gradient 3s linear infinite",
              }}
            >
              {el.title}
            </Text>
          </Flex>
        </Flex>
      ))}
      <a href={resume} download="JyotiRanjan_CV" onClick={()=>{
        window.open("https://drive.google.com/file/d/1KuoZGtc5K2Y97RRt4h29uS55W2CkfNXi/view")
      }}>
      <Flex
        onClick={handleResumeDownload}
        as={"button"}
        position={"relative"}
        alignItems={"center"}
        justifyContent={"space-around"}
        cursor={"pointer"}
      >
        <Flex
          padding={{ base: "2px", sm: "3px", md: "5px", lg: "7px" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={{ base: "column", md: "row" }}
          gap={{ base: "5px", md: "8px", lg: "10px" }}
          fontSize={{ base: "12px", sm: "13px", md: "19px" }}
          color={"white"}
        >
          <Icon fontSize={{ base: "17px", md: "20px" }} as={ArrowDownToLine} />

          <Text fontFamily={"-moz-initial"} fontWeight={500}>
            Resume
          </Text>
        </Flex>

        <Box position={"absolute"}>
          <Image
            height={{ base: "70px", md: "80px" }}
            src={animsrc}
            alt="gif"
          />
        </Box>
      </Flex>
      </a>
    </Flex>
  );
};

export default Navbar;
