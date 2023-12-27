import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import prisma from '@/prisma/client';
import IssueTable from './IssueTable';
import IssueStatusFilter from './IssueStatusFilter';
import { Issue, Status } from '@prisma/client';
import Pagination from './Pagination';

interface Props{
  searchParams: { 
    status: Status, 
    orderBy: keyof Issue, 
    page:string 
  },
}

const IssuesPage = async({searchParams}: Props) => {
  const columns : {label: string, value: keyof Issue, className: string  }[] = [
    {label: "Title" , value: "title", className: "cursor-pointer"},
    {label: "Status" , value: "status", className: "hidden md:table-cell cursor-pointer"},
    {label: "Created At" , value: "createdAt", className: 'hidden md:table-cell cursor-pointer'},
  ]

  const statuses = Object.values(Status)
  const status = statuses.includes(searchParams.status)
  ? searchParams.status
  : undefined
  const where = { status }

  const orderBy = columns.map(column => column.value).includes(searchParams.orderBy)
  ? {[searchParams.orderBy]: "asc"}
  : undefined

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page -1) * pageSize,
    take: pageSize
  })

  const issueCount = await prisma.issue.count({ where })

  return (
    <div className='flex flex-col gap-2'>
        <Flex justify={"between"}>
          <IssueStatusFilter />
          <Link href={"/issues/new"}>
              <Button> <FaPlus/> New Issue</Button>
          </Link>
        </Flex>

        <IssueTable searchParams={searchParams} issues={issues} columns={columns} />
        <Pagination itemCount={issueCount} pageSize={pageSize} currentPage={page}/>
    </div>
  )
}

export default IssuesPage