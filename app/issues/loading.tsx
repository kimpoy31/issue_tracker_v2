import { Button, Table } from '@radix-ui/themes'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { Skeleton } from '../components/index'

const loading = () => {
    const issues = [1,2,3,4,5,6,7,8,9,10]

  return (
    <div className='flex flex-col gap-2'>
        <Skeleton height={"2.5rem"} width={"8rem"} />
        
        <Table.Root variant="surface">
        <Table.Header>
            <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created at</Table.ColumnHeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {issues.map((issue, index) => 
                <Table.Row key={index}>
                    <Table.Cell><Skeleton height={"1rem"} /></Table.Cell>
                    <Table.Cell><Skeleton height={"1rem"} /></Table.Cell>
                    <Table.Cell><Skeleton height={"1rem"} /></Table.Cell>
                </Table.Row> 
            )}
        </Table.Body>
        </Table.Root>
    </div>
  )
}

export default loading