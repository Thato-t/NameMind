'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/reusable/navbar'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import useGenerateDomain from '../../../hooks/generateDomain';
import PopupAdvanced from '../../components/modal/PopupAdvanced';

function GeneratePage() {
  const router = useRouter();
  const { generateDomains } = useGenerateDomain();
  const [ input, setInput ] = useState<string>('');
  const [ clicked, setClicked ] = useState<boolean>(false);
  const [ extensions, setExtensions ] = useState<string[]>([]);
  const [ activeIndex, setActiveIndex ] = useState<number>();
  const [ show, setShow ] = useState<boolean | null>(null);

  const showModal = (bool: boolean) => setShow(bool);



  return (
    <>
      <Navbar />
      <main className="bg-[#101624] min-h-screen px-4 pt-8 flex flex-col items-center">
        {/* Title & Subtitle */}
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
          AI-Powered Domain Generator
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Create the perfect domain name with artificial intelligence and smart suggestions
        </p>
        {/* Top Buttons */}
        <div className="flex gap-4 mb-8">
          <button className="flex items-center bg-[#19B6F9] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#009689] transition cursor-pointer">
            <Image src="/icons/white/search.png" alt="bolt" width={20} height={20} className="mr-2" />
            Search Domain Names
          </button>
          <button className="flex items-center bg-[#181e2e] text-gray-400 font-semibold px-5 py-2 rounded-lg cursor-not-allowed">
            <Image src="/icons/gray/light-bulb.png" alt="light-bulb" width={20} height={20} className="mr-2" />
            Smart Suggestions
          </button>
        </div>
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
          {/* Left: Generator Card */}
          <div className="bg-[#19B6F9] rounded-xl p-8 flex-1 min-w-[340px] max-h-[400px] shadow-lg">
            <div className="flex items-center mb-4">
              <Image src="/icons/light-blue/sparkles-alt.png" alt="sparkles" width={28} height={28} />
              <span className="ml-2">
                <p className="text-lg font-semibold text-white">AI Domain Generator</p>
                <p className="text-gray-100 text-sm">Let our AI create unique domain names based on your ideas</p>
              </span>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <Image src="/icons/white/light-bulb.png" alt="light-bulb" width={20} height={20} />
                <p className="ml-2 text-white font-medium">Describe Your Project</p>
              </div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  className="w-full bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
                  placeholder="e.g. Include app keyword or website for healthcare..."
                />
                <button className="absolute right-2">
                  <Image src="/images/logo.png" alt="logo" width={20} height={20} />
                </button>
              </div>
            </div>
            {/* TODO add this options inside the advanced button <div className="flex gap-4 mb-4">
              <div>
                <span className="text-white text-sm">Generation Style</span>
              </div>
              <div>
                <span className="text-white text-sm">Industry Focus</span>
              </div>
            </div> */}
            <div className="mb-4">
              <p className="text-white text-sm mb-2">Preferred Extensions</p>
              <div className="flex gap-2 flex-wrap">
                {extensions.map((ext: string, index: number) => (
                  <div 
                   key={index}
                   onClick={() => setActiveIndex(index)}
                   className={`
                    bg-[#181e2e] text-white px-3 py-1 rounded-lg text-xs cursor-pointer hover:bg-[#009689] transition
                    ${activeIndex === index  ? "bg-[#009689]" : "bg-[#181e2e]"}`}
                  >
                    {ext}
                  </div>
                ))}
              </div>
            </div>
            {show ? <PopupAdvanced showModal={showModal} selectedExtensions={setExtensions} /> : ''}
            <div className="flex items-center justify-between mt-6">
              <button className="flex items-center bg-[#181e2e] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#009689] transition cursor-pointer" onClick={() => generateDomains(input)}>
                <Image src="/icons/white/sparkles-alt.png" alt="sparkles" width={20} height={20} className="mr-2" />
                Generate Domain Ideas
              </button>
              <button 
               className="flex items-center bg-white text-gray-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition cursor-pointer"
               onClick={() => showModal(true)}
              >
                <Image src="/icons/gray/cog.png" alt="cog" width={20} height={20} className="mr-2" />
                Advanced
              </button>
            </div>
          </div>
          {/* Right: Instant Generation & Results */}
          <div className="flex flex-col gap-6 min-w-[300px]">
            {/* Instant Generation */}
            <div className="bg-[#BF08B8] rounded-xl p-6 shadow-lg flex flex-col items-start mb-2">
              <div className="flex items-center mb-2">
                <Image src="/icons/gray/bolt.png" alt="bolt" width={24} height={24} />
                <span className="ml-2 text-white font-semibold text-lg">Instant Generation</span>
              </div>
              <p className="text-white text-sm mb-4">Get domain suggestions in seconds</p>
              <button 
               className="flex items-center bg-[#19B6F9] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#009689] transition cursor-pointer"
               onClick={() => router.push('/sign')}
              >
                <Image src="/icons/white/rocket.png" alt="rocket" width={20} height={20} className="mr-2" />
                Quick Start
              </button>
            </div>


            {/* Recent Generations */}
            {/* <div className="bg-[#181e2e] rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-2">
                <Image src="/icons/light-blue/clock-3.png" alt="clock" width={20} height={20} />
                <span className="ml-2 text-white font-semibold text-lg">Recent Generations</span>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                {/* TODO: Map recent generations
                <div className="flex justify-between items-center bg-[#14213D] rounded-lg px-3 py-2">
                  <span className="text-white text-sm">ai freelance startup</span>
                  <Image src="/icons/black/refresh-cw-alt.png" alt="arrow" width={16} height={16} />
                </div>
                <div className="flex justify-between items-center bg-[#14213D] rounded-lg px-3 py-2">
                  <span className="text-white text-sm">fintech app</span>
                  <Image src="/icons/black/refresh-cw-alt.png" alt="arrow" width={16} height={16} />
                </div>
                <div className="flex justify-between items-center bg-[#14213D] rounded-lg px-3 py-2">
                  <span className="text-white text-sm">creative agency</span>
                  <Image src="/icons/black/refresh-cw-alt.png" alt="arrow" width={16} height={16} />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* Bottom Features */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full max-w-5xl mt-12 mb-8">
          <div className="bg-[#181e2e] rounded-lg p-5 flex flex-col items-center shadow-md">
            <Image src="/images/logo.png" alt="logo" width={28} height={28} className="mb-2" />
            <p className="text-white font-semibold mb-1">Smart AI</p>
            <p className="text-gray-400 text-xs mb-2 text-center">Intelligent suggestions</p>
            <button className="bg-[#19B6F9] text-white px-4 py-1 rounded hover:bg-[#009689] transition text-sm cursor-pointer">Generate</button>
          </div>
          <div className="bg-[#181e2e] rounded-lg p-5 flex flex-col items-center shadow-md">
            <Image src="/icons/gray/circle-outer-dashed-circle.png" alt="bulk" width={28} height={28} className="mb-2" />
            <p className="text-white font-semibold mb-1">Bulk Generate</p>
            <p className="text-gray-400 text-xs mb-2 text-center">Multiple keywords</p>
            <button className="bg-[#19B6F9] text-white px-4 py-1 rounded hover:bg-[#009689] transition text-sm cursor-not-allowed">Upload List</button>
          </div>
          <div className="bg-[#181e2e] rounded-lg p-5 flex flex-col items-center shadow-md">
            <Image src="/icons/gray/shuffle.png" alt="mixer" width={28} height={28} className="mb-2" />
            <p className="text-white font-semibold mb-1">Name Mixer</p>
            <p className="text-gray-400 text-xs mb-2 text-center">Combine words</p>
            <button className="bg-[#19B6F9] text-white px-4 py-1 rounded hover:bg-[#009689] transition text-sm cursor-not-allowed">Mix Names</button>
          </div>
          <div className="bg-[#181e2e] rounded-lg p-5 flex flex-col items-center shadow-md">
            <Image src="/icons/gray/check-circle.png" alt="availability" width={28} height={28} className="mb-2" />
            <p className="text-white font-semibold mb-1">Availability</p>
            <p className="text-gray-400 text-xs mb-2 text-center">Real-time check</p>
            <button className="bg-[#19B6F9] text-white px-4 py-1 rounded hover:bg-[#009689] transition text-sm cursor-pointer">Check</button>
          </div>
          <div className="bg-[#181e2e] rounded-lg p-5 flex flex-col items-center shadow-md">
            <Image src="/icons/gray/star.png" alt="star" width={28} height={28} className="mb-2" />
            <p className="text-white font-semibold mb-1">Other Tools</p>
            <p className="text-gray-400 text-xs mb-2 text-center">More features</p>
            <button className="bg-[#19B6F9] text-white px-4 py-1 rounded hover:bg-[#009689] transition text-sm cursor-not-allowed">Explore</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default GeneratePage