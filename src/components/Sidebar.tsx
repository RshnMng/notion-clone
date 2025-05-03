'use client';

import React, { useEffect, useState } from 'react'
import NewDocumentButton from './NewDocumentButton'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet"

import { MenuIcon } from 'lucide-react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { useUser } from '@clerk/nextjs';
import { collectionGroup, query, where, DocumentData } from 'firebase/firestore';
import { db } from '@/firebase';

interface RoomDocument extends DocumentData {
  createdAt: string
  role : 'owner' | 'editor'
  roomId : string
  userId : string
}

const Sidebar = () => {
      const { user } = useUser();
      console.log(user, 'user');
      console.log(db, 'data base')
      const [ data, loading, error ] = useCollection(
            user && (
               query( collectionGroup(db, 'rooms'))
            )
      );


      const [groupedData, setGroupedData] = useState<{
        owner: RoomDocument[],
        editor: RoomDocument[]
      }>({ owner: [], editor: []})

      useEffect(() => {
          if (!data) return;
          
          const grouped = data.docs.reduce<{
            owner: RoomDocument[],
            editor: RoomDocument[]
          }>(
            (acc, current) => {
                const roomData = current.data() as RoomDocument;

                if(roomData.role === 'owner'){
                  acc.owner.push({
                    id: current.id,
                    ...roomData
                  })}
                  else {
                    acc.editor.push({
                      id: current.id,
                      ...roomData
                    })
                  }
                  return acc;
            }, 
             {
              owner: [], 
              editor: []
            }
            
          )
        setGroupedData(grouped);
      }, [data])


    const menuOptions = (
        <>
            <NewDocumentButton />

            <div className='bg-pink-300 flex flex-col space-y-4'>
                 <h2>My Documents</h2>
                 {groupedData.owner.length === 0 ? <h2>No Documents Found</h2> : groupedData.owner.map((document) => {
              return <p>{document.id}</p>
            })}
            </div>
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