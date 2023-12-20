import prisma from '@/prisma/client'
import { Box, Button, Flex, Grid, Text } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import React from 'react'
import Markdown from 'react-markdown'
import StatusBadge from '../_components/Badge'

const DetailsPage = async({ params }:{ params: { id: string } }) => {
    const issue = await prisma.issue.findUnique({
        where:{
            id: parseInt(params.id),
        }
    })

    if(!issue) notFound()

  return (
    <Grid columns="2" gap="3">
        <Box>
            <Text size="5" trim={'both'} style={{fontWeight:"bold"}}>{issue.title}</Text>
            <Flex gap={"2"}>
                <StatusBadge status={issue.status} />
                <small>{issue.createdAt.toDateString()}</small>
            </Flex>
            <Markdown className="prose border p-4">
                {issue.description}
            </Markdown>
        </Box>
        <Box>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </Box>
    </Grid>
  )
}

export default DetailsPage