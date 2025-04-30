'use client';
import React from 'react'
import { useUser, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';   

const Header = () => {
    const { user } = useUser();
  return (
    <div className='bg-teal-500 flex items-center justify-between p-5'>
        {user && <h1 className='border border-red-500 text-2xl'>{user?.firstName}{`'s`} Space</h1>}

                 <div>
                      <SignedOut>
                                <SignInButton />
                      </SignedOut>
                      <SignedIn>
                                <div className='border border-blue-500'>
                                <UserButton/>
                                </div>
                      </SignedIn>
                 </div>
    </div>
  )
}

export default Header