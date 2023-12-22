"use client"

import { User } from '@prisma/client'
import { Avatar, Select } from '@radix-ui/themes'
import axios from 'axios'
import React, { use, useEffect, useState } from 'react'

const AsigneeSelectBtn = () => {
  const [users, setUsers] = useState<User[]>([])
  
  useEffect(() => {
    const fetchUsers = async() => {
      const { data } = await axios.get<User[]>("/api/users")
      setUsers(data)
    }
    
    fetchUsers()
  },[])

  return (
    <Select.Root>
        <Select.Trigger placeholder='Select Asignee...'/>
        <Select.Content>
            <Select.Group>
              <Select.Label>Users</Select.Label>
              {users.map(user => 
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