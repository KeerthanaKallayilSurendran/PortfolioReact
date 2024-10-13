import React, { useState } from 'react'
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'
import Project4 from '../assets/Project4.png'
import Project5 from '../assets/Project5.png'
import Project6 from '../assets/Project6.png'
import Project7 from '../assets/Project7.png'

const imageDetails = [
  { projectName: "Halloween", projectDesc: "Halloween Parallax Scrolling with HTML, CSS, and JavaScript", image: Project3, link: 'https://halloween-parallax-js.vercel.app/' },
  { projectName: "Nike Clone", projectDesc: "Nike clone website using HTML, CSS, and Tailwind CSS.", image: Project6, link: 'https://nike-mu-eight.vercel.app/' },
  { projectName: "Youtube Clone", projectDesc: "YouTube Home Page Clone built using HTML, CSS, and Tailwind CSS!", image: Project5, link: 'https://youtube-clone-kappa-seven.vercel.app/' },
  { projectName: "Travel Tales ", projectDesc: "A fully responsive Travel Tales webpage built with HTML, CSS, and Bootstrap", image: Project7, link: 'https://travel-tales-puce.vercel.app/' },
  { projectName: "Parallax & Image Slider", projectDesc: "Parallax effect and an Image Slider using React! ", image: Project1, link: 'https://parallax-image-slider-react.vercel.app/ ' },
  { projectName: "Hekto", projectDesc: "Figma template into a fully responsive website using HTML, CSS, and Tailwind", image: Project4, link: 'https://hekto-xi.vercel.app/?vercelToolbarCode=sCnvV0CAHfgdMnJ' },
  { projectName: "Stone Paper Scissor", projectDesc: "Stone, Paper, Scissor Game with HTML, CSS, and JavaScript! ", image: Project2, link: 'https://rock-paper-scissors-kks.vercel.app/?vercelToolbarCode=Yv8MSESqWSxESQE' },
]

const Project = () => {
  const [index, setIndex] = useState(0)
  function nextClick() {
    if (index === imageDetails.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)

  }
  function prevClick() {
    if (index === 0) {
      setIndex(imageDetails.length - 1)
      return
    }
    setIndex(index - 1)
  }

  return (

    <div className='project lg:ps-56 ps-5 py-5' id='project'>

      <h1 className='text-7xlmd:text-7xl text-5xl'>Projects</h1>
      <div className="project-wrapper flex flex-col justify-center items-center">
        <div className="project-card relative lg:w-3/6 5/6 mt-4">
          <a href={imageDetails[index].link} target='_blank'><img src={imageDetails[index].image} alt="" /></a>
          <button className='control-btn prev-btn' onClick={prevClick}><i class='bx bxs-left-arrow text-white' ></i></button>
          <button className='control-btn next-btn' onClick={nextClick}><i class='bx bxs-right-arrow text-white' ></i></button>
        </div>
        <div className="project-desc flex justify-center items-center p-2 mt-2">
          <h1 className='lg:text-4xl text-xl pb-2 text-center'>{imageDetails[index].projectName}</h1>
          <p className='lg:text-lg text-sm font-light text-center pb-3'>{imageDetails[index].projectDesc}</p>
        </div>
      </div>
    </div>
  )
}

export default Project