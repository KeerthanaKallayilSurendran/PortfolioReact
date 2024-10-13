import { animate, AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import Angular from '../assets/Angular.png'
import Reactjs from '../assets/react.png'
import Express from '../assets/Express.png'
import Mocha from '../assets/js.png'
import Next from '../assets/next.png'
import Nuxt from '../assets/nuxt.png'
import Node from '../assets/node.png'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Mongo from '../assets/mongo.png'
import Tailwind from '../assets/tailwind.png'
import Bootstrap from '../assets/bootstrap.png'


const Skill = () => {
    const [openCards, setOpenCards] = useState([false]);

    const toggleCard = (index) => {
        setOpenCards(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };



    return (
        <div className='lg:ps-56 ps-5 overflow-hidden py-28' id='skills'>
            <h1 className='md:text-7xl text-5xl'>Skills</h1>
            <div className="card-wrapper grid lg:grid-cols-3 grid-cols-2 grid-flow-row lg:gap-4 gap-1 lg:px-24 px-5 py-5">

                <motion.div onClick={() => toggleCard(0)} className="card border text-blue-800 text-xl flex flex-col justify-center items-center rounded-2xl shadow-lg mb-3 p-5">
                    <motion.h1 className='pb-3'>React</motion.h1>
                    <AnimatePresence>
                        {
                            openCards[0] && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className='flex flex-col justify-center items-center'>
                                    <img className='w-16 pb-3' src={Reactjs} alt="React" />
                                    <p className='text-sm font-light text-justify text-black'>React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.</p>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </motion.div>

                <motion.div onClick={() => toggleCard(1)} className="card border text-blue-800 text-xl flex flex-col justify-center items-center rounded-2xl shadow-lg mb-3 p-5">
                    <motion.h1 className='pb-3'>Angular</motion.h1>
                    <AnimatePresence>
                        {
                            openCards[1] && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className='flex flex-col justify-center items-center'>
                                    <img className='w-16 pb-3' src={Angular} alt="Angular" />
                                    <p className='text-sm font-light text-justify text-black'>Angular is a popular and powerful framework for building web applications of any scale. Learn about its features, community, and latest release of Angular v18.</p>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </motion.div>

                <motion.div onClick={() => toggleCard(2)} className="card border text-blue-800 text-xl flex flex-col justify-center items-center rounded-2xl shadow-lg mb-3 p-5">
                    <motion.h1 className='pb-3'>Express</motion.h1>
                    <AnimatePresence>
                        {
                            openCards[2] && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className='flex flex-col justify-center items-center'>
                                    <img className='w-16 pb-3' src={Express} alt="Angular" />
                                    <p className='text-sm font-light text-justify text-black'>Express is a fast and minimalist web framework for Node.js that supports web and mobile applications, APIs, and middleware. </p>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </motion.div>

                <motion.div onClick={() => toggleCard(3)} className="card border text-blue-800 text-xl flex flex-col justify-center items-center rounded-2xl shadow-lg mb-3 p-5">
                    <motion.h1 className='pb-3'>Mocha</motion.h1>
                    <AnimatePresence>
                        {
                            openCards[3] && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className='flex flex-col justify-center items-center'>
                                    <img className='w-16 pb-3' src={Mocha} alt="Angular" />
                                    <p className='text-sm font-light text-justify text-black'>Mocha is a JavaScript test framework for Node.js programs, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library.  </p>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </motion.div>

                <motion.div onClick={() => toggleCard(4)} className="card border text-blue-800 text-xl flex flex-col justify-center items-center rounded-2xl shadow-lg mb-3 p-5">
                    <motion.h1 className='pb-3'>Next.js</motion.h1>
                    <AnimatePresence>
                        {
                            openCards[4] && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className='flex flex-col justify-center items-center'>
                                    <img className='w-16 pb-3' src={Next} alt="Angular" />
                                    <p className='text-sm font-light text-justify text-black'>Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</p>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </motion.div>

                <motion.div onClick={() => toggleCard(5)} className="card border text-blue-800 text-xl flex flex-col justify-center items-center rounded-2xl shadow-lg mb-3 p-5">
                    <motion.h1 className='pb-3'>Nuxt.js</motion.h1>
                    <AnimatePresence>
                        {
                            openCards[5] && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className='flex flex-col justify-center items-center'>
                                    <img className='w-16 pb-3' src={Nuxt} alt="Angular" />
                                    <p className='text-sm font-light text-justify text-black'>Nuxt is a free and open source JavaScript library based on Vue.js, Nitro, and Vite. Nuxt is inspired by Next.js, which is a framework of similar purpose, based on React.js</p>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </motion.div>

                <motion.div onClick={() => toggleCard(6)} className="card border text-blue-800 text-xl flex flex-col justify-center items-center rounded-2xl shadow-lg mb-3 p-5">
                    <motion.h1 className='pb-3'>Node.js</motion.h1>
                    <AnimatePresence>
                        {
                            openCards[6] && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className='flex flex-col justify-center items-center'>
                                    <img className='w-16 pb-3' src={Node} alt="Angular" />
                                    <p className='text-sm font-light text-justify text-black'>Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser</p>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </motion.div>

                <motion.div onClick={() => toggleCard(7)} className="card border text-blue-800 text-xl flex flex-col justify-center items-center rounded-2xl shadow-lg mb-3 p-5">
                    <motion.h1 className='pb-3'>MongoDB</motion.h1>
                    <AnimatePresence>
                        {
                            openCards[7] && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className='flex flex-col justify-center items-center'>
                                    <img className='w-16 pb-3' src={Mongo} alt="Angular" />
                                    <p className='text-sm font-light text-justify text-black'>MongoDB is the world's most popular document database that supports transactions, rich search, and AI</p>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </motion.div>

                <motion.div onClick={() => toggleCard(8)} className="card border text-blue-800 text-xl flex flex-col justify-center items-center rounded-2xl shadow-lg mb-3 p-5">
                    <motion.h1 className='pb-3'>TailwindCSS</motion.h1>
                    <AnimatePresence>
                        {
                            openCards[8] && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className='flex flex-col justify-center items-center'>
                                    <img className='w-16 pb-3' src={Tailwind} alt="Angular" />
                                    <p className='text-sm font-light text-justify text-black'>Tailwind CSS is an open-source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap</p>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </motion.div>

                <motion.div onClick={() => toggleCard(9)} className="card border text-blue-800 text-xl flex flex-col justify-center items-center rounded-2xl shadow-lg mb-3 p-5">
                    <motion.h1 className='pb-3'>Bootstrap</motion.h1>
                    <AnimatePresence>
                        {
                            openCards[9] && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className='flex flex-col justify-center items-center'>
                                    <img className='w-16 pb-3' src={Bootstrap} alt="Angular" />
                                    <p className='text-sm font-light text-justify text-black'>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.</p>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </motion.div>

                <motion.div onClick={() => toggleCard(10)} className="card border text-blue-800 text-xl flex flex-col justify-center items-center rounded-2xl shadow-l mb-3 p-5">
                    <motion.h1 className='pb-3'>CSS</motion.h1>
                    <AnimatePresence>
                        {
                            openCards[10] && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className='flex flex-col justify-center items-center'>
                                    <img className='w-16 pb-3' src={Css} alt="Angular" />
                                    <p className='text-sm font-light text-justify text-black'>Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML</p>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </motion.div>

                <motion.div onClick={() => toggleCard(11)} className="card border text-blue-800 text-xl flex flex-col justify-center items-center rounded-2xl shadow-l mb-3 p-5">
                    <motion.h1 className='pb-3'>HTML</motion.h1>
                    <AnimatePresence>
                        {
                            openCards[11] && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0 }} className='flex flex-col justify-center items-center'>
                                    <img className='w-16 pb-3' src={Html} alt="Angular" />
                                    <p className='text-sm font-light text-justify text-black'>HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content</p>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </motion.div>

            </div>
        </div>
    )
}

export default Skill;
