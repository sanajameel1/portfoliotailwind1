'use client'
import React from "react";
import Image from "next/image";

import Typewriter from 'typewriter-effect';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";



export default function Home() {
  return (
    <div className="bg-gradient-to-r  from-gray-800 to-gray-800 ">
      <header className="bg-gradient-to-r from-gray-600 to-gray-500 text-white body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
              src="/images/sj logo.jpeg"
              alt="Sana Logo"
              height={50}
              width={50}
              className="w-12 max-h-12 rounded-full transition-transform transform hover:scale-110 duration-300"
            />
            <span className="ml-3 text-2xl font-semibold tracking-wide">Sana Jameel</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center space-x-6">
          <a className="mr-5 text-white font-semibold hover:text-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-110" href='/'>Home</a>
      <a className="mr-5 text-white font-semibold hover:text-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-110" href='/about' >About us</a>
      <a className="mr-5 text-white font-semibold hover:text-indigo-300 transition-all duration-300 ease-in-out transform hovescale-110r:" href='/contact'>Contact us</a>
      <a className="mr-5 text-white font-semibold hover:text-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-110" href='  /privacypolicy'>Privacy policy</a>
      <a className='mr-5 text-white font-semibold hover:text-indigo-300 transition-all duration-300 ease-in-out transform hover:scale-110' href='/projects'> Projects</a>
             
          </nav>
          <button className="inline-flex items-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 transition-all duration-300 ease-in-out rounded-full text-base font-medium mt-4 md:mt-0">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2 transition-all duration-300 ease-in-out transform hover:rotate-90"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
   
      {/*hero section*/}
      <section className="text-gray-300  body-font hero-section">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col lg:flex-row">
    
    {/* Larger Rounded Image on the Left */}
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 flex justify-center lg:justify-end lg:pr-8">
      <Image 
        className="object-cover object-center rounded-full shadow-2xl w-80 h-80 lg:w-96 lg:h-96 transition-transform duration-500 hover:scale-105" 
        alt="hero" 
        src="/images/sana.jpg" 
        height={200}
        width={200}
      />
    </div>

    {/* Content on the Right */}
    <div className="lg:w-1/2 w-full lg:pl-10 flex flex-col items-start text-left text-white">
      <h1 className="title-font  text-blue-900 sm:text-4xl text-3xl mb-4  font-semibold font-serif bg-opacity-80 p-2 rounded-lg">
        Expertise in HTML, CSS, JavaScript, TypeScript
      </h1>

      {/* Typewriter Effect */}
      <h2 className="title-font font-extrabold bg-gray-900 text-white p-2 mb-4 rounded-lg
      shadow-lg">
        <Typewriter
          options={{
            strings: ['Web Developer', 'GIAIC Student Quarter 2'],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      <p className="mb-8 leading-relaxed font-bold bg-gray-900 bg-opacity-80 p-4 rounded-lg shadow-md">
        My name is sana, and my portfolio is a representation of all that I’ve learned and accomplished as an Information Technology student.
      </p>

      <div className="flex justify-start">

      <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg transitions-colors duration-300 shadow-lg">
          Subscribe Now
        </button>
      </div>
    </div>
  </div>

</section>
{/*blog section*/}
<section className="bg-gradient-to-r from-gray-800 to-gray-800 body-font bg-gray-200 blog-section">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">

      {/* Card 1 */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden bg-blue-600 shadow-lg">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/blog1.jpeg" alt="blog"
          height={150}
          width={150} />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Currency Converter</h1>
            <p className="leading-relaxed mb-3">This is a CLI-based currency converter.</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-600 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden bg-blue-600 shadow-lg">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/blog2.png" alt='card'
          height={150}
          width={150} />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Countdown Timer</h1>
            <p className="leading-relaxed mb-3">This is a CLI-based countdown timer.</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-600 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden bg-blue-600 shadow-lg">
          <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="/images/blog3.jpeg" alt="blog"
          height={150}
          width={150} />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Adventure Game</h1>
            <p className="leading-relaxed mb-3">This is a CLI-based adventure game.</p>
            <div className="flex items-center flex-wrap">
              <a className="text-indigo-600 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
     </div>
     </div>
     </div>
     </div>
     </div>
     </div>
     </section>
     {/* Gallery*/}

     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl  text-center title-font font-extrabold text-yellow-600 mb-4">Project Features & Commands</h1>
      <p className="text-base leading-relaxed text-white font-bold xl:w-2/4 lg:w-3/4 mx-auto">Explore the Essential features of each Typescript project and easily run them using the npx commands provided belo: .</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font   text-yellow-600 font-medium">sa4n2-simple-calculator</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-white rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font text-yellow-600 font-medium">sana532-number-guessing</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font  text-yellow-600 font-medium">s3a4a6-atm-machine</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font text-blue-600 font-medium">sa2na-to-do-list-</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font  text-blue-600 font-medium">sana-currency-converter</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font  text-blue-600 font-medium">sana_word-counter</span>
        </div>
      </div>
    </div>
     <a href='https://github.com/SanaJameel1'>
    <button className=" flex mx-auto py-3 px-5 rounded-lg items-center hover:bg-blue-400 focus:outline-none bg-gray-500">
       <Image className='w-10 h-18' src="/images/gallery.jpeg" alt="gallery"
       height={100}
       width={100}/>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-white mb-1"> Github</span>
          <span className="title-font text-black font-bold">Sana Jameel</span>
          </span>
          </button>
         </a>
  </div>
</section>
{/*Gallery*/}

<section className="text-gray-600 body-font">
  <div className="container px-5 py-4 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-600">My Typescript Projects </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed  text-white  text-base"> Develops typesript projects including a calculator,Number Guessing Game,Currency converter,Countdown Timer,Student Management system,Atm Machine.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/todoapp.png"
          height={150}
          width={150}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">ToDo App</h1>
            <p className="leading-relaxed">This is a task Management app.</p>
            <a href="http://todoapp-by-sana.vercel.app " className="bg-blue-500 text-white" > View Project</a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/html.jpeg"
          height={150}
          width={150}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
     
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">HTML, CSS Website </h1>
            <p className="leading-relaxed">This is a html,css website.</p>
            <a href="http://html-css-web-sana.vercel.app" className="bg-blue-500 text-white "> View Project</a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/resume.png"
          height={150}
          width={150}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Resume Builder</h1>
            <p className="leading-relaxed">This is Resume Builder.</p>
            <a href="http://resume-builderby-sana.vercel.app" className="bg-blue-500 text-white"> View Project</a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/idcard.png"
          height={150}
          width={150}/>         
           <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">GIAIC Student Id card</h1>
            <p className="leading-relaxed">This is my student id card .</p>
            <a href="http://giac-id-card-sana.vercel.app" className="bg-blue-500 text-white"> View Card</a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/countdown.jpeg"

          height={150}
          width={150}/>

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">CountDown Timer </h1>
            <p className="leading-relaxed">This is a CountDown Timer</p>
            <a href="http://timer-llyw.vercel.app" target="_blank" className="bg-blue-500  text-white"> View Project</a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/atm.jpeg"
          height={150}
          width={150}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Facebook clone</h1>
            <p className="leading-relaxed">This is a face clone page.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*Content*/}
<section className="text-gray-600 body-font">
 
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-200">Unlocking My Skills Set The Hidden Talent</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Highlights the range of skills and experties,emphasizing the impact and value brought to my projects .</p>
    </div>
  </section>
  {/*typewriter effect*/}
  


      {/* Developement Tools And Frame Works Icon*/ }
      <section>
        
   
        
       <div className='container px-2 py-8 mx-auto    flex-wrap flex justify-center items-center space-x-6 text-2xl'>
<h1 className='text-blue-600 font-bold'>
<Typewriter
  options={{
    strings: ['Programing', 'Languages'],
    autoStart: true,
    loop: true,
  }}
/>
</h1>

        {/* icons*/}
    <div className='flex-col item-center bg-black border-2 border-sky-400 p-4 transition-transform duration-100 ease-in-out transform
    hover:scale-110'>

    <FaHtml5  className='text-gray-700 text-6xl'/>
    <span className='mt-2 text-lg text-white'> HTML </span>
    </div>

    <div className='flex-col item-center bg-black border-2 border-sky-400 p-4 transition-transform duration-100 ease-in-out transform
    hover:scale-110'>

<FaCss3  className='text-orange-400 text-6xl'/>
    <span className='mt-2 text-lg text-white'> CSS </span>
    </div>

    <div className='flex-col item-center bg-black border-2 border-sky-400 p-4 transition-transform duration-100 ease-in-out transform
    hover:scale-110'>

<IoLogoJavascript   className='text-yellow-400 text-6xl'/>
    <span className='mt-2 text-lg text-white'> JAVASCRIPT </span>
    </div>


    <div className='flex-col item-center bg-black border-2 border-sky-400 p-4 transition-transform duration-100 ease-in-out transform
    hover:scale-110'>

<SiTypescript   className='text-blue-600 text-6xl'/>
    <span className='mt-2 text-lg text-white'> Typescript </span>
    </div>



    <div className='flex-col item-center bg-black border-2 border-sky-400 p-4 transition-transform duration-100 ease-in-out transform
    hover:scale-110'>


<FaPython    className='text-green-600 text-6xl'/>
    <span className='mt-2 text-lg text-white'> Python </span>
    </div>


    
      </div>
        </section>

           {/*Team*/}

       <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-600">Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-semibold text-gray-500">Here is My zoom Live class Team Members.</p>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/images/teamgirl.jpeg"
          height={50}
          width={50}/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Ruksana</h2>
            <p className="text-gray-500">UI Designer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/images/teamboy.jpeg"
          height={50}
          width={50}/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Umer</h2>
            <p className="text-gray-500">Developer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/images/teamgirl.jpeg"
          height={50}
          width={50}/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Sana</h2>
            <p className="text-gray-500">Developer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/images/teamboy.jpeg"
          height={50}
          width={50}/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Saqib</h2>
            <p className="text-gray-500">DevOps</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/images/teamgirl.jpeg"
          height={50}
          width={50}/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Khadija</h2>
            <p className="text-gray-500">Software Engineer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          < Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/images/teamgirl.jpeg"
          height={50}
          width={50}/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Mahnoor</h2>
            <p className="text-gray-500">DevOps</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/images/teamgirl.jpeg"
          height={50}
          width={50}/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Areeba</h2>
            <p className="text-gray-500">Software Engineer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/images/teamgirl.jpeg"
          width={50}
          height={50}/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Sara</h2>
            <p className="text-gray-500">DevOps</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/images/teamgirl.jpeg"
          height={50}
          width={50}/>
          <div className="flex-grow">
            <h2 className="text-yellow-600 title-font font-medium">Fatima</h2>
            <p className="text-gray-500">DevOps</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*contact*/}
<section className="text-gray-300 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
  <iframe width="100%" height="100%"   title="map"  src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"/>
    </div>
  <div className="container px-5 py-12 mx-auto flex bg-yellow-600">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">please this form if you have any queries or complains or if you have any message for us</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      <p className="text-xs text-gray-500 mt-3">Read our Privacy policy for any issues .</p>
    </div>
  </div>
  
</section>

{/*footer*/}
<footer className="text-white  from-gray-600 to-gray-500 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image
       src="/images/sj logo.jpeg"
       alt='NF logo'
       height={150}
       width={150}
       className='w-10 max-h-10 rounded-full'/>
       
      <span className="ml-3 text-white text-xl">Sana Jameel</span>
    </a>
    <p className=" text-white text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"> 2024 Sana Jameel
      <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank"></a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-white">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-white">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-white">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-white">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
        



</div>
  )
}
