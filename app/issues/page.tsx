import { Button, Flex, Table } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import prisma from '@/prisma/client';
import StatusBadge from './_components/Badge';

const IssuesPage = async() => {
  const issues = await prisma.issue.findMany()

  return (
    <div className='flex flex-col gap-2'>
        <Link href={"/issues/new"}>
            <Button> <FaPlus/> New Issue</Button>
        </Link>

        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className='hidden md:table-cell'>Created at</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {/* {issues.map(issue => <TableRowLink key={issue.id} issue={issue} /> )} */}
            {issues.map(issue => 
              <Table.Row key={issue.id}>
                <Table.Cell>
                  <Link href={`/issues/${issue.id}`} className='text-indigo-600 underline'>{issue.title}</Link>
                  <div className='block md:hidden mt-1'><StatusBadge status={issue.status} /></div>
                </Table.Cell>
                <Table.Cell className='hidden md:table-cell'><StatusBadge status={issue.status} /></Table.Cell>
                <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Root>
    </div>
  )
}

export default IssuesPage