import React, { useState } from 'react'

function useDomainCheck() {
    const [ status, setStatus ] = useState<string>('');

    const checkDomain = async (subdomain: string) => {
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
            console.log(status);
        } catch (error) {
            console.log('Error found', error);
        }
    }

  return { status, checkDomain }
}

export default useDomainCheck