import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from "react-icons/fa6";

const IssuesPage = () => {
  return (
    <div>
        <Link href={"/issues/new"}>
            <Button size={"3"}> <FaPlus/> New Issue</Button>
        </Link>
    </div>
  )
}

export default IssuesPage