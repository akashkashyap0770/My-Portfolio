import weather from '../assets/weather3.jpg';
import clock from '../assets/clock.jpg';
import facebook from '../assets/social-media-background-facebook.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Projects = () => {

  const navigate = useNavigate();
  const title = ('My Projects');

  const data = {
    project1: "Weather App",
    project2: "Digital Clock's",
    project3: "Facebook UI Clone",
  } 

return (
    <>
    <div className="main-container pt-8" style={{height: "100vh"}}>
      <h1 className="text-5xl font-bold text-center underline">{title}</h1>
      <button onClick={()=> navigate(-1)} className='flex relative bottom-10 left-10 text-lg bg-[#66000000] border-2 border-black  rounded px-2 py-2 space-x-1'><i className="fa-solid fa-arrow-left"></i><p className='flex text-sm'>Prev Page</p></button>

      <div className="services-container justify-center text-center items-center flex mt-8 space-x-20">

       <div className="services1 shadow-lg rounded-xl bg-slate-300 p-6 text-center cursor-pointer hover:bg-gray-200 space-y-6">
        <h1 className="text-4xl">{data.project1}</h1>
        <img src={weather} alt="" className= 'h-60 w-fit rounded'/>
        <Link to='https://weather-application-007.netlify.app/'>
        <i className="fa-solid fa-arrow-up-right-from-square text-2xl pt-5"></i></Link>  
        </div>

       <div className="services2  shadow-lg rounded-xl bg-slate-300 p-6 text-center cursor-pointer hover:bg-gray-200 space-y-6">
       <h1 className="text-4xl">{data.project2}</h1>
       <img src={clock} alt="" className= 'h-60 w-fit rounded'/>
         <Link to='#'>
         <i className="fa-solid fa-arrow-up-right-from-square text-2xl pt-5">
        </i></Link> 
       </div>

       <div className="services3  shadow-lg rounded-xl bg-slate-300 p-6 text-center cursor-pointer hover:bg-gray-200 space-y-6">
       <h1 className="text-4xl">{data.project3}</h1>
       <img src={facebook} alt="" className= 'h-60 w-fit rounded'/>
         <Link to='#'>
         <i className="fa-solid fa-arrow-up-right-from-square text-2xl pt-5">
        </i></Link> 
        
       </div>

      </div>
    </div>
    </>
)
}

export default Projects;