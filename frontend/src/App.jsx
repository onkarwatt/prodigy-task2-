import { useState,useRef, useEffect} from 'react'
import './App.css'


function App() {
  const [time,setTime]=useState(0)
  const [now,setNow]=useState(0)
  const [stp,setStp]=useState(false)
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef=useRef(null)

  const start=()=>{
    setTime(Date.now());
    setNow(Date.now());
    setIsRunning(true);
    setStp(false);
    intervalRef.current=setInterval(()=>{
      setTime(Date.now());
    },10)
  }
  const stop=()=>{
    setIsRunning(false)
    setStp(true)
    clearInterval(intervalRef.current);
  }
  const reset = () => {
    setIsRunning(false)
    setStp(false)
    clearInterval(intervalRef.current);
    setTime(0);
    setNow(0);
  }

  let timePassed=Math.floor((time-now)/10)

  return (
    <div class="flex justify-center items-center h-screen bg-gray">
      <div class="flex-col bg-white w-5/12 h-2/5 rounded-lg shadow-2xl">
        <div class="flex justify-around my-7 mb-14">
          <div class="mx-5 text-8xl text-black text-center">{(Math.floor(timePassed/360000))%60}</div>
          <div class="mx-5 text-8xl text-black text-center">{(Math.floor(timePassed/6000))%60}</div>
          <div class="mx-5 text-8xl text-black text-center">{(Math.floor(timePassed/100))%60}</div>
          <div class="mx-3 text-8xl text-black w-28 h-24 text-center">{timePassed%100}</div>
        </div>
        <div class="flex justify-around" >
          <button className={`rounded-lg mx-1 px-2 ${(isRunning)?'bg-green-500 text-white':"bg-gray text-black1 hover:bg-blue-500 hover:text-white"} text-3xl pb-2`} onClick={!isRunning&&start}>start</button>
          <button className={`rounded-lg mx-1 px-2 ${(stp)?'bg-red-500 text-white':'bg-gray text-black1 hover:bg-blue-500 hover:text-white'} text-3xl pb-2 `} onClick={isRunning&&stop}>stop</button>
          <button className="rounded-lg mx-1 px-2 bg-gray text-3xl pb-2 text-black1 hover:bg-blue-500 hover:text-white" onClick={reset}>reset</button>
        </div>
      </div>

    </div>

  )
}

export default App
