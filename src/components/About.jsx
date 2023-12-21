import React from 'react';
import AvatarImage from '../assets/Avatar.jpg';
import { useNavigate } from 'react-router-dom';

const About = () => {
  
  const navigate = useNavigate();
  const title = ('About Me');
      const data = ({
        image: AvatarImage,
        title: "FRONT-End DEVELOPER",
        desc1: `I am a Front End Developer and passionate about my work with React and Accessibility with HTML, CSS, Bootstrap, JavaScript and start with simple five pages site with information on work I does. The projects using with React Application on Weather Application or Personal Portfolio.`,

        desc2: `I complete my internship in Java/J2SE with Analyze InfoTech from January 02 2023 to March 31 2023).`,
        readMore: {
            title: "Read More",
        }
    });


    return(
          <>
          <div className="main-container border bg-gray-200" style={{height: "100vh"}}>

            <h1 className="text-5xl font-bold text-center pb-5 underline pt-8">{title}</h1>
            <button onClick={()=> navigate(-1)} className='flex relative bottom-14 left-10 text-lg bg-[#66000000] border-2 border-black rounded px-2 py-2 space-x-1'><i className="fa-solid fa-arrow-left"></i><p className='flex text-sm' style={{transition: "all 0.2s "}}>Prev Page</p></button>
          
           <div className='flex items-center pt-6'>
            <div className='flex w-full justify-center'>
              <img className='rounded-full shadow-lg h-96 w-96 px-3 py-3' src={data.image} alt="akash kashyap" style={{border: "6px solid black"}}/>
            </div>

            <div className='w-full flex justify-center'>
             <div className='space-y-4 pr-44'>
              <h1 className='text-5xl font-bold'>{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className='text-blue-500 underline'>{data.readMore.title}</button>
             </div>
            </div>
          </div>
          </div>
          </>
    )
}
export default About;