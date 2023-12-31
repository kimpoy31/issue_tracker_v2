"use client"

import { Avatar, Box, Button, DropdownMenu, Flex, Text } from '@radix-ui/themes'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { Skeleton } from "@/app/components/index"

const NavActionBtn = () => {
    const { status , data: session } = useSession()

  return (
    <Box>
        {status === "loading" && <Skeleton width={"3rem"} height={"1.5rem"} />
        }
        { status === "authenticated" && 
          // <Link href={"/api/auth/signout"}>Logout</Link>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Avatar src={session.user!.image!} fallback="?" size="2" radius='full' referrerPolicy='no-referrer'/>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content size="1">
              <DropdownMenu.Label>
                <Text>{session.user!.email}</Text>
              </DropdownMenu.Label>
              
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