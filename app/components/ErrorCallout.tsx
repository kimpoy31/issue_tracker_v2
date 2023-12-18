import { Callout, Text } from '@radix-ui/themes'
import React, { ReactNode } from 'react'

const ErrorCallout = ({children}:{children:ReactNode}) => {
  return (
    <Callout.Root size="2" variant='surface' color='red'>
        <Callout.Icon>
            <strong>*</strong>
        </Callout.Icon>
        <Callout.Text>
            <Text as='span'>{children}</Text>
        </Callout.Text>
    </Callout.Root>
  )
}

export default ErrorCallout