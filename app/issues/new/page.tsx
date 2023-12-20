"use client"

// Styling & imports
import React, { useState } from 'react'
import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import { ErrorMessage } from '@/app/components/index';

// MDE
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

// Form Dependencies
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { IssueTypeSchema } from '../IssueType';

// API imports
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

type IssueSchema = z.infer<typeof IssueTypeSchema>

const CreateIssue = () => {
    const [error, setError] = useState("")
    const router = useRouter()

    const { 
        register, 
        control, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<IssueSchema>({ resolver: zodResolver(IssueTypeSchema) })

    const onSubmit = async(data: IssueSchema) => {
        try {
            
            const response = await axios.post("/api/issues", data)
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
           
            <div>
                <Text>Title:</Text>
                <TextField.Root>
                    <TextField.Input 
                        placeholder="Type here" 
                        size={"3"}
                        {...register("title")}
                    />
                </TextField.Root>
            </div>

            {/* Title Error here */}
            {errors.title &&
            <ErrorMessage>
                {errors.title.message}
            </ErrorMessage>
            }
            
            <div>
                <Text>Description:</Text>
                <Controller 
                    name='description'
                    control={control}
                    render={({field}) => <SimpleMDE {...field}/>}
                />
            </div>
            
            {/* Description Error here */}
            {errors.description &&
                <ErrorMessage>
                    {errors.description.message}
                </ErrorMessage>
            }
            <Button type='submit'>Submit Issue</Button>
        </form>
  )
}

export default CreateIssue