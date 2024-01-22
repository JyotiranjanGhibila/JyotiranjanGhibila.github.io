import { Box, ColorModeProvider, useColorMode } from "@chakra-ui/react";
import bgPatternlight from "./assets/bg-pattern-light.svg";
import Allroutes from "./pages/Allroutes";

export default function App () {
  const { colorMode } = useColorMode();
  const darkBackgroundColor = "rgba(122, 41, 160, 0.50)";
  return (
    <ColorModeProvider value="dark">
      <Box
        bg="#2E1C3B"
        backgroundImage={`url(${colorMode === "dark" ? bgPatternlight : bgPatternlight
          })`}
        userSelect={"none"}
      >
        <Box
          background={
            "linear-gradient(320deg, #1E183A 28.7%, rgba(31, 27, 40, 0.59) 86.04%, rgba(31, 27, 40, 0.00) 120.18%)"
          }
          minH={"100vh"}
          h="fit-content"
          w={"100%"}
          backgroundAttachment={"fixed"}
          backgroundColor={darkBackgroundColor}
        >
          <Box maxW={"1440px"} mx={"auto"}>
            <Allroutes />
          </Box>
        </Box>
      </Box>
    </ColorModeProvider>
  );
}
