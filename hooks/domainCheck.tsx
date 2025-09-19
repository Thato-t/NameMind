import React, { useState } from 'react'

function useDomainCheck() {
    const [ status, setStatus ] = useState<string>('');
    const [ isTrue, setIsTrue ] = useState<boolean>(true);

    const checkDomain = async (subdomain: string) => {
        setIsTrue(true);
        try {
            const res = await fetch(`/api/check-subdomain/landing-page`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({subdomain: subdomain}),
            });
            const data = await res.json();
            setStatus(data.status);
            setIsTrue(false);
            return data.status; // Return the status so it can be used immediately
        } catch (error) {
            console.log('Error found', error);
            setStatus('Error');
            setIsTrue(false);
            return 'Error';
        }
    }

  return { status, checkDomain, isTrue }
}

export default useDomainCheck