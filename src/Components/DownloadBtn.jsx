import { Button , Box } from "@chakra-ui/react";
import React from "react";
import BtnStyle from '../styles/download.module.css'

const DownloadBtn = ({title}) => {
  return (
    <Button class={BtnStyle.btn} type="button">
      <strong>{title}</strong>
      <Box id={BtnStyle.containerstars}>
        <Box id={BtnStyle.stars}></Box>
      </Box>

      <Box id={BtnStyle.glow}>
        <Box class={BtnStyle.circle}></Box>
        <Box class={BtnStyle.circle}></Box>
      </Box>
    </Button>
  );
};

export default DownloadBtn;
