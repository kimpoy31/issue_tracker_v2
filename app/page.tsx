import prisma from "@/prisma/client";
// Components
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import Barchart from "./Barchart";

const Home = async () => {
  const open = await prisma.issue.count({
    where: {status : 'OPEN'}
  })
  const inProgress = await prisma.issue.count({
    where: {status : 'IN_PROGRESS'}
  })
  const closed = await prisma.issue.count({
    where: {status : 'CLOSED'}
  })

  return (
    <div>
      <Barchart open={open} inProgress={inProgress} closed={closed} />
      <IssueSummary open={open} inProgress={inProgress} closed={closed} />
      <LatestIssues />
    </div>
  )
}

export default Home