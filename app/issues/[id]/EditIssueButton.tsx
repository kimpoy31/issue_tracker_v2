"use client"
import { Button } from '@radix-ui/themes'
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaEdit } from "react-icons/fa";

const EditIssueButton = ( { id } : {id: number}) => {
  const router = useRouter()

  return (
    <Button onClick={() => router.push(`/issues/${id}/edit`)}>
      <FaEdit /> Edit Issue
    </Button>
  )
}

export default EditIssueButton