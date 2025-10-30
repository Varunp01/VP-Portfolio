import { useState } from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black px-5 pb-5">&nbsp;
        <div className="mt-[100px]  text-white">
          <style>
            {`
        @keyframes glow {
          0%, 100% {
            fill: white;
          }
          50% {
            fill: white;
            opacity: 0.5;
          }
        }
        
        .glow-text {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 6rem;
          fill: transparent;
          text-anchor: middle;
          dominant-baseline: middle;
          animation: glow 1s infinite ease-in-out;
        }

        @media (max-width: 768px) {
          .glow-text {
            font-size: 10rem;
          }
        }
        `}
          </style>
          <svg className="w-full " viewBox="0 0 1000 200">
            <text className="glow-text" x="50%" y="50%">
              404
            </text>
          </svg>
        </div>
        <h2 className='text-gray-400 text-2xl md:text-4xl text-center font-bold mb-3'>
          <i class="fa-solid fa-circle-xmark"></i>&nbsp;Page Not Found
        </h2>
        <h2 className='text-white text-xl text-center font-mono'>
          Looks like you've ventured into uncharted territory. The page you requested could not be found.
        </h2>
        <div className="pt-6 flex justify-center items-center">
          <Link to="/">
          <button type="submit" className="flex cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 justify-center items-center" >
            Home&nbsp;<i class="fa-solid fa-house-user"></i>
          </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound
