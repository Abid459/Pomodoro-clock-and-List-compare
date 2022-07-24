import React, { useRef, useState } from 'react';

const CompareList = () => {
    const inputARef = useRef();
    const inputBRef = useRef();
    // const outputRef = useRef();

    const [outputA, setOutputA] = useState()
    const [outputB, setOutputB] = useState()
    const [outputAll, setOutputAll] = useState()
    const [commonEl, setCommonEl] = useState()
    const [uniquA, setUniquA] = useState()
    const [uniquB, setUniquB] = useState()

    function mapArr(arr) {
        let count = 1;
        const output = arr.map(item => {
            return <div key={count} className="overflow-x-auto">
                <p className='bg-slate-300 mb-1 p-3 rounded font-semibold'>{count++}. {item}</p>
            </div>
        })
        return output;
    }

    const handleCompare = () => {
        const inputA = inputARef.current.value;
        const inputB = inputBRef.current.value;


        const inputA_Arr = inputA.split('\n');
        const inputB_Arr = inputB.split('\n');
        console.log(inputB_Arr);
        let totalArr = [...inputA_Arr, ...inputB_Arr];

        const commonArr = inputA_Arr.filter(elA => inputB_Arr.indexOf(elA) !== -1)
        const uniqueInA = inputA_Arr.filter(elA => inputB_Arr.indexOf(elA) === -1)
        const uniqueInB = inputB_Arr.filter(elB => inputA_Arr.indexOf(elB) === -1)
        console.log("This is unique Aarr", uniqueInA)
        console.log("This is unique Barr", uniqueInB)

        setOutputA(mapArr(inputA_Arr))
        setOutputB(mapArr(inputB_Arr))
        setOutputAll(mapArr(totalArr))
        setCommonEl(mapArr(commonArr))
        setUniquA(mapArr(uniqueInA))
        setUniquB(mapArr(uniqueInB))



    }

    return (
        <div className='min-h-screen bg-slate-600 px-10'>
            <div className='flex flex-wrap lg:flex-nowrap justify-center  items-center pt-10 rounded-3xl'>
                <div className='bg-slate-400 w-full text-center text- p-5 rounded-3xl lg:mr-10 mb-12 md:mb-0 lg:mb-0  '>
                    <h3 className='text-xl mb-4 text-white'>List-A</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter your First list and separate them by new line</span>
                        </label>
                        <textarea ref={inputARef} className="textarea textarea-bordered h-40" placeholder="List-A"></textarea>
                    </div>
                </div>
                <div className='bg-slate-400 w-full text-center text- p-5 rounded-3xl'>
                    <h3 className='text-xl mb-4 text-white'>List-B</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter your Second list and separate them by new line</span>
                        </label>
                        <textarea ref={inputBRef} className="textarea textarea-bordered h-40" placeholder="List-B"></textarea>

                    </div>
                </div>

            </div>
            <div className='flex justify-center my-10'>
                <button onClick={handleCompare} className="btn ">COMPUTE</button>
            </div>
            <div className='flex flex-wrap justify-between bg-slate-200 p-10 rounded-md'>
                <div className=''>
                    <h3 className='font-semibold mb-5 bg-slate-300 p-4 text-center'>Items inside List-A</h3>
                    {outputA}
                </div>
                <div className=''>
                    <h3 className='font-semibold mb-5 bg-slate-300 p-4 text-center'>Items inside List-B</h3>
                    {outputB}
                </div>
                <div className=''>
                    <h3 className='font-semibold mb-5 bg-slate-300 p-4 text-center'>Items inside List-A and List-B</h3>
                    {outputAll}
                </div>
                <div className=''>
                    <h3 className='font-semibold mb-5 bg-slate-300 p-4 text-center'>Common between them</h3>
                    {commonEl}
                </div>
                <div className=''>
                    <h3 className='font-semibold mb-5 bg-slate-300 p-4 text-center'>Unque between them</h3>
                    <div>
                        <h4 className='text-center bg-slate-300 p-2'>Unique in A</h4>
                        {uniquA}
                    </div>
                    <div>
                        <h4 className='text-center bg-slate-300 p-2'>Unique in B</h4>
                        {uniquB}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompareList;