import { useState } from 'react'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [message, setMessage] = useState("");
  const [dataSend, setDataSend] = useState(false);

  let onSubmitButton = async (e) => {
    e.preventDefault();
    console.log(name, "+", email, "+", phno, "+", message);
    try {
      fetch('https://sheetdb.io/api/v1/bhp9v14flzp7l?sheet=Portfolio', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [
            {
              'website': `Portfolio`,
              'name': `${name}`,
              'email': `${email}`,
              'Phone': `${phno}`,
              'message': `${message}`
            }
          ]
        })
      }).then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDataSend(true);
          // document.body.scrollTop = document.documentElement.scrollTop = 0;
          setTimeout(() => {
            setDataSend(false);
          }, 3000);
          setName("");
          setEmail("");
          setPhno("");
          setMessage("");
        });

    } catch (error) {
      alert(`try again because of ${error}`);
      console.error('Error adding data:', error);
    }
  }

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
          <div class=" text-white text-center  font-mono text-4xl sm:text-5xl md:text-6xl  glowing-text">
            Contact Me
          </div>
          {/* form */}
          <>
            <div className="w-full mx-auto mt-5">
              {(!dataSend)
                ? <div className="rounded-2xl shadow-xl p-8 md:p-10 text-black">
                  <hr className='bg-white text-white max-w-2xl mx-auto' />
                  <form
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
                    onSubmit={onSubmitButton}
                    role="form"
                  >
                    {/* Full Name */}
                    <div>
                      <label htmlFor="form-name" className="block text-lg font-semibold text-gray-100 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          id="form-name"
                          type="text"
                          name="form-name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full px-4 py-2 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 placeholder-gray-400 bg-white"
                          required
                        />
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="form-email" className="block text-lg font-semibold text-gray-100 mb-2">
                        Your Email
                      </label>
                      <div className="relative">
                        <input
                          id="form-email"
                          type="email"
                          name="form-email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="userid@gmail.com"
                          pattern="[^ @]*@[^ @]*"
                          className="w-full px-4 py-2 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 placeholder-gray-400 bg-white"
                          required
                        />
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="form-phone" className="block text-lg font-semibold text-gray-100 mb-2">
                        Your Phone Number
                      </label>
                      <div className="relative">
                        <input
                          id="form-phone"
                          type="tel"
                          name="form-phone"
                          value={phno}
                          onChange={(e) => setPhno(e.target.value)}
                          placeholder="xxx xxx xxxx"
                          className="w-full px-4 py-2 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 placeholder-gray-400 bg-white"
                          required
                        />
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="form-message" className="block text-lg font-semibold text-gray-100 mb-2">
                        Your Message
                      </label>
                      <div className="relative">
                        <textarea
                          id="form-message"
                          name="form-message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Your Message"
                          rows={1}
                          className="w-full px-4 py-2 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200 placeholder-gray-400 resize-none bg-white"
                          required
                        />
                        <div className="absolute top-4 right-4 pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button (Full Width Below All Fields) */}
                    <div className="md:col-span-2 pt-6">
                      <button type="submit" className="flex w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 justify-center items-center" >
                        Send&nbsp;<i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>

                : <>
                  <div class="flex flex-row gap-2 justify-center">
                    <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                    <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                    <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                  </div>
                  {/* submit notifictaion bar */}
                  <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
                      {/* Close Button */}
                      <button
                        type="button"
                        onClick={() => setDataSend(false)}
                        className="absolute top-4 right-6 text-green-600 hover:text-green-800 hover:bg-green-100 rounded-full p-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
                        aria-label="Close"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>

                      {/* Success Icon */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>

                        {/* Message Content */}
                        <div className="flex-1 pt-0.5">
                          <h3 className="text-lg font-semibold text-green-800 mb-1">Message Received!</h3>
                          <p className="text-green-700 text-sm leading-relaxed">
                            Your message has been received. I will be in touch shortly.
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-4 w-full bg-green-200 rounded-full h-1">
                        <div className="bg-green-500 h-1 rounded-full animate-pulse" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                  </div>
                </>
              }
            </div>

          </>
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
