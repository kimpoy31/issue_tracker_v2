import { Button } from '@radix-ui/themes'
import React from 'react'
import { FaEdit } from "react-icons/fa";

const EditIssueButton = () => {
  return (
    <Button>
        <FaEdit /> Edit Issue
    </Button>
  )
}

export default EditIssueButton