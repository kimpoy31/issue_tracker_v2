import { Box, Flex, Grid } from '@radix-ui/themes'
import React from 'react'
import {Skeleton} from "@/app/components/index"

const loading = () => {
  return (
    <Grid columns={{initial:"1" , md:"5"}} gap="3">
        <Box className='col-span-4'>
            <Flex direction={"column"} gap={"1"}>
                <Skeleton style={{maxWidth:"480px", width:"100%"}} height={"2rem"}/>
                <Flex gap={"2"} align={"center"}>
                    <Skeleton width={"2rem"} height={"1rem"}/>
                    <Skeleton width={"4rem"} height={"1rem"}/>
                </Flex>
                <Skeleton style={{maxWidth:"480px", width:"100%"}} height={"20rem"}/>
            </Flex>
        </Box>
        <Box>
            <Flex gap={"1"} direction={"column"}>
                <Skeleton style={{maxWidth:"480px", width:"100%"}} height={"2rem"}/>
            </Flex>
        </Box>
    </Grid>
  )
}

export default loading