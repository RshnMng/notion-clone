'use client'

import React from 'react'
import { useMyPresence, useOthers } from '@liveblocks/react/suspense'
import { PointerEvent } from 'react'
import FollowPointer from './FollowPointer'


const LiveCursorProvider = ({ children } : { children : React.ReactNode}) => {

    const [ myPresence, updateMyPresence ] = useMyPresence();
    const others = useOthers();

    function handlePointerMove(event: PointerEvent<HTMLDivElement>){
        const cursor = { x: Math.floor(event.pageX), y: Math.floor(event.pageY) }
        updateMyPresence( { cursor } )
    }

    function handlePointerLeave(){
        updateMyPresence( { cursor: null } )
    }

  return (
    <div onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave}>

      { others.filter((other) => other.presence.cursor !== null).map(({connectionId, presence, info}) => 
            <FollowPointer 
                key={connectionId}
                info={info}
                x={presence.cursor!.x}
                y={presence.cursor!.y}
            />

    )}
      { children }

    </div>
  )
}

export default LiveCursorProvider