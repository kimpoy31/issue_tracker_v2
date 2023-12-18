"use client"
import { Box, Button, Text, TextField } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const CreateIssue = () => {
  return (
    <div className='flex w-full justify-center items-center'>

        <form className='w-full max-w-2xl space-y-2'>
            <Box>
                <Text>Title:</Text>
                <TextField.Root>
                    <TextField.Input placeholder="Type here" size={"3"}/>
                </TextField.Root>
            </Box>
            <Box>
                <Text>Description:</Text>
                <SimpleMDE />
            </Box>
            
            <Button>Submit Issue</Button>
        </form>
        
        
    </div>
  )
}

export default CreateIssue