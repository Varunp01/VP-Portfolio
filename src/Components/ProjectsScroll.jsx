import { useEffect, useRef } from 'react';
function ProjectsScroll() {
 
  const verticalRef = useRef(null);
   const horizontalRef = useRef(null);
 
   useEffect(() => {
     // Get the total vertical scrollable distance to trigger the effect
     const getScrollDistance = () => {
       if (verticalRef.current) {
         return verticalRef.current.scrollHeight - window.innerHeight;
       }
       return 0;
     };
 
     // The main scroll handler function
     const handleScroll = () => {
       // Get the current vertical scroll position
       const scrollTop = window.scrollY;
 
       // Get the top position of the vertical scroll section
       const verticalSectionTop = verticalRef.current.offsetTop;
 
       // Get the total distance to scroll within this section
       const scrollDistance = getScrollDistance();
 
       if (scrollDistance > 0) {
         // Calculate the scroll position relative to the start of the section
         // We use Math.max(0, ...) to ensure the value doesn't go below zero
         const scrollWithinSection = Math.max(0, scrollTop - verticalSectionTop);
 
         // Calculate the scroll progress from 0 to 1 within the section
         // We use Math.min(1, ...) to clamp the value at 1
         const scrollProgress = Math.min(1, scrollWithinSection / scrollDistance);
 
         if (horizontalRef.current) {
           // Calculate the horizontal translation distance
           const horizontalWidth = horizontalRef.current.scrollWidth;
           const translation = (horizontalWidth - window.innerWidth) * scrollProgress;
 
           // Skillsly the transform to the horizontal content
           horizontalRef.current.style.transform = `translateX(-${translation}px)`;
         }
       }
     };
 
     // Add the scroll event listener
     window.addEventListener('scroll', handleScroll);
 
     // Initial call to set the correct position on load
     handleScroll();
 
     // Clean up the event listener when the component unmounts
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
 
  return (
    <>
      <div className="bg-black py-5 ">
        <div className=" flex items-center justify-center p-4">
      <style>
        {`
        @keyframes glow {
          0%, 100% {
            stroke: #6366f1;
            stroke-width: 2px;
            text-shadow: 0 0 10px #6366f1, 0 0 20px #6366f1, 0 0 30px #6366f1;
          }
          50% {
            stroke: #e2e8f0;
            stroke-width: 1px;
            text-shadow: none;
          }
        }
        
        .glow-text {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 8rem;
          fill: transparent;
          line-height:2rem;
          text-anchor: middle;
          dominant-baseline: middle;
          animation: glow 3s infinite ease-in-out;
        }

        @media (max-width: 768px) {
          .glow-text {
            font-size: 6rem;
          }
        }
        `}
      </style>
      <svg className="w-full max-w-4xl" viewBox="0 0 800 200">
        <text className="glow-text" x="50%" y="50%">
          PROJECTS
        </text>
      </svg>
    </div>
    <div ref={verticalRef} className='h-[400vh] relative z-10'>
    <div className="sticky top-0 h-screen overflow-hidden flex items-center">
    <div ref={horizontalRef} className="flex flex-row w-fit px-8 md:px-16">
        
        <div className="my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-green-500 bg-clip-border text-gray-700 shadow-md">
          <img src="\HeroBannerIcons\snapchat.svg" className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Read More
            </button>
          </div>
        </div>
        <div className="my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-green-500 bg-clip-border text-gray-700 shadow-md">
          <img src="\HeroBannerIcons\snapchat.svg" className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Read More
            </button>
          </div>
        </div>
        <div className="my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-green-500 bg-clip-border text-gray-700 shadow-md">
          <img src="\HeroBannerIcons\snapchat.svg" className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Read More
            </button>
          </div>
        </div>
        <div className="my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-green-500 bg-clip-border text-gray-700 shadow-md">
          <img src="\HeroBannerIcons\snapchat.svg" className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Read More
            </button>
          </div>
        </div>
        <div className="my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-green-500 bg-clip-border text-gray-700 shadow-md">
          <img src="\HeroBannerIcons\snapchat.svg" className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Read More
            </button>
          </div>
        </div>
        <div className="my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-green-500 bg-clip-border text-gray-700 shadow-md">
          <img src="\HeroBannerIcons\snapchat.svg" className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Read More
            </button>
          </div>
        </div>
        <div className="my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-green-500 bg-clip-border text-gray-700 shadow-md">
          <img src="\HeroBannerIcons\snapchat.svg" className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Read More
            </button>
          </div>
        </div>
        <div className="my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-green-500 bg-clip-border text-gray-700 shadow-md">
          <img src="\HeroBannerIcons\snapchat.svg" className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Read More
            </button>
          </div>
        </div>
        <div className="my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-green-500 bg-clip-border text-gray-700 shadow-md">
          <img src="\HeroBannerIcons\snapchat.svg" className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Tailwind card
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Read More
            </button>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default ProjectsScroll
