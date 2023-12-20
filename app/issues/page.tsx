import { Button, Flex, Table } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import prisma from '@/prisma/client';
import StatusBadge from './_components/Badge';
import IssueTable from './IssueTable';

const IssuesPage = async() => {
  const issues = await prisma.issue.findMany()

  return (
    <div className='flex flex-col gap-2'>
        <Link href={"/issues/new"}>
            <Button> <FaPlus/> New Issue</Button>
        </Link>

        <IssueTable issues={issues}/>
    </div>
  )
}

export default IssuesPage