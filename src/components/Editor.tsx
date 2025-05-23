'use client';
import React, { useState, useEffect } from 'react';
import { useRoom, useSelf } from '@liveblocks/react/suspense';
import * as Y from 'yjs';
import { LiveblocksYjsProvider } from '@liveblocks/yjs';
import { Button } from './ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { BlockNoteView } from '@blocknote/shadcn';
import { BlockNoteEditor } from '@blocknote/core';
import { useCreateBlockNote } from '@blocknote/react';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/shadcn/style.css';
import stringToColor from '../lib/stringToColor';

type EditorProps = {
    doc: Y.Doc;
    provider: any;
    darkMode : boolean;
}


function BlockNote({doc, provider, darkMode}: EditorProps){
    const userInfo = useSelf((me) => me.info);
    const editor = useCreateBlockNote({
            collaboration: {
                provider,
                fragment: doc.getXmlFragment('document-store'),
                user: {
                    name : userInfo.name,
                    color: stringToColor(userInfo.email)
                }
            }
    })

    if (!editor) return null;


  return (
    <div className='relative max-w-6xl mx-auto'>
        <BlockNoteView className='min-h-screen' editor={editor as unknown as ReturnType<typeof useCreateBlockNote>} theme={darkMode ? 'dark' : 'light'}/>
    </div>
  )
}



export default function Editor(){
    const room = useRoom(); 
    const [ doc, setDoc ] = useState<Y.Doc>()
    const [ provider, setProvider ] = useState<LiveblocksYjsProvider>();
    const [ darkMode, setDarkMode ] = useState(false);

   useEffect(() => {
     const yDoc = new Y.Doc();
     const yProvider = new LiveblocksYjsProvider(room, yDoc);
     setDoc(yDoc);
     setProvider(yProvider);

     return () => {
        yDoc?.destroy();
        yProvider?.destroy();
     };

   }, [room])

   if (!doc || !provider){
    return null;
   }

    const style = `hover:text-white ${
        darkMode 
        ? 'text-gray-300 hover:bg-gray-100 hover:text-gray-700' 
        : 'text-gray-700 hover:bg-gray-200 hover:bg-gray-300'
    }`

  return (
    <div className='m-w-6xl mx-auto border border-red-500'>
         <div className='flex items-center gap-2 justify-end mb-10 '>


                <Button className={style} onClick={() => setDarkMode( !darkMode)}>
                    {darkMode ? <SunIcon/> : <MoonIcon />}
                </Button>
         </div> 
         <BlockNote doc={doc} provider={provider} darkMode={darkMode} />
    </div>
  )
}


