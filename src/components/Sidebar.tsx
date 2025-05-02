'use client';

import React from 'react'
import NewDocumentButton from './NewDocumentButton'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { useUser } from '@clerk/nextjs';


const Sidebar = () => {
      const { user } = useUser();
      const [ data, loading, error ] = useCollection(
            user && (
                <h1>place holder</h1>
            )
      );



    const menuOptions = (
        <>
            <NewDocumentButton />
        </>
    )
  return (
    <div className='p-2 md:p-5 relative'>
        <div className='md:hidden'>
        <Sheet>
            <SheetTrigger>
                <MenuIcon />
             </SheetTrigger>
            <SheetContent side='left' className="w-[400px] sm:w-[540px]">
             <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                {menuOptions}
            </SheetContent> 
        </Sheet>
        </div>

                <div className='hidden md:inline'>
                        {menuOptions}

                </div>
    </div>
  )
}

export default Sidebar