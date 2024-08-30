import React from "react";
import { GITHUB_LINK } from "../utils/Links";
import SocialProfileClass from "./SocialProfileClass";

class UserProfileClass extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const {name, bio, avatar_url} = this.props.data

    return (
      <div className="flex flex-col items-center justify-center gap-[20px] pt-0 px-[15px] pb-[10px]">
        <a href={GITHUB_LINK} className="flex flex-col items-center justify-center gap-[5px]"></a>
        <img src={avatar_url} alt={name} className="w-[180px] h-[180px] rounded-[50%] border-none cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out drop-shadow-md" />
        <h1 className="text-xl font-bold text-[#551A8B]">{name}</h1>
        <p className="text-[16px] text-[#575757] font-medium">{bio}</p>
        <SocialProfileClass />
      </div>
    )
  }

}

export default UserProfileClass;