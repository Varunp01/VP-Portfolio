import { useState, useEffect, useRef } from 'react'

function StopWatch() {
  const [time, setTime] = useState(0);
  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [ms, setMs] = useState(0);
  const [lap, setLap] = useState([]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalID;
    if (running) {
      console.log('Starting interval...');
      intervalID = setInterval(() => {
        setTime(prevCount => prevCount + 10);
      }, 10); // 1000ms = 1 second
    } else {
      console.log('Interval paused. No new interval created.');
    }

    return () => {
      console.log('Cleaning up interval:', intervalID);
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, [running]);

  useEffect(() => {
    formatTime(time);
  }, [time]);

  const formatTime = (timing) => {
    const hours = String(Math.floor(timing / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((timing % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((timing % (1000 * 60)) / 1000)).padStart(2, '0');
    const milliseconds = String(timing % 1000).padStart(3, '0');

    setHr(hours);
    setMin(minutes);
    setSec(seconds);
    setMs(milliseconds);
  };

  const Reset = () => {
    setTime(0);
    setRunning(false);
    setLap([]);
  }

  const lapSet = () => {
    if (!(hr == '00' && min == '00' && sec == '00' && ms == '000'))
      setLap(prevlap => [...prevlap, `${hr}:${min}:${sec}:${ms}`])
  }
  return (
    <>
      <div className="bg-black px-5 pb-5">&nbsp;
        <div className="mt-[60px] text-black border-t-0">
          <h1 className="w-full h-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-black text-center">
            Welcome to Stop-Watch
          </h1>
          <div className="bg-white h-[1px] w-full my-5 flex justify-center"></div>
          <div className="text-5xl text-white flex justify-center my-5">
            {hr}:{min}:{sec}:{ms}
          </div>
          <div className="buttons flex justify-center space-x-4">

            {running ?
              <button onClick={() => { setRunning(!running) }} class="group p-[4px] rounded-[12px] bg-gradient-to-b from-red-700 to-red-600 shadow-[0_2px_4px_rgba(169,169,169,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200" >
                <div class="bg-gradient-to-b from-red-600 to-red-700 rounded-[8px] px-3 py-2" >
                  <div class="flex gap-2 items-center">
                    <span class="font-semibold text-white">Pause</span>
                  </div>
                </div>
              </button>
              :
              <button onClick={() => { setRunning(!running) }} class="group p-[4px] rounded-[12px] bg-gradient-to-b from-green-700 to-green-600 shadow-[0_2px_4px_rgba(169,169,169,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200" >
                <div class="bg-gradient-to-b from-green-600 to-green-700 rounded-[8px] px-3 py-2" >
                  <div class="flex gap-2 items-center">
                    <span class="font-semibold text-white">Start</span>
                  </div>
                </div>
              </button>
            }
            <button onClick={Reset} class="group p-[4px] rounded-[12px] bg-gradient-to-b from-red-700 to-red-600 shadow-[0_2px_4px_rgba(169,169,169,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200" >
              <div class="bg-gradient-to-b from-red-600 to-red-700 rounded-[8px] px-3 py-2" >
                <div class="flex gap-2 items-center">
                  <span class="font-semibold text-white">Reset</span>
                </div>
              </div>
            </button>
            <button onClick={lapSet} class="group p-[4px] rounded-[12px] bg-gradient-to-b from-cyan-700 to-cyan-600 shadow-[0_2px_4px_rgba(169,169,169,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200" >
              <div class="bg-gradient-to-b from-cyan-600 to-cyan-700 rounded-[8px] px-3 py-2" >
                <div class="flex gap-2 items-center">
                  <span class="font-semibold text-white">Lap</span>
                </div>
              </div>
            </button>
          </div>
          <h3 className="text-xl font-semibold text-white my-2 break-all">
            Noted Laps:
          </h3>
          <h3 className="text-base font-semibold text-white mb-2 break-all">
            {lap.map((singlelap, index) => (
              <ul>
                <li key={index}>{singlelap}</li>
              </ul>
            ))}
          </h3>
        </div>
      </div>
    </>
  )
}

export default StopWatch
