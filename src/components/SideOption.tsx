import React from 'react'
import Link from 'next/link';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { db } from '@/firebase';
import { doc } from 'firebase/firestore'
import { usePathname } from 'next/navigation';

const SideOption = ({ href, id } : { href: string, id: string}) => {

    const [data, loading, error] = useDocumentData(doc(db, 'documents', id));
    const pathName = usePathname();

    const isActive = href.includes(pathName) && pathName !== '/';

    console.log(pathName, isActive)

    if(!data) return null;

  return <>
            <Link href={href} className={`border p-2 rounded-md ${isActive ? 'bg-blue-300 font-bold border-black': 'border-gray-300 bg-red-500'}`}>
                     <p className='truncate'>{data.title}</p>
            </Link>
        </>
}

export default SideOption