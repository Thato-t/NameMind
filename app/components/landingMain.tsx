'use client';

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

function LandingMain() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center px-4 pt-8 bg-[#101624] min-h-screen">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-2">
        Find Your Perfect <span className="text-[#BF08B8]">Domain</span>
      </h1>
      <p className="text-gray-300 text-center mb-8">
        AI-powered domain discovery for your next big idea
      </p>
      {/* Blue box */}
      <div className="w-full max-w-md md:max-w-xl h-48 md:h-56 bg-[#19B6F9] rounded-lg mb-10" />
      {/* Features */}
      <h4 className="text-xl font-semibold text-white text-center mb-2">Powerful Features</h4>
      <p className="text-gray-400 text-center mb-8">
        Everything you need to find and secure the perfect domain
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
        {/* Feature Card */}
        <div className="bg-[#14213D] rounded-lg p-5 flex flex-col items-start shadow-md cursor-pointer">
          <div className="flex items-center mb-2">
            <Image src="/icons/gray/bolt.png" alt="bolt" width={28} height={28} />
            <p className="ml-2 text-lg font-semibold text-[#19B6F9]">AI-Powered Search</p>
          </div>
          <p className="text-gray-300 text-sm">
            Let AI generate creative domain suggestions based on your keywords and preferences
          </p>
        </div>
        <div className="bg-[#14213D] rounded-lg p-5 flex flex-col items-start shadow-md">
          <div className="flex items-center mb-2">
            <Image src="/icons/gray/globe-alt.png" alt="globe" width={28} height={28} />
            <p className="ml-2 text-lg font-semibold text-[#BF08B8]">Real-Time Availability</p>
          </div>
          <p className="text-gray-300 text-sm">
            Check domain availability instantly across all major TLDs and hosting platforms
          </p>
        </div>
        <div className="bg-[#14213D] rounded-lg p-5 flex flex-col items-start shadow-md cursor-pointer">
          <div className="flex items-center mb-2">
            <Image src="/icons/gray/circle-outer-dashed-circle.png" alt="dashed-circle" width={28} height={28} />
            <p className="ml-2 text-lg font-semibold text-[#FF7F11]">Smart Suggestions</p>
          </div>
          <p className="text-gray-300 text-sm">
            Get intelligent alternatives and variations when your first choice isn't available
          </p>
        </div>
        <div className="bg-[#14213D] rounded-lg p-5 flex flex-col items-start shadow-md">
          <div className="flex items-center mb-2">
            <Image src="/icons/gray/shield.png" alt="shield" width={28} height={28} />
            <p className="ml-2 text-lg font-semibold text-[#19B6F9]">Brand Protection</p>
          </div>
          <p className="text-gray-300 text-sm">
            Monitor and protect your brand with comprehensive domain tracking and alerts
          </p>
        </div>
        <div className="bg-[#14213D] rounded-lg p-5 flex flex-col items-start shadow-md">
          <div className="flex items-center mb-2">
            <Image src="/icons/gray/chart-bar-big-columns.png" alt="chart" width={28} height={28} />
            <p className="ml-2 text-lg font-semibold text-[#3A86FF]">Analytics & Insights</p>
          </div>
          <p className="text-gray-300 text-sm">
            Get detailed analytics on domain performance and market trends to make informed decisions
          </p>
        </div>
        <div className="bg-[#14213D] rounded-lg p-5 flex flex-col items-start shadow-md">
          <div className="flex items-center mb-2">
            <Image src="/icons/gray/rocket.png" alt="rocket" width={28} height={28} />
            <p className="ml-2 text-lg font-semibold text-[#BF08B8]">Instant Deployment</p>
          </div>
          <p className="text-gray-300 text-sm">
            Deploy your domains instantly to popular platforms like Vercel, Netlify, and more
          </p>
        </div>
      </div>
      {/* Call to Action */}
      <div className="w-full max-w-3xl bg-[#181e2e] rounded-xl p-8 flex flex-col items-center shadow-lg mb-8">
        <Image src="/icons/yellow/star.png" alt="star" width={40} height={40} className="mb-2" />
        <p className="text-2xl font-bold text-white mb-2 text-center">Ready to Find Your Perfect Domain?</p>
        <p className="text-gray-400 text-center mb-6">
          Join thousands of developers and entrepreneurs who trust NameMind for their domain needs
        </p>
        <div className="flex gap-4">
          <button className="flex items-center bg-[#19B6F9] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#009689] transition cursor-pointer" onClick={() => router.push('/landing-result')}>
            <Image src="/icons/white/search.png" alt="search" width={20} height={20} className="mr-2" />
            Start Searching
          </button>
          <button className="bg-white text-gray-700 font-semibold px-5 py-2 rounded-lg hover:bg-gray-200 transition cursor-not-allowed">
            Learn More
          </button>
        </div>
      </div>
    </main>
  )
}

export default LandingMain