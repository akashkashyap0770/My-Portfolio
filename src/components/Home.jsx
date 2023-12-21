import { useEffect, useRef } from "react";
import Typed  from 'typed.js';
import { Link } from "react-router-dom";

import Image from '../assets/Avatar.jpg';
import backgroundImage from '../assets/p3.jpg';
import resume from '../assets/resume.pdf';

function MainHeader() {

    const name = ("AKASH KASHYAP"); 

    const anim = useRef(null);
    useEffect(() => {
    const typed = new Typed(anim.current, {
        strings: ["FRONT END DEVELOPER"], // Strings to display
        // Speed settings, try different values until you get good results
        loop: true,
        startDelay: 100,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 300,
        smartBackspace: true,
        showCursor: true,
        cursorChar: "!",
    });
    // Destroying
    return () => {
        typed.destroy();
      };
    }, []);

  return (
    <>
    <div className="flex text-white border"> 
    <div className="" style={{height:"100vh",backgroundImage: `url(${backgroundImage})`,backgroundSize: "100%", width: "100%", backgroundPosition: "center center", backgroundRepeat: "no-repeat"}}>
    
    <div className='flex w-full text-white pt-36'>
        <div className='space-y-2 pl-40'>
        <h3 className='text-3xl font-semibold'>Hi, I Am</h3>
        <h1 className='text-6xl font-bold text-orange-500'>{name}</h1>
        <h2 className='text-3xl font-semibold'>I Am <span ref={anim}></span></h2>
        <p className='text-lg'>I am a fresher looking for an Opportunity for foster my skills and associat    with an Organization where I can transcend my personal achievement with Organization growth.</p>

        <div className="icons-container flex space-x-6 pt-5 text-3xl">
        <Link to="https://github.com/akashkashyap0770" target="_blank" className='flex border hover:bg-[#333] px-2 py-2 w-14 h-14 rounded-full justify-center items-center bg-[#66000000] cursor-pointer'>
        <i className="fa-brands fa-square-github"></i>
        </Link>

        <Link to="https://www.linkedin.com/in/akashkashyap0770/" target="_blank" className='flex border hover:bg-[#0076b5f3] px-2 py-2 w-14 h-14 rounded-full justify-center items-center bg-[#66000000] cursor-pointer'>
        <i class="fa-brands fa-linkedin"></i>
        </Link>

        <Link to="https://mail.google.com/mail/u/0/#inbox" target="_blank" className='flex border hover:bg-red-500 px-2 py-2    w-14 h-14 rounded-full justify-center items-center bg-[#66000000] cursor-pointer'>
        <i class="fa-regular fa-envelope"></i>
        </Link>

        <Link to="https://www.instagram.com/this__is_akash0770/" target="_blank" className='flex border hover:bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-600 ...  px-2 py-2 w-14 h-14 rounded-full justify-center items-center bg-[#66000000] cursor-pointer'>
        <i class="fa-brands fa-instagram"></i>    
        </Link>  
        </div>

        <br/>

        <div className='pb-4 pt-2 text-black space-x-6'>
        <a href={resume} download={resume} className="px-4 py-3 bg-orange-600 hover:bg-orange-500 shadow rounded text-lg font-semibold">
        <i className="fa-solid fa-download mx-2"></i>
        Resume
        </a>
        
        <Link to="/contact" className='px-4 py-3 bg-orange-600 hover:bg-orange-500 shadow rounded text-lg font-semibold'>
        <i className="fa-solid fa-briefcase mx-2"></i>
        Hire Me
        </Link>
        </div>
        </div>

        <div className='flex w-full justify-center'>
        <img className='px-3 py-3 rounded-full h-96 w-96' src={Image} alt="" style={{border: "5px solid white"}}/>
        </div>

        </div>
    </div>
    </div>
    </>
  )
}

export default MainHeader;
