import React, { useEffect, useRef, useState } from 'react';

const PomodoroClock = () => {
    // let [sec,setSec] =useState(60);
    let [sec, setSec] = useState(60)
    let [minute, setminute] = useState(3);
    const [progress, setProgress] = useState(100)
    const [start, setStart] = useState(false);
    const [cycle, setCycle] = useState(1);
    const [status, setStatus] = useState('WORK TIME')
    let count = useRef(0)



    const handleStart = () => {
            setminute(3)
            setSec(60)
            setProgress(100)
            setStart(true)
            count.current = 0
            setStatus('WORK TIME')
    }

    useEffect(() => {
        // let count = 0;
        if (start) {
            const interval = setInterval(() => {
                setSec(sec - 1)
                if (sec === 57) {
                    setminute(minute - 1)
                    setProgress(progress - 10)
                    setSec(60)
                }
            }, 1000)
            if (minute === 0) {
                count.current += 1;
                console.log("count is", count.current)
                if(count.current === 1 || count.current %2 === 1){
                    setminute(2)
                    setStatus('PLEASE TAKE A REST')
                }else{
                    setminute(3)
                    setStatus('Work Time')
                    // setSec(60)
                    
                }
                setSec(60)
                setProgress(100)

            }
            if (count.current === cycle*2) {
                clearInterval(interval);
                setminute('00')
                setSec('00')
                setStatus(`${cycle} cycle count complete`)
                setStart(false)
            }
            return () => clearInterval(interval);
        }

    }, [sec, minute, start, progress, cycle])



    // console.log(sec)
    return (
        <div className='flex justify-center items-center h-screen flex-col'>
            <p className='text-black z-40'>{status}</p>
            <span class="countdown font-mono text-6xl">
                {/* <span style={{ "--value": sec }}></span> */}
                <div class="w-80 h-80 progress" style={{ '--value': progress, '--size': '20rem', '--thickness': '2px' }}>{minute}:{sec}</div>
            </span>

            <div class="form-control">
                <label class="label">
                    <span class="label-text">Enter cycle number</span>
                </label>
                <label class="input-group my-5">
                    <span className='cursor-pointer select-none' onClick={() => cycle > 1 && setCycle(cycle - 1)}>-</span>
                    <input className='w-14 p-3' type="text" value={cycle} class="input input-bordered" />
                    <span className='cursor-pointer select-none' onClick={() => setCycle(cycle + 1)}>+</span>
                </label>
            </div>

            <div className="btn" onClick={handleStart}>START</div>
        </div>
    );
};

export default PomodoroClock;