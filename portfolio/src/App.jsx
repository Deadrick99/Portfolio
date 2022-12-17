import { useState } from 'react'

import '../dist/output.css'
import Resume from "./assets/William Simmons.pdf"
import {FaLinkedin,FaGithub} from'react-icons/fa'
import {SiTailwindcss, SiRedux,SiHtml5,SiCss3,SiReact,SiBootstrap, SiJavascript, SiMysql,SiNodedotjs,SiCsharp} from 'react-icons/si'
import { useInView } from "react-intersection-observer"
import {BiDownArrowAlt} from "react-icons/bi"


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
    
    return (
      <div className='w-full '>
        <nav className= "flex justify-around">
            
                <span className="text-teal-500 text-5xl font-black">WS</span>
                <div className='flex mt-1 '>
                    
                <button className=" mr-4 cursor-pointer border-[.1em] pointer-events-none before:reflection border-teal-500 box-shadow text-teal-500 text-3xl rounded-[.25em] relative after:reflection-on hover:after:opacity-100  hover:text-black ">
                    <a href="#Skills" className='px-4 pb-2 text-shadow pointer-events-auto '>Skills</a>
                    </button>
                    
                   
                <button className=" cursor-pointer border-[.1em] pointer-events-none before:reflection border-teal-500 box-shadow text-teal-500 text-3xl rounded-[.25em] relative after:reflection-on hover:after:opacity-100  hover:text-black ">
                    <a href={Resume} download className='px-4 pb-2 text-shadow pointer-events-auto '>Resume</a>
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
                    <div className=' h-20  flex flex-wrap justify-evenly md:w-full md:m-auto ml-20 w-[60%]' >
                        <div data-tip="Tailwind" className={`text-teal-500 pointer-events-none before:content-[attr(data-tip)] before:left-1/2  before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100  ${skillVis1 ? 'animate-slideRight md:animate-slideRight5' :''} `}>
                            <div  className={`pointer-events-auto flex md:m-auto mb-2 text-center  mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer  md:hover:bg-teal-600 md:hover:scale-110 `} ref={skillRef1}>
                                <SiTailwindcss className='m-auto text-black text-2xl md:text-4xl '/>
                            </div>
                        </div>
                        <div data-tip="Redux" className={`text-white pointer-events-none before:content-[attr(data-tip)] before:left-1/2   before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100 ${skillVis2 ? 'animate-slideLeft md:animate-slideRight4' :''}`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 md:hover:scale-110`}   ref={skillRef2}>
                        <SiRedux className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                        <div data-tip="HTML" className={`text-white before:content-[attr(data-tip)] before:left-1/2  pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100 ${skillVis3 ? 'animate-slideRight md:animate-slideRight3' :''}`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 md:hover:scale-110 `}ref={skillRef3}>
                        <SiHtml5 className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                        <div data-tip="CSS" className={`text-white before:content-[attr(data-tip)] before:left-1/2  pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100 ${skillVis4 ? 'animate-slideLeft md:animate-slideRight2' :''}`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 md:hover:scale-110 `}ref={skillRef4}>
                        <SiCss3 className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                        <div data-tip="React" className={`text-white before:content-[attr(data-tip)] before:left-1/2  pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100 ${skillVis5 ? 'animate-slideRight md:animate-slideRight' :''}`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 md:hover:scale-110 `}ref={skillRef5}>
                        <SiReact className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                        <div data-tip="BootStrap" className={`text-white before:content-[attr(data-tip)] before:left-1/2  pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100 ${skillVis6 ? 'animate-slideLeft md:animate-slideLeft' :''}`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 md:hover:scale-110 `}ref={skillRef6}>
                        <SiBootstrap className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                        <div data-tip="JavaScript" className={`text-white before:content-[attr(data-tip)] before:left-1/2  pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100 ${skillVis7 ? 'animate-slideRight md:animate-slideLeft2' :''}`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 md:hover:scale-110 `}ref={skillRef7}>
                        <SiJavascript className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                        <div data-tip="MySql" className={`text-white before:content-[attr(data-tip)] before:left-1/2 pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100 ${skillVis8 ? 'animate-slideLeft md:animate-slideLeft3' :''}`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 md:hover:scale-110 `}ref={skillRef8}>
                        <SiMysql className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                        <div data-tip="NodeJS" className={`text-white before:content-[attr(data-tip)] before:left-1/2  pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all hover:before:opacity-100 ${skillVis9? 'animate-slideRight md:animate-slideLeft4' :''}`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 md:hover:scale-110 `}ref={skillRef9}>
                        <SiNodedotjs className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                        <div data-tip="C#" className={`text-white before:content-[attr(data-tip)] before:left-1/2  pointer-events-none before:text-teal-500 before:font-mono md:before:opacity-0 before:transition-all ${skillVis10 ? 'animate-slideLeft md:animate-slideLeft5' :''} hover:before:opacity-100`}>
                        <div className={`pointer-events-auto flex md:m-auto text-center mx-1 bg-teal-500 rounded-full w-20 h-20 hover:cursor-pointer md:hover:bg-teal-600 hover:scale-110`}ref={skillRef10}>
                        <SiCsharp className='m-auto text-black text-2xl md:text-4xl'/>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='Portfolio'>
              <h2 className='text-teal-500 text-center text-4xl pt-20'>My Work</h2>
              <div className='flex flex-col'>
                <div></div>
              </div>
            </section>
       
      </div>
  );
}

export default App
