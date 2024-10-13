import { motion } from 'framer-motion'

const Experience = () => {

    return (
        <div
            className='experience lg:ps-56 pt-28 overflow-hidden ps-5' id='experience'>
            <h1 className='md:text-7xl text-5xl'>Experience</h1>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='pt-10'>
                <h2 className='text-3xl mb-3 font-extrabold text-blue-900'>Wardiere Inc. </h2>
                <span className='italic'>Web Developer |  04 February, 2029 - Present</span>
                <ul className='list-disc ps-10'>
                    <li>Ensure user satisfaction and retention by providing responsive tech support.</li>
                    <li>Build and maintain software documentation sites using various programming languages.</li>
                    <li>Increase productivity by using software to organize, track bug patches and add feature requests.
                    </li>
                    <li>Collaborate with other developers to update the website and create new features. </li>
                </ul>
            </motion.div>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className='pt-8'>
                <h2 className='text-3xl mb-3 font-extrabold text-blue-900'>Paucek and Lage</h2>
                <span className='italic'>Junior Web Developer | 05 October, 2026 - 20 December, 2028</span>
                <ul className='list-disc ps-10'>
                    <li>Built and maintained websites for clients through various online platforms</li>
                    <li>Assisted troubleshooting software.</li>
                    <li>Created and tested applications for websites.</li>
                    <li>Filed reports, gathered information, and performed research.</li>
                </ul>
            </motion.div>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='pt-8'>
                <h2 className='text-3xl mb-3 font-extrabold text-blue-900'>Keithston and Partners</h2>
                <span className='italic'>Senior Software Engineer   |  Mar 2035 - Present</span>
                <ul className='list-disc ps-10'>
                    <li>Spearheaded the development of a customer portal, streamlining user interactions and reducing response time by 20%.</li>
                    <li>Implemented a real-time collaboration feature in a team project, enhancing communication and efficiency among remote team members.</li>
                </ul>
            </motion.div>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className='pt-8'>
                <h2 className='text-3xl mb-3 font-extrabold text-blue-900'>Ingoude Company</h2>
                <span className='italic'>Junior Software Engineer   |   June 2030 - Mar 2035 </span>
                <ul className='list-disc ps-10'>
                    <li>Collaborated with UX/UI designers to implement responsive design principles, resulting in a more user-friendly interface.</li>
                    <li>Contributed to daily stand-ups and sprint planning sessions, fostering a collaborative and productive team environment.</li>
                </ul>
            </motion.div>

        </div>
    )
}

export default Experience