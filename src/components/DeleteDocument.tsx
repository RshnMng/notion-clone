'use client';
import React from 'react';
import { useState, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { deleteDocument } from '@/actions/actions';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import { Button } from './ui/button';


function DeleteDocument() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const path = usePathname();
    const router = useRouter();



    const handleDelete = async () => {
        const roomId = path.split('/').pop();

        if(!roomId) return;

        startTransition( async () => {
            const { success } = await deleteDocument(roomId)

            if ( success ) {
                setIsOpen(false);
                router.replace('/');
                toast.success('Room Deleted succesfully');          
            } else {
                toast.error( 'failed to delete room');
            }
        })
    

    }
  return (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <Button asChild variant='destructive'>
                      <DialogTrigger>Delete</DialogTrigger>
                </Button>
              
                <DialogContent>
                        <DialogHeader>
                             <DialogTitle>Are you absolutely sure you want to Delete?</DialogTitle>
                             <DialogDescription>
                                 This action cannot be undone. This will permanently delete the document
                                 and remove all users from the document.
                             </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className='sm:justify-end gap-3'>
                            <Button type='button' variant='destructive' onClick={handleDelete} disabled={isPending}>{isPending ? 'Deleting...' : 'Delete'}</Button>
                             
                        </DialogFooter>
                 </DialogContent>
            </Dialog>

  )
}

export default DeleteDocument