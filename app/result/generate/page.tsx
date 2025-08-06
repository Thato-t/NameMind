import React, { useState } from 'react';
import Navbar from '../../components/reusable/navbar'
import Image from 'next/image';

function GeneratePage() {
  return (
    <>
        <Navbar />
        <p>AI-Powered Domain Generator</p>
        <p>Create the perfect domain name with artifial intelligent and smart suggestions</p>
        <div>
            <div>
                <div>
                    <Image src="./icons/white/sparkels.png" alt="sparkels" width={20} height={20} />
                    <span>
                        <p>AI Domain Generator</p>
                        <p>Let our AI create unique domain names bases on your ideas</p>
                    </span>
                </div>
                <span>
                    <Image src="./icons/white/search.png" alt="bulb" width={20} height={20} />
                    <p>Describe Your Project</p>
                </span>
                <div>
                    <input
                     type="text"
                     placeholder="e.g. A website for selling bananas"
                    />
                    <Image src="./images/logo.png" alt="logo" width={10} height={10} />
                </div>
                <span>Generation Style</span>
                <span>Industry Focus</span>
                <p>Preferred Extension</p>
                <div>
                    <div>.com</div>
                    <div>.za</div>
                    <div>.io</div>
                    <div>.netlify.app</div>
                    <div>.vercel.app</div>
                </div>
                <div>
                    <span>
                        <Image src="./icons/white/sparkles.png" alt="sparkles" width={20} height={20} />
                        <p>Generate 50 Domain Ideas</p>
                    </span>
                    <button>
                        <Image src="./icons/gray/star.png" alt="star" width={20} height={20} />
                        Advanced
                    <button/>
                </div>
            </div>
            <div>
                <div>
                    <Image src="./icons/purple/bolt.png" alt="bolt" width={20} height={20} />
                    <p>Instant Generation</p>
                    <p>Find the best domain suggestions in seconds</p>
                    <button>
                        <Image src="./icons/white/search.png" alt="rocket" width={20} height={20} /> 
                        Quick Start
                    </button>
                </div>
                <div>
                    <span>
                        <Image src="./icons/orange/trending-up" alt="trending-up" width={20} height={20} />
                        <p>Popular Domains</p>
                    </span>
                </div>
                <div></div>
            </div>
        </div>
    </>
  )
}

export default GeneratePage