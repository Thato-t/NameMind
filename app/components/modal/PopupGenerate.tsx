'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import useGenerateDomain from '@/hooks/generateDomain';

interface Domain {
  name: string;
  status: 'Available';

}
interface PopupGenerateProps {
    showGenerateModal: (bool: boolean) => void;
    showModal: (bool: boolean) => void;
}

function PopupGenerate({ showGenerateModal, showModal }: PopupGenerateProps) {
    const [ domains, setDomains ] = useState<Domain[]>([
        {
          name: "techstartup.com",
          status: "Available"
        },
        {
          name: "techstartup.net",
          status: "Available"
        },
        {
          name: "techstartup.app",
          status: "Available"
        },
        {
          name: "fintechflow.io",
          status: "Available"
        },
        {
          name: "nexusapp.io",
          status: "Available"
        },
        {
          name: "coredev.dev",
          status: "Available"
        }
      ]);
    const { names, loading } = useGenerateDomain();
    
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
        <div className="bg-[#181e2e] rounded-2xl shadow-2xl p-8 w-full max-w-2xl relative">
            {/* Close Button */}
            <button
             className="absolute top-4 right-4 text-gray-400 hover:bg-red-500 cursor-pointer bg-red-900"
             onClick={() => showGenerateModal(false)}
            >
            <Image src="/icons/maroon/x.png" alt="close" width={24} height={24} />
            </button>
            {/* Modal Title */}
            <h2 className="text-2xl font-bold text-white mb-2">Search Results</h2>
            <p className="text-gray-400 mb-6">Find & secure the perfect domain for your project</p>
            {/* Search Bar */}
            <div className="flex items-center bg-[#14213D] rounded-lg px-4 py-2 mb-6">
            <Image src="/icons/gray/search.png" alt="search" width={20} height={20} className="mr-2" />
            <input
                type="text"
                className="bg-transparent text-white flex-1 outline-none placeholder-gray-400"
                placeholder="Enter your domain name or keywords..."
            />
            </div>
            {/* Extensions */}
            <div className="flex gap-2 mb-4">
            {['.com', '.io', '.app', '.dev', '.net'].map(ext => (
                <span key={ext} className="bg-[#181e2e] text-white px-3 py-1 rounded-lg text-xs border border-[#19B6F9]cursor-pointer">{ext}</span>
            ))}
            </div>
            {/* Results List */}
            <div className="mb-6">
            {domains.map((domain, idx) => (
                <div
                key={domain.name + idx}
                className="flex items-center justify-between bg-[#14213D] rounded-lg px-4 py-3 mb-2"
                >
                <div className="flex items-center gap-2">
                    <Image src="/icons/green/check-circle.png" alt="domain" width={20} height={20} />
                    <span className="text-white font-medium">{domain.name}</span>
                </div>
                <div className="flex items-center gap-2">
                    {domain.status === 'Available' && (
                    <span className="bg-[#19B6F9] text-white text-xs px-2 py-1 rounded">Available</span>
                    )}

                </div>
                </div>
            ))}
            </div>
            {/* Bottom Actions */}
            <div className="flex justify-between items-center mt-6">
            <div className="flex gap-4">
                <button className="bg-[#19B6F9] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#009689] transition flex items-center
                cursor-pointer">
                <Image src="/icons/gray/search.png" alt="search" width={20} height={20} className="mr-2" />
                Search Domains
                </button>
                <button 
                 className="bg-[#181e2e] text-white px-5 py-2 rounded-lg font-semibold border border-[#19B6F9] hover:bg-[#14213D] transition cursor-pointer"
                 onClick={() => showModal(true)}
                > 
                 Advanced
                </button>
            </div>
            <button className="text-white text-sm underline cursor-pointer">Clear All</button>
            </div>
        </div>
    </div>
  );
}

export default PopupGenerate;