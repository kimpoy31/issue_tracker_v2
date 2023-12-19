import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

const statusMap : Record<Status, {label: string, color:"green" | "indigo" | "red"}> = {
    OPEN: { label:"Open" , color: 'green' },
    IN_PROGRESS: { label:"In progress" , color: 'indigo' },
    CLOSED: { label:"Closed" , color: 'red' }
}

const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge variant="soft" color={statusMap[status].color} highContrast>
      {statusMap[status].label}
    </Badge>
  )
}

export default StatusBadge