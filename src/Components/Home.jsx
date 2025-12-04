import React from "react";
import {
  Avatar,
  Flex,
  Heading,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

import DownloadBtn from "./DownloadBtn";
import ReactType from "./ReactType";
import CodeTool from "./CodeTool";
import CustomHeading from "./CustomHeading";
import resume from "../assets/Jyotiranjan_Resume.pdf";

const Home = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      align="center"
      justify="center"
      minH={{ base: "80vh", md: "85vh", lg: "90vh" }}
      px={{ base: 4, md: 8, lg: 16 }}
      py={{ base: 6, md: 8 }}
      mt="12px"
      borderRadius="16px"
      bg="rgba(255,255,255,0.06)"
      backdropFilter="blur(6px)"
      style={{ WebkitBackdropFilter: "blur(6px)" }}
      overflow="hidden"
    >
      {/* Left Side Content */}
      <Flex
        direction="column"
        align="center"
        justify="center"
        flex="1"
        textAlign="center"
        mb={{ base: 6, lg: 0 }}
      >

        <Flex
          direction={"column"}
          align="center"
          justify="center"
          gap={{ base: 2, md: 3 }}
          mt={4}
        >
          <Avatar
            src="https://em-content.zobj.net/thumbs/160/apple/325/waving-hand_1f44b.png"
            name="hello"
            boxSize={{ base: "48px", md: "54px" }}
          />

          <Heading
            fontSize={{ base: "25px", md: "30px", lg: "52px" }}
            bg="linear-gradient(0deg, #4039a7, #d647db)"
            bgClip="text"
            color="transparent"
            fontWeight="800"
          >
            Hello, I'm {" "}
          </Heading>
        <CustomHeading />

        </Flex>
          <ReactType />

        {/* Code Tool – Centered */}
        {/* <Box mt={4} width="100%" maxW="480px">
          <CodeTool />
        </Box> */}

        {/* Resume Button */}
        <Flex mt={6}>
          <a
            href={resume}
            download="JyotiRanjan_Resume"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/131fJgJrCWnsIFXixgtzFem0j9bRfKK2U/view"
              );
            }}
          >
            <DownloadBtn title="Download Resume" />
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
