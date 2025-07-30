'use client';

import { useState, useEffect } from 'react';

function Home() {
  const [ status, setStatus ] = useState('')

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
      setStatus(data.status)
    } catch (error) {
      console.log('Error found', error)
    }
  }



  return (
    <main>
      <button
       onClick={() => checkDomain('expensify-t', 'vercel.app')} 
      >Click
      </button>
      <h1>{status}</h1>
    </main>
  );
}

export default Home
