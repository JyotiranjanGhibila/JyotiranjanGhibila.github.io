import React from 'react'
import { Avatar, Flex, Tooltip } from '@chakra-ui/react'
import GitHub from '../assets/github.svg'
import CodeSandbox from '../assets/code-sandbox.svg'
import linkedIn from '../assets/linkedin.svg'
import { Link } from 'react-router-dom'

const CodeTool = () => {

  const tool=[
    {
      ref:"https://github.com/JyotiranjanGhibila",
      logo:GitHub,
      name:"GitHub"
    },
    {
      ref:"https://codesandbox.io/dashboard/recent?workspace=459390ef-4d16-4505-a596-ce39eaf15fd9",
      logo:CodeSandbox,
      name:"CodeSandbox"
    },
    {
      ref:"https://www.linkedin.com/in/jyoti-ranjan-ghibila-449105206/",
      logo:linkedIn,
      name:"LinkedIn"
    }
  ]
  return (
    <Flex
    mt={"14px"}
    alignItems={"center"}
    columnGap={{base:"22px",md:"18px",lg:"32px"}}
    >
      {
        tool?.map((item,ind) => (
          <Link key={ind} to={item.ref} target={item.ref}>
            <Tooltip label={item.name} placement='top'>
              <Avatar src={item.logo} cursor={"pointer"}/>
            </Tooltip>
          </Link>
        ))
      }
    
    </Flex>
  )
}

export default CodeTool