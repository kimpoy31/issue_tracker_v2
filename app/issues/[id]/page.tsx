import prisma from '@/prisma/client'
import { Box, Button, Flex, Grid, Text } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import React from 'react'
import IssueDetails from './IssueDetails'
import EditIssueButton from './EditIssueButton'
import DeleteIssueButton from './DeleteIssueButton'

const DetailsPage = async({ params }:{ params: { id: string } }) => {
    const issue = await prisma.issue.findUnique({
        where:{
            id: parseInt(params.id),
        }
    })

    if(!issue) notFound()

  return (
    <Grid columns={{initial:"1" , md:"5"}} gap="3">
        <Box className='col-span-4'>
            <IssueDetails issue={issue} />
        </Box>
        <Box>
            <Flex gap={"1"} direction={"column"}>
                <EditIssueButton id={issue.id} />
                <DeleteIssueButton issue={issue} />
            </Flex>
        </Box>
    </Grid>
  )
}

export default DetailsPage