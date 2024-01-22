import React from "react";
import { Link } from "react-router-dom";

import notion from "../../assets/projects/NotionHome.png";
import auth from "../../assets/projects/Auth.png";
import workspace from "../../assets/projects/Workspace.png";
import work from "../../assets/projects/Work.png";
import restore from "../../assets/projects/Restore.png";
import amazon1 from '../../assets/projects/amazon1.png'
import amazon2 from '../../assets/projects/amazon2.png'
import amazon3 from '../../assets/projects/amazon3.png'
import amazon4 from '../../assets/projects/amazon4.png'
import amazon5 from '../../assets/projects/amazon5.png'
import amazon6 from '../../assets/projects/amazon6.png'
import amazon7 from '../../assets/projects/amazon7.png'

import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import Slider from "react-slick";

import DownloadBtn from "../DownloadBtn";

const Sliders = () => {
  const myProjects = [
    {
      pics: [notion, auth, workspace, work, restore],
      title: "Notion Clone",
      tech:"react, javascript, typescript, nextjs, react-dropzone, convex, tailwindcss, zod, zustand, edge-store, clerk, blocknote, usehooks-ts, shadcn-ui, lucid-react",
      sub: "A connected workspace where your ideas, documents, and plans come together for better, faster work. This project aims to replicate the functionalities of Notion using a modern tech stack.",
      present: [
        {
          link: "https://note-cyan.vercel.app/",
          goto: "Deploy Link",
        },
        {
          link: "https://github.com/JyotiranjanGhibila/notion-clone",
          goto: "Code Base",
        },
      ],
    },
    {
      pics: [amazon1,amazon2,amazon3,amazon4,amazon5,amazon6,amazon7],
      title: "Amazon Clone",
      tech:"redux, nodejs, fetch, mongodb, reactjs, mongoose, rest-api, localstorage, expressjs, axios, postman, jwt-authentication, crud-operation, context-api, chakra-ui",
      sub: "A full-stack e-commerce application with features such as user authentication, data storage, and manipulation, leveraging popular technologies for both frontend and backend development.",
      present: [
        {
          link: "https://amazon-clone-jyoti.vercel.app/",
          goto: "Deploy Link",
        },
        {
          link: "https://github.com/JyotiranjanGhibila/amazon-clone",
          goto: "Code Base",
        },
      ],
    },
  ];
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box>
      {myProjects?.map((el, i) => {
        return (
          <Box borderBottom={"1px solid #8528c475"} key={i}>
            <Center
              backgroundImage={"linear-gradient( #e44cb6, #ece9f5)"}
              backgroundClip={"text"}
              color={"transparent"}
              fontWeight={500}
              fontSize={{ base: "22px", md: "35px" }}
            >
              {el.title}
            </Center>
            <Slider {...settings}>
              {el?.pics.map((pic, ind) => {
                return (
                  <Box width={"220px"} key={ind}>
                    <Image key={ind} src={pic} alt="img" />
                  </Box>
                );
              })}
            </Slider>

            <Center
              color={"#cecece"}
              fontSize={{ base: "10px", md: "14px", lg: "15px" }}
              fontWeight={600}
            >
              {el.sub}
            </Center>
            <Center color={"#a5a4a4"} fontSize={{ base: "10px", md: "14px", lg: "15px" }}>Tech Stacks : {el.tech}</Center>
            <Flex mb={"12px"} flexDirection={{base:"column",md:"row"}} alignItems={"center"} justifyContent={"center"} gap={"20px"}>
              {el?.present.map((linkItem, ind) => {
                return (
                  <Link to={linkItem.link} target={linkItem.link} key={ind}>
                    <DownloadBtn title={linkItem.goto}/>
                  </Link>
                );
              })}
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export default Sliders;
