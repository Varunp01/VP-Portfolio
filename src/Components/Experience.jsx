import { useState } from 'react'

function Experience() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-black py-5" id='Experience'>
        <div className="flex items-center justify-center px-5 pt-5 uppercase">
          <style>
            {`
          .typing-animation::after {
            content: '';
            width: 2px;
            height: 1.2em;
            background: #fff;
            animation: blink-caret 0.75s step-end infinite;
            display: inline-block;
            vertical-align: middle;
            margin-left: 2px;
          }

          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
          
          @keyframes blink-caret {
            from, to { opacity: 0; }
            50% { opacity: 1; }
          }
        `}
          </style>
          <h1 className="typing-animation overflow-hidden whitespace-nowrap text-white font-mono text-4xl sm:text-5xl md:text-[8rem] border-white animate-typing">
            Experience
          </h1>
        </div>

        <div className="w-full p-8 md:p-12  shadow-2xl space-y-8">

          {/* Timeline Item 1 */}
          <div className="relative flex items-center justify-between md:justify-around w-full ">
            <div className="absolute md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 z-10"></div>
            <div className="absolute md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-600 z-0"></div>
            <div className="hidden md:block w-1/2"></div>
            <div className="flex flex-col items-start md:items-start text-left md:text-left md:w-1/2 p-4 bg-[#171717] rounded-xl">
              {/* <div className="flex flex-col items-end md:items-start text-left md:text-left md:w-1/2 p-4"> */}
              <h3 className="text-xl font-semibold text-white">AREVEI</h3>
              <span className="text-base text-gray-300 italic">Web Developer Intern</span>
              <span className="text-sm text-gray-400">2024 August-November</span>
              <div className=" mt-2 text-sm text-gray-300 pl-7">
                <ul className=' !list-disc !block !static items-end md:items-start text-left md:text-left'>
                  <li>
                    Developed full-stack websites for various startups, focusing on creating dynamic and user-friendly interfaces.
                  </li>
                  <li>
                    Contributed to the development of a full-stack e-commerce website, integrating essential features such as an admin panel, secure payment gateways, and a functional shopping cart.
                  </li>
                  <li>
                    Ensured client satisfaction by delivering a visually appealing and highly responsive website.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative flex items-center justify-between md:justify-around w-full">
            <div className="flex flex-col items-start md:items-end text-left md:text-right md:w-1/2 p-4 bg-[#171717] rounded-xl">
              {/* <div className="flex flex-col items-end md:items-start text-left md:text-left md:w-1/2 p-4"> */}
              <h3 className="text-xl font-semibold text-white">AREVEI</h3>
              <span className="text-base text-gray-300 italic">Web Developer & Project Manager</span>
              <span className="text-sm text-gray-400">2024 December-Present</span>
              <div className=" mt-2 text-sm text-gray-300 pl-7">
                <ul className=' !list-disc !block !static items-end md:items-start text-left md:text-left'>
                  <li>
                    Headed the complete web development lifecycle for over 10 projects, from initial design and development to deployment and ongoing maintenance.
                  </li>
                  <li>
                    Managed project timelines, budgets, and client communication, ensuring all deliverables were completed on schedule and to high-quality standards.
                  </li>
                  <li>
                    Developed a diverse portfolio of custom websites using a range of modern technologies to meet specific business needs, including e-commerce platforms, non-profit sites, and hospitality portals.
                  </li>
                  <li>
                    Collaborated with design and content teams to translate client requirements into functional, responsive, and visually appealing web solutions.
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 z-10"></div>
            <div className="absolute md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-600 z-0"></div>
            <div className="hidden md:block w-1/2"></div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Experience
