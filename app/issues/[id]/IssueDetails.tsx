import { Flex, Text } from '@radix-ui/themes'
import React from 'react'
import StatusBadge from '../_components/Badge'
import Markdown from 'react-markdown'
import { Issue } from '@prisma/client'

const IssueDetails = ({issue}: {issue:Issue}) => {
  return (
    <Flex direction={"column"} gap={"1"}>
        <Text size="5" trim={'both'} style={{fontWeight:"bold"}} mb={"1"}>{issue.title}</Text>
        <Flex gap={"2"} align={"center"}>
            <StatusBadge status={issue.status} />
            <Text size={"1"}>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Markdown className="prose border p-4">
            {issue.description}
        </Markdown>
    </Flex>
  )
}

export default IssueDetails