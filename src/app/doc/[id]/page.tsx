'use client'

import React from 'react'
import Document from '@/src/components/Document'

const DocumentPage = ({params: {id}}: {params: {id : string}}) => {
  return (
    <div className='flex flex-col flex-1 min-h-screen border border-blue-800'>

       <Document id={id}/>

    </div>
  )
}

export default DocumentPage