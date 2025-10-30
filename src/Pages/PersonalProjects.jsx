import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function PersonalProjects() {
  const [isVisible, setIsVisible] = useState(false);
const PersonalDivRef = useRef(null);
const ProfessionalDivRef = useRef(null);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    ProfessionalDivRef.current.style.display = 'flex';
    PersonalDivRef.current.style.display = 'none';
  },[])
  const showProfessionalDiv=()=>{
    ProfessionalDivRef.current.style.display = 'flex';
    PersonalDivRef.current.style.display = 'none';
  }
  const showpersonalDiv=()=>{
    ProfessionalDivRef.current.style.display = 'none';
    PersonalDivRef.current.style.display = 'flex';
  }
  return (
    <>
      <div className="bg-black px-5 pb-5">&nbsp;
        <div className="mt-[80px] text-black border-2">
          <div className=" my-10 borderButton flex w-full">
            <style>
              {`
              .borderButton{
                button {
                  --bg: #e74c3c;
                  --text-color: #fff;
                  position: relative;
                  width: 150px;
                  border: none;
                  background: var(--bg);
                  color: var(--text-color);
                  padding: 1em;
                  font-weight: bold;
                  text-transform: uppercase;
                  transition: 0.2s;
                  border-radius: 5px;
                  opacity: 0.8;
                  letter-spacing: 1px;
                  box-shadow: #c0392b 0px 7px 2px, #000 0px 8px 5px;
                }

                button:hover {
                  opacity: 1;
                  background-color:white;
                  color:black;
                }

                button:active {
                  top: 4px;
                  box-shadow: #c0392b 0px 3px 2px,#000 0px 3px 5px;
                }
                }
              `}
            </style>
            <div className="professionalProject flex w-full justify-center"><button onClick={showProfessionalDiv}>Professional Projects</button></div>
            {/* <div className="personalProject flex w-1/2 justify-center"><button onClick={showpersonalDiv}>Personal Projects</button></div> */}
          </div>
          {/* professional */}
          <div ref={ProfessionalDivRef} className="flex flex-wrap justify-around px-5">
            <div className="my-5 h-auto mx-0.5 relative flex w-80 flex-col rounded-xl bg-[#ffffff15] hover:bg-[#ffffff00] border-2 border-[#ffffff27] hover:border-[#ffffff] text-gray-500 hover:text-white bg-clip-border  shadow-md transition-all duration-500">
              <img src="\Projects\SgtMake.png" className="border-2 border-white relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  SgtMake
                </h5>
                <p className="font-mono block  text-base  text-inherit antialiased">
                  SgtMake is a full-stack e-commerce website for hardware, featuring a product catalog and secure checkout, highlighting my end-to-end web development skills.
                </p>
                <div className="flex mt-4 space-x-1">
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>E-Commerce</span>
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>Mern-Stack</span>
                </div>
              </div>
              <div className="p-6 pt-0 space-x-2">
                {/* <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                <i className="fa-brands fa-github text-2xl"></i>
              </button> */}
                <a target="_blank" href="https://www.sgtmake.com/">
                  <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                    <i class="fa-solid fa-bars-staggered text-2xl"></i>
                  </button>
                </a>
              </div>
            </div>

            <div className="my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-[#ffffff15] hover:bg-[#ffffff00] border-2 border-[#ffffff27] hover:border-[#ffffff] text-gray-500 hover:text-white bg-clip-border  shadow-md transition-all duration-500">
              <img src="\Projects\InkSutra.png" className="border-2 border-white relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  InkSutra
                </h5>
                <p className="font-mono block  text-base  text-inherit antialiased">
                  Inksutra is an e-commerce store for temporary tattoos, built on the Shopify platform to showcase my skills in e-commerce development and platform customization.
                </p>
                <div className="flex mt-4 space-x-1">
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>E-Commerce</span>
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>Shopify</span>
                </div>
              </div>
              <div className="p-6 pt-0 space-x-2">
                {/* <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                <i className="fa-brands fa-github text-2xl"></i>
              </button> */}
                <a target="_blank" href="https://inksutra.com/">
                  <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                    <i class="fa-solid fa-bars-staggered text-2xl"></i>
                  </button>
                </a>
              </div>
            </div>

            <div className="my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-[#ffffff15] hover:bg-[#ffffff00] border-2 border-[#ffffff27] hover:border-[#ffffff] text-gray-500 hover:text-white bg-clip-border  shadow-md transition-all duration-500">
              <img src="\Projects\LLF.png" className="border-2 border-white relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Language and Learning Foundation
                </h5>
                <p className="font-mono block  text-base  text-inherit antialiased">
                  LLF is a clean, professional WordPress website for a non-profit organization, demonstrating my skills in web design, content management, and platform customization.
                </p>
                <div className="flex mt-4 space-x-1">
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>E-Commerce</span>
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>WordPress</span>
                </div>
              </div>
              <div className="p-6 pt-0 space-x-2">
                {/* <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                <i className="fa-brands fa-github text-2xl"></i>
              </button> */}
                <a target="_blank" href="https://languageandlearningfoundation.org/">
                  <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                    <i class="fa-solid fa-bars-staggered text-2xl"></i>
                  </button>
                </a>
              </div>
            </div>

            {/* {isVisible ?
            "Logged In"
            :
            "Logged Out"
          } */}
            <div className={`w-full mx-auto flex justify-center items-center my-10 text-white ${isVisible ? "hidden" : ""}`} onClick={handleClick}>
              <div className="group flex space-x-3 py-3 px-5 border-2 transition-all duration-750  border-white hover:border-gray-50 rounded-2xl cursor-pointer text-white hover:text-black hover:bg-white">
                <span className='font-bold'>See More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='group-hover:fill-black fill-white transition-all duration-750'><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" /><path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z" /></svg>
              </div>
            </div>

            {/* //See More */}
            <div className={`my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-[#ffffff15] hover:bg-[#ffffff00] border-2 border-[#ffffff27] hover:border-[#ffffff] text-gray-500 hover:text-white bg-clip-border  shadow-md transition-all duration-500 ${isVisible ? "" : "hidden"}`}>
              <img src="\Projects\Jenii.png" className="border-2 border-white relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Jenii Jewellery
                </h5>
                <p className="font-mono block  text-base  text-inherit antialiased">
                  Jenii.in is a sleek e-commerce website for a jewelry brand, highlighting my skills in full-stack web development.
                </p>
                <div className="flex mt-4 space-x-1">
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>E-Commerce</span>
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>MERN Stack</span>
                </div>
              </div>
              <div className="p-6 pt-0 space-x-2">
                {/* <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                <i className="fa-brands fa-github text-2xl"></i>
              </button> */}
                <a target="_blank" href="https://jenii.in/">
                  <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                    <i class="fa-solid fa-bars-staggered text-2xl"></i>
                  </button>
                </a>
              </div>
            </div>

            <div className={`my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-[#ffffff15] hover:bg-[#ffffff00] border-2 border-[#ffffff27] hover:border-[#ffffff] text-gray-500 hover:text-white bg-clip-border  shadow-md transition-all duration-500 ${isVisible ? "" : "hidden"}`}>
              <img src="\Projects\BrickOven.png" className="border-2 border-white relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  BrickOvenBistro
                </h5>
                <p className="font-mono block  text-base  text-inherit antialiased">
                  BrickOvenBistro is a modern, responsive landing page for a restaurant, built with React and Vite to demonstrate my front-end development skills.
                </p>
                <div className="flex mt-4 space-x-1">
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>Landing Page</span>
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>React</span>
                </div>
              </div>
              <div className="p-6 pt-0 space-x-2">
                {/* <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                <i className="fa-brands fa-github text-2xl"></i>
              </button> */}
                <a target="_blank" href="https://the-brick-oven-bistro.arevei.tech/">
                  <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                    <i class="fa-solid fa-bars-staggered text-2xl"></i>
                  </button>
                </a>
              </div>
            </div>

            <div className={`my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-[#ffffff15] hover:bg-[#ffffff00] border-2 border-[#ffffff27] hover:border-[#ffffff] text-gray-500 hover:text-white bg-clip-border  shadow-md transition-all duration-500 ${isVisible ? "" : "hidden"}`}>
              <img src="\Projects\GraceMissionInternational.png" className="border-2 border-white relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Grace Mission International
                </h5>
                <p className="font-mono block  text-base  text-inherit antialiased">
                  GraceMissionInternational is a responsive landing page for an NGO, built with React to showcase my front-end development and UI design skills.
                </p>
                <div className="flex mt-4 space-x-1">
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>Front-End</span>
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>React</span>
                </div>
              </div>
              <div className="p-6 pt-0 space-x-2">
                {/* <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                <i className="fa-brands fa-github text-2xl"></i>
              </button> */}
                <a target="_blank" href="https://www.gracemissioninternational.com/">
                  <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                    <i class="fa-solid fa-bars-staggered text-2xl"></i>
                  </button>
                </a>
              </div>
            </div>

          </div>

          {/* personal */}
          <div ref={PersonalDivRef} className="flex flex-wrap justify-around px-5">
            <div className="my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-[#ffffff15] hover:bg-[#ffffff00] border-2 border-[#ffffff27] hover:border-[#ffffff] text-gray-500 hover:text-white bg-clip-border  shadow-md transition-all duration-500">
              <img src="https://dummyimage.com/600x400/" className="border-2 border-white relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  InkSutra
                </h5>
                <p className="font-mono block  text-base  text-inherit antialiased">
                  Inksutra is an e-commerce store for temporary tattoos, built on the Shopify platform to showcase my skills in e-commerce development and platform customization.
                </p>
                <div className="flex mt-4 space-x-1">
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>E-Commerce</span>
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>Shopify</span>
                </div>
              </div>
              <div className="p-6 pt-0 space-x-2">
                {/* <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                <i className="fa-brands fa-github text-2xl"></i>
              </button> */}
                <a target="_blank" href="https://inksutra.com/">
                  <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                    <i class="fa-solid fa-bars-staggered text-2xl"></i>
                  </button>
                </a>
              </div>
            </div>
            <div className="my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-[#ffffff15] hover:bg-[#ffffff00] border-2 border-[#ffffff27] hover:border-[#ffffff] text-gray-500 hover:text-white bg-clip-border  shadow-md transition-all duration-500">
              <img src="https://dummyimage.com/600x400/s" className="border-2 border-white relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Language and Learning Foundation
                </h5>
                <p className="font-mono block  text-base  text-inherit antialiased">
                  LLF is a clean, professional WordPress website for a non-profit organization, demonstrating my skills in web design, content management, and platform customization.
                </p>
                <div className="flex mt-4 space-x-1">
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>E-Commerce</span>
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>WordPress</span>
                </div>
              </div>
              <div className="p-6 pt-0 space-x-2">
                {/* <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                <i className="fa-brands fa-github text-2xl"></i>
              </button> */}
                <a target="_blank" href="https://languageandlearningfoundation.org/">
                  <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                    <i class="fa-solid fa-bars-staggered text-2xl"></i>
                  </button>
                </a>
              </div>
            </div>

            {/* {isVisible ?
            "Logged In"
            :
            "Logged Out"
          } */}
            <div className={`w-full mx-auto flex justify-center items-center my-10 text-white ${isVisible ? "hidden" : ""}`} onClick={handleClick}>
              <div className="group flex space-x-3 py-3 px-5 border-2 transition-all duration-750  border-white hover:border-gray-50 rounded-2xl cursor-pointer text-white hover:text-black hover:bg-white">
                <span className='font-bold'>See More</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='group-hover:fill-black fill-white transition-all duration-750'><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" /><path d="M12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707-1.414-1.414L12 12.586z" /></svg>
              </div>
            </div>

            {/* //See More */}
            <div className={`my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-[#ffffff15] hover:bg-[#ffffff00] border-2 border-[#ffffff27] hover:border-[#ffffff] text-gray-500 hover:text-white bg-clip-border  shadow-md transition-all duration-500 ${isVisible ? "" : "hidden"}`}>
              <img src="\Projects\SgtMake.png" className="border-2 border-white relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  SgtMake
                </h5>
                <p className="font-mono block  text-base  text-inherit antialiased">
                  SgtMake is a full-stack e-commerce website for hardware, featuring a product catalog and secure checkout, highlighting my end-to-end web development skills.
                </p>
                <div className="flex mt-4 space-x-1">
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>E-Commerce</span>
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>WordPress</span>
                </div>
              </div>
              <div className="p-6 pt-0 space-x-2">
                {/* <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                <i className="fa-brands fa-github text-2xl"></i>
              </button> */}
                <a target="_blank" href="https://www.sgtmake.com/">
                  <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                    <i class="fa-solid fa-bars-staggered text-2xl"></i>
                  </button>
                </a>
              </div>
            </div>

            <div className={`my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-[#ffffff15] hover:bg-[#ffffff00] border-2 border-[#ffffff27] hover:border-[#ffffff] text-gray-500 hover:text-white bg-clip-border  shadow-md transition-all duration-500 ${isVisible ? "" : "hidden"}`}>
              <img src="\Projects\BrickOven.png" className="border-2 border-white relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  BrickOvenBistro
                </h5>
                <p className="font-mono block  text-base  text-inherit antialiased">
                  BrickOvenBistro is a modern, responsive landing page for a restaurant, built with React and Vite to demonstrate my front-end development skills.
                </p>
                <div className="flex mt-4 space-x-1">
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>Landing Page</span>
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>React</span>
                </div>
              </div>
              <div className="p-6 pt-0 space-x-2">
                {/* <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                <i className="fa-brands fa-github text-2xl"></i>
              </button> */}
                <a target="_blank" href="https://the-brick-oven-bistro.arevei.tech/">
                  <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                    <i class="fa-solid fa-bars-staggered text-2xl"></i>
                  </button>
                </a>
              </div>
            </div>

            <div className={`my-5 mx-0.5 relative flex w-80 flex-col rounded-xl bg-[#ffffff15] hover:bg-[#ffffff00] border-2 border-[#ffffff27] hover:border-[#ffffff] text-gray-500 hover:text-white bg-clip-border  shadow-md transition-all duration-500 ${isVisible ? "" : "hidden"}`}>
              <img src="\Projects\GraceMissionInternational.png" className="border-2 border-white relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></img>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Grace Mission International
                </h5>
                <p className="font-mono block  text-base  text-inherit antialiased">
                  GraceMissionInternational is a responsive landing page for an NGO, built with React to showcase my front-end development and UI design skills.
                </p>
                <div className="flex mt-4 space-x-1">
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>Front-End</span>
                  <span className='px-3 py-1 bg-[#3230C1] rounded-2xl text-sm text-white'>React</span>
                </div>
              </div>
              <div className="p-6 pt-0 space-x-2">
                {/* <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                <i className="fa-brands fa-github text-2xl"></i>
              </button> */}
                <a target="_blank" href="https://www.gracemissioninternational.com/">
                  <button data-ripple-light="true" type="button" className=" select-none rounded-full bg-blue-500 hover:bg-blue-700 py-1 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                    <i class="fa-solid fa-bars-staggered text-2xl"></i>
                  </button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalProjects
