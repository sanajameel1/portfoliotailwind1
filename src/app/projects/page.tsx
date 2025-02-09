import React from 'react'

import Image from 'next/image'

export default function projects() {
  return (
    <div>
<section className="text-blue-600 body-font">
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
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/htmlcssweb.jpeg"
          height={150}
          width={150}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
     
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">HTML, CSS Website </h1>
            <p className="leading-relaxed">This is a html,css website.</p>
            <a href="http://html-css-web-u6vj.vercel.app" className="bg-blue-500 text-white "> View Project</a>
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
            <a href="http://resume-builderby-noor.vercel.app" className="bg-blue-500 text-white"> View Project</a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/images/idcard.png"
          height={150}
          width={150}/>          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">GIAIC Student Id card</h1>
            <p className="leading-relaxed">This is my student id card .</p>
            <a href="http://giac-id-card-71a9.vercel.app" className="bg-blue-500 text-white"> View Card</a>
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

    </div>
  )
}
