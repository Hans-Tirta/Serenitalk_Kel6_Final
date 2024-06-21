import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram, AiFillInstagram } from 'react-icons/ai'

const socialLinks = [
  {
    path: "",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "",
    icon: <AiFillInstagram className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/contactus",
    display: "Contact Us",
  },
  {
    path: "/therapists",
    display: "Search a Therapist",
  },
  {
    path: "/",
    display: "Others",
  },
];


const Footer = () => {

  
  return <footer className='pb-16 pt-10'>
    <hr className='border-t-3 border-black mb-8' />
    <div className='container'>
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
        <div>
          <img src={logo} alt="" />
          <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
            Developed by Kelompok 6
          </p>

          <div className='flex items-center gap-3 mt-4'>
            {socialLinks.map((link, index) => (
              <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                {link.icon}
              </Link>
            ))}
          </div>

        </div>

        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
          Page Links
          </h2>

          <ul>
            {quickLinks01.map((item, index) => (
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
          Connect With Us
          </h2>

          <ul>
            <p>Facebook: @serenitalk</p>
            <p>Twitter: @SerenitalkID</p>
            <p>Youtube: @SerenitalkYT</p>
          </ul>
        </div>
      </div>
    </div>

  </footer>
}

export default Footer