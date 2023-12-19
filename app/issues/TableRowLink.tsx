"use client"
import { Issue } from '@prisma/client'
import { Table } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import React from 'react'

const TableRowLink = ({ issue } : {issue: Issue}) => {
    const router = useRouter()

  return (
    <Table.Row className='hover:text-indigo-500 cursor-pointer' onClick={() => router.push(`/issues/${issue.id}`)}>
        <Table.RowHeaderCell>{issue.title}</Table.RowHeaderCell>
        <Table.Cell>{issue.status}</Table.Cell>
        <Table.Cell>{issue.createdAt.toDateString()}</Table.Cell>
    </Table.Row>
  )
}

export default TableRowLink