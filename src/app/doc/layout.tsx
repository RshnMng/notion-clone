import React from 'react'
import LiveBlocksProvider from '@/src/components/LiveBlocksProvider'

const PageLayout = ({ children } : { children : React.ReactNode }) => {
  return (

    <LiveBlocksProvider>{ children }</LiveBlocksProvider>
  )
}

export default PageLayout