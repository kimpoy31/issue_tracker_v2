"use client"
import Spinner from '@/app/components/Spinner';
import { Issue } from '@prisma/client';
import { AlertDialog, Button, Flex, Text } from '@radix-ui/themes'
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";

const DeleteIssueButton = ({issue}: {issue:Issue}) => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleDelete = async(id: number) => {
    setIsLoading(!isLoading)

    try {

      await axios.delete(`/api/issues/${issue.id}`)
      setIsLoading(!isLoading)
      router.push("/issues")
      router.refresh()

    } catch (error) {
      
      setIsLoading(!isLoading)
      setError(true)

    }
    
  }

  return (
    <>
    <AlertDialog.Root>
      {/* Button */}
      <AlertDialog.Trigger>
        <Button color="red" disabled={isLoading}>
          {isLoading 
          ? <><Spinner /> Deleting... </> 
          : <><MdDelete /> Delete issue</> 
          }
        </Button>
      </AlertDialog.Trigger>

      {/* Modal Content */}
      <AlertDialog.Content style={{ maxWidth: 450 }}>
        <AlertDialog.Title>Delete Issue</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure you want to delete this issue with the title {' '}
          <Text size={"2"} color="red">{issue.title}</Text>? This action cannot be undone.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="solid" color="red" onClick={() => handleDelete(issue.id)}>
              Delete
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>

    <AlertDialog.Root open={error}>
      <AlertDialog.Content >
        <AlertDialog.Title>
          Delete Unsuccessful
        </AlertDialog.Title>
        <AlertDialog.Description> 
          This issue could not be deleted
        </AlertDialog.Description>
        <Flex mt={"2"} justify={"end"}>
        <AlertDialog.Action>
              <Button variant="solid" color="gray" onClick={() => setError(false)}>
                ok
              </Button>
        </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
    </>
  )
}

export default DeleteIssueButton