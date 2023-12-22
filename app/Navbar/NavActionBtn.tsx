"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavActionBtn = () => {
    const { status , data: session } = useSession()

  return (
    <div>
        { status === "authenticated" && <Link href={"/api/auth/signout"}>Logout</Link>}
        { status === "unauthenticated" && <Link href={"/api/auth/signin"}>Login</Link>}
    </div>
  )
}

export default NavActionBtn