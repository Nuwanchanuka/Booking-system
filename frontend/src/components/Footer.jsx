import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'> 
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* -----Left Side----- */}
        <div>
             <img src={assets.logo} alt=""></img>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        {/* -----Center----- */}
        <div>
            <p>COMPANY</p>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
                    
                 
            </ul>

        </div>

        {/* -----Right Side----- */}
        <div>
           <p>GET IN TOUCH</p>
              <ul>
                <li>0717511510</li>
                <li>chanukanuwan12345@gmail.com</li>
              </ul>  
        </div>
        <div>
            {/* -----Copy Right----- */}
            <div>
                <hr />
                <p>Copyright 2024@ Prescription All Right Reserved</p>
            </div>
        </div>

     </div>

    </div>
  )
}

export default Footer
