import React from 'react'
import "./Home.css";
import {Link} from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
function Home() {
  const movetogithub=()=>{
    // window.location.href=props.link;
    window.open('https://github.com/1ntrested','_blank');
  }
  const movetoLinkedin=()=>{
    // window.location.href=props.link;
    window.open('https://www.linkedin.com/in/balraj-singh-06b34326b/','_blank');
  }
    const movetoX=()=>{
    // window.location.href=props.link;
    window.open('https://twitter.com/ibalraj12','_blank');
  }
  return (
    <div className='content'>
        <div className="class-img">
            <img  className="image"  src="/src/assets/newpic.png" alt=''></img>
        </div>
        <div className="class-content">
            <h1 className='lists'>Hi,<span id='name' className='lists'><TypeAnimation sequence={[`I'm Balraj`,1000,""]} speed={20}  style={{whiteSpace:'pre-line'}} repeat={Infinity}/></span></h1>
            <h2 className='lists'>I'm a Full Stack Developer</h2>
            <ul>
    <li id="t" className='lists'><span class="emoji">☕</span>Fueled by coffee</li>
    <li id="t"  className='lists'><span class="emoji">🌎</span>Based in the India</li>
    <li id="t"  className='lists'><span class="emoji">👨‍🎓</span> Student</li>
    <li id="t" className='lists'><span class="emoji">📧</span><Link style={{textDecoration:'none'}} className='lists' to="mailto:recipient@domain.com?cc=other@domain.com">ibalraj12@gmail.com</Link></li>
        </ul>
        <div className='icons'>
        <Link className='lists' to='/' onClick={movetogithub}><i class="fa-brands fa-github fa-2xl"></i></Link>
        <Link className='lists' to='/' onClick={movetoLinkedin}><i class="fa-brands fa-linkedin-in fa-2xl"></i></Link>
        <Link className='lists' to='/' onClick={movetoX}><i class="fa-brands fa-x-twitter fa-2xl"></i></Link>
        </div>
        </div>
    </div>
  )
}

export default Home
