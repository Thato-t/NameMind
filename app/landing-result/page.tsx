// 'use client'
// import React from 'react'
// import Image from 'next/image'

// function LandingResult() {
//   return (
//     <main className="min-h-screen bg-[#101624] flex flex-col items-center justify-center px-4">
//       {/* Top Icon */}
//       <div className="mb-6">
//         <div className="bg-[#19B6F9] rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg">
//           <Image src="" alt="search" width={40} height={40} />
//         </div>
//       </div>
//       {/* Title */}
//       <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
//         Vercel Domain Checker
//       </h1>
//       <p className="text-gray-300 text-center mb-8">
//         Check subdomain availability instantly
//       </p>
//       {/* Result Card */}
//       <div className="w-full max-w-md bg-[#181e2e] rounded-xl p-6 flex flex-col items-center shadow-lg mb-8">
//         {/* Input Row */}
//         <div className="flex items-center w-full mb-4">
//           <input
//             type="text"
//             className="flex-1 bg-[#14213D] text-white px-4 py-2 rounded-l-lg focus:outline-none placeholder-gray-400"
//             placeholder="expensify-namemind"
//             value="expensify-namemind"
//             readOnly
//           />
//           <span className="bg-[#14213D] text-gray-400 px-4 py-2 rounded-r-lg text-sm font-medium">
//             vercel.app
//           </span>
//         </div>
//         {/* Status Row */}
//         <div className="flex items-center w-full mb-4">
//           <div className="flex items-center">
//             <span className="w-5 h-5 rounded-full bg-[#19B6F9] flex items-center justify-center mr-2">
//               <Image src="" alt="available" width={14} height={14} />
//             </span>
//             <span className="text-green-400 font-semibold">Available</span>
//           </div>
//         </div>
//         {/* Button */}
//         <button className="w-full flex items-center justify-center bg-[#19B6F9] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#009689] transition">
//           <Image src="" alt="search" width={20} height={20} className="mr-2" />
//           Check Availability
//         </button>
//       </div>
//       {/* Features Row */}
//       <div className="flex flex-wrap justify-center gap-8 mb-6">
//         <div className="flex items-center text-gray-400 text-sm">
//           <Image src="" alt="bolt" width={18} height={18} className="mr-2" />
//           Instant Results
//         </div>
//         <div className="flex items-center text-gray-400 text-sm">
//           <Image src="" alt="shield" width={18} height={18} className="mr-2" />
//           100% Accurate
//         </div>
//         <div className="flex items-center text-gray-400 text-sm">
//           <Image src="" alt="star" width={18} height={18} className="mr-2" />
//           Free to Use
//         </div>
//       </div>
//     </main>
//   )
// }

// export default LandingResult