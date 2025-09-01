'use client'

import { useState } from 'react';
import Available from '../reusable/available';
import useDomainCheck from '../../../hooks/domainCheck';

interface AvailableProps{
    isAvailable: boolean | undefined | null
    domain: string
}
// TODO check why is not working when it should display, also find where this isAvailable comes from
function PopupResult({ isAvailable, domain }: AvailableProps) {
    const { isTrue } = useDomainCheck();
    return(
        <>
            <div className=" max-w-md bg-[#181e2e] rounded-xl p-6 flex flex-col shadow-lg mt-14" style={{display: isTrue ? 'none' : 'flex'}}>
                <Available isAvailable={isAvailable} />
                <p className="text-white mt-2">{`https://${domain} ${isAvailable ? 'is available to use' : 'is not available to use'}`}</p>
            </div>
        </>
    )
}

export default PopupResult 