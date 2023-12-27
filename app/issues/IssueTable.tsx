import { Flex, Table } from '@radix-ui/themes'
import StatusBadge from './_components/Badge'
import Link from 'next/link'
import { Issue, Status } from '@prisma/client'
import { BiSolidUpArrowAlt } from "react-icons/bi";

export interface IssueQuery{
  status: Status, 
  orderBy: keyof Issue, 
  page:string 
}

interface Props {
  issues: Issue[];
  searchParams: IssueQuery;
}

const IssueTable = ({issues,searchParams}:Props) => {
  return (
      <Table.Root variant="surface">
        <Table.Header>
        <Table.Row>
            {columns.map(column => 
               <Table.ColumnHeaderCell 
               key={column.value} 
               className={column.className}
               >
                <Flex align={"center"}>
                  <Link href={{query:{...searchParams, orderBy: column.value}}}>
                    {column.label}
                  </Link>
                  {column.value === searchParams.orderBy && <BiSolidUpArrowAlt />}
                </Flex>
               </Table.ColumnHeaderCell>
            )}
        </Table.Row>
        </Table.Header>

        <Table.Body>
        {issues.map(issue => 
            <Table.Row key={issue.id}>
            <Table.Cell>
                <Link href={`/issues/${issue.id}`} className='text-indigo-600 underline'>{issue.title}</Link>
                <div className='block md:hidden mt-1'><StatusBadge status={issue.status} /></div>
            </Table.Cell>
            <Table.Cell className='hidden md:table-cell'><StatusBadge status={issue.status} /></Table.Cell>
            <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
        )}
        </Table.Body>
      </Table.Root>
  )
}

const columns : {label: string, value: keyof Issue, className: string  }[] = [
  {label: "Title" , value: "title", className: "cursor-pointer"},
  {label: "Status" , value: "status", className: "hidden md:table-cell cursor-pointer"},
  {label: "Created At" , value: "createdAt", className: 'hidden md:table-cell cursor-pointer'},
]

export const columnNames = columns.map(column => column.value)

export default IssueTable