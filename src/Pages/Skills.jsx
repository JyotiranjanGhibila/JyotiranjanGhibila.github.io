import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import '../Styles/Styles.css'
export default function skills() {
  return (
    <>
      <Box textAlign={"center"} pt={{lg:'20'}}>
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
            Skills And FrameWorks
          </Text>
        </Heading>
      </Box>

      <Center py={12}>
        <Wrap
          spacing={"40px"}
          // jWrapustify="center"
          width={"80%"}
          justify="center"
        >
          <WrapItem className="skill">
            <Center w="150px" h="150px">
              <Image
                className="img-1"
                
                width={"100%"}
                objectFit={"cover"}
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                }
              />
            </Center>
          </WrapItem>
          <WrapItem className="skill">
            <Center w="150px" h="150px">
              <Image
                className="img-2"
                height={"100%"}
                width={"100%"}
                objectFit={"cover"}
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                }
              />
            </Center>
          </WrapItem>
          <WrapItem className="skill">
            <Center w="150px" h="150px">
              <Image
                className="img-3"
                height={"100%"}
                // width={"100%"}
                w={{base:"92%",md:'94%',lg:"98%"}}
                objectFit={"cover"}
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                }
              />
            </Center>
          </WrapItem>
          <WrapItem className="skill">
            <Center w="150px" h="150px">
              <Image
                className="img-4"
                height={"100%"}
                width={"100%"}
                objectFit={"cover"}
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                }
              />
            </Center>
          </WrapItem>
          <WrapItem className="skill">
            <Center w="150px" h="150px">
              <Image
                className="img-5"
                height={"100%"}
                width={"100%"}
                objectFit={"cover"}
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                }
              />
            </Center>
          </WrapItem>
          <WrapItem className="skill">
            <Center w="150px" h="150px">
              <Image
                className="img-6"
                height={"100%"}
                width={"100%"}
                objectFit={"cover"}
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                }
              />
            </Center>
          </WrapItem>
          <WrapItem className="skill">
            <Center w="150px" h="150px">
              <Image
                className="img-7"
                height={"100%"}
                width={"100%"}
                objectFit={"cover"}
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                }
              />
            </Center>
          </WrapItem>
          <WrapItem className="skill">
            <Center w="150px" h="150px">
              <Image
                className="img-8"
                height={"100%"}
                width={"100%"}
                objectFit={"cover"}
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                }
              />
            </Center>
          </WrapItem>
          <WrapItem className="skill">
            <Center w="150px" h="150px">
              <Image
                className="img-20"
                height={"100%"}
                width={"100%"}
                objectFit={"cover"}
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                }
              />
            </Center>
          </WrapItem>
          <WrapItem className="skill">
            <Center w="150px" h="150px">
              <Image
                className="img-9"
                height={"100%"}
                width={"100%"}
                objectFit={"cover"}
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                }
              />
            </Center>
          </WrapItem>
          <WrapItem className="skill">
            <Center w="150px" h="150px">
              <Image
                className="img-10"
                height={"100%"}
                width={"100%"}
                objectFit={"cover"}
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
                }
              />
            </Center>
          </WrapItem>
          <WrapItem className="skill">
            <Center w="150px" h="150px">
              <Image
                className="img-11"
                height={"100%"}
                width={"100%"}
                objectFit={"cover"}
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                }
              />
            </Center>
          </WrapItem>
          <WrapItem className="skill">
            <Center w="150px" h="150px">
              <Image
                className="img-12"
                height={"100%"}
                width={"100%"}
                objectFit={"cover"}
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                }
              />
            </Center>
          </WrapItem>
        </Wrap>
      </Center>
    </>
  );
}
