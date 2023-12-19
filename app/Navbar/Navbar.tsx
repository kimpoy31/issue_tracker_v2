import { Box, Button, Container, Flex, Heading, Tabs, Text } from '@radix-ui/themes'
import React from 'react'
import NavLink from "./Link"
import { FaBug } from "react-icons/fa6";
import Link from 'next/link';

const Navbar = () => {
  const links = [
    {label: "Dashboard", href:"/"},
    {label: "Issues", href:"/issues"},
  ]

  return (
    <Container px={{initial:"2", sm:"6",}} py="6">

        <Flex align={"center"} >
            <Flex gap="4" height="4" align="center">
                <Link href={"/"} className='p-2 hover:brightness-75'>
                  <FaBug size="20" />
                </Link>
                <Flex gap={"2"}>
                  {links.map((link, index) => <NavLink key={index} label={link.label} href={link.href} /> )}
                </Flex>
            </Flex>
        </Flex>
        
        
    </Container>
  )
}

export default Navbar