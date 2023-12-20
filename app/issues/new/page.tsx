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