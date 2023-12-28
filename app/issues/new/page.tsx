import { Metadata } from 'next'
import dynamic from 'next/dynamic'
const IssueForm = dynamic(
   () => import('../_components/IssueForm'),
   {ssr: false}
 )
 
const CreateIssue = () => {
   return(
    <IssueForm />
   )
}

export default CreateIssue

export const metadata: Metadata = {
   title:"Issue Tracker - Create issue",
   description:"Submit an project issue found",
 }