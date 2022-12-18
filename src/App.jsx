import { useState } from 'react'
import React from 'react'
import '../src/output.css'
import Resume from "./assets/William Simmons.pdf"
import {FaLinkedin,FaGithub} from'react-icons/fa'
import {SiTailwindcss,SiExpress,SiGit, SiRedux,SiHtml5,SiCss3,SiReact,SiBootstrap, SiJavascript, SiMysql,SiNodedotjs,SiCsharp} from 'react-icons/si'
import { useInView } from "react-intersection-observer"
import {BiDownArrowAlt} from "react-icons/bi"
import Pet from "./assets/Pet.png"
import Algo from "./assets/Algo.png" 


function App() {
   const {ref: skillRef1,inView:skillVis1} = useInView()
   const {ref: skillRef2,inView:skillVis2} = useInView()
   const {ref: skillRef3,inView:skillVis3} = useInView()
   const {ref: skillRef4,inView:skillVis4} = useInView()
   const {ref: skillRef5,inView:skillVis5} = useInView()
   const {ref: skillRef6,inView:skillVis6} = useInView()
   const {ref: skillRef7,inView:skillVis7} = useInView()
   const {ref: skillRef8,inView:skillVis8} = useInView()
   const {ref: skillRef9,inView:skillVis9} = useInView()
   const {ref: skillRef10,inView:skillVis10} = useInView()
   const {ref: skillRef11,inView:skillVis11} = useInView()
   const {ref: skillRef12,inView:skillVis12} = useInView()
   const {ref: cardRef1, inView:cardVis1} = useInView()
   const {ref: cardRef2, inView:cardVis2} = useInView()
     function onSubmit()
     {

     }
    return (
      <div className='w-full '>
        <nav className= "flex justify-around">
            
                
                <div className='flex mt-1 '>
                    
                <button className=" mr-4 cursor-pointer border-[.1em] pointer-events-none before:reflection border-teal-500 box-shadow text-teal-500  text-3xl rounded-[.25em] relative after:reflection-on hover:after:opacity-100  hover:text-black ">
                    <a href="#Skills" className='md:px-4 md:pb-2 text-shadow pointer-events-auto '>Skills</a>
                    </button>
                    
                   <button className=" mr-4 cursor-pointer border-[.1em] pointer-events-none before:reflection border-teal-500 box-shadow text-teal-500 text-3xl rounded-[.25em] relative after:reflection-on hover:after:opacity-100  hover:text-black ">
                    <a href="#Portfolio" className='md:px-4 pb-2 text-shadow pointer-events-auto '>My Work</a>
                    </button>
                <button className=" cursor-pointer border-[.1em] pointer-events-none before:reflection border-teal-500 box-shadow text-teal-500 text-3xl rounded-[.25em] relative after:reflection-on hover:after:opacity-100  hover:text-black ">
                    <a href={"https://william-simmons.netlify.app/William Simmons.pdf"} download className='md:px-4 pb-2 text-shadow pointer-events-auto '>Resume</a>
                    </button>
                    
                </div>
            
        </nav> 
        <section >
            
                <div className="text-center " >
                    <div className="text-center p-10 py-60 mb-[-4rem] mt-[-3rem] h-screen">
                        <div className='bg-teal-300  h-[25rem] w-[22rem] translate-x-[-1rem] md:w-[45rem] md:h-[35rem] m-auto mb-[-22rem] box-shadow  z-0 animate-hero'> </div>
                        <div className="my-auto z-5 relative" >
                        <h2 className="text-5xl py-2 text-teal-600 font-medium">William Simmons</h2>
                             <p className="text-md py-2 leading-8 text-white max-w-xl mx-auto">Hi, I am focused in full stack web developement. If you like my work please feel free to reachout!</p>
                        
                    </div>
                    <div className='text-5xl text-teal-500  flex justify-center gap-16 relative'>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/williamasimmons-se'><FaLinkedin className='hover:text-teal-600'/></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://github.com/Deadrick99'><FaGithub className='hover:text-teal-600'/></a>
                    </div>
                    </div>
                    <div className="flex flex-col">
                        <p className='m-auto text-teal-500 text-xl mt-[-1rem] text-shadow'>Scroll</p>
                        <BiDownArrowAlt className='m-auto mt-1 text-7xl animate-bounce text-teal-500'/>
                    </div>
            
                    <h2 id='Skills' className='mt-16 mb-8 text-center text-4xl text-teal-500 font-medium '>Skills</h2>
                    <div className=' h-20  flex flex-wrap justify-evenly md:w-[85%] md:m-auto ml-20 w-[60%]' >
                        <div data-tip="Tailwind" className={`text-teal-500 pointer-events-none before:content-[attr(data-tip)] before:left-1/2  before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100  ${skillVis1 ? 'animate-slideRight md:animate-slideRight6' :''} `}>
                            <div  className={`pointer-events-auto flex md:m-auto mb-2 text-center  mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer  md:hover:bg-teal-600 md:hover:scale-110 `} ref={skillRef1}>
                                <SiTailwindcss className='m-auto text-black text-2xl md:text-4xl '/>
                            </div>
                        </div>
                        <div data-tip="Redux" className={`text-white pointer-events-none before:content-[attr(data-tip)] before:left-1/2   before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100 ${skillVis2 ? 'animate-slideLeft md:animate-slideRight5' :''}`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 md:hover:scale-110`}   ref={skillRef2}>
                        <SiRedux className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                        <div data-tip="HTML" className={`text-white before:content-[attr(data-tip)] before:left-1/2  pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100 ${skillVis3 ? 'animate-slideRight md:animate-slideRight4' :''}`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 md:hover:scale-110 `}ref={skillRef3}>
                        <SiHtml5 className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                        <div data-tip="CSS" className={`text-white before:content-[attr(data-tip)] before:left-1/2  pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100 ${skillVis4 ? 'animate-slideLeft md:animate-slideRight3' :''}`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 md:hover:scale-110 `}ref={skillRef4}>
                        <SiCss3 className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                        <div data-tip="React" className={`text-white before:content-[attr(data-tip)] before:left-1/2  pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100 ${skillVis5 ? 'animate-slideRight md:animate-slideRight2' :''}`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 md:hover:scale-110 `}ref={skillRef5}>
                        <SiReact className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                        <div data-tip="BootStrap" className={`text-white before:content-[attr(data-tip)] before:left-1/2  pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100 ${skillVis6 ? 'animate-slideLeft md:animate-slideRight' :''}`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 md:hover:scale-110 `}ref={skillRef6}>
                        <SiBootstrap className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                        <div data-tip="JavaScript" className={`text-white before:content-[attr(data-tip)] before:left-1/2  pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100 ${skillVis7 ? 'animate-slideRight md:animate-slideLeft' :''}`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 md:hover:scale-110 `}ref={skillRef7}>
                        <SiJavascript className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                        <div data-tip="MySql" className={`text-white before:content-[attr(data-tip)] before:left-1/2 pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100 ${skillVis8 ? 'animate-slideLeft md:animate-slideLeft2' :''}`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 md:hover:scale-110 `}ref={skillRef8}>
                        <SiMysql className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                        <div data-tip="NodeJS" className={`text-white before:content-[attr(data-tip)] before:left-1/2  pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100 ${skillVis9? 'animate-slideRight md:animate-slideLeft3' :''}`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 md:hover:scale-110 `}ref={skillRef9}>
                        <SiNodedotjs className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                        <div data-tip="C#" className={`text-white before:content-[attr(data-tip)] before:left-1/2  pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all ${skillVis10 ? 'animate-slideLeft md:animate-slideLeft4' :''} hover:before:opacity-100`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 hover:scale-110`}ref={skillRef10}>
                        <SiCsharp className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                         <div data-tip="Express" className={`text-white before:content-[attr(data-tip)] before:left-1/2  pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all ${skillVis11 ? 'animate-slideRight md:animate-slideLeft5' :''} hover:before:opacity-100`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 hover:scale-110`}ref={skillRef11}>
                        <SiExpress className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                         <div data-tip="Git" className={`text-white before:content-[attr(data-tip)] before:left-1/2  pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all ${skillVis12 ? 'animate-slideLeft md:animate-slideLeft6' :''} hover:before:opacity-100`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 hover:scale-110`}ref={skillRef12}>
                        <SiGit className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='Portfolio'>
              <h2 className='text-teal-500 text-center mt-[36rem] text-4xl md:mt-20'>My Work</h2>
              <div className='flex flex-col'>
                <div className={`text-white m-auto w-[95%] md:w-4/5 mt-10 border-2 flex-col md:flex-row flex border-teal-500 rounded-xl ${cardVis2 ? 'animate-slideLeftProj' :''}`} ref={cardRef2}>
                    
                    <div className='p-2 m-auto h-full w-full md:w-1/2'>
                        <img src={Pet} className=" rounded-md object-scale-down"></img>
                    </div>
                    <div className='p-2 h-full w-ful md:w-1/2'>
                        <h3 className='md:translate-y-0 text-center text-2xl text-teal-500'>Pet Store/School Project</h3>
                        <div className='bg-teal-500 3xl:my-10 my-4 w-full rounded-lg'>
                        <p className=' text-black w-[90%] 3xl:w-[80%] m-auto text-lg text-center text-bold'>This project was a team effort, however I played a large role in all parts. This project focused less on design and more on consuming and building REST apis as well while utilizing scrum and agile methodologies, test driven devolpment and automation.  </p>
                        </div>
                        <h3 className=' text-center text-2xl text-teal-500'>Tech Used</h3>
                        <div className='flex flex-wrap 3xl:mt-10 mt-4 bg-teal-500  rounded-lg'>
                        <div className='flex bg-black rounded-full w-16 h-16 m-auto'>
                            <SiJavascript className='m-auto  text-teal-500 text-2xl '/>
                        </div>
                        <div className='flex bg-black rounded-full w-16 h-16 m-auto my-2'>
                            <SiCss3 className='m-auto text-teal-500 text-2xl '/>
                        </div>
                        <div className='flex bg-black rounded-full w-16 h-16 m-auto my-2'>
                            <SiHtml5 className='m-auto text-teal-500 text-2xl '/>
                        </div>
                        <div className='flex bg-black rounded-full w-16 h-16 m-auto my-2'>
                            <SiReact className='m-auto text-teal-500 text-2xl '/>
                        </div>
                        <div className='flex bg-black rounded-full w-16 h-16 m-auto my-2'>
                            <SiRedux className='m-auto text-teal-500 text-2xl '/>
                        </div>
                        <div className='flex bg-black rounded-full w-16 h-16 m-auto my-2'>
                            <SiNodedotjs className='m-auto text-teal-500 text-2xl '/>
                        </div>
                        <div className='flex bg-black rounded-full w-16 h-16 m-auto my-2'>
                            <SiBootstrap className='m-auto text-teal-500 text-2xl '/>
                        </div>
                        <div className='flex bg-black rounded-full w-16 h-16 m-auto my-2'>
                            <SiExpress className='m-auto text-teal-500 text-2xl '/>
                        </div>
                        <div className='flex bg-black rounded-full w-16 h-16 m-auto'>
                            <SiGit className='m-auto text-teal-500 text-2xl '/>
                        </div>
                        </div>
                        <div className='flex justify-evenly 3xl:mt-10 mt-8'>
                            <div className='flex bg-teal-500 w-40 h-16 rounded-lg hover:cursor-pointer hover:bg-teal-600 hover:scale-110'>
                            <a className='text-black m-auto' target="_blank" rel="noopener noreferrer" href='https://marvelous-gumption-ec7d4e.netlify.app/'>View Live</a>
                            </div>
                            <div className='flex bg-teal-500  w-40 h-16 rounded-lg hover:cursor-pointer hover:bg-teal-600 hover:scale-110'>
                            <a className='text-black m-auto' target="_blank" rel="noopener noreferrer" href='https://github.com/Deadrick99/petstore'>View Github</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`text-white m-auto w-[95%] md:w-4/5 mt-10 border-2 flex-col md:flex-row flex border-teal-500 rounded-xl ${cardVis1 ? 'animate-slideRightProj' :''}`} ref={cardRef1}>
                    
                    <div className='p-2 m-auto h-full w-full md:w-1/2'>
                        <img src={Algo} className=" rounded-md object-scale-down"></img>
                    </div>
                    <div className='p-2 h-full w-ful md:w-1/2'>
                        <h3 className='md:translate-y-0 text-center text-2xl text-teal-500'>Search Algorithm Visualizer</h3>
                        <div className='bg-teal-500 3xl:my-10 my-4 w-full rounded-lg'>
                        <p className=' text-black w-[90%] 3xl:w-[80%] m-auto text-lg text-center text-bold'>This was a project to start my react journy. This project visualizes two popular search algorithms A-Star and Dijkstras. It implements Recursive Division maze creation. Finally it allows you to update the path for new walls, start, or endpoints in real time.</p>
                        </div>
                        <h3 className=' text-center text-2xl text-teal-500'>Tech Used</h3>
                        <div className='flex justify-evenly flex-wrap 3xl:mt-10 mt-4 bg-teal-500 rounded-lg'>
                        <div className='flex bg-black rounded-full w-16 h-16 m-auto mx-2 my-2'>
                            <SiJavascript className='m-auto  text-teal-500 text-2xl '/>
                        </div>
                        <div className='flex bg-black rounded-full w-16 h-16 m-auto mx-2 my-2'>
                            <SiCss3 className='m-auto text-teal-500 text-2xl '/>
                        </div>
                        <div className='flex bg-black rounded-full w-16 h-16 m-auto mx-2 my-2'>
                            <SiHtml5 className='m-auto text-teal-500 text-2xl '/>
                        </div>
                        <div className='flex bg-black rounded-full w-16 h-16 m-auto mx-2 my-2'>
                            <SiReact className='m-auto text-teal-500 text-2xl '/>
                        </div>
                        <div className='flex bg-black rounded-full w-16 h-16 m-auto mx-2 my-2'>
                            <SiGit className='m-auto text-teal-500 text-2xl '/>
                        </div>
                        </div>
                        <div className='flex justify-evenly 3xl:mt-10 mt-8'>
                            <div className='flex bg-teal-500 w-40 h-16 rounded-lg hover:cursor-pointer hover:bg-teal-600 hover:scale-110'>
                            <a className='text-black m-auto' target="_blank" rel="noopener noreferrer" href='https://melodious-cucurucho-7c1466.netlify.app/'>View Live</a>
                            </div>
                            <div className='flex bg-teal-500  w-40 h-16 rounded-lg hover:cursor-pointer hover:bg-teal-600 hover:scale-110'>
                            <a className='text-black m-auto' target="_blank" rel="noopener noreferrer" href='https://github.com/Deadrick99/Algorithm-Visulizer'>View Github </a>
                            </div>
                        </div>
                    </div>
                </div>

                
              </div>
            </section>
            <section id='Contact'>
              <h2 className='text-teal-500 text-center mt-[36rem] text-4xl md:mt-20'>Contact Me</h2>
                <div className='w-[85%] border-4 m-auto border-teal-500 rounded-md '>
                    <form action="POST" data-netlify="true">
                        <div>
                            <input className='m-auto' type="text" name="Name / Comapny" placeholder='Name / Company'/>
                        </div>
                        <div>
                            <input className='m-auto' type="email" name="Email" placeholder='Email@gmail.com'/>
                        </div>
                           <div>
                            <textarea className='m-auto' type="text" name="message" placeholder='Additional Info...' rows={7}/>
                            <button>Sumbmit</button>
                        </div>
                    </form>
                </div>
              </section>
      </div>
  );
}

export default App
