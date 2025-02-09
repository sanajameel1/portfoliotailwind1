
import React from 'react';
import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="h-screen bg-blue-400 flex justify-center items-center px-4">
//       <div className="flex flex-col md:flex-row md:h-auto w-full md:w-10/12 bg-white rounded-lg shadow-lg">
//         {/* Text Section */}
//         <div className="flex flex-col flex-1 gap-4 justify-center p-6 text-center md:text-left">
//           <h1 className="font-bold text-3xl mt-4 sm:text-4xl md:text-5xl">Sana Jameel</h1>
//           <p className="font-normal text-sm sm:text-base md:text-lg">
//             Hi I m Sana Jameel a highly skilled web developer with extensive
//             expertise in creating dynamic and responsive web applications.
//             <br />
//             <br />
//             Currently I m part of an amazing training program at the Governor
//             House, which has helped me grow tremendously. This program is guided
//             by some of the most incredible mentors.
//             <br />
//             <br />
//             In addition to my web development skills I have strong command over
//             programming languages such as HTML CSS JavaScript TypeScript and
//             Next.js.
//           </p>
//         </div>




export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8 border border-gray-800">
        <h1 className="text-4xl font-bold text-center text-blue-700">About Me</h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          I am a dedicated IT student at Governor House passionate about web development and modern technologies. 
          My focus is on creating innovative user-friendly and responsive web applications.
        </p>

        <div className="mt-6 flex justify-center">
        <Image
            src="/images/sana.jpg"
            alt="Sana Jameel"
            width={150} // Default for small screens
            height={150}
            className="rounded-full sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64"
      />
</div>
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-600 italic">
            Innovation and technology drive the future, and I am here to shape it
          </p>
        </div>

        {/* <div className="mt-6 text-center">
          <a
            href
            className="px-6 py-2 text-white bg-green-700 rounded-full shadow hover:bg-green-800 transition"
          >
            View My Work
          </a> */}
      {/* </div> */}
      
        {/* Image Section */}
        <div className="flex flex-1 justify-center items-center p-6">
          
        </div>
      </div>
    </div>
  );
}
  
