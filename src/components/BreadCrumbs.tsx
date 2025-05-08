'use client'
import { usePathname } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import React from 'react'

const BreadCrumbs = () => {

    const pathName = usePathname();

    
  return (
    <Breadcrumb>
  <BreadcrumbList>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
  </BreadcrumbList>
</Breadcrumb>

  )
}

export default BreadCrumbs