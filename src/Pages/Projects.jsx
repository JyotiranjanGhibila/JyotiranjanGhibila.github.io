import React from "react";
import bewa from "../img/bewakoof.jpg";
import entire from "../img/entirety.jpg";
import wecare from "../img/wecare.jpg";
import flow from "../img/flow.jpg";
import "../Styles/Styles.css";
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
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <Box textAlign={"center"} pt={{ lg: "15" }}>
        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",

              position: "absolute",
              bottom: 1,
              left: 0,

              zIndex: -1,
            }}
            color={"green.500"}
          >
            Projects
          </Text>
        </Heading>
      </Box>
      <Stack
        minH={"auto"}
        direction={{ base: "column", md: "row" }}
        style={{ marginTop: "40px" }}
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
                Bewakoof
              </Text>
              <br />{" "}
              <Text color={"green.400"} as={"span"}>
                Clone Website
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Online Shopping Made Hassle-Free, Convenient & Super-Exciting With
              Bewakoof.com. Shop Now! All the Latest Trends are Just a Click
              Away! Easy Shopping, Secure Payments & Cool Offers. Free Shipping.
              Cash on Delivery. 15 Day Return Policy. Easy Returns.
            </Text>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={"green.400"}
              fontFamily={"monospace"}
            >
              Tech Stack: HTML || CSS || JavaScript
            </Text>
            <Stack direction={{ base: "row", md: "row" }} spacing={4}>
              <Link
                to="https://clinquant-baklava-8aec62.netlify.app/"
                target="_blank"
              >
                <Button
                  rounded={"full"}
                  bg={"green.400"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Live
                </Button>
              </Link>

              <Link
                to="https://github.com/Arun-kumar-fw20-0202/-giving-scene-667"
                target="_blank"
              >
                <Button rounded={"full"}>Code</Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
          <Image
            alt={"Login Image"}
            // objectFit={'cover'}
            src={bewa}
            w={{ base: "92%", md: "94%", lg: "97%" }}
          />
        </Flex>
      </Stack>

      <Stack
        minH={"auto"}
        direction={{ base: "column", md: "row" }}
        style={{ marginTop: "40px" }}
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
                DermStore
              </Text>
              <br />{" "}
              <Text color={"green.400"} as={"span"}>
                Clone Website
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Online Shopping Made Hassle-Free, Convenient & Super-Exciting With
              Bewakoof.com. Shop Now! All the Latest Trends are Just a Click
              Away! Easy Shopping, Secure Payments & Cool Offers. Free Shipping.
              Cash on Delivery. 15 Day Return Policy. Easy Returns.
            </Text>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={"green.400"}
              fontFamily={"monospace"}
            >
              Tech Stack: HTML || CSS ||Chakra UI || JavaScript || ReactJS
            </Text>
            <Stack direction={{ base: "row", md: "row" }} spacing={4}>
              <Link
                to="https://zesty-kulfi-95bf22.netlify.app/"
                target="_blank"
              >
                <Button
                  rounded={"full"}
                  bg={"green.400"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Live
                </Button>
              </Link>

              <Link
                to="https://github.com/JyotiranjanGhibila/-zealous-rail-6006"
                target="_blank"
              >
                <Button rounded={"full"}>Code</Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
          <Image
            alt={"Login Image"}
            // objectFit={'cover'}
            src={wecare}
            w={{ base: "92%", md: "94%", lg: "97%" }}
          />
        </Flex>
      </Stack>
      <Stack
        minH={"auto"}
        direction={{ base: "column", md: "row" }}
        style={{ marginTop: "40px" }}
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
                1800Flowers
              </Text>
              <br />{" "}
              <Text color={"green.400"} as={"span"}>
                Clone Website
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              1-800-Flowers.com, Inc. is a floral and foods gift retailer and
              distribution company in the United States. The company's focus,
              except for Mother's Day and Valentine's Day, is on gift baskets.
              They also use the name 1-800-Baskets.com.
            </Text>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={"green.400"}
              style={{ fontFamily: "monospace" }}
            >
              Tech Stack: HTML || CSS || Chakra UI || JavaScript || ReactJS ||
              NextJS || Fire Base
            </Text>
            <Stack direction={{ base: "row", md: "row" }} spacing={4}>
              <Link to="https://frontend-jyotiranjanghibila.vercel.app/" target="_blank">
                <Button
                  rounded={"full"}
                  bg={"green.400"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Live
                </Button>
              </Link>

              <Link
                to="https://github.com/SantoshSharma09/1800flowers-clone"
                target="_blank"
              >
                <Button rounded={"full"}>Code</Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
          <Image
            alt={"Login Image"}
            
            src={flow}
            w={{ base: "90%", md: "94%", lg: "97%" }}
          />
        </Flex>
      </Stack>
      <Stack
        minH={"auto"}
        direction={{ base: "column", md: "row" }}
        style={{ marginTop: "40px" }}
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
                Anthropologie
              </Text>
              <br />{" "}
              <Text color={"green.400"} as={"span"}>
                Clone Website
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              Anthropologie is a unique, full-lifestyle shopping destination,
              with a mostly exclusive assortment of clothing, shoes,
              accessories, beauty, furniture, home décor, garden, bridal, and
              more. The brand opened its very first doors in the autumn of 1992
              in Wayne, Pennsylvania.
            </Text>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={"green.400"}
              style={{ fontFamily: "monospace" }}
            >
              Tech Stack: HTML || CSS || JavaScript || ReactJs
            </Text>
            <Stack direction={{ base: "row", md: "row" }} spacing={4}>
              <Link
                to="https://genuine-strudel-187ee4.netlify.app/"
                target="_blank"
              >
                <Button
                  rounded={"full"}
                  bg={"green.400"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Live
                </Button>
              </Link>

              <Link
                to="https://github.com/JyotiranjanGhibila/grateful-mark-105"
                target="_blank"
              >
                <Button rounded={"full"}>Code</Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
          <Image
            alt={"Login Image"}
            // objectFit={'cover'}
            src={entire}
            w={{ base: "90%", md: "94%", lg: "97%" }}
          />
        </Flex>
      </Stack>
    </>
  );
}
