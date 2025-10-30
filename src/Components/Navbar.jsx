import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [seeDownNavbar, setSeeDownNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSeeDownNavbar(true);
      } else {
        setSeeDownNavbar(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // SVG for the menu (hamburger) icon
  const MenuIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="6" x2="20" y2="6"></line>
      <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
  );

  // SVG for the close icon
  const XIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  return (
    <>
      {!seeDownNavbar ?
        <>
          <nav className="absolute w-full px-3 mt-2 z-1" id='Navbar'>
            <div className="border-1 border-gray-50 rounded-2xl bg-[#ffffff9c] hover:bg-[#ffffffa9] font-sans container mx-auto px-4 sm:px-6 lg:px-8 shadow-lg">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link to="/" className="text-xl font-bold text-gray-800 hover:text-white tracking-wide transition-all duration-300 ease-in-out">Varun Pandey</Link>
                  </div>
                </div>
                <div className="flex items-center">
                  {/* Desktop Navigation Links */}
                  <Link to="/terminal" className=" text-white bg-black border-1 hover:border-t-4 border-gray-600 hover:border-white transition duration-300 ease-in-out px-3 py-2 rounded-md font-medium">&gt;_</Link>
                  <div className="hidden md:flex space-x-8">
                    <HashLink to="/" className="text-black hover:text-white transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium">Home</HashLink>
                    <HashLink to="/#skills" className="text-black hover:text-white transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium">Skills</HashLink>
                    <HashLink to="/#Projects" className="text-black hover:text-white transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium">Projects</HashLink>
                    <HashLink to="/#Experience" className="text-black hover:text-white transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium">Experience</HashLink>
                    <HashLink to="/#Contact" className=" text-white   transition-all duration-300 ease-in-out rounded-md font-medium !cursor-pointer">
                      <button
                        class="bg-[#ffffff9c] hover:bg-[#ffffffa9] border-2 border-black text-center w-[150px] rounded-2xl h-full relative text-black text-xl font-semibold group cursor-pointer"
                        type="button"
                      >
                        <div
                          class="bg-black rounded-xl h-[80%] w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[140px] z-10 duration-500"
                        >
                          <i class="fa-solid fa-address-card text-white"></i>
                        </div>
                        <p class="translate-x-2">Contact</p>
                      </button>
                    </HashLink>
                  </div>
                </div>
                <div className="md:hidden flex items-center">
                  {/* Mobile menu button */}
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300 ease-in-out"
                    aria-expanded={isOpen ? "true" : "false"}
                  >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Panel */}

            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden  bg-gray-100 rounded-2xl`} id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <HashLink to="/" className="block text-gray-800 hover:bg-gray-500 hover:text-black transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium" onClick={() => setIsOpen(!isOpen)}>Home</HashLink>
                <HashLink to="/#skills" className="block text-gray-800 hover:bg-gray-500 hover:text-black transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium" onClick={() => setIsOpen(!isOpen)}>Skills</HashLink>
                <HashLink to="/#Projects" className="block text-gray-800 hover:bg-gray-500 hover:text-black transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium" onClick={() => setIsOpen(!isOpen)}>Projects</HashLink>
                <HashLink to="/#Experience" className="block text-gray-800 hover:bg-gray-500 hover:text-black transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium" onClick={() => setIsOpen(!isOpen)}>Experience</HashLink>
                <HashLink to="/#Contact" className=" text-white flex justify-center  transition-all duration-300 ease-in-out rounded-md font-medium !cursor-pointer">
                  <button
                    class="bg-[#ffffff9c] hover:bg-[#ffffffa9] border-2 border-black text-center w-[150px] rounded-2xl h-full relative text-black text-xl font-semibold group cursor-pointer"
                    type="button" onClick={() => setIsOpen(!isOpen)}
                  >
                    <div
                      class="bg-black rounded-xl h-[80%] w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[140px] z-10 duration-500"
                    >
                      <i class="fa-solid fa-address-card text-white"></i>
                    </div>
                    <p class="translate-x-2">Contact</p>
                  </button>
                </HashLink>
              </div>
            </div>
          </nav>
        </>
        :
        <>
          <nav className={`fixed z-50 bottom-[50px] border-2 border-white left-1/2 bg-[#131313] -translate-x-1/2 ${seeDownNavbar ? 'opacity-100 animate-fromUp' : 'opacity-0'} rounded-full px-4`}>
            <div className="ScrollNavbar">
              <div className="button-container flex space-x-4 px-4">
                <HashLink to="/#Home" className="group relative">
                  <button className="button cursor-pointer relative w-12 h-12 flex items-center justify-center  bg-[#131313] text-white transition-all duration-300  ">
                    <div className="absolute transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                      <i class="fa-solid fa-house text-[24px]"></i>
                    </div>
                    <span className="tooltip absolute opacity-0 transition-opacity duration-300 ease-in-out font-semibold text-sm group-hover:opacity-100">
                      Home
                    </span>
                  </button>
                </HashLink>

                <HashLink to="/#Experience" className="group relative">
                  <button className="button cursor-pointer relative w-12 h-12 flex items-center justify-center  bg-[#131313] text-white transition-all duration-300  ">
                    <div className="absolute transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                      <i class="fa-solid fa-briefcase text-[24px]"></i>
                    </div>
                    <span className="tooltip absolute opacity-0 transition-opacity duration-300 ease-in-out font-semibold text-sm group-hover:opacity-100">
                      Experience
                    </span>
                  </button>
                </HashLink>

                <HashLink to="/#Projects" className="group relative">
                  <button className="button cursor-pointer relative w-12 h-12 flex items-center justify-center  bg-[#131313] text-white transition-all duration-300  ">
                    <div className="absolute transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                      <i class="fa-solid fa-globe text-[24px]"></i>
                    </div>
                    <span className="tooltip absolute opacity-0 transition-opacity duration-300 ease-in-out font-semibold text-sm group-hover:opacity-100">
                      Projects
                    </span>
                  </button>
                </HashLink>

                <HashLink to="/#Contact" className="group relative">
                  <button className="button cursor-pointer relative w-12 h-12 flex items-center justify-center  bg-[#131313] text-white transition-all duration-300  ">
                    <div className="absolute transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                      <i class="fa-solid fa-phone text-[24px]"></i>
                    </div>
                    <span className="tooltip absolute opacity-0 transition-opacity duration-300 ease-in-out font-semibold text-sm group-hover:opacity-100">
                      Contact
                    </span>
                  </button>
                </HashLink>
              </div>
            </div>
          </nav>
        </>
      }
    </>
  );
};

export default Navbar;
