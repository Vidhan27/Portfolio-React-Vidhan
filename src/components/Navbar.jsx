import React from 'react'
import logo from "../assets/VP.png"
import {FaLinkedinIn, FaGithub , FaInstagram, FaTwitter} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className='h-20' src={logo} alt='logo' />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/vidhan-prajapati-a04a41255/"><FaLinkedinIn/></a>
        <a href="https://github.com/Vidhan27"><FaGithub/></a>
        <a href="https://x.com/VidhanPraj88102"><FaTwitter/></a>
        <a href=""><FaInstagram/></a>
      </div>
    </nav>
  )
}

export default Navbar
