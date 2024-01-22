import { Box, Flex, Image, Text, CSSObject } from "@chakra-ui/react";

const rotateCarouselKeyframes: CSSObject = {
  "@keyframes rotateCarousel": {
    "100%": {
      transform: "rotate(360deg)",
    },
  },
};

const CircleMarquee = ({ pack }) => {
  const { logo } = pack;
  return (
    <Box
      position={"relative"}
      w={{ base: "265px", md: "380px", lg: "490px" }}
      h={{ base: "265px", md: "380px", lg: "490px" }}
      borderRadius={"50%"}
    >
      <Flex
        position={"absolute"}
        inset={0}
        flexDir={"column"}
        m={"auto"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text
          fontSize={{ base: "18px", md: "22px" }}
          fontWeight={800}
          backgroundImage={"linear-gradient(0deg, #fff, #ab59ee)"}
          backgroundClip={"text"}
          color={"transparent"}
        >
          Skills &
        </Text>
        <Text
          fontSize={"14px"}
          fontWeight={800}
          backgroundImage={"linear-gradient(0deg, #fff, #7459ee)"}
          backgroundClip={"text"}
          color={"transparent"}
        >
          Tools
        </Text>
      </Flex>

      {logo?.map((orbit, ind) => {
        const animationDirection = `calc(20s + ${ind + 5}s)`;
        const animationDelay = orbit.length;
        return (
          <Flex
            key={ind}
            position={"absolute"}
            alignItems={"center"}
            justifyContent={"center"}
            top={0}
            w={"100%"}
            h={"100%"}
            padding={"20px"}
          >
            <Flex
              position={"relative"}
              height={`${(100 + 20 * ind) / (ind + 1)}%`}
              width={`${(100 + 20 * ind) / (ind + 1)}%`}
              // border={`1px solid ${pack.orbitColor}`}
              borderRadius={"50%"}
              justifyContent={"center"}
            >
              {orbit.map((logo, imgInd) => {
                return (
                  <Box
                    key={imgInd}
                    position={"absolute"}
                    h={"50%"}
                    margin={"auto"}
                    padding={"10px"}
                    transformOrigin={"bottom"}
                    style={{
                      animation: `rotateCarousel ${animationDirection} linear infinite`,
                      animationDirection: ind % 2 === 0 ? "initial" : "reverse",
                      animationDelay: `calc(-${imgInd} * ${
                        20 + (ind + 5)
                      }s / ${animationDelay} )`,
                    }}
                    css={rotateCarouselKeyframes}
                  >
                    <Flex
                      position={"relative"}
                      top={"-30px"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      transform="rotate(0deg)"
                      borderRadius={"50%"}
                      w={{ base: "40px", md: "48px", lg: "60px" }}
                      h={{ base: "40px", md: "48px", lg: "60px" }}
                      padding={{ base: "5px", md: "9px" }}
                      overflow={"hidden"}
                      animation={`rotateCarousel ${animationDirection} linear reverse infinite`}
                      style={{
                        animationDirection:
                          ind % 2 === 0 ? "reverse" : "initial",
                        animationDelay: `calc(-${imgInd} * ${
                          20 + (ind + 5)
                        }s / ${animationDelay} )`,
                      }}
                      border={`1px solid ${logo.border}`}
                      bg={logo.bg}
                    >
                      <Image
                        src={logo.icn}
                        alt="logo"
                        w={{ base: "70%", md: "100%" }}
                        height={"100%"}
                        objectFit={"contain"}
                      />
                    </Flex>
                  </Box>
                );
              })}
            </Flex>
          </Flex>
        );
      })}
    </Box>
  );
};

export default CircleMarquee;
