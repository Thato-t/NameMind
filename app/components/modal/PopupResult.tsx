'use client'

import { useState } from 'react';
import Available from '../reusable/available';

interface AvailableProps{
    available: boolean
}

function PopupResult({ available }: AvailableProps) {
    const [ result, setResult ] = useState<string>('');

    return(
        <>
            <div>
                <Available />
                <p>{`https:${result} ${available ? 'is available to use' : 'is not available to use'}`}</p>
            </div>
        </>
    )
}

export default PopupResult 