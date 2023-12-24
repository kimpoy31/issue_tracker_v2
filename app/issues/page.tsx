import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import prisma from '@/prisma/client';
import IssueTable from './IssueTable';
import IssueStatusFilter from './IssueStatusFilter';
import { Status } from '@prisma/client';

const IssuesPage = async({searchParams}: {searchParams: { status: Status }}) => {
  const statuses = Object.values(Status)
  const status = statuses.includes(searchParams.status)
  ? searchParams.status
  : undefined

  const issues = await prisma.issue.findMany({
    where: {
      status
    }
  })

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