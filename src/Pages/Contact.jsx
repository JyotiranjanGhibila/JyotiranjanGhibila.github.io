import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import {SiGmail} from "react-icons/si"
// import styles from "./Contact.module.css";
import styles from "../Styles/Contact.module.css"

import {
  Box,
  Heading,
  IconButton,
  Text,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Contact = () => {
  const form = useRef();
  const { hasCopied, onCopy } = useClipboard("ghibilamohan@gmail.com");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x5knajj",
        "template_1caqvnp",
        form.current,
        "K7cd1CmIkydX1cHhF"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message send");
        },
        (error) => {
          console.log(error.text);
          alert("somethings wrong");
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Box textAlign={"center"}>
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
            Contact Me
          </Text>
          
        </Heading>
        <Text>+91 7735285611</Text>
        <Text>ghibilamohan@gmail.com</Text>
      </Box>

      <div className={styles.contactcontainer}>
        <div className={styles.wrapper}>
          <Link to="https://github.com/JyotiranjanGhibila" target="_blank">
            <BsGithub style={{ fontSize: "50px" ,marginRight:"20px"}} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/jyoti-ranjan-ghibila-449105206/"
            target="_blank"
          >
            <BsLinkedin style={{ fontSize: "48px" }} />
          </Link>
          <form ref={form} onSubmit={sendEmail} className={styles.formBox}>
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
              className={styles.inpboxx}
            />
            <label>Gmail</label>
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
              className={styles.inpboxx}
            />
            <label>Subject</label>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
              className={styles.inpboxx}
            />
            
            
            <button type="submit" className={styles.button73}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
