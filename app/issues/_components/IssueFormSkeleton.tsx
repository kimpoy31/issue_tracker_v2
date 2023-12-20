import React from 'react'
import { Skeleton } from "@/app/components/index"
import { Text } from '@radix-ui/themes'

const IssueFormSkeleton = () => {
  return (
    <div className='w-full max-w-2xl space-y-2'>
        <div>
            <Text>Title:</Text>
            <Skeleton height={"2rem"}/>
        </div>

        <div>
            <Text>Description:</Text>
            <Skeleton height={"9rem"}/>
        </div>
        <Skeleton height={"2rem"} width={"6rem"} />
    </div>
  )
}

export default IssueFormSkeleton