//file includes hero section of website 
import {FaLinkedin,FaGithub} from'react-icons/fa'
import {SiTailwindcss, SiRedux,SiHtml5,SiCss3,SiReact,SiBootstrap, SiJavascript, SiMysql,SiNodedotjs,SiCsharp} from 'react-icons/si'
import { useInView } from "react-intersection-observer"
import Face from './assets/me.png'
const Hero =()=>{
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
    return(
    
            <section >
            
                <div className="text-center p-10 " >
                    <div className="text-center p-10 py-60 mb-[-6rem] h-screen">
                        <div className='bg-teal-300  h-[22rem] w-[22rem]  md:w-[45rem] md:h-[35rem] m-auto mb-[-22rem]  z-0 animate-hero'> </div>
                        <div className="my-auto z-5 relative" >
                        <h2 className="text-5xl py-2 text-teal-600 font-medium">William Simmons</h2>
                        <h3 className="text-2xl py-2 text-black">Software Developer</h3>
                        <p className="text-md py-2 leading-8 text-white max-w-xl mx-auto">Hi, I am focused in full stack web developement. If you like my work please feel free to reachout!</p>
                        
                    </div>
                    <div className='text-5xl text-teal-500  flex justify-center gap-16 relative'>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/williamasimmons-se'><FaLinkedin className='hover:text-teal-600'/></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://github.com/Deadrick99'><FaGithub className='hover:text-teal-600'/></a>
                    </div>
                    </div>
                    
            
                    <h2 className='mt-16 mb-8 text-center text-4xl text-teal-500 font-medium'>Skills</h2>
                    <div className=' h-20 flex ' >
                        <div className={`flex m-auto text-center bg-teal-500 rounded-full w-16 h-16 ${skillVis1 ? ' animate-slideRight' :''}`} ref={skillRef1}>
                            <SiTailwindcss className='m-auto'/>
                        </div>
                        <div className={`flex m-auto text-center bg-teal-500 rounded-full w-16 h-16 ${skillVis2 ? ' animate-slideRight' :''}`} ref={skillRef2}>
                        <SiRedux className='m-auto'/>
                        </div>
                        <div className={`flex m-auto text-center bg-teal-500 rounded-full w-16 h-16 ${skillVis3 ? ' animate-slideRight' :''}`}ref={skillRef3}>
                        <SiHtml5 className='m-auto'/>
                        </div>
                        <div className={`flex m-auto text-center bg-teal-500 rounded-full w-16 h-16 ${skillVis4 ? ' animate-slideRight' :''}`}ref={skillRef4}>
                        <SiCss3 className='m-auto'/>
                        </div>
                        <div className={`flex m-auto text-center bg-teal-500 rounded-full w-16 h-16 ${skillVis5 ? ' animate-slideRight' :''}`}ref={skillRef5}>
                        <SiReact className='m-auto'/>
                        </div>
                        <div className={`flex m-auto text-center bg-teal-500 rounded-full w-16 h-16 ${skillVis6 ? ' animate-slideLeft' :''}`}ref={skillRef6}>
                        <SiBootstrap className='m-auto'/>
                        </div>
                        <div className={`flex m-auto text-center bg-teal-500 rounded-full w-16 h-16 ${skillVis7 ? ' animate-slideLeft' :''}`}ref={skillRef7}>
                        <SiJavascript className='m-auto'/>
                        </div>
                        <div className={`flex m-auto text-center bg-teal-500 rounded-full w-16 h-16 ${skillVis8 ? ' animate-slideLeft' :''}`}ref={skillRef8}>
                        <SiMysql className='m-auto'/>
                        </div>
                        <div className={`flex m-auto text-center bg-teal-500 rounded-full w-16 h-16 ${skillVis9? ' animate-slideLeft' :''}`}ref={skillRef9}>
                        <SiNodedotjs className='m-auto'/>
                        </div>
                        <div className={`flex m-auto text-center bg-teal-500 rounded-full w-16 h-16 ${skillVis10 ? ' animate-slideLeft' :''}`}ref={skillRef10}>
                        <SiCsharp className='m-auto'/>
                        </div>
                    </div>
                </div>
            </section>
          
                
                )
}
export default Hero;