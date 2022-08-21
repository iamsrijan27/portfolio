import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef} from "react"

export default function Intro() {

  const textRef = useRef();
  useEffect(()=>{
     //console.log(textRef)
     init(textRef.current,{
       showCursor: true,
       backDelay:1500,
       strings: ["Programmer Analyst", "Application Developer", "@Cognizant"],
     });
  },[])

  return (
    <div className="intro">
       <div className="left">
          <div className="imageContainer">
                <img src="assets/man.jpg" alt=""/>
          </div>
       </div>
       <div className="right">
           <div className="wrapper">
               <h2>Hi There, I'm</h2>
               <h1>Srijan Jha</h1>
              <h3>Software Engineer <span ref={textRef}></span></h3>
           </div>
           <a href="#portfolio">
               <img src="assets/down.png" alt=""/>
           </a>
       </div>
    </div>
  )
}
