'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../components/reusable/navbar';

function SignPage() {
  return (
    <>
        <Navbar />
        <main className="bg-[#101624] min-h-screen flex flex-col items-center pt-12 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">Welcome Back</h1>
            <p className="text-gray-300 text-center mb-8">Sign in to continue your domain journey</p>
            {/* Auth Cards */}
            <div className="flex flex-col md:flex-row gap-8 mb-10 w-full max-w-3xl justify-center">
            {/* Sign In */}
            <div className="bg-[#181e2e] rounded-xl shadow-lg p-8 flex-1 min-w-[300px]">
                <div className="flex items-center m\b-4">
                <Image src="/icons/green/shield.png" alt="shield" width={28} height={28} />
                <span className="ml-2 text-lg font-semibold text-white">Sign In</span>
                </div>
                <p className="text-gray-400 mb-6 text-sm">Access your domain management dashboard</p>
                <form className="space-y-4">
                    <div>
                        <input
                        type="email"
                        className="w-full bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
                        placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <input
                        type="password"
                        className="w-full bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
                        placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex justify-between items-center text-xs">
                        <label className="text-gray-400 flex items-center">
                        <input type="checkbox" className="mr-2 accent-[#19B6F9]" />
                        Remember me
                        </label>
                        <a href="#" className="text-[#19B6F9] hover:underline">Forgot password?</a>
                    </div>
                    <button className="w-full bg-[#19B6F9] text-white font-semibold py-2 rounded-lg hover:bg-[#009689] transition">
                        Sign In
                    </button>
                </form>
                <div className="flex gap-4 mt-4">
                <button className="flex-1 bg-[#14213D] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#181e2e] transition">
                    <Image src="/icons/gray/github.png" alt="github" width={20} height={20} />
                    GitHub
                </button>
                <button className="flex-1 bg-[#14213D] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#181e2e] transition">
                    <Image src="/icons/gray/globe-alt.png" alt="globe" width={20} height={20} />
                    Google
                </button>
                </div>
            </div>
            {/* Create Account */}
            <div className="bg-[#181e2e] rounded-xl shadow-lg p-8 flex-1 min-w-[300px]">
                <div className="flex items-center mb-4">
                <Image src="/icons/purple/user.png" alt="user-plus" width={28} height={28} />
                <span className="ml-2 text-lg font-semibold text-white">Create Account</span>
                </div>
                <p className="text-gray-400 mb-6 text-sm">Join thousands of domain enthusiasts</p>
                <form className="space-y-4">
                    <div className="flex gap-2">
                        <input
                        type="text"
                        className="w-1/2 bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
                        placeholder="First Name"
                        defaultValue="John"
                        />
                        <input
                        type="text"
                        className="w-1/2 bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
                        placeholder="Last Name"
                        defaultValue="Doe"
                        />
                    </div>
                    <div>
                        <input
                        type="email"
                        className="w-full bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
                        placeholder="Email Address"
                        defaultValue="john@namemind.com"
                        />
                    </div>
                    <div>
                        <input
                        type="password"
                        className="w-full bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
                        placeholder="Create a strong password"
                        />
                    </div>
                    <div>
                        <input
                        type="password"
                        className="w-full bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
                        placeholder="Confirm your password"
                        />
                    </div>
                    <button className="w-full bg-[#BF08B8] text-white font-semibold py-2 rounded-lg hover:bg-[#19B6F9] transition">
                        Create Account
                    </button>
                </form>
            </div>
            </div>
            {/* Features */}
            <div className="w-full max-w-3xl bg-[#19B6F9] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg mb-8">
            <div className="flex flex-col items-center flex-1 mb-6 md:mb-0">
                <Image src="/icons/green/bolt.png" alt="bolt" width={32} height={32} className="mb-2" />
                <p className="text-white font-bold mb-1">AI-Powered Suggestions</p>
                <p className="text-white text-xs text-center">Get intelligent domain name suggestions tailored to your business</p>
            </div>
            <div className="flex flex-col items-center flex-1 mb-6 md:mb-0">
                <Image src="/icons/light-blue/globe-alt.png" alt="globe" width={32} height={32} className="mb-2" />
                <p className="text-white font-bold mb-1">Global Domain Search</p>
                <p className="text-white text-xs text-center">Search across hundreds of TLDs and find the perfect match</p>
            </div>
            <div className="flex flex-col items-center flex-1">
                <Image src="/icons/purple/shield.png" alt="shield" width={32} height={32} className="mb-2" />
                <p className="text-white font-bold mb-1">Secure & Reliable</p>
                <p className="text-white text-xs text-center">Enterprise grade security with real-time domain monitoring</p>
            </div>
            </div>
            {/* Footer Links */}
            <div className="text-center text-gray-400 text-sm mb-2">
            Already have an account? <a href="#" className="text-[#19B6F9] hover:underline">Sign in here</a>
            </div>
            <div className="text-center text-gray-400 text-sm">
            Need help? <a href="#" className="text-[#19B6F9] hover:underline">Contact Support</a>
            </div>
        </main>
    </>
  );
}

export default SignPage;