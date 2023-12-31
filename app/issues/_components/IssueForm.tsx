"use client"

// Styling & imports
import React, { useState } from 'react'
import { Box, Button, Callout, Text, TextField } from '@radix-ui/themes'
import { ErrorMessage } from '@/app/components/index';

// MDE
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

// Form Dependencies
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { IssueTypeSchema } from '../validationSchemas';

// API imports
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { Issue } from '@prisma/client';
import Spinner from '@/app/components/Spinner';

type IssueSchema = z.infer<typeof IssueTypeSchema>

const IssueForm = ({issue} : {issue?: Issue}) => {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    console.log(isLoading)

    const { 
        register, 
        control, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<IssueSchema>({ resolver: zodResolver(IssueTypeSchema) })

    const onSubmit = async(data: IssueSchema) => {
        try {
            
            setIsLoading(!isLoading)

            if(issue){
                await axios.patch(`/api/issues/${issue.id}`, data)
            } else {
                await axios.post("/api/issues", data)
            }
           
            setIsLoading(!isLoading)
            router.push("/issues")
            router.refresh()

        } catch (error) {
            
            if(error instanceof AxiosError){
                setError(error.message)
            }

        }
    }

  return (
    <form 
        className='w-full max-w-2xl space-y-2'
        onSubmit={handleSubmit((data) => onSubmit(data))}
    >
        {/* Api POST ERROR */}
        {error &&
            <Callout.Root color='red' variant='surface'>
                <Callout.Text>
                    {error}
                </Callout.Text>
            </Callout.Root>
        }
        
        <Box>
            <Text>Title:</Text>
            <TextField.Root>
                <TextField.Input 
                    placeholder="Type here" 
                    size={"3"}
                    defaultValue={issue?.title}
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
                defaultValue={issue?.description}
                render={({field}) => <SimpleMDE {...field}/>}
            />
        </Box>
        
        {/* Description Error here */}
        {errors.description &&
            <ErrorMessage>
                {errors.description.message}
            </ErrorMessage>
        }
        
        {isLoading ? <Button disabled>{issue ? "Updating": "Submitting"}<Spinner /></Button> : <Button>{issue ? "Update Issue" : "Submit Issue"}</Button>}
    </form>
  )
}

export default IssueForm