import React from 'react'
import NewDocumentButton from './NewDocumentButton'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Sidebar = () => {
  return (
    <div className='p-2 md:p-5 relative'>
        <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent side='left' className="w-[400px] sm:w-[540px]">
             <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
                 <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
               </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

                <div className='hidden md:inline'>
                        <NewDocumentButton />

                </div>
    </div>
  )
}

export default Sidebar