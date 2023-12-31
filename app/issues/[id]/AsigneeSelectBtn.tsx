"use client"

import { Issue, User } from '@prisma/client'
import { Avatar, Select } from '@radix-ui/themes'
import { Skeleton } from "@/app/components/index"
import { useQuery } from '@tanstack/react-query'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'

const AsigneeSelectBtn = ({issue}:{issue:Issue}) => {
  const {data: users, error, isLoading } = useUsers();

  if(isLoading) return <Skeleton height={"2rem"}/>
  if(error) return null

  const assignIssue = async(userId: string) => {
    try{

      const assignedToUserId = userId === "unassigned" ? null : userId
      await axios.patch(`/api/issues/${issue.id}`, { assignedToUserId })
      toast.success(userId === "unassigned" ? "Issue unassigned successfully!" : "Issue assigned successfully!")

    } catch (error) {

      toast.error("Issue not assigned")

    }
  }

  return (
    <>
      <Select.Root 
      onValueChange={(userId) => assignIssue(userId)}
      defaultValue={issue.assignedToUserId || ""}>
          <Select.Trigger placeholder='Select Asignee...'/>
          <Select.Content position="popper">
              <Select.Group>
                <Select.Item value='unassigned' >-- Unassigned --</Select.Item>
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

const useUsers = () => useQuery<User[]>({
  queryKey: ["users"],
  queryFn: () => axios.get("/api/users").then(res => res.data),
  staleTime: 60 * 1000,
  retry: 3,
})

export default AsigneeSelectBtn