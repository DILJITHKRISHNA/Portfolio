import React from 'react'

const ContactMe = () => {
    return (
        <div className='contactMe-side p-4 sm:p-8'>
            <div className='flex justify-end items-center flex-row gap-2 mt-12'>
            <h1 className="text-[#aaaaaa] font-mono text-2xl">CONTACT ME</h1>
            <div className='border-b-2 border-[#34d399] w-40 sm:w-64'></div>
            </div>
            <div className='mt-14 flex flex-col justify-center items-center gap-5 text-center'>
                <h1 className='text-4xl sm:text-5xl font-bold'>Contact <span className='text-[#34d399]'>Me <span className='hidden sm:inline'>Here</span></span></h1>
                <a href="mailto:diljithkrishna327@gmail.com" className='font-medium text-lg sm:text-xl text-gray-700 hover:text-[#34d399] transition-colors'>diljithkrishna327@gmail.com</a>
            </div>
            <div className="mt-10 p-10 flex space-x-4 justify-center">
                <a href="https://github.com/DILJITHKRISHNA?tab=repositories" className="text-2xl sm:text-3xl transition-transform duration-500 transform hover:scale-110 text-gray-700 hover:text-[#34d399]"><i className="fab fa-github"></i></a>
                <a href="https://www.instagram.com/diljith.krishna_/" className="text-2xl sm:text-3xl transition-transform duration-500 transform hover:scale-110 text-gray-700 hover:text-[#34d399]"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/diljith-krishna-952a822b4/" className="text-2xl sm:text-3xl transition-transform duration-500 transform hover:scale-110 text-gray-700 hover:text-[#34d399]"><i className="fab fa-linkedin"></i></a>
            </div>
        </div>

    )
}

export default ContactMe
