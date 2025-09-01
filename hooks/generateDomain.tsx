import React, { useState } from 'react';

function useGenerateDomain() {
  const [ names, setNames ] = useState();
  const [ errMsg, setErrMsg ] = useState<string>('');

  const generateDomains = async (input: string) => {
    try {
      console.log(input)
      const res = await fetch('api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description: input})
      });
      const data = await res.json();
      setNames(data.names);
      console.log(data);
    } catch (error) {
      console.error('Error found', error);
      setErrMsg('Error');
    }
  }
  return { generateDomains, names, errMsg }
}

export default useGenerateDomain