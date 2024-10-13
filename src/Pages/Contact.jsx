import React from 'react'
import robo from '../assets/robo.png'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <div className='lg:ps-56 ps-10 py-28 h-svh' id='contact'>
      <h1 className='md:text-7xl text-5xl'>Contact</h1>
      <div className='flex justify-between items-center w-full p-5'>
        <div className="form-section md:w-2/5 w-full">
          <form>
            <div>
              <label htmlFor="name" className='block mb-2'>Name</label>
              <input className='p-3 w-full mb-6 text-sm font-medium rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900' type="text" placeholder='Tony Stark' />
            </div>
            <div>
              <label htmlFor="email" className='block mb-2'>E-mail</label>
              <input className='p-3 w-full mb-6 text-sm font-medium  rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900' type="email" placeholder='stark@gmail.com' />
            </div>
            <div>
              <label htmlFor="message" className='block mb-2'>Message</label>
              <textarea name="message" rows="5" className='p-3 w-full text-sm mb-6 font-medium  rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900' placeholder='Type your message here...'></textarea>
            </div>
            <button className='bg-black text-white px-4 py-2 rounded-lg shadow-md'>Submit</button>
          </form>
        </div>
        <div className="image-section w-2/5 md:flex justify-start items-center hidden">
          <img src={robo} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact