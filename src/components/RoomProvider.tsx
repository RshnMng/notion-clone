'use client'; 
import React from 'react'
import { ClientSideSuspense, RoomProvider as RoomProviderWrapper } from '@liveblocks/react/suspense';
import { Client } from '@clerk/nextjs/server';
import LoadingSpinner from './LoadingSpinner';

export const RoomProvider = ({ roomId, children } : { roomId: string, children: React.ReactNode}) => {
  return (
    <RoomProviderWrapper
            id={roomId}
            initialPresence={{cursor: null}}
    >
        
            <ClientSideSuspense fallback={<LoadingSpinner />}>
                    <LiveCursorProvider>

                             {children}
                             
                    </LiveCursorProvider>

            </ClientSideSuspense>
    
    </RoomProviderWrapper>
  )
}
