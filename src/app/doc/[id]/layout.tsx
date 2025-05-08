import React from 'react'
import { auth } from '@clerk/nextjs/server'

export const DocLayout  = ({ children , params : { id } } : { children : React.ReactNode , params : { id : string } }) => {
    auth.protect()

  return (
    <RoomProvider>{ children } </RoomProvider>
  )
}
