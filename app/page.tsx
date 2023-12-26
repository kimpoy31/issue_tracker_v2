import Pagination from "./issues/Pagination";


export default function Home() {
  return (
    <div>
      <Pagination itemCount={100} pageSize={10} currentPage={8}/>
    </div>
  )
}
