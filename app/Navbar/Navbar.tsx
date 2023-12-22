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

  return (
    <div className='px-1 md:px-16 mb-4 flex justify-between items-center'>
        <div className='flex'>
            <div className='flex gap-4 h-16 items-center'>
                <Link href={"/"} className='p-2 hover:brightness-75'>
                  <FaBug size="20" />
                </Link>
                <div className='flex gap-2'>
                  {links.map((link, index) => <NavLink key={index} label={link.label} href={link.href} /> )}
                </div>
            </div>
        </div>  

        <NavActionBtn />
    </div>
  )
}

export default Navbar