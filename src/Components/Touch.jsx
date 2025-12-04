import { Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import React from "react";

const Touch = () => {
  const email = "ghibilamohan@gmail.com";
  const phoneNumber = "7735285611";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };
  const handleWhatsapp = () => {
    window.location.href = `https://wa.me/${phoneNumber}`;
  };
  const handleLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/jyoti-ranjan-ghibila-449105206/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const cards = [
    {
      label: "WhatsApp",
      icon: <MessageCircle size={32} />,
      action: handleWhatsapp,
    },
    {
      label: "Email",
      icon: <Mail size={32} />,
      action: handleEmailClick,
    },
    {
      label: "LinkedIn",
      icon: <Linkedin size={32} />,
      action: handleLinkedin,
    },
  ];

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt="22px"
      w="100%"
      padding={{ base: "25px 0px", md: "40px 0px", lg: "85px 0px" }}

    >
      <Heading
        backgroundImage="linear-gradient(0deg, #4039a7, #d647db)"
        backgroundClip="text"
        color="transparent"
        fontSize={{ base: "24px", md: "28px", lg: "34px" }}
        fontWeight={900}
        mb="25px"
      >
        Connect With Me
      </Heading>

      {/* CARD LAYOUT */}
      <Flex
        gap={{ base: "15px", md: "25px" }}
        wrap="wrap"
        justifyContent="center"
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            onClick={card.action}
            cursor="pointer"
            w={{ base: "140px", md: "170px" }}
            p="20px"
            textAlign="center"
            borderRadius="20px"
            background="rgba(255,255,255,0.08)"
            backdropFilter="blur(6px)"
            border="1px solid rgba(255,255,255,0.15)"
            boxShadow="0 8px 25px rgba(0,0,0,0.25)"
            transition="0.25s"
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
            }}
          >
            <IconButton
              aria-label={card.label}
              variant="ghost"
              size="lg"
              icon={card.icon}
              borderRadius="50%"
              bg="rgba(255,255,255,0.12)"
              _hover={{ bg: "rgba(255,255,255,0.12)" }} // icon hover disabled
              mb="12px"
            />

            <Text
              fontSize={{ base: "15px", md: "17px" }}
              color="whiteAlpha.900"
              fontWeight={600}
            >
              {card.label}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Touch;
