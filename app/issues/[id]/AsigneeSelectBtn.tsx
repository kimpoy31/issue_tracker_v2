"use client"

import { Issue, User } from '@prisma/client'
import { Avatar, Select } from '@radix-ui/themes'
import { Skeleton } from "@/app/components/index"
import { useQuery } from '@tanstack/react-query'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'

const AsigneeSelectBtn = ({issue}:{issue:Issue}) => {
  const {data: users, error, isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then(res => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  })

  if(isLoading) return <Skeleton height={"2rem"}/>
  if(error) return null

  return (
    <>
      <Select.Root 
      onValueChange={async(userId) => {
        try{

          const assignedToUserId = userId === "unassigned" ? null : userId
          await axios.patch(`/api/issues/${issue.id}`, { assignedToUserId })
          toast.success(userId === "unassigned" ? "Issue unassigned successfully!" : "Issue assigned successfully!")

        } catch (error) {

          toast.error("Issue not assigned")

        }
      }}
      defaultValue={issue.assignedToUserId || ""}
      >
          <Select.Trigger placeholder='Select Asignee...'/>
          <Select.Content>
              <Select.Group>
                <Select.Label>Users</Select.Label>
                <Select.Item value='unassigned'>Unassigned</Select.Item>
                {users?.map(user => 
                  <Select.Item key={user.id} value={user.id}>
                    <Avatar src={user.image!} fallback="?" size={"1"} radius='full' />{" "}{user.name}
                  </Select.Item>  
                )}
              </Select.Group>
          </Select.Content>
      </Select.Root>

      <Toaster />
    </>
  )
}

export default AsigneeSelectBtn