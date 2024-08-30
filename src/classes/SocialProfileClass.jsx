import React from 'react';
import { LINKEDIN_LINK, GITHUB_LINK,
  EMAIL_LINK, } from "../utils/Links";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

class SocialProfileClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="text-[2rem] w-full flex justify-center items-center gap-[7%]">
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
    )
  }
}

export default SocialProfileClass;