import React from 'react'

const Education = () => {
    return (
        <div className='Education-side'>
            <div className='flex justify-end items-center flex-row gap-2 mt-[5rem]'>
            <h1 className="text-[#aaaaaa] font-mono text-2xl">EDUCATION</h1>
            <div className='border border-b border-[#34d399] w-[10rem] sm:mr-10 mr-4'></div>
            </div>
            <div className='p-10'>
                <div className='space-y-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-3'>
                        <div className='col-span-2'>
                            <h3 className='text-2xl font-bold '>MERN Stack Developer</h3>
                            <p className='text-[#aaaaaa] font-medium'>Brototype</p>
                        </div>
                        <div className='flex sm:justify-end items-start text-[#aaaaaa] font-medium'>
                            <span>MARCH 2023 - MAY 2024</span>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-3'>
                        <div className='col-span-2'>
                            <h3 className='text-2xl font-bold'>Biology Science</h3>
                            <p className='text-[#aaaaaa] font-medium'>Palora HSS</p>
                        </div>
                        <div className='flex sm:justify-end items-start text-[#aaaaaa] font-medium'>
                            <span>APRIL 2020 - MARCH 2022</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Education
