"use client"
import { Callout, Text } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const EmptyTable = () => {
  return (
    <Callout.Root variant="surface" color='brown'>
        <Callout.Text color='brown'>
            Empty table, No issues submitted.{" "} 
            <Link href={"/issues/new"}>
                <Text color='blue'>Report&nbsp;an&nbsp;issue</Text> now?
            </Link>
        </Callout.Text>
    </Callout.Root>
  )
}

export default EmptyTable