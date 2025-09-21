import React, { useState } from 'react';

function useGenerateDomain() {
  const [ names, setNames ] = useState<any>();
  const [ errMsg, setErrMsg ] = useState<string>('');
  const [ loading, setLoading ] = useState<boolean>(false);

  const generateDomains = async (input: string) => {
    setLoading(true);
    setErrMsg('');
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description: input})
      });
      const data = await res.json();
      const results = data;
      setNames(results);
      setErrMsg('');
      setLoading(false);
    } catch (error) {
      console.error('Error found', error);
      setErrMsg('Failed to generate names');
      setNames('');
      setLoading(false);
    }
  }
  return { generateDomains, names, errMsg, loading }
}

export default useGenerateDomain