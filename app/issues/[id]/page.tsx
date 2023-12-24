import { notFound } from 'next/navigation'
import React from 'react'
// auth imports
import prisma from '@/prisma/client'
import authOptions from '@/app/auth/authOptions'
import { getServerSession } from 'next-auth'
// Radixui imports
import { Box, Button, Container, Flex, Grid, Text } from '@radix-ui/themes'
// Components
import AsigneeSelectBtn from './AsigneeSelectBtn'
import IssueDetails from './IssueDetails'
import EditIssueButton from './EditIssueButton'
import DeleteIssueButton from './DeleteIssueButton'

const DetailsPage = async({ params }:{ params: { id: string } }) => {
    const session = await getServerSession(authOptions)

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
        {session && 
        <Box style={{maxWidth:"250px"}} >
            <Flex gap={"1"} direction={"column"}>
                <AsigneeSelectBtn issue={issue} />
                <Flex direction={"column"} gap={"1"}>
                    <EditIssueButton id={issue.id} />
                    <DeleteIssueButton issue={issue} />
                </Flex>
            </Flex>
        </Box>}
    </Grid>
  )
}

export default DetailsPage