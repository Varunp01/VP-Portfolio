import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
    <footer className="bg-black text-gray-400 font-sans pt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-5">
        
        {/* Call to Action Section */}
        <div className="text-center mb-10 pb-8 border-b-2 border-gray-500 ">
          <p className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
            Ready to collaborate? Let's build something great.
          </p>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-[#ffffff10] px-4 py-4 rounded-2xl">
          
          {/* Section 1: Brand & Bio */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-3">Varun Pandey</h3>
            <p className="text-sm">
              Creative Developer focused on building accessible, high-performance web applications.
            </p>
          </div>
          
          {/* Section 2: Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-2">Navigation</h4>
            <div className="space-y-2">
                  <HashLink to="/" className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm" >
                    <div>Home</div>
                  </HashLink>
                  <HashLink to="/#skills" className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm" >
                    <div>Skills</div>
                  </HashLink>
                  <HashLink to="/#Projects" className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm" >
                    <div>Project</div>
                  </HashLink>
                  <HashLink to="/#Experience" className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm" >
                    <div>Experience</div>
                  </HashLink>
                  <Link to="/terminal" className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm" >
                    <div>Terminal</div>
                  </Link>
            </div>
          </div>

          {/* Section 3: Connect & Social Icons */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-2">Connect</h4>
                  <span className='text-gray-400 text-sm font-semibold '>FULL-STACK DEVELOPER/ SHOPIFY DEVELOPER/ WORDPRESS DEVELOPER</span>
            <div className="flex space-x-6 mt-3">
              <a href="https://wa.me/7007501803">
                <span className="cursor-pointer text-gray-400 hover:text-indigo-500 transition-transform duration-300 transform hover:scale-125 rounded-full" >
                  7007501803
                </span>
                </a>
                <span>|</span>
                <a href="mailto:varunp5324@gmail.com">
                <span className="cursor-pointer text-gray-400 hover:text-indigo-500 transition-transform duration-300 transform hover:scale-125 rounded-full" >
                  varunp5324@gmail.com
                </span>
                </a>
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Line */}
        <div className="mt-7 pt-2 border-t-1 border-gray-500 text-center text-sm">
          <p>
            &copy; 2025 Varun Pandey
          </p>
        </div>
      </div>
      
    </footer>
    </>
  )
}

export default Footer