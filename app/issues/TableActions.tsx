import React from 'react'
import IssueStatusFilter from './IssueStatusFilter'
import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa6'

const TableActions = () => {
  return (
    <Flex justify={"between"}>
        <IssueStatusFilter />
        <Link href={"/issues/new"}>
            <Button> <FaPlus/> New Issue</Button>
        </Link>
    </Flex>
  )
}

export default TableActions