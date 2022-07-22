import React, { useRef, useState } from 'react';

const CompareList = () => {
    const inputARef = useRef();
    const inputBRef = useRef();
    // const outputRef = useRef();

    const [outputA, setOutputA] = useState()
    const [outputB, setOutputB] = useState()

    const handleCompare = () => {
        const inputA = inputARef.current.value;
        const inputB = inputBRef.current.value;
        // const output = inputBRef.current.value;


        const inputA_Arr = inputA.split('\n');
        const inputB_Arr = inputB.split('\n');
        console.log(inputA_Arr);

        let countA = 1
        const outputA = inputA_Arr.map(item => {
            return <div class="overflow-x-auto">
                <p className='bg-slate-200 mb-1 p-3 font-semibold'>{countA++}. {item}</p>
            </div>
        })
        setOutputA(outputA)

        let countB = 1;
        const outputB = inputB_Arr.map(item => {
            return <div class="overflow-x-auto">
                <p className='bg-slate-200 mb-1 p-3 font-semibold'>{countB++}. {item}</p>
            </div>
        })
        setOutputB(outputB)



    }

    return (
        <div className='h-screen bg-slate-600'>
            <div className='flex w-screen justify-center  items-center pt-10'>
                <div className='bg-slate-400 w-full text-center text-'>
                    <h3>List-1</h3>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Your bio</span>
                            <span class="label-text-alt">Alt label</span>
                        </label>
                        <textarea ref={inputARef} class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        <label class="label">
                            <span class="label-text-alt">Your bio</span>
                            <span class="label-text-alt">Alt label</span>
                        </label>
                    </div>
                </div>
                <div className='bg-slate-400 w-full text-center text-'>
                    <h3>List-1</h3>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Your bio</span>
                            <span class="label-text-alt">Alt label</span>
                        </label>
                        <textarea ref={inputBRef} class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        <label class="label">
                            <span class="label-text-alt">Your bio</span>
                            <span class="label-text-alt">Alt label</span>
                        </label>
                    </div>
                </div>

            </div>
            <div className='flex justify-center mt-10'>
                <button onClick={handleCompare} class="btn btn-outline">compare</button>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <div className=''>
                    {outputA}
                </div>
                <div className=''>
                    {outputB}
                </div>
            </div>
        </div>
    );
};

export default CompareList;