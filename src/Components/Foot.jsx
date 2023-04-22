import {
  Box,
  Container,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsHeartFill } from "react-icons/bs";

export default function Foot() {
  return (
    <Box
      bg={useColorModeValue("green.100", "green.700")}
      color={useColorModeValue("black")}
      w={'full'}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center" }}
        align={{ base: "center", md: "center" }}
      >
        <HStack>
          <Text fontWeight={650}>All rights reserved</Text>
          <BsHeartFill color="red" />
          <Text fontWeight={650}> Jyoti Ranjan Ghibila</Text>
        </HStack>
      </Container>
    </Box>
  );
}
