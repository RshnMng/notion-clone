import React, { FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { useTransition } from 'react';
import { Button } from './ui/button';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase'
import { useDocumentData } from 'react-firebase-hooks/firestore';

const Document = ({ id }  : {id: string}) => {
    const [input, setInput] = useState('');
    const [isUpdating, startTransition] = useTransition();
    const [data, loading, error] = useDocumentData(doc(db, 'documents', id))

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

        <div>
                <form onSubmit={updateTitle}>
                        <Input value={input} onChange={(event) => setInput(event.target.value)}/>
                        <Button disabled={isUpdating} type='submit'>{isUpdating ? 'Updating...' : 'Update'}</Button>
                </form>
        </div>
    </>
  )
}

export default Document