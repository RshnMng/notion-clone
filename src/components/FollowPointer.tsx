import React from 'react'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import stringToColor from '../lib/stringToColor';

const FollowPointer = ({x, y, info} : {x: number, y: number, info: {name : string, email: string, avatar: string }}) => {

    const color = stringToColor( info.email || '1')
  return (
    <motion.div className='h-4 w-4 rounded-full absolute z-50'
        style={{
            top: y, 
            left: x,
            pointerEvents : 'none'
        }}
        initial={{
            scale: 1,
            opacity: 1
        }}
           animate={{
            scale: 1,
            opacity: 1
        }}
           exit={{
            scale: 0,
            opacity: 0
        }}
   >
                     <svg
                stroke="currentColor"
                strokeWidth="1"
                viewBox="0 0 16 16"
                className="h-6 w-6 text-[color] transform -rotate-[70deg] -translate-x-[12px] -translate-y-[18px] stroke-[color]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                 d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917.087L5.57 10.694.803 8.652a.5.5 0 0 1-.086-.916L12.728 2.079a.5.5 0 0 1 .556.103z"
                 fill="none"
                />
                </svg>

                <motion.div>
                    {info.name || info.email}
                </motion.div>
    
    </motion.div>
  )
}
 
export default FollowPointer 