import { Button } from '@radix-ui/themes'
import React from 'react'
import { MdDelete } from "react-icons/md";

const DeleteIssueButton = () => {
  return (
    <Button>
        <MdDelete /> Delete Issue
    </Button>
  )
}

export default DeleteIssueButton