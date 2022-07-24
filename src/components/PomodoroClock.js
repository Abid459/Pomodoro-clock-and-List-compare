import React, { useEffect, useRef, useState } from 'react';

const PomodoroClock = () => {
    // let [sec,setSec] =useState(60);
    let [sec, setSec] = useState(0)
    let [minute, setminute] = useState(25);
    const [progress, setProgress] = useState(100)
    const [start, setStart] = useState(false);
    const [cycle, setCycle] = useState(1);
    const [statusMessage, setStatusMessage] = useState();
    const [workStatus, setWorkStatus] = useState(true);
    const progressRatio = useRef();
    let count = useRef(0)



    const handleStart = () => {
        setminute(24)
        setSec(59)
        setProgress(100)
        setStart(true)
        count.current = 0;
        progressRatio.current = 4;
        setStatusMessage('WORK TIME')
        setWorkStatus(true)
    }

    useEffect(() => {
        // let count = 0;
        if (start) {
            const interval = setInterval(() => {
                setSec(sec - 1)
                setProgress(progress - progressRatio.current / 60)
                if (sec === 0) {
                    setminute(minute - 1)
                    setSec(59)
                }
            }, 1000)
            if (minute === -1) {
                count.current += 1;
                console.log("count is", count.current)
                if (count.current === 1 || count.current % 2 === 1) {
                    //Break time defining
                    setminute(4)
                    setStatusMessage('PLEASE TAKE A REST')
                    setWorkStatus(false)
                    progressRatio.current = 20;
                } else {
                    //New cycle start
                    setminute(24)
                    setStatusMessage('WORK TIME')
                    setWorkStatus(true)
                    progressRatio.current = 4;
                    // setSec(60)

                }
                setSec(59)
                setProgress(100)

            }
            if (count.current === cycle * 2) {
                clearInterval(interval);
                setminute(25)
                setSec(0)
                setStatusMessage(`${cycle} cycle count complete`)
                setStart(false)
            }
            return () => clearInterval(interval);
        }

    }, [sec, minute, start, progress, cycle])

    const display = <div className='relative'>
        <div className='text-white absolute bottom-3 -right-8'>{minute<10 && '0'}{minute}
        </div>
        <div className='text-slate-500 absolute -right-9 font-thin'>{sec<10&&'0'}{sec}</div>
    </div>

    // console.log(sec)
    return (
        <div className='flex justify-center items-center h-screen flex-col bg-slate-600 '>
            <p className=' z-40 text-gray-300 my-3'>{statusMessage}</p>
            <span class={`${workStatus ? 'clock countdown text-6xl   ' : 'clock-rest countdown text-6xl    '}`}>
                {/* <span style={{ "--value": sec }}></span> */}
                <div class="w-80 h-80 progress timmer " style={{ '--value': progress, '--size': '20rem', '--thickness': '2px' }}>{display} </div>
            </span>

            <div class="form-control">
                <label class="label  text-center flex justify-center mt-5">
                    <span class="label-text text-gray-300 ">Enter cycle number</span>
                </label>
                <label class="input-group mb-5 text-gray-800">
                    <span className='cursor-pointer select-none' onClick={() => cycle > 1 && setCycle(cycle - 1)}>-</span>
                    <input className=' p-3 text-center select-none outline-none border-none w-10' type="text" readOnly value={cycle} />
                    <span className='cursor-pointer select-none' onClick={() => setCycle(cycle + 1)}>+</span>
                </label>
            </div>

            <div className="btn" onClick={handleStart}>START</div>
        </div>
    );
};

export default PomodoroClock;