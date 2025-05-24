'use client';
import React from 'react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


function DeleteDocument() {
    const [isOpen, setIsOpen] = useState(false)
  return (
            <Dialog>
  <DialogTrigger>Delete</DialogTrigger>
  <DialogContent className='bg-red-700'>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  )
}

export default DeleteDocument