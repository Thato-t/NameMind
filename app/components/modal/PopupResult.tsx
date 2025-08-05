'use client'

import { useState } from 'react';
import Available from '../reusable/available';
import useDomainCheck from '../../../hooks/domainCheck';

interface AvailableProps{
    available: boolean
    domain: string
}
// TODO check why is not working when it should display
function PopupResult({ available, domain }: AvailableProps) {
    const { isTrue } = useDomainCheck();
    console.log(isTrue)
    return(
        <>
            <div className=" max-w-md bg-[#181e2e] rounded-xl p-6 flex flex-col shadow-lg mt-14" style={{display: !isTrue ? 'none' : 'block'}}>
                <Available />
                <p className="text-white mt-2">{`https://${domain} ${available ? 'is available to use' : 'is not available to use'}`}</p>
            </div>
        </>
    )
}

export default PopupResult 