import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import hero1 from "../Components/hero1.jpg";

export default function SplitScreen() {
  return (
    <>
      <Stack
        minH={"auto"}
        direction={{ base: "column", md: "row" }}
        style={{ marginTop: "20px" }}
        
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "green.400",
                  zIndex: -1,
                }}
              >
                About
              </Text>
              <br />{" "}
              <Text color={"green.400"} as={"span"}>
                Me
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              As a Full Stack Web Developer, passionate about building digital
              products using React, javaScript, HTML, CSS and Node.js that user
              likes to use and improve the user interactions and familiar to
              user.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
          <Image
            alt={"Login Image"}
            src={hero1}
            w={{ base: "70%", md: "70%", lg: "70%" }}
          />
        </Flex>
      </Stack>
    </>
  );
}
