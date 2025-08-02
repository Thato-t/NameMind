'use client'

import Image from 'next/image';
import { useState } from 'react';
import useDomainCheck from '../../../hooks/domainCheck';
import { useRouter }from 'next/navigation';

function Navbar(){
    const router = useRouter();
    const [ domain, setDomain ] = useState<string>('');
    const { checkDomain } = useDomainCheck();


    const routeToSign = () => {
        console.log('Lets sign in');
        // router.push('/sign');
    }
    const checkingDomain = () => {
        if (domain.trim() === '') return;
        // TODO call the checkDomain function  when you hav found a way to make the request directly from here and find the results in the landing-result page
        // checkDomain(domain);
        localStorage.setItem('domainEntered', domain || '');
        router.push('/landing-result');
    }


    return(
        <>
            <nav className="w-full flex items-center justify-between px-4 py-2 bg-[#0E1628]">
                {/* Logo */}
                <div className="flex items-center">
                    <Image 
                        src="/images/logo.png" 
                        alt="logo"
                        width={60}
                        height={60}
                        className="cursor-pointer"
                    />
                </div>
                {/* Search */}
                <div className="flex-1 mx-3 max-w-md">
                    <div className="relative flex items-center">
                        <Image 
                            src="/icons/gray/search.png" 
                            alt="search"
                            width={18}
                            height={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 opacity-70"
                        />
                        <input 
                            type="text" 
                            placeholder="Search domain and include platform" 
                            onChange={(event) => setDomain(event.target.value)}
                            className="w-full pl-10 pr-3 py-2 rounded-md bg-[#151F32] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>
                </div>
                {/* Buttons */}
                <div className="flex items-center space-x-2">
                    <button 
                        onClick={() => routeToSign()}
                        className="px-4 py-2 rounded bg-[#009689] cursor-pointer text-white hover:bg-[#19B6F9] transition"
                    >
                        Generate
                    </button>
                    <button
                        onClick={() => checkingDomain()}
                        className="flex items-center px-4 py-2 rounded bg-white text-gray-400 hover:bg-gray-200 transition cursor-pointer"
                    >
                        Check
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar