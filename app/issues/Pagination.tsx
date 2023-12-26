import { Button, Flex, Text } from '@radix-ui/themes'
import React from 'react'
import { FaAngleLeft, FaAngleRight, FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

interface Props{
    itemCount: number, //itemCount is the Total number items
    pageSize: number, //pageSize is the number of items to be displayed on table
    currentPage: number //currenPage is the actual page we are currently at
}

const Pagination = ({itemCount, currentPage, pageSize}: Props) => {
    const pageCount = Math.ceil(itemCount / pageSize)
    if(pageCount <= 1) return null

  return (
    <Flex align={"center"} gap={"2"}>
        {/* LeftButtons */}
        <Button 
        variant='outline'
        disabled={currentPage - 1 <= 1}
        ><FaAnglesLeft /></Button>
        <Button 
        disabled={currentPage <= 1}
        variant='outline'
        ><FaAngleLeft /></Button>
        {/* Text */}
        <Text size={"2"}>Page {currentPage} of {pageCount}</Text>
        {/* RightButtons */}
        <Button 
        variant='outline'
        disabled={currentPage === pageCount}
        ><FaAngleRight /></Button>
        <Button 
        variant='outline'
        disabled={currentPage + 1 >= pageCount}
        ><FaAnglesRight /></Button>
    </Flex>
  )
}

export default Pagination