import React from 'react'
import prisma from '@/prisma/client'
import { Avatar, Card, Flex, Heading, Table } from '@radix-ui/themes'
import Link from 'next/link'
import StatusBadge from './components/Badge'

const LatestIssues = async() => {
    const issues = await prisma.issue.findMany({
        orderBy: {createdAt:"desc"},
        take: 5,
        include: {
            assignedToUser: true
        }
    });

  return (
    <Card>
        <Heading mb={"3"}>Latest Issues</Heading>
        <Table.Root>
            <Table.Body>
                {issues.map(issue =>
                    <Table.Row key={issue.id}>
                        <Table.Cell>
                            <Flex justify={"between"} align={"center"}>
                                <Flex direction={"column"} align={"start"}>
                                    <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                                    <StatusBadge status={issue.status} />
                                </Flex>
                                {issue.assignedToUser && 
                                <Avatar 
                                    fallback="?" 
                                    src={issue.assignedToUser!.image!} 
                                    radius='full'
                                    size="2"   
                                />}
                            </Flex>
                        </Table.Cell>
                    </Table.Row>    
                )}
            </Table.Body>
        </Table.Root>
    </Card>
  )
}

export default LatestIssues