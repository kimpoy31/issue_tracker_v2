"use client"
import { Button, Container, Flex, Text } from '@radix-ui/themes'
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import { FaAngleLeft, FaAngleRight, FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

interface Props{
    itemCount: number, //itemCount is the Total number items
    pageSize: number, //pageSize is the number of items to be displayed on table
    currentPage: number //currenPage is the actual page we are currently at
}

const Pagination = ({itemCount, currentPage, pageSize}: Props) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const pageCount = Math.ceil(itemCount / pageSize)
    if(pageCount <= 1){return null}

    const changePage = (page: number) => {
        const params = new URLSearchParams(searchParams)
        params.set("page", page.toString())
        router.push("?" + params.toString())
    }

  return (
    <Flex width={'100%'} justify={{initial:"center", md:"start"}} align={"center"} gap={"2"}>
        {/* LeftButtons */}
        <Button 
            variant='outline'
            disabled={currentPage <= 1}
            onClick={() => changePage(1)}
        ><FaAnglesLeft /></Button>
        <Button 
            disabled={currentPage <= 1}
            variant='outline'
            onClick={() => changePage(currentPage - 1)}
        ><FaAngleLeft /></Button>
        {/* Text */}
        <Text size={"2"}>Page {currentPage} of {pageCount}</Text>
        {/* RightButtons */}
        <Button 
            variant='outline'
            disabled={currentPage === pageCount}
            onClick={() => changePage(currentPage + 1)}
        ><FaAngleRight /></Button> 
        <Button 
            variant='outline'
            disabled={currentPage >= pageCount}
            onClick={() => changePage(pageCount)}
        ><FaAnglesRight /></Button>
    </Flex>
  )
}

export default Pagination