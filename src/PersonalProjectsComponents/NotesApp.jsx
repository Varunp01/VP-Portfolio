import { useState, useEffect, useRef } from 'react'

function NotesApp() {

  const [notes, setNotes] = useState([]);
  const inputRef = useRef();

  const makeItDone = (id) => {
    setNotes(prevNotes =>
      prevNotes.map((item, index) => {
        if (index === id) {
          const prevDone = item.done;
          return {
            ...item,
            done: !prevDone,
          };
        }
        return item;
      })
    );
  }

  const deleteIt = (id) => {
    setNotes(prevNotes =>
      prevNotes.map((item, index) => {
        if (index === id) {
          const prevDelete = item.delete;
          return {
            ...item,
            delete: !prevDelete,
          };
        }
        return item;
      })
    );
  }
  const addToNotes = () => {
    const value = inputRef.current.value;
    const draft = {
      name: value,
      done: false, delete: false,
      createdAt: new Date(),
    };
    setNotes(prevNotes => [draft, ...prevNotes]);
    inputRef.current.value = "";
  }



  return (
    <>
      <div className="bg-black px-5 pb-5">&nbsp;
        <div className="mt-[60px] text-black border-t-0">
          <h1 className="w-full h-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-black text-center">
            Welcome to the Notes App
          </h1>
          <div className="bg-white h-[1px] w-full my-5 flex justify-center"></div>
          {/* Input */}
          <div className="inputData flex justify-center items-center space-x-5">
            <div className="input w-[80%] !max-w-[500px]">
              <input ref={inputRef} class="bg-[#222630] px-4 py-3 w-full outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-white/60" name="text" placeholder="Type Something ..." type="text" />
            </div>
            <div className="inputButtons">
              <button onClick={addToNotes} class="group p-[4px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(169,169,169,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200" >
                <div class="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-3 py-2" >
                  <div class="flex gap-2 items-center">
                    <span class="font-semibold text-white">Create Note</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
          {/* Output */}
          <div className=" mt-10 grid grid-cols-1 gap-6 w-full">
            {notes.map((singleNote, index) => (
              <>
                {!singleNote.delete &&
                  <div key={index} className="bg-white/10 break-all w-[80%] mx-auto flex justify-between items-center flex-wrap p-6 rounded-xl" >
                    <div className="">
                      <div className={`text-sm mb-2 break-all text-white ${singleNote.done && '!text-gray-500  transition-all duration-300'}`}>
                        {singleNote.createdAt.toLocaleDateString('en-US')}
                      </div>
                      {/* singleNote Name */}
                      <h3 className={`text-xl font-semibold text-white mb-2 break-all ${singleNote.done && 'line-through !text-gray-500 transition-all duration-300'}`}>
                        {singleNote.name}
                      </h3>
                    </div>
                    <div className="buttonGrp flex space-x-[20px] relative justify-end w-full">
                      <button onClick={() => { makeItDone(index) }} class="group p-[4px] rounded-[12px] bg-gradient-to-b from-green-700 to-green-600 shadow-[0_2px_4px_rgba(169,169,169,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200" >
                        <div class="bg-gradient-to-b from-green-600 to-green-700 rounded-[8px] px-3 py-2" >
                          <div class="flex gap-2 items-center">
                            <span class="font-semibold text-white">{singleNote.done ? 'Done ✔' : 'Doing...'}</span>
                          </div>
                        </div>
                      </button>
                      {!singleNote.delete &&
                        <button onClick={() => { deleteIt(index) }} class="group p-[4px] rounded-[12px] bg-gradient-to-b from-red-700 to-red-600 shadow-[0_2px_4px_rgba(169,169,169,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200" >
                          <div class="bg-gradient-to-b from-red-600 to-red-700 rounded-[8px] px-3 py-2" >
                            <div class="flex gap-2 items-center">
                              <span class="font-semibold text-white">Delete</span>
                            </div>
                          </div>
                        </button>
                      }
                      {singleNote.delete &&
                        <button onClick={() => { deleteIt(index) }} class="group p-[4px] rounded-[12px] bg-gradient-to-b from-red-700 to-red-600 shadow-[0_2px_4px_rgba(169,169,169,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200" >
                          <div class="bg-gradient-to-b from-red-600 to-red-700 rounded-[8px] px-3 py-2" >
                            <div class="flex gap-2 items-center">
                              <span class="font-semibold text-white">Restore</span>
                            </div>
                          </div>
                        </button>
                      }
                    </div>
                    <div className="bg-white h-[1px] w-full my-5"></div>
                  </div>
                }
              </>
            ))}
          </div>


          {/* DeletedNotes */}
          <div className=" mt-10 grid grid-cols-1 gap-6 w-full">
            <h3 className="text-xl font-semibold text-white mb-2 break-all">
              Deleted Notes: (If any)
            </h3>
            {notes.map((singleNote, index) => (
              <>
                {singleNote.delete &&
                  <div key={index} className="bg-white/10 opacity-50 hover:opacity-100 break-all w-[80%] mx-auto flex justify-between items-center flex-wrap p-6 rounded-xl" >
                    <div className="">
                      <div className={`text-sm mb-2 break-all text-white ${singleNote.done && '!text-gray-500  transition-all duration-300'}`}>
                        {singleNote.createdAt.toLocaleDateString('en-US')}
                      </div>
                      {/* singleNote Name */}
                      <h3 className={`text-xl font-semibold text-white mb-2 break-all ${singleNote.done && 'line-through !text-gray-500 transition-all duration-300'}`}>
                        {singleNote.name}
                      </h3>
                    </div>
                    <div className="buttonGrp flex space-x-[20px] relative justify-end w-full">
                      <button onClick={() => { makeItDone(index) }} class="group p-[4px] rounded-[12px] bg-gradient-to-b from-green-700 to-green-600 shadow-[0_2px_4px_rgba(169,169,169,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200" >
                        <div class="bg-gradient-to-b from-green-600 to-green-700 rounded-[8px] px-3 py-2" >
                          <div class="flex gap-2 items-center">
                            <span class="font-semibold text-white">{singleNote.done ? 'Done ✔' : 'Doing...'}</span>
                          </div>
                        </div>
                      </button>
                      {!singleNote.delete &&
                        <button onClick={() => { deleteIt(index) }} class="group p-[4px] rounded-[12px] bg-gradient-to-b from-red-700 to-red-600 shadow-[0_2px_4px_rgba(169,169,169,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200" >
                          <div class="bg-gradient-to-b from-red-600 to-red-700 rounded-[8px] px-3 py-2" >
                            <div class="flex gap-2 items-center">
                              <span class="font-semibold text-white">Delete</span>
                            </div>
                          </div>
                        </button>
                      }
                      {singleNote.delete &&
                        <button onClick={() => { deleteIt(index) }} class="group p-[4px] rounded-[12px] bg-gradient-to-b from-red-700 to-red-600 shadow-[0_2px_4px_rgba(169,169,169,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200" >
                          <div class="bg-gradient-to-b from-red-600 to-red-700 rounded-[8px] px-3 py-2" >
                            <div class="flex gap-2 items-center">
                              <span class="font-semibold text-white">Restore</span>
                            </div>
                          </div>
                        </button>
                      }
                    </div>
                    <div className="bg-white h-[1px] w-full my-5"></div>
                  </div>
                }
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default NotesApp
