import React, { FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { useTransition } from 'react';
import { Button } from './ui/button';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase'
import { useDocumentData } from 'react-firebase-hooks/firestore';
import  Editor  from './Editor';
import useOwner from '../lib/useOwner';

const Document = ({ id }  : {id: string}) => {
    const [input, setInput] = useState('');
    const [isUpdating, startTransition] = useTransition();
    const [data, loading, error] = useDocumentData(doc(db, 'documents', id))
    const isOwner = useOwner();

    console.log(isOwner, 'is owner')

    useEffect(() => {
        if(data) {
            setInput(data.title)
        }
    }, [data])

    const updateTitle = (event : FormEvent) => {
        event.preventDefault();

        if(input.trim()){
            startTransition( async () => {
                await updateDoc(doc(db, 'documents', id), {
                    title: input
                })
            })
        }
    }

  return (
    <>
        <div >
                <form onSubmit={updateTitle} className='flex max-w-1xl justify-between space-x-3 mt-2 ml-2' >
                        <Input value={input} onChange={(event) => setInput(event.target.value)} className='flex-1'/>
                        <Button disabled={isUpdating} type='submit'>{isUpdating ? 'Updating...' : 'Update'}</Button>

                        {isOwner &&  <p>i am the owner</p>}
                </form>


                <div>
                        <Editor />
                </div>
        </div>
    </>
  )
}

export default Document