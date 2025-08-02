'use client';
import React from 'react';
import Image from 'next/image'

interface AvailableProps{
    available: boolean 
}

function Available({ available }: AvailableProps) {
    return(
        <>
                {available ? 
                    <div className="flex items-center">
                        <span className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center mr-2">
                        <Image src="/icons/green/check-circle.png" alt="available" width={14} height={14} />
                        </span>
                        <span className="text-green-400 font-semibold">Available</span>
                    </div>
                    :
                    <div className="flex items-center">
                        <span className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center mr-2">
                        <Image src="/icons/maroon/x.png" alt="cross" width={14} height={14} />
                        </span>
                        <span className="text-red-400 font-semibold">Not Available</span>
                    </div>
                }
        </>
    )
}

export default Available;