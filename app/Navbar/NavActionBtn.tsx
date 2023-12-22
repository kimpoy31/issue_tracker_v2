"use client"

import { Avatar, Box, Button, DropdownMenu, Text } from '@radix-ui/themes'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavActionBtn = () => {
    const { status , data: session } = useSession()

  return (
    <Box>
        { status === "authenticated" && 
          // <Link href={"/api/auth/signout"}>Logout</Link>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar src={session.user!.image!} fallback="?" size="2" radius='full'/>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content size="1">
              <DropdownMenu.Label>
                <Text>{session.user!.email}</Text>
              </DropdownMenu.Label>
              <DropdownMenu.Separator />
              <Button variant="soft" size="1">
                <Link href={"/api/auth/signout"}>Logout</Link>
              </Button>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        }



        { status === "unauthenticated" && <Link href={"/api/auth/signin"}>Login</Link>}
    </Box>
  )
}

export default NavActionBtn