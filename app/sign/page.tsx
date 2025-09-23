'use client';
// TODO: add the eye icons on the password inputs to show the password
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/reusable/navbar';
import useAuth from '@/hooks/authentication';
import Loader from '../components/reusable/Loader';

function SignPage() {
    const { signIn, signUp, pending, loading } = useAuth();
    const [ signEmail, setSignEmail ] = useState<string>('');
    const [ signPassword, setSignPassword ] = useState<string>('');
    const [ createName, setCreateName ] = useState<string>('');
    const [ createUsername, setCreateUsername ] = useState<string>('');
    const [ createEmail, setCreateEmail ] = useState<string>('');
    const [ createPassword, setCreatePassword ] = useState<string>('');
    const [ createConfirmPassword, setCreateConfirmPassword ] = useState<string>('');
    const [ feedbackMsg, setFeedbackMsg] = useState<string>('');
    const [ errMsg, setErrMsg] = useState<string>('');

    const emailRegex = /[a-zA-Z0-9]@gmail\.com/;
    const testEmailRegex = (email: string) => emailRegex.test(email);

    const SignUpSubmit = async (e: any) => {
        e.preventDefault();
        setFeedbackMsg('');
        if (!testEmailRegex(signEmail)){
            setFeedbackMsg('Your email format must be like this john@gmail.com');
            return;
        }
        if (!signEmail && !signPassword){
            setFeedbackMsg('All inputs are required');
            return;
        }
        signUp(signEmail, signPassword)
        
        setFeedbackMsg('Loading ...')
    }

    const SignInSubmit = async (e: any) => {
        e.preventDefault();
        setFeedbackMsg('');
        if (!testEmailRegex(createEmail)){
            setErrMsg('Your email format must be like this john@gmail.com');
            return;
        }
        if (!createName && !createUsername && !createEmail && !createPassword && !createConfirmPassword){
            setErrMsg('All inputs are required');
            return;
        }
        if (createPassword !== createConfirmPassword){
            setErrMsg('Passwords don\'t match.');
            return;
        }

        signIn(createName, createUsername, createEmail, createConfirmPassword);
        setErrMsg('Loading ...');
    }
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
                <form className="space-y-4" onSubmit={SignUpSubmit}>
                    <div>
                        <input
                        type="email"
                        className="w-full bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
                        placeholder="Enter your email"
                        onChange={(e) => setSignEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                        type="password"
                        className="w-full bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
                        placeholder="Enter your password"
                        onChange={(e) => setSignPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between items-center text-xs">
                        <label className="text-gray-400 flex items-center cursor-pointer" htmlFor="remember">
                        <input type="checkbox" className="mr-2 accent-[#19B6F9]" id="remember"/>
                        Remember me
                        </label>
                        <a href="#" className="text-[#19B6F9] hover:underline">Forgot password?</a>
                    </div>
                    <button className="w-full bg-[#19B6F9] text-white font-semibold py-2 rounded-lg hover:bg-[#009689] transition cursor-pointer">
                        Sign In
                    </button>
                </form>
                <div className="flex gap-4 mt-4">
                    <button className="flex-1 bg-[#14213D] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#181e2e] transition cursor-not-allowed">
                        <Image src="/icons/gray/github.png" alt="github" width={20} height={20} />
                        GitHub
                    </button>
                    <button className="flex-1 bg-[#14213D] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#181e2e] transition cursor-not-allowed">
                        <Image src="/icons/gray/globe-alt.png" alt="globe" width={20} height={20} />
                        Google
                    </button>
                </div>
                <p className="mt-5" style={{color: feedbackMsg === 'Loading ...' ? '#0BBB67' : '#8E4752'}}>{feedbackMsg}</p>
            </div>
            {/* Create Account */}
            <div className="bg-[#181e2e] rounded-xl shadow-lg p-8 flex-1 min-w-[300px]">
                <div className="flex items-center mb-4">
                <Image src="/icons/purple/user.png" alt="user-plus" width={28} height={28} />
                <span className="ml-2 text-lg font-semibold text-white">Create Account</span>
                </div>
                <p className="text-gray-400 mb-6 text-sm">Join thousands of domain enthusiasts</p>
                <form className="space-y-4" onSubmit={SignInSubmit}>
                    <div className="flex gap-2">
                        <input
                        type="text"
                        className="w-1/2 bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
                        placeholder="First Name"
                        defaultValue="John"
                        onChange={(e) => setCreateName(e.target.value)}
                        />
                        <input
                        type="text"
                        className="w-1/2 bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
                        placeholder="Username"
                        defaultValue="John2"
                        onChange={(e) => setCreateUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                        type="email"
                        className="w-full bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
                        placeholder="Email Address"
                        defaultValue="john@namemind.com"
                        onChange={(e) => setCreateEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                        type="password"
                        className="w-full bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
                        placeholder="Create a strong password"
                        onChange={(e) => setCreatePassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                        type="password"
                        className="w-full bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
                        placeholder="Confirm your password"
                        onChange={(e) => setCreateConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button className="w-full bg-[#BF08B8] text-white font-semibold py-2 rounded-lg hover:bg-[#19B6F9] transition cursor-pointer">
                        Create Account
                    </button>
                </form>
                <div className="flex gap-4 mt-4">
                    <button className="flex-1 bg-[#14213D] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#181e2e] transition cursor-not-allowed">
                        <Image src="/icons/gray/github.png" alt="github" width={20} height={20} />
                        GitHub
                    </button>
                    <button className="flex-1 bg-[#14213D] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#181e2e] transition cursor-not-allowed">
                        <Image src="/icons/gray/globe-alt.png" alt="globe" width={20} height={20} />
                        Google
                    </button>
                </div>
                <p className="mt-5" style={{color: errMsg === 'Loading ...' ? '#0BBB67' : '#8E4752'}}>{errMsg}</p>
            </div>
            </div>
            {/* Footer Links */}
            <div className="text-center text-gray-400 text-sm">
            Need help? <a href="#" className="text-[#19B6F9] hover:underline">Contact Support</a>
            </div>
        </main>
    </>
  );
}

export default SignPage;