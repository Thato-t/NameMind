'use client';
import React, { useState } from 'react'
import useDomainExtensions from '../../../hooks/domainExtensions';
import Image from 'next/image';

function PopupAdvanced() {
    const { extensions } = useDomainExtensions();
    const [ activeExtensions, setActiveExtensions ] = useState<string[]>([]);
  return (
    <>
        <div>
            <div>
                {activeExtensions.map(actExt => (
                    <span key={actExt}>{actExt}</span>
                ))}
                <select>
                    {extensions.map(ext => (
                        <div key={ext} onClick={() => setActiveExtensions([...ext])}>
                            <option value={ext}>{ext}</option>
                            <Image src="/icons/maroon/x.png" alt="x" width={20} height={20} />
                        </div>
                    ))}
                </select>
            </div>
        </div>
    </>
  )
}

export default PopupAdvanced