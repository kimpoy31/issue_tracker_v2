"use client"

// Styling 
import React from 'react'
import { Box, Button, Callout, Text, TextField } from '@radix-ui/themes'

// MDE
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

// Form Dependencies
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { IssueTypeSchema } from '../IssueType';
import ErrorCallout from '@/app/components/ErrorCallout';

type IssueSchema = z.infer<typeof IssueTypeSchema>

const CreateIssue = () => {
    const { 
        register, 
        control, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<IssueSchema>({ resolver: zodResolver(IssueTypeSchema) })

  return (
    <div className='flex w-full justify-center items-center'>

        <form 
            className='w-full max-w-2xl space-y-2'
            onSubmit={handleSubmit((data) => console.log(data))}
        >
            <Box>
                <Text>Title:</Text>
                <TextField.Root>
                    <TextField.Input 
                        placeholder="Type here" 
                        size={"3"}
                        {...register("title")}
                    />
                </TextField.Root>
            </Box>

            {/* Title Error here */}
            {errors.title &&
            <ErrorCallout>
                {errors.title.message}
            </ErrorCallout>
            }
            
            <Box>
                <Text>Description:</Text>
                <Controller 
                    name='description'
                    control={control}
                    render={({field}) => <SimpleMDE {...field}/>}
                />
            </Box>
            {/* Description Error here */}
            {errors.description &&
                <ErrorCallout>
                    description is required
                </ErrorCallout>
            }
            <Button type='submit'>Submit Issue</Button>
        </form>
        
    </div>
  )
}

export default CreateIssue