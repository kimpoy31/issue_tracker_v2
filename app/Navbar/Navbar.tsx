import { Box, Button, Container, Flex, Heading, Tabs, Text } from '@radix-ui/themes'
import React from 'react'
import NavLink from "./Link"
import { FaBug } from "react-icons/fa6";
import Link from 'next/link';
import NavActionBtn from './NavActionBtn';

const Navbar = () => {
  const links = [
    {label: "Dashboard", href:"/"},
    {label: "Issues", href:"/issues"},
  ]
  // className='px-1 md:px-16 mb-4 flex justify-between items-center'
  return (
    <Container px={{initial:"1", md:"6"}} py={"4"}>
      <Flex justify={"between"} align={"center"} >
        <Flex>
            <Flex gap={"2"}  align={"center"}>
                <Link href={"/"} className='p-2 hover:brightness-75'>
                  <FaBug size="20" />
                </Link>
                <Flex gap={"1"}>
                  {links.map((link, index) => <NavLink key={index} label={link.label} href={link.href} /> )}
                </Flex>
            </Flex>
        </Flex>  

        <NavActionBtn />
      </Flex>
    </Container>
  )
}

export default Navbar