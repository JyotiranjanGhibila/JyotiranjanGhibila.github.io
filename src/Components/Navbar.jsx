import resume from "./Jyoti_Ranjan_Ghibila_Resume.pdf";

import {
  Box,
  Flex,
  Link,
  useDisclosure,
  useColorModeValue,
  Stack,
  HStack,
  IconButton,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import "../Styles/Styles.css";

const NavLin = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);

export default function Navbar({
  hHom,
  hAbout,
  hSkills,
  hProjects,
  hGith,
  hContact,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position={"fixed"}
        zIndex={3}
        width={"100%"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={{ base: "8", md: "8", lg: "40" }}
            alignItems={"center"}
          >
            <Box>
              <span
                style={{
                  color: "#48bb78",
                  fontSize: "22px",
                  fontWeight: "380",
                }}
              >
                Jyoti
              </span>
              <span
                style={{
                  color: "#708196",
                  fontSize: "22px",
                  fontWeight: "400",
                }}
              >
                Ranjan
              </span>
            </Box>
            <HStack
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}
            >
              <Box onClick={hHom}>
                <NavLin>Home</NavLin>
              </Box>
              <Box onClick={hAbout}>
                <NavLin>About</NavLin>
              </Box>
              <Box onClick={hSkills}>
                <NavLin>Skills</NavLin>
              </Box>
              <Box onClick={hProjects}>
                <NavLin>Projects</NavLin>
              </Box>
              <Box onClick={hContact}>
                <NavLin>Contact</NavLin>
              </Box>

              <Box>
                <a href={resume} download>
                  <button
                    className="app__nav-btn"
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/1H-SrVolTzFQc46VtZt5E1T_5GKgnfUz0/view?usp=share_link"
                      );
                    }}
                  >
                    Resume
                  </button>
                </a>
              </Box>
              <Box onClick={toggleColorMode} style={{ cursor: "pointer" }}>
                {colorMode === "light" ? "Dark" : "Light"}
              </Box>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Box onClick={toggleColorMode} style={{ cursor: "pointer" }}>
                {colorMode === "light" ? "Dark" : "Light"}
              </Box>
              <Box onClick={hHom}>
                <NavLin>Home</NavLin>
              </Box>
              <Box onClick={hAbout}>
                <NavLin>About</NavLin>
              </Box>
              <Box onClick={hSkills}>
                <NavLin>Skills</NavLin>
              </Box>
              <Box onClick={hProjects}>
                <NavLin>Projects</NavLin>
              </Box>
              <Box onClick={hContact}>
                <NavLin>Contact</NavLin>
              </Box>
              <Box>
                <a href={resume} download>
                  <button
                    className="app__nav-btn"
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/1H-SrVolTzFQc46VtZt5E1T_5GKgnfUz0/view?usp=share_link"
                      );
                    }}
                  >
                    Resume
                  </button>
                </a>
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
