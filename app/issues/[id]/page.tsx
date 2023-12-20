import prisma from '@/prisma/client'
import { Flex, Text } from '@radix-ui/themes'
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
    <div className='w-full max-w-2xl flex flex-col gap-2'>
        <Text size="5" trim={'both'} style={{fontWeight:"bold"}}>{issue.title}</Text>
        <div className='flex align-middle gap-2'>
            <StatusBadge status={issue.status} />
            <small>{issue.createdAt.toDateString()}</small>
        </div>
        <Markdown className="prose border p-4">
            {issue.description}
        </Markdown>
    </div>
  )
}

export default DetailsPage