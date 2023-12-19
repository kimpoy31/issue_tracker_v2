"use client"
import React from 'react'
import NextLink from 'next/link'
import { Link as RadixLink } from '@radix-ui/themes' 
import { usePathname } from 'next/navigation'

interface Props{
    label: string,
    href: string
}

const Link = ({label, href}: Props) => {
    const currentPath = usePathname()

  return (
    <NextLink href={href} passHref legacyBehavior>
        <RadixLink color={`${currentPath === href ? "iris" : "gray"}`}>{label}</RadixLink>
    </NextLink>
  )
}

export default Link