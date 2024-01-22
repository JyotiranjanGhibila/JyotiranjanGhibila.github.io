import React from "react";
import { Collapse, Icon, Tooltip, useMediaQuery } from "@chakra-ui/react";
import { ChevronDownCircle, ChevronUpCircle } from "lucide-react";
const ExpandableText = () => {
  const [isLargerThan425] = useMediaQuery("(max-width: 425px)");
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Collapse
        startingHeight={215}
        in={show}
        style={{
          background: "linear-gradient(0deg, #a8a8fd, #fff 35%, #e43da9)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        As a seasoned Software Development Engineer with a dynamic professional
        journey, {isLargerThan425 ? null : <br />} I am currently leveraging my
        expertise at Masai, {isLargerThan425 ? null : <br />}
        where I have been contributing to the digital landscape for the past 6
        months. Simultaneously, {isLargerThan425 ? null : <br />} I have honed
        my skills as a Software Developer Trainee at Dranzo for an additional 4
        months, {isLargerThan425 ? null : <br />} embracing the challenges and
        opportunities that come with continuous learning and growth.{" "}
        {isLargerThan425 ? null : <br />}
        My commitment to excellence is evident in the diverse projects I've
        undertaken, {isLargerThan425 ? null : <br />} showcasing not only
        technical prowess but also a passion for innovation and problem-solving.{" "}
        {isLargerThan425 ? null : <br />} Join me as I navigate the realms of
        software development, {isLargerThan425 ? null : <br />} constantly
        pushing boundaries and transforming challenges into triumphs.
      </Collapse>
      <Tooltip label={show ? "Show less" : "Show more"} fontSize={"md"}>
        <Icon
          display={{ base: "block", md: "none" }}
          as={show ? ChevronUpCircle : ChevronDownCircle}
          size="sm"
          onClick={handleToggle}
          color={"#fff"}
        />
      </Tooltip>
    </>
  );
};

export default ExpandableText;
