'use client';

import React, { useState } from 'react';

function useAuth() {
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ errMsg, setErrMsg ] = useState<string>('');


    const createAccount = async (input: string) => {
        setLoading(true);
        setErrMsg('');
        try{
            const res = await fetch('', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ description: input})
              });
              setLoading(false)
        }catch(err){
            console.error('Error found', err);
            // setErrMsg(err)
        }
    }


  return { createAccount, loading, errMsg }
}

export default useAuth