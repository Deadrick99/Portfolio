//file includes hero section of website 
import {FaLinkedin,FaGithub} from'react-icons/fa'
import {SiGmail} from 'react-icons/si'
const Hero =()=>{
    return(
        <section>
        <div className=" text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">William Simmons</h2>
            <h3 className="text-2xl py-2">Software Developer</h3>
            <p className="text-md py-2 leading-8">Hi, I am focused in full stack web developement. If you like my work please feel free to reachout!</p>
            </div>
            <div className='text-5xl text-teal-500  flex justify-center gap-16'>
            <FaLinkedin className='hover:text-6xl'/>
            <FaGithub className='hover:text-6xl'/>
            <SiGmail className='hover:text-6xl'/>
            
            </div>
            </section>
    );
}
export default Hero;