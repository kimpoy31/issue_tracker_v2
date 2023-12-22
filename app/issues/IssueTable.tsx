import { Container, Table } from '@radix-ui/themes'
import StatusBadge from './_components/Badge'
import Link from 'next/link'
import { Issue } from '@prisma/client'
import EmptyTable from './EmptyTable'

const IssueTable = ({issues}:{issues:Issue[]}) => {
  return (
    <>
      {issues.length > 0 
      ?<Table.Root variant="surface">
        <Table.Header>
        <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Created at</Table.ColumnHeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
        {/* {issues.map(issue => <TableRowLink key={issue.id} issue={issue} /> )} */}
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

      :<Container>
          <EmptyTable />
      </Container>
      }
    </>
  )
}

export default IssueTable