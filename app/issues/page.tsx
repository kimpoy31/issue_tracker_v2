import { Button, Flex, Table } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import prisma from '@/prisma/client';
import IssueTable from './IssueTable';
import IssueStatusFilter from './IssueStatusFilter';

const IssuesPage = async() => {
  const issues = await prisma.issue.findMany()

  return (
    <div className='flex flex-col gap-2'>
        <Flex justify={"between"}>
          <IssueStatusFilter />
          <Link href={"/issues/new"}>
              <Button> <FaPlus/> New Issue</Button>
          </Link>
        </Flex>

        <IssueTable issues={issues}/>
    </div>
  )
}

export default IssuesPage