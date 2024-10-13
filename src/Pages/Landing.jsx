import React from 'react'
import Resume from '../assets/Resume.pdf'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
const Landing = () => {
    const [text] = useTypewriter({
        words: ['MEARN', 'MongoDB', 'Express', 'Angular', 'React', 'Node.js'],
        loop: 0,
        typeSpeed: 200
    })
    return (
        <div className='landing flex flex-col justify-center items-center text-white' id='home'>
            <span className='text-3xl text-center'>Hello, I'm Safest. A passionate Software Engineer.</span>
            <h1 className='text-7xl mt-5'><span>{text}</span><Cursor cursorColor='rgb(30 64 175)' /></h1>
            <div className='mt-5 flex justify-center items-center flex-wrap gap-4'>
                <a href={Resume} download="Resume">
                    <button className='text-sm px-2 py-2 border border-blue-900 mx-5 rounded-md bg-blue-800 '>Download CV</button >
                </a>
                <button className='text-sm px-2 py-2 border border-blue-900 mx-5 rounded-md bg-blue-800 '>Contact Me</button >
            </div>
        </div >
    )
}

export default Landing