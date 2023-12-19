import { Button, Table } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import prisma from '@/prisma/client';
import TableRowLink from './TableRowLink';

const IssuesPage = async() => {
  const issues = await prisma.issue.findMany()

  return (
    <div className='flex flex-col gap-2'>
        <Link href={"/issues/new"}>
            <Button size={"3"}> <FaPlus/> New Issue</Button>
        </Link>

        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Created at</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {issues.map(issue => <TableRowLink key={issue.id} issue={issue} /> )}
          </Table.Body>
        </Table.Root>
         
    </div>
  )
}

export default IssuesPage