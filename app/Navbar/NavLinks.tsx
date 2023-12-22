import { Flex } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { FaBug } from 'react-icons/fa6'
import NavLink from "./Link"

const NavbarLinks = () => {
    const links = [
        {label: "Dashboard", href:"/"},
        {label: "Issues", href:"/issues"},
      ]

  return (
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
  )
}

export default NavbarLinks