//File contains nav bar code.
import {FaMoon} from 'react-icons/fa'
const Navbar=()=>{
    return(
        <nav className= "flex justify-around pl-16 w-screen h-10">
            
                <span className="text-teal-500 py-2 text-2xl font-black font-serif">WS</span>
                <div className='flex justify-center'>
                <span className="pt-3"><FaMoon/></span>
                <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 rounded-md my-1 ml-8">resume</button>
                </div>
            
        </nav>
    );
}
export default Navbar