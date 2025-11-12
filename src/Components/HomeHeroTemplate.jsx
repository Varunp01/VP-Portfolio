import React, { useState, useEffect, useRef } from 'react';

function HomeHeroTemplate() {
  const [count, setCount] = useState(0)
  const titles = ["a Web Developer", "a MERN Stack Developer", "a WordPress Expert", "a Shopify Partner"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
        <div className="bg-black w-full relative z-0  overflow-hidden">
          {/* //text animation */}
          <div className="w-full   flex flex-wrap justify-center items-center mt-[150px] md:mt-[120px] z-20 space-y-3 px-10">
            <h1 className="w-full h-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-center sm:text-left">
              Hi, I'm
              <span className=''>
                <div className="shadow-dance-container">
                  <h1 className="shadow-dance-text">Varun Pandey</h1>
                </div>
              </span>
            </h1>
            <br />
            <div className="text-center sm:text-left my-7">
              <h1 className=" relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-lime-400 font-mono glitch-text "
                data-text={`${titles[currentTitleIndex]}`} >
                {titles[currentTitleIndex]}
              </h1>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 mt-3">
              <div className="w-full text-gray-500 font-semibold text-center sm:text-left text-sm sm:text-base md:text-lg lg:text-xl">
                <h1>
                  Over a year of experience transforming concepts into user-centric web applications. Specializing in <span className='text-white'>Shopify</span>, <span className='text-white'>WordPress</span>, and the <span className='text-white'>MERN stack</span> to deliver scalable and dynamic solutions.
                </h1>
              </div>
              <div className=" flex justify-center items-center my-5">
                <div className="btn cursor-pointer px-4 py-2 bg-[#2a2a2a] rounded-xl text-xl uppercase font-bold text-lime-400 tracking-wider font-mono hover:bg-lime-400 hover:text-black transition-all duration-300">
                  Download Resume
                </div>
              </div>
            </div>
          </div>
          {/* Custom CSS for the glitch effect */}
          <style>
            {`
          .shadow-dance-text {
          color: #fff;
          font-size: 3rem;
          text-shadow: 5px 5px 0 #ff005e, 10px 10px 0 #00d4ff;
          animation: shadow-dance 2s infinite;
        }
        @media (min-width: 768px) {
          .shadow-dance-text {
            font-size: 5rem;
          }
        }
        @keyframes shadow-dance {
          0%, 100% {
            text-shadow: 5px 5px 0 #ff005e, 10px 10px 0 #00d4ff;
          }
          50% {
            text-shadow: 0px 0px 0 #00d4ff, 0px 0px 0 #ff005e;
          }
        }
          .glitch-text::before {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            animation: glitch 2s infinite;
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            transform: translate(-2px, -2px);
            color: #0f0;
            text-shadow: 0 0 5px #0f0, 0 0 15px #0f0;
          }

          @keyframes glitch {
            0%, 100% {
              clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
              transform: translate(0);
            }
            33% {
              clip-path: polygon(0 0, 100% 0, 100% 15%, 0 15%);
              transform: translate(-5px, -5px);
            }
            66% {
              clip-path: polygon(0 85%, 100% 85%, 100% 100%, 0 100%);
              transform: translate(5px, 5px);
            }
          }
        `}
          </style>


        </div>
        <div className="bg-black pt-28">
        <style>
          {`
          .radial_gradient{
          background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(135, 135, 135, 1) 100%);
          }
          `}
        </style>
        <div className="grid grid-cols-4 grid-rows-1 gap-4 px-4">
          <div className="">
            <div className="flex justify-center items-center">
              <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit1-slow " style={{ animationDelay: '-3s' }} >
                <img src="/HeroBannerIcons/code.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit1-slow " style={{ animationDelay: '-3s' }} >
                <img src="/HeroBannerIcons/shopify.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit1-slow " style={{ animationDelay: '-3s' }} >
                <img src="/HeroBannerIcons/softwareDeveloper.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit1-slow " style={{ animationDelay: '-3s' }} >
                <img src="/HeroBannerIcons/wordpress-icon.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeHeroTemplate
