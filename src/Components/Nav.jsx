import React, { useState } from 'react'
const Nav = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <nav className='fixed w-full flex flex-col justify-center items-center'>
            <div className='flex justify-center text-black bg-white h-12 items-center w-2/5 rounded-3xl border border-gray-500'>
                <div className='hidden md:block'>
                    <a className='pr-5' href="#home">Home</a>
                    <a className='pr-5' href="#experience">Experience</a>
                    <a className='pr-5' href="#skills">Skills</a>
                    <a className='pr-5' href="#project">Project</a>
                    <a className='pr-5' href="#contact">Contact</a>
                </div>
                <button className={`${isActive ? "hidden" : "block"} md:hidden`} onClick={() => setIsActive(true)}><i className='bx bx-menu'></i></button>
                <button className={`${isActive ? "block" : "hidden"} md:hidden`} onClick={() => setIsActive(false)}><i className='bx bx-x'></i></button>
            </div>

            {
                isActive && (
                    <div className='md:hidden flex flex-col justify-center bg-white/75 p-3 rounded-xl gap-4'>
                        <a href="#home">Home</a>
                        <a href="#experience">Experience</a>
                        <a href="#skills">Skills</a>
                        <a href="#project">Project</a>
                        <a href="#contact">Contact</a>
                    </div>
                )
            }
        </nav>
    )
}

export default Nav