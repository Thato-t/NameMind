'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Available from  '../components/reusable/available';
import useDomainCheck from '../../hooks/domainCheck';
import PopupResult from '../components/modal/PopupResult';
import { useRouter } from 'next/navigation';
import Loader from '../components/reusable/Loader';


function LandingResult() {
    const platformsArr: string[] = ['.vercel.app', '.netlify.app', '.co.za', '.com', '.io'];
    const [ domainEntered, setDomainEntered ] = useState<string>('');
    const [ domain, setDomain ] = useState<string>('');
    
    useEffect(() => {
        const value: string = localStorage.getItem('domainEntered') ?? '';
        setDomainEntered(value);
        setDomain(value); // Also set the domain state with the localStorage value
    },[])
    
    const router = useRouter();
    const [ platform, setPlatform ] = useState<string>('.vercel.app');
    const [ available, setAvailable] = useState<boolean | undefined | null>(null);
    const { status, checkDomain } = useDomainCheck();
    const [ errMsg, setErrMsg ] = useState<string>('');
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const checkingDomain = async () => {
        setIsLoading(true);
        if (domain.trim() === '') {
            setErrMsg('Please enter a domain');
            setIsLoading(false);
            return;
        }
        const fullDomain: string = domain + platform;
        const result = await checkDomain(fullDomain);
        
        if (result === 'Error') {
            setErrMsg('Error checking domain');
            setAvailable(null);
            setIsLoading(false);
            return;
        }
        
        console.log(result);
        result === 'Taken' ? setAvailable(false) : setAvailable(true);
        setIsLoading(false);
    }


  return (
    <main className="min-h-screen bg-[#101624] flex flex-col items-center justify-center px-4">
        {/* Top Icon */}
        <div className="mb-6">
            <Image 
             src="/images/logo.png" 
             alt="search" 
             width={60} 
             height={60}
             onClick={() => router.push('/')}
             className="cursor-pointer" 
            />
        </div>
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
            Domain Checker
        </h1>
        <p className="text-gray-300 text-center mb-8">
            Check subdomain availability instantly
        </p>
        {/* Result Card */}
        <div className="w-full max-w-md bg-[#181e2e] rounded-xl p-6 flex flex-col items-center shadow-lg mb-8">
            {/* Input Row */}
            <div className="flex items-center w-full mb-4">
            <input
                type="text"
                value={domain}
                className="flex-1 bg-[#14213D] text-white px-4 py-2 rounded-l-lg focus:outline-none placeholder-gray-400"
                placeholder="namemind"
                onChange={(event) => setDomain(event.target.value)}
            />
            <span className="bg-[#14213D] text-gray-400 px-4 py-2 rounded-r-lg text-sm font-medium">
                <select
                    onChange={(event) => setPlatform(event.target.value)}
                    value={platform}
                    className="cursor-pointer bg-[#14213D]"
                >
                    {platformsArr.map((platform, index) => <option key={index} value={platform}>{platform}</option>)}
                </select>
            </span>
            </div>
            {/* Status Row */}
            <div className="flex items-center w-full mb-4">
            {status === '' ? '' : 
                domain.trim() === '' || status === 'Error'?
                <span className="text-red-500 text-sm">{errMsg}</span> : 
                <Available isAvailable={available} />
            }
            </div>
            {/* Button */}
            <button className="w-full flex items-center justify-center bg-[#19B6F9] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#009689] transition cursor-pointer" onClick={() => checkingDomain()}
            style={{cursor: isLoading ? 'not-allowed' : 'pointer'}}
            >
                {isLoading ? <Loader /> : <Image src="/icons/white/search.png" alt="search" width={20} height={20} className="mr-2" />}
                Check Availability
            </button>
        </div>
        {/* Features Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-6">
            <div className="flex items-center text-gray-400 text-sm">
                <Image src="/icons/gray/clock-11.png" alt="clock" width={18} height={18} className="mr-2" />
                Instant Results
            </div>
            <div className="flex items-center text-gray-400 text-sm">

                <Image src="/icons/gray/shield.png" alt="shield" width={18} height={18} className="mr-2" />
                100% Accurate
            </div>
            <div className="flex items-center text-gray-400 text-sm">
                <Image src="/icons/gray/bolt.png" alt="bolt" width={18} height={18} className="mr-2" />
                Free to Use
            </div>
        </div>
        <PopupResult isAvailable={available} domain={domain} />
    </main>
  )
}

export default LandingResult