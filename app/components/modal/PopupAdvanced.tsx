'use client';
interface showProp{
  showModal: (bool: boolean | null) => void;
  selectedExtensions: (ext: string[]) => void
}

import React, { useState,useEffect } from 'react';
import useDomainExtensions from '../../../hooks/domainExtensions';
import Image from 'next/image';

function PopupAdvanced({showModal, selectedExtensions}: showProp) {
  const { extensions } = useDomainExtensions();
  const [ activeExtensions, setActiveExtensions ] = useState<string[]>([]);


  // Add extension handler
  const handleAddExtension = (ext: string) => {
    if (!activeExtensions.includes(ext)) {
      setActiveExtensions([...activeExtensions, ext]);
      selectedExtensions([...activeExtensions, ext]);
    }
  };
  
  // Remove extension handler
  const handleRemoveExtension = (ext: string) => {
    setActiveExtensions(activeExtensions.filter(e => e !== ext));
    selectedExtensions(activeExtensions.filter(e => e !== ext));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#181e2e] rounded-xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Advanced Extensions</h2>
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {activeExtensions.map((actExt: string) => (
            <span
              key={actExt}
              className="flex items-center bg-[#19B6F9] text-white px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
            >
              {actExt}
              <button
                className="ml-2 hover:bg-[#BF08B8] rounded-full p-1 transition cursor-pointer"
                onClick={() => handleRemoveExtension(actExt)}
              >
                <Image src="/icons/maroon/x.png" alt="Remove" width={16} height={16} />
              </button>
            </span>
          ))}
        </div>
        <div className="mb-4">
          <label className="block text-white font-semibold mb-2">Add Extension</label>
          <select
            className="w-full bg-[#14213D] text-white px-4 py-2 rounded-lg focus:outline-none cursor-pointer"
            onChange={e => handleAddExtension(e.target.value)}
            value=""
          >
            <option value="" disabled>Select extension...</option>
            {extensions
              .filter(ext => !activeExtensions.includes(ext))
              .map((ext: string) => (
                <option className="cursor-pointer" key={ext} value={ext}>
                  {ext}
                </option>
              ))}
          </select>
        </div>
        <div className="flex justify-end mt-6">
          <button 
            className="bg-[#19B6F9] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#009689] transition cursor-pointer"
            onClick={() => showModal(false)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupAdvanced;