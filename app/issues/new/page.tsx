"use client"

// Styling & imports
import React from 'react'
import { Box, Button, Text, TextField } from '@radix-ui/themes'
import ErrorMessage from '@/app/components/ErrorMessage';

// MDE
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

// Form Dependencies
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { IssueTypeSchema } from '../IssueType';


type IssueSchema = z.infer<typeof IssueTypeSchema>

const CreateIssue = () => {
    const { 
        register, 
        control, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<IssueSchema>({ resolver: zodResolver(IssueTypeSchema) })

    console.log(errors.description)

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
            <ErrorMessage>
                {errors.title.message}
            </ErrorMessage>
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
                <ErrorMessage>
                    {errors.description.message}
                </ErrorMessage>
            }
            <Button type='submit'>Submit Issue</Button>
        </form>
        
    </div>
  )
}

export default CreateIssue