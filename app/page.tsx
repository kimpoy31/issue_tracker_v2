import prisma from "@/prisma/client";
// Components
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import Barchart from "./Barchart";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";

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
    <Grid columns={{initial:"1", md:"2"}} gap={"3"} >
      <Flex direction={"column"} gap="3">
        <IssueSummary open={open} inProgress={inProgress} closed={closed} />
        <Barchart open={open} inProgress={inProgress} closed={closed} />
      </Flex>
      <LatestIssues />
    </Grid>
  )
}

export default Home

export const metadata: Metadata = {
  title:"Issue Tracker - Dashboard",
  description:"Summary overview of project issues",
}