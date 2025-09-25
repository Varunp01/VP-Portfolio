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
      <div className="bg-black h-[94vh] w-full relative z-0  overflow-hidden">

        {/* //text animation */}
        <div className="absolute w-full h-[300px] blur-2xl bg-[#000000c8]   top-[120px] md:top-[80px] z-19">&nbsp;</div>
        <div className="absolute w-full   flex flex-wrap justify-center items-center top-[120px] md:top-[80px] z-20 space-y-3">
          <h1 className="w-full h-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-center">
            Hi, I'm
            <span className=''>
              <div className="shadow-dance-container">
                <h1 className="shadow-dance-text">Varun Pandey</h1>
              </div>
            </span>
          </h1>
          <br />
          <h1
            className="
            relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-lime-400 font-mono text-center
            glitch-text
          "
            data-text={`${titles[currentTitleIndex]}`}
          >
            {titles[currentTitleIndex]}
          </h1>
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

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
          <div className="HeroImg">
            <img src="/Varun.png" alt="Placeholder Image" className=' md:h-[47vh] aspect-square cover'></img>
          </div>
        </div>

        <div className="relative top-full left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit1-slow " style={{ animationDelay: '0s' }} >
            <img src="\HeroBannerIcons\bag.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit1-slow " style={{ animationDelay: '-3s' }} >
            <img src="\HeroBannerIcons\code.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <style jsx>{`
        @keyframes orbit1 {
          from {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }
        .animate-orbit1-slow {
          animation: orbit1 6s linear infinite;
        }
      `}</style>
        </div>

        <div className="relative top-full left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit2-slow " style={{ animationDelay: '0s' }} >
            <img src="\HeroBannerIcons\bagDiscount.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit2-slow " style={{ animationDelay: '-2s' }} >
            <img src="\HeroBannerIcons\barCharts.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit2-slow " style={{ animationDelay: '-4s' }} >
            <img src="\HeroBannerIcons\card.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit2-slow " style={{ animationDelay: '-6s' }} >
            <img src="\HeroBannerIcons\css.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>

          <style jsx>{`
        @keyframes orbit2 {
          from {
            transform: rotate(0deg) translateX(200px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(200px) rotate(-360deg);
          }
        }
        .animate-orbit2-slow {
          animation: orbit2 8s linear infinite;
        }
      `}</style>
        </div>
        <div className="relative top-full left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit3-slow " style={{ animationDelay: '0s' }} >
            <img src="\HeroBannerIcons\instagram.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit3-slow " style={{ animationDelay: '-2s' }} >
            <img src="\HeroBannerIcons\facebook.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit3-slow " style={{ animationDelay: '-4s' }} >
            <img src="\HeroBannerIcons\graphLaptop.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit3-slow " style={{ animationDelay: '-6s' }} >
            <img src="\HeroBannerIcons\html.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit3-slow " style={{ animationDelay: '-8s' }} >
            <img src="\HeroBannerIcons\js.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit3-slow " style={{ animationDelay: '-10s' }} >
            <img src="\HeroBannerIcons\laptopCode.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>

          <style jsx>{`
        @keyframes orbit3 {
          from {
            transform: rotate(0deg) translateX(300px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(300px) rotate(-360deg);
          }
        }
        .animate-orbit3-slow {
          animation: orbit3 12s linear infinite;
        }
      `}</style>
        </div>
        <div className="relative top-full left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit4-slow " style={{ animationDelay: '0s' }} >
            <img src="\HeroBannerIcons\laptopDataGrowth.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit4-slow " style={{ animationDelay: '-2s' }} >
            <img src="\HeroBannerIcons\online-shop-mobile.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit4-slow " style={{ animationDelay: '-4s' }} >
            <img src="\HeroBannerIcons\shopify.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit4-slow " style={{ animationDelay: '-6s' }} >
            <img src="\HeroBannerIcons\shoppingCart.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit4-slow " style={{ animationDelay: '-8s' }} >
            <img src="\HeroBannerIcons\snapchat.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit4-slow " style={{ animationDelay: '-10s' }} >
            <img src="\HeroBannerIcons\socialMediaNetwork.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit4-slow " style={{ animationDelay: '-12s' }} >
            <img src="\HeroBannerIcons\softwareDeveloper.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <div className="absolute p-4 rounded-full bg-white/25 shadow-md shadow-gray-400 animate-orbit4-slow " style={{ animationDelay: '-14s' }} >
            <img src="\HeroBannerIcons\wordpress-icon.svg" alt="Placeholder Image" className='h-[50px] aspect-square cover drop-shadow-gray' />
          </div>
          <style jsx>{`
        @keyframes orbit4 {
          from {
            transform: rotate(0deg) translateX(400px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(400px) rotate(-360deg);
          }
        }
        .animate-orbit4-slow {
          animation: orbit4 16s linear infinite;
        }
      `}</style>
        </div>
      </div>
    </>
  )
}

export default HomeHeroTemplate
