import { pageLinks } from "../data.jsx";
import { NavLink, Link } from "react-router-dom";

import logoImage from '../assets/Avatar.jpg';
const logo = ("My Portfolio");


function Header() {

  return (
    <>
    <header className="header-main border flex justify-between h-16 px-40 items-center">
        
        <div className="logo flex space-x-2">  
        <Link to="/" className="flex item-center justify-center">
        <img className='rounded-full shadow-lg h-12 w-12 px-1 py-1' src={logoImage} alt="" style={{border: "2px solid black"}}/>
        </Link>
        <h1 className="flex text-4xl font-bold pt-1">{logo}</h1>
        </div>
    
        <div className="header flex space-x-10">
        {pageLinks.map((link)=> {
             return (
                <div key={link.id}>
                <NavLink to={link.to}className={({isActive})=> `hover:text-orange-500 ${isActive? "text-orange-600" : "text-gray-800"}`} style={{transition: "all 0.2s linear"}}>{link.text}</NavLink> 
                </div>
             )
            })}
        </div>  
        
        {/* <button className="flex items-center pr-10">
        <i className="fa-solid fa-circle-half-stroke text-2xl"></i>
        </button> */}
    </header>
    </>
  )
}

export default Header;
