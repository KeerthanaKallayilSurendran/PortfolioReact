import React from 'react'
import ReactIcon from '../assets/react.png'
import Angular from '../assets/Angular.png'
import Bootstrap from '../assets/bootstrap.png'
import CSS from '../assets/css.png'
import Express from '../assets/Express.png'
import HTML from '../assets/html.png'
import JS from '../assets/js.png'
import Mongo from '../assets/mongo.png'
import Next from '../assets/next.png'
import Node from '../assets/node.png'
import Nuxt from '../assets/nuxt.png'
import Tailwind from '../assets/tailwind.png'
import TS from '../assets/ts.png'
import Vue from '../assets/vue.png'
import { motion } from 'framer-motion'


const Footer = () => {
    const cardVariants = (duration) => (
        {
            initial: { y: -10 },
            animate: {
                y: [10, -10],
                transition: {
                    duration: duration,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            }
        }
    )
    return (
        <div className='pb-10'>
            <div className='flex justify-center items-center gap-5 mt-16 flex-wrap'>
                <motion.img variants={cardVariants(2.5)} initial="initial" animate="animate" className='w-12' src={ReactIcon} alt="" />
                <motion.img variants={cardVariants(3)} initial="initial" animate="animate" className='w-12' src={Angular} alt="" />
                <motion.img variants={cardVariants(5)} initial="initial" animate="animate" className='w-14' src={Bootstrap} alt="" />
                <motion.img variants={cardVariants(2.5)} initial="initial" animate="animate" className='w-14' src={CSS} alt="" />
                <motion.img variants={cardVariants(3)} initial="initial" animate="animate" className='w-14' src={Express} alt="" />
                <motion.img variants={cardVariants(5)} initial="initial" animate="animate" className='w-14' src={HTML} alt="" />
                <motion.img variants={cardVariants(2.5)} initial="initial" animate="animate" className='w-14' src={JS} alt="" />
                <motion.img variants={cardVariants(3)} initial="initial" animate="animate" className='w-14' src={Mongo} alt="" />
                <motion.img variants={cardVariants(5)} initial="initial" animate="animate" className='w-14' src={Next} alt="" />
                <motion.img variants={cardVariants(2.5)} initial="initial" animate="animate" className='w-14' src={Node} alt="" />
                <motion.img variants={cardVariants(3)} initial="initial" animate="animate" className='w-14' src={Nuxt} alt="" />
                <motion.img variants={cardVariants(5)} initial="initial" animate="animate" className='w-14' src={Tailwind} alt="" />
                <motion.img variants={cardVariants(2.5)} initial="initial" animate="animate" className='w-14' src={TS} alt="" />
                <motion.img variants={cardVariants(3)} initial="initial" animate="animate" className='w-14' src={Vue} alt="" />
            </div>
            <div className='flex justify-center items-center gap-5 mt-10'>
                <div className='cursor-pointer'><i className='bx bxl-linkedin-square text-4xl text-black'></i></div>
                <div className='cursor-pointer'> <i className='bx bxl-github text-4xl text-black' ></i></div>
                <div className='cursor-pointer'><i className='bx bxl-twitter text-4xl text-black' ></i></div>
            </div>
        </div>

    )
}

export default Footer