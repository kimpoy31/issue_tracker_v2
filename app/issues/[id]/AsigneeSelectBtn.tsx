"use client"

import { User } from '@prisma/client'
import { Avatar, Select } from '@radix-ui/themes'
import { Skeleton } from "@/app/components/index"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AsigneeSelectBtn = () => {
  const {data: users, error, isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then(res => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  })

  if(isLoading) return <Skeleton height={"2rem"}/>
  if(error) return null

  return (
    <Select.Root>
        <Select.Trigger placeholder='Select Asignee...'/>
        <Select.Content>
            <Select.Group>
              <Select.Label>Users</Select.Label>
              {users?.map(user => 
                <Select.Item key={user.id} value={user.id}>
                  <Avatar src={user.image!} fallback="?" size={"1"} radius='full' />{" "}{user.name}
                </Select.Item>  
              )}
            </Select.Group>
        </Select.Content>
    </Select.Root>
  )
}

export default AsigneeSelectBtn