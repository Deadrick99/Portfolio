// file contains portfolio code 
import { useRef, useEffect,useState } from "react"
import { useInView } from "react-intersection-observer"
const Portfolio =() =>{
    const {ref: myRef,inView:portTitleVis} = useInView()
    return(
        <section className="h-screen" >
            <p className={`text-center text-white ${portTitleVis ? ' animate-slideRight' :''}`} ref={myRef}>Hi</p>
        </section>
    )
}
export default Portfolio