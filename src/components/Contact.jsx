import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  
  const navigate = useNavigate();
  const title = ('Contact Us');

  // Input  Code:-
  const handleInput = (e) => {
      e.target.value;
      console.log(e.target.value);
  }

  // Email Code
  const handleEmail = (e) => {
       e.target.value;
       console.log(e.target.value);
  }

  // TextArea Code
  const handleTextArea = (e) => {
    e.target.value;
    console.log(e.target.value);
}
  
  // Submit Button Code:-
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("form submit");
  } 

    return(
        <>
        <div className="main-container text-white bg-black items-center" style={{height: "100vh", width: "100%"}}>
          <h1 className="text-5xl font-bold text-center underline pt-10">{title}</h1>
          <button onClick={()=> navigate(-1)} className='flex relative bottom-10 left-10 text-lg bg-[#66000000] border rounded px-2 py-2 space-x-1'><i className="fa-solid fa-arrow-left"></i><p className='flex text-sm'>Prev Page</p></button>
         
         <div className="main-container flex pt-10 h-fit items-center">

         <div className="px-20 w-full pb-10">

          <div className="space-y-8 px-20">
          {/* <h1 className="text-4xl" style={{letterSpacing:"1px"}}>Contact me</h1> */}
          <i className="fa-solid fa-paper-plane flex text-red-600 text-xl"><p className="px-4 text-white hover:text-red-500 cursor-pointer" style={{letterSpacing:"2px"}}>contact@example.com</p></i>
          <i className="fa-solid fa-square-phone flex text-red-600 text-xl"><p className="px-4 text-white hover:text-red-500 cursor-pointer" style={{letterSpacing:"2px"}}>91+6386420752</p></i>
          <i className="fa-brands fa-square-whatsapp flex text-red-600 text-xl"><p className="px-4 text-white hover:text-red-500 cursor-pointer" style={{letterSpacing:"2px"}}>91+7565078777</p></i>
          
          <div className="icons-container flex space-x-4 text-xl">
                <Link to="https://github.com/akashkashyap0770" target="_blank" className='flex border hover:bg-[#333] px-2 py-2 w-10 h-10 rounded-full justify-center items-center bg-[#66000000] cursor-pointer'>
                <i class="fa-brands fa-square-github"></i>
                </Link>

                <Link to="https://www.linkedin.com/in/akashkashyap0770/" target="_blank" className='flex border hover:bg-[#0076b5f3] px-2 py-2 w-10 h-10 rounded-full justify-center items-center bg-[#66000000] cursor-pointer'>
                <i class="fa-brands fa-linkedin"></i>
                </Link>

                <Link to="https://mail.google.com/mail/u/0/#inbox" target="_blank" className='flex border hover:bg-red-500 px-2 py-2 w-10 h-10 rounded-full justify-center items-center bg-[#66000000] cursor-pointer'>
                <i class="fa-regular fa-envelope"></i>
                </Link>

                <Link to="https://www.instagram.com/this__is_akash0770/" target="_blank" className='flex border hover:bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-600 ...  px-2 py-2 w-10 h-10 rounded-full justify-center items-center bg-[#66000000] cursor-pointer'>
                <i class="fa-brands fa-instagram"></i>    
                </Link>  
                </div>

          </div>

         </div>

        <form action="https://formspree.io/f/moqgaljz" className="flex w-full text-white-500 space-y-6 space-x-6 pt-10">

          <div className="msg space-y-10 w-full text-lg">  
          <div><input type="text" className="bg-gray-800 h-10 border-none rounded pl-2" onChange={handleInput} placeholder="Enter your Name" style={{width: "75%",border: "2px solid white"}}/></div>

          <div><input onChange={handleEmail} type="email" className="bg-gray-800 h-10 border-none rounded pl-2" placeholder="Enter your Email" style={{width: "75%",border: "2px solid white"}}/></div>

          <div><textarea onChange={handleTextArea} className="bg-gray-800 h-20 border-none rounded pl-2" aria-colspan="3" aria-rowspan="7" overflow="scroll" placeholder="Enter your Message" style={{width: "75%",border: "2px solid white"}}/></div>

          <div>
          <button onClick={handleSubmit} type="submit" value="send" className="bg-red-600 rounded px-6 py-2 hover:bg-red-500"style={{width: "75%", border: "2px solid white"}}>Submit</button>
          </div>
          </div>

        </form>

         </div>
        </div>
         
        </>
    )
}

export default Contact;