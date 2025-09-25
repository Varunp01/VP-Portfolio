import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

function Terminal() {
  const [content, setContent] = useState('');
  const [output, setOutput] = useState();
  const containerDivRef = useRef(null);
  const editableDivRef = useRef(null);
  const inputDivRef = useRef(null);
  const outputDivRef = useRef(null);

  useEffect(() => {
    if (containerDivRef.current) {
      containerDivRef.current.scrollTop = containerDivRef.current.scrollHeight;
    }
  }, [output]);

  const handleContentChange = (event) => {
    const newContent = event.currentTarget.textContent;
    setContent(newContent);
  }
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key == 'l') {
      event.preventDefault();
      setOutput();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const submittedContent = content.trim().toUpperCase();
      // alert(submittedContent);
      if (submittedContent) {
        if (submittedContent == "HELP") {
          const midoutput = `
              <br />
              C:&bsol;Users&bsol;Operator&bsol;Varun_Details&gt${submittedContent}
              <br />
              C:&bsol;Users&bsol;Operator&bsol;Varun_Details&gt
              Commands and their functions:
              <br />
              <br />
              <b>help</b> : To know about all commands
              <br />
              <b>skills</b> : To know about the skills
              <br />
              <b>Projects</b> : To know about the projects
              <br />
              <b>exp</b> : To know about the experience
              <br />
              <b>contact</b> : To know about contact details
              <br />
          `;
          setOutput(prevOutput => prevOutput ? prevOutput + midoutput : midoutput);
          outputDivRef.current.style.display = 'inline';
        } else if (submittedContent == "SKILLS") {
          const midoutput = `
              <br />
              C:&bsol;Users&bsol;Operator&bsol;Varun_Details&gt${submittedContent}
              <br />
              C:&bsol;Users&bsol;Operator&bsol;Varun_Details&gt
              <br />
              <b>Languages</b> : C++, HTML, CSS, JavaScript, SQL
              <br />
              <b>Frameworks/Libraries</b> : Word-Press, Shopify, ReactJS, NodeJS, ExpressJS, MongoDB, TailwindCSS
              <br />
              <b>Tools</b> : Git, Github, VS-Code
              <br />
              <b>Coursework</b> : Data Structures & Algorithms, OOPS, DBMS
          `;
          setOutput(prevOutput => prevOutput ? prevOutput + midoutput : midoutput);
          outputDivRef.current.style.display = 'inline';

        } else if (submittedContent == "PROJECTS") {
          const midoutput = `
              <br />
              C:&bsol;Users&bsol;Operator&bsol;Varun_Details&gt${submittedContent}
              <br />
              C:&bsol;Users&bsol;Operator&bsol;Varun_Details&gt
              <br />
              <b>E-commerce & Marketing Platforms</b> : jenii.in, sgtmake.com, marketing.arevei.tech
              <br />
              <b>Non-Profit & Foundation Websites</b> : languageandlearningfoundation.org, llf-usa.org
              <br />
              <b>Hospitality & Dining Portals</b> : the-brick-oven-bistro.arevei.tech, savoria.arevei.tech, lenclume.arevei.tech, the-glenturret-lalique.arevei.tech
          `;
          setOutput(prevOutput => prevOutput ? prevOutput + midoutput : midoutput);
          outputDivRef.current.style.display = 'inline';

        } else if (submittedContent == "EXP") {
          const midoutput = `
              <br />
              C:&bsol;Users&bsol;Operator&bsol;Varun_Details&gt${submittedContent}
              <br />
              C:&bsol;Users&bsol;Operator&bsol;Varun_Details&gt
              <br />
              <b>2024 Aug - 2024 Nov</b> : Arevei, Web Developer Internship
              <br />
              <b>2024 Dec - 2025 Present</b> : Arevei, Web Developer & Project Manager
          `;
          setOutput(prevOutput => prevOutput ? prevOutput + midoutput : midoutput);
          outputDivRef.current.style.display = 'inline';

        } else if (submittedContent == "CONTACT") {
          const midoutput = `
              <br />
              C:&bsol;Users&bsol;Operator&bsol;Varun_Details&gt${submittedContent}
              <br />
              C:&bsol;Users&bsol;Operator&bsol;Varun_Details&gt
              <br />
              <b>Name</b> : Varun Pandey
              <br />
              <b>WhatsApp</b> : 7007501803
              <br />
              <b>E-Mail</b> : varunp5324@gmail.com
              <br />
              <b>GitHub</b> : github.com/Varunp01
              <br />
              <b>Linkedin</b> : varun-pandey-109514274
              <br />
              <b>FreeLance</b> : free-lance-lp.vercel.app
          `;
          setOutput(prevOutput => prevOutput ? prevOutput + midoutput : midoutput);
          outputDivRef.current.style.display = 'inline';

        } else if (submittedContent == "HELP") {

        }
      } else {
        const midoutput = `
              <br />
              C:&bsol;Users&bsol;Operator&bsol;Varun_Details&gt${submittedContent}
              For more information on your commands, type HELP
          `;
        setOutput(prevOutput => prevOutput ? prevOutput + midoutput : midoutput);
        outputDivRef.current.style.display = 'inline';

      }

      if (editableDivRef.current) {
        editableDivRef.current.textContent = '';
      }
      setContent('');
    }
  }

  const handleCursorClick = () => {
    editableDivRef.current.focus();
  };

  useEffect(() => {
    outputDivRef.current.style.display = 'none';
    if (editableDivRef.current) {
      editableDivRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className="bg-black px-5 h-[100vh] pb-5">&nbsp;
        <div className="mt-[60px] bg-gray-800 text-black border-2 border-[#D1D4D3] border-t-0">
          <div className=" bg-[#D1D4D3] flex justify-between">
            <div className="leftIcon py-1 px-2 flex ">
              <div className=" text-white bg-black border-1 border-t-2 border-gray-600 border-t-white text-[10px] px-1">&gt;_</div>
              <div className="text-[13px] px-2">C:\Windows\System32\cmd.exe</div>
            </div>
            <div className="rightIcon flex m-0">
              <div className="px-2 h-full text-black  hover:bg-[#bdbdbd] bg-[#D1D4D3] flex justify-center items-center cursor-pointer"><div className=" w-[10px] h-[15px] border-b-2 border-black">&nbsp;</div></div>
              <div className="px-2 h-full text-black  hover:bg-[#bdbdbd] bg-[#D1D4D3] flex justify-center items-center cursor-pointer"><div className=" w-[10px] h-[10px] border-1 border-black aspect-square">&nbsp;</div></div>
              <Link to="/" className="px-3 h-full text-black hover:text-white hover:bg-red-600 bg-[#D1D4D3] flex justify-center items-center cursor-pointer">X</Link>
            </div>
          </div>
          <div ref={containerDivRef} className="font-mono text-gray-200 bg-gray-800 p-4  overflow-x-auto overflow-y-scroll h-[70vh] pb-7">
            Varun Windows [Version 12.3.45678.91011]
            <br />
            (c) Microsoft Corporation. All rights reserved.
            <br />
            <br />
            C:\Users\Operator&gt; mkdir Varun_Details
            <br />
            Directory "Varun_Details" created successfully.
            <br />
            <br />
            C:\Users\Operator&gt; cd Varun_Details
            <br />
            C:\Users\Operator\Varun_Details&gt;
            <span className='help'>
              For more information on your commands, type HELP
            </span>
            <span ref={outputDivRef} className='OutputDiv' dangerouslySetInnerHTML={{ __html: output }}>
            </span>
            <span ref={inputDivRef} className="InputDiv">
              <br />
              C:\Users\Operator\Varun_Details&gt;
              <span ref={editableDivRef} className="Input focus:outline-none focus:ring-0 " contentEditable="true"
                onInput={handleContentChange}
                onKeyDown={handleKeyDown}
                style={{ caretColor: 'transparent' }}
              >
              </span>
              <span className='cursor' onClick={handleCursorClick}>
                <style>
                  {`
              @keyframes blinkAnimation {
                0% {
                    opacity: 1;
                }
                50% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
              }
              .blink{
                animation: blinkAnimation 1s infinite;
              }
              `}
                </style>
                <span className=" blink w-[20px] border-b-2 border-white">&nbsp;</span>
              </span>
            </span>


          </div>
        </div>
      </div>
    </>
  )
}

export default Terminal
