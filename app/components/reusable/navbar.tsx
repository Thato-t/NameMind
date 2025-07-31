'use client'

import Image from 'next/image';
import search from '../../../public/icons/gray/search.png'
import { useState } from 'react';
// import { useRouter } from 'next/router';

function Navbar(){
    // const router = useRouter();
    const [ domain, setDomain ] = useState<string>('');
    const [ status, setStatus ] = useState<string>('');

    const routeToSign = () => {
        console.log('Lets sign in');
        // router.push('/sign');
    }

    const checkDomain = async (subdomain: string, platform: string) => {
        try {
        const res = await fetch(`/api/check-subdomain`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            subdomain: subdomain,
            platform: platform
            }),
        });
        const data = await res.json();
        setStatus(data.status);
        } catch (error) {
        console.log('Error found', error);
        }
    }

    return(
        <>
            <div>
                <div>
                    <Image 
                     src="/images/logo.png" 
                     alt="logo"
                     width={60}
                     height={60} 
                    />
                </div>
                <div>
                    <input 
                     type="text" 
                     placeholder="Enter a domain" 
                     onChange={(event) => setDomain(event.target.value)} 
                    />
                </div>
                <div>
                    <button 
                        onClick={() => routeToSign()}
                    >
                        Generate
                    </button>
                    <button
                     onClick={() => checkDomain('expensify-t', 'vercel.app')}
                    >
                        <Image 
                         src="/icons/gray/search.png" 
                         alt="search"
                         width={20}
                         height={20}
                        />
                        Check
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar