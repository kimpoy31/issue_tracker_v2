import React from 'react'
import prisma from '@/prisma/client';
import IssueTable, { IssueQuery, columnNames } from './IssueTable';
import { Issue, Status } from '@prisma/client';
import Pagination from './Pagination';
import TableActions from './TableActions';
import { Flex } from '@radix-ui/themes';

interface Props{
  searchParams: IssueQuery
}

const IssuesPage = async({searchParams}: Props) => {
  const statuses = Object.values(Status)
  const status = statuses.includes(searchParams.status)
  ? searchParams.status
  : undefined
  const where = { status }

  const orderBy = columnNames
  .includes(searchParams.orderBy)
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
    <Flex direction={"column"} gap={"3"}>
        <TableActions />
        <IssueTable searchParams={searchParams} issues={issues}/>
        <Pagination itemCount={issueCount} pageSize={pageSize} currentPage={page}/>
    </Flex>
  )
}

export default IssuesPage