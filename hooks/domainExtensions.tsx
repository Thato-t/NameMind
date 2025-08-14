'use client';
import React from 'react'

function useDomainExtensions() {
    const extensions: string[] = [
        '.vercel.app', '.netlify.app', '.com', '.co.za', '.io', '.net', '.edu', '.mil', '.tech', '.ai', '.info', '.me', '.online', '.app', '.blog', '.shop', '.xyz', '.club', '.biz'
    ]
  return { extensions }
}

export default useDomainExtensions