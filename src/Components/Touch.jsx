import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Touch = () => {
  const email = "ghibilamohan@gmail.com"; // Replace with your actual email address
  const phoneNumber = "7735285611";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };
  const handleWhatsapp = () => {
    window.location.href = `https://wa.me/${phoneNumber}`;
  };
  const handleLinkedin = () => {
    window.location.href = `https://www.linkedin.com/in/jyoti-ranjan-ghibila-449105206/`;
  };

  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={"12px"}
      overflow={"hidden"}
      background={"rgba(255,255,255,0.05)"}
      style={{
        WebkitBackdropFilter: "blur(3px)",
      }}
      borderRadius={"12px"}
      backdropFilter={"blur(3px)"}
      padding={{ base: "5px", sm: "8px", md: "12px", lg: "18px" }}
    >
      <GitHubCalendar
        username="JyotiranjanGhibila"
        blockSize={14}
        blockRadius={7}
        blockMargin={5}
        fontSize={16}
        style={{
          color: "white",
        }}
      />
      <Box>
        <Heading
          backgroundImage={"linear-gradient(0deg, #4039a7, #d647db)"}
          backgroundClip={"text"}
          color={"transparent"}
          fontSize={{ base: "20px", md: "23px", lg: "39px" }}
          fontWeight={900}
          mb={{ base: "10px", md: "17px", lg: "22px" }}
        >
          Connect with me
        </Heading>
      </Box>

      <Box>
        <IconButton
          aria-label="email"
          variant="ghost"
          size="lg"
          fontSize="3xl"
          icon={<Mail />}
          _hover={{
            bg: "#6235dd7b",
            color: "white",
          }}
          onClick={handleEmailClick}
          isRound
        />
        <IconButton
          aria-label="email"
          variant="ghost"
          size="lg"
          fontSize="3xl"
          icon={<MessageCircle />}
          _hover={{
            bg: "#6235dd7b",
            color: "white",
          }}
          onClick={handleWhatsapp}
          isRound
        />
        <IconButton
          aria-label="email"
          variant="ghost"
          size="lg"
          fontSize="3xl"
          icon={<Linkedin />}
          _hover={{
            bg: "#6235dd7b",
            color: "white",
          }}
          onClick={handleLinkedin}
          isRound
        />
      </Box>
    </Flex>
  );
};

export default Touch;
