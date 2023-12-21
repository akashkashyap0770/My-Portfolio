import { Link } from 'react-router-dom';
import bgGround from '../assets/banner1.jpg';
import { useNavigate } from 'react-router-dom';


const Skills = () => {

    const navigate = useNavigate();
    const title = ('My Skills'); 
    const data = {
      title: "I love these Technologies",
      desc1: "I like to work on HTML, CSS, Bootstrap, JavaScript, React to improve idea's and skills. Using these Technology I complete some mini projects like creating User Interface website, Animation-Timing-Function Property mastery with HTML,CSS. And performing action with using javaScript through Digital Clock Application.",
      desc2: " As a front End Developer my primary focus on React an Front End Development to accessibility an inclusion of React and JavaScript with my main parameter of work profile."

    }

    return (
        <>
        <div className="main-container border bg-gray-200 text-white" style={{backgroundImage: `url(${bgGround})`,backgroundSize: "100%", width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", opacity: "0.9" , height: "100vh"}}>

          <h1 className="text-5xl font-bold text-center underline pt-10">{title}</h1>
          <button onClick={()=> navigate(-1)} className='flex relative bottom-10 left-10 text-lg bg-[#66000000] border-2 rounded px-2 py-2 space-x-1'><i className="fa-solid fa-arrow-left"></i><p className='flex text-sm'>Prev Page</p></button>

         <div className="box-container flex pt-20">
          <div className="flex w-full px-20">
           <div className="space-y-6 px-10">
           <h1 className="text-4xl font-bold">{data.title}</h1>
            <p className="text-lg">{data.desc1}   
            <br/><br/>
            {data.desc2} 
            </p>
           </div>

          </div>

          <div className="flex w-full px-20 justify-center">
            <div className="flex flex-wrap space-x-10 w-2/3">
              <Link to="https://en.wikipedia.org/wiki/HTML5" target='_blank' className="px-2 py-2 w-24 h-24 rounded-full text-center justify-center items-center bg-[#66000000] cursor-pointer hover:bg-orange-500">
                <i className="fa-brands fa-html5 text-5xl text-white"></i>
                <p>HTML</p>
              </Link>

              <Link to="https://en.wikipedia.org/wiki/CSS" target='_blank' className="px-2 py-2 w-24 h-24 rounded-full text-center justify-center items-center bg-[#66000000] cursor-pointer hover:bg-blue-500">
              <i class="fa-brands fa-css3-alt  text-5xl text-white"></i>
              <p>CSS</p>
              </Link>

              <Link to="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)" target='_blank' className="px-2 py-2 w-24 h-24  rounded-full text-center justify-center items-center bg-[#66000000] cursor-pointer hover:bg-purple-500">
              <i class="fa-brands fa-bootstrap  text-5xl text-white"></i>
              <p>Bootstrap</p>
              </Link>

              <Link to="https://en.wikipedia.org/wiki/JavaScript" target='_blank' className="px-2 py-2 w-24 h-24 rounded-full text-center justify-center items-center bg-[#66000000] cursor-pointer hover:bg-yellow-500" style={{position: "relative", left: "30px"}}>
              <i class="fa-brands fa-css3-alt  text-5xl text-white"></i>
              <p>JavaScript</p>
              </Link>

              <Link to="https://en.wikipedia.org/wiki/React_(software)" target='_blank' className="px-2 py-2 w-24 h-24 rounded-full text-center justify-center items-center bg-[#66000000] cursor-pointer hover:bg-sky-500" style={{position: "relative", left: "30px"}}>
              <i class="fa-brands fa-react  text-5xl text-white"></i>
              <p>React</p>
              </Link>

              <Link to="https://en.wikipedia.org/wiki/Java_(programming_language)" target='_blank' className="px-2 py-2 w-24 h-24 rounded-full text-center justify-center items-center bg-[#66000000] cursor-pointer hover:bg-gray-500" style={{position: "relative", left: "100px"}}>
              <i class="fa-brands fa-java  text-5xl text-white"></i>
              <p>Java</p>
              </Link>
            </div>
          </div>
         </div>
        </div>
        </>
    )
}

export default Skills;