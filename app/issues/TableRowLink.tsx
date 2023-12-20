"use client"
import { Issue } from '@prisma/client'
import { Table } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import React from 'react'
import StatusBadge from './_components/Badge'

const TableRowLink = ({ issue } : {issue: Issue}) => {
    const router = useRouter()

  return (
    <Table.Row className='hover:text-indigo-500 cursor-pointer' onClick={() => router.push(`/issues/${issue.id}`)}>
        <Table.Cell>
          {issue.title}
          <div className='block md:hidden mt-1'><StatusBadge status={issue.status} /></div>
        </Table.Cell>
        <Table.Cell className='hidden md:table-cell'><StatusBadge status={issue.status} /></Table.Cell>
        <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
    </Table.Row>
  )
}

export default TableRowLink