import prisma from "@/prisma/client";
// Components
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";

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
      <IssueSummary open={open} inProgress={inProgress} closed={closed} />
      <LatestIssues />
    </div>
  )
}

export default Home