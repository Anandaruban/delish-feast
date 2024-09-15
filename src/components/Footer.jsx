import delishFeastLogo from '../utils/images/delish-feast-logo.png'
import { LINKEDIN_LINK, GITHUB_LINK,
  EMAIL_LINK, } from "../utils/Links";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div className="text-center text-sm font-semibold border-t-2 pt-5 mt-5 flex items-center pl-20">
      <div href="#" className="flex items-center justify-center mb-5 text-xl font-semibold text-gray-900">
          <img src={delishFeastLogo} className="h-12 mr-3 rounded-full " alt="Landwind Logo" />
          <h1 className=''>Delish Feast</h1>
      </div>

      <div className='flex items-center w-full pl-10'>
        <span className=" text-sm text-center text-gray-500">© {year} Delish Feast. </span>
        <span className=" text-sm text-center text-black pl-4">Created By ANANDARUBAN</span>
      </div>

      <div className="text-[2rem] w-full flex justify-center items-center gap-[7%] mb-4 pt-1">
        <a href={LINKEDIN_LINK} target="_blank">
          <span className="text-white bg-[#0a66c2] flex items-center justify-center h-[2.6rem] w-[2.6rem] rounded-[50%] text-[1.2rem] leading-[3rem] hover:scale-[1.05] transition-transform duration-300 ease-in-out">
            <SiLinkedin />
          </span>
        </a>
        <a
          href={GITHUB_LINK}
          className="text-white bg-[#333] flex items-center justify-center h-[2.6rem] w-[2.6rem] rounded-[50%] text-[1.2rem] leading-[3rem] hover:scale-[1.05] transition-transform duration-300 ease-in-out"
          target="_blank"
        >
          <span>
            <SiGithub />
          </span>
        </a>
        <a
          href={"mailto:" + EMAIL_LINK}
          className="text-white bg-[#ea4335] flex items-center justify-center h-[2.6rem] w-[2.6rem] rounded-[50%] text-[1.2rem] leading-[3rem] hover:scale-[1.05] transition-transform duration-300 ease-in-out"
          target='_blank'
        >
          <span>
            <SiGmail />
          </span>
        </a>
      </div>
    </div>
  )
}

export default Footer;