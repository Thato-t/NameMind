'use client';

import React, { useState } from 'react';

function useAuth() {
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ pending, setPending ] = useState<boolean>(false);
    const [ errMsg, setErrMsg ] = useState<string>('');


    const signIn = async (name: string, username: string, email: string, password: string) => {
        setLoading(true);
        setErrMsg('');
        try{
            const res = await fetch('/api/sign', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, username, email, password})
              });
              setLoading(false)
        }catch(err){
            console.error('Error found', err);
            // setErrMsg(err)
        }
    }

    const signUp = async (email: string, password: string) => {
        setPending(true);
        setErrMsg('');
        try{
            const res = await fetch('/api/sign', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
              });
              setPending(false)
        }catch(err){
            console.error('Error found', err);
            // setErrMsg(err)
        }
    }


  return { signIn, signUp, loading, errMsg, pending }
}

export default useAuth