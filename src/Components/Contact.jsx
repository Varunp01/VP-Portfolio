import { useState } from 'react'

function Contact() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black mt-[1vh] py-10 pb-14" id='Contact'>
        <div class="flex flex-col justify-center">
          <style>
            {`
          .glowing-text {
            text-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff, 0 0 10px #ff00d4, 0 0 20px #ff00d4, 0 0 30px #ff00d4;
            animation: pulse-glow 2s infinite alternate;
          }

          @keyframes pulse-glow {
            0% {
              text-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff, 0 0 10px #ff00d4, 0 0 20px #ff00d4, 0 0 30px #ff00d4;
            }
            100% {
              text-shadow: 0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 60px #00d4ff, 0 0 20px #ff00d4, 0 0 40px #ff00d4, 0 0 60px #ff00d4;
              // text-shadow: 0 0 0px #00d4ff, 0 0 0px #00d4ff, 0 0 0px #00d4ff, 0 0 0px #ff00d4, 0 0 0px #ff00d4, 0 0 0px #ff00d4;
            }
          }
        `}
          </style>
          <div class=" text-white text-center mb-6 font-mono text-4xl sm:text-5xl md:text-6xl  glowing-text">
            Contact Me
          </div>
          <div class=" py-3 flex gap-1 shadow-xl rounded-md justify-center">
            <div class="group relative px-4 cursor-pointer">
              <a href="https://www.linkedin.com/in/varun-pandey-109514274/">
                <div class="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500 text-white text-3xl">
                  <i class="fa-brands fa-linkedin"></i>
                </div>
                <span class="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  LinkedIn
                </span>
              </a>
            </div>
            <div class="group relative px-4 cursor-pointer">
              <a href="https://github.com/Varunp01">
                <div class="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500 text-white text-3xl">
                  <i class="fa-brands fa-github"></i>
                </div>
                <span class="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  GitHub
                </span>
              </a>
            </div>
            <div class="group relative px-4 cursor-pointer">
              <a href="mailto:varunp5324@gmail.com">
                <div class="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500 text-white text-3xl">
                  <i class="fa-solid fa-at"></i>
                </div>
                <span class="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  Mail
                </span>
              </a>
            </div>
            <div class="group relative px-4 cursor-pointer">
              <a href="https://free-lance-lp.vercel.app/">
                <div class="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500 text-white text-3xl">
                  <i class="fa-solid fa-user"></i>
                </div>
                <span class="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                  FreeLance
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
