import React from 'react';
import { GITHUB_USER_API } from '../utils/Links';
import { GITHUB_USERNAME } from '../utils/Links';
import UserProfileClass from './UserProfileClass';

class ProfileClass extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userInfo: {
        name : "Anandaruban",
        bio : "React.js",
        avatar_url: "https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg"
      }
    }
  }

  async getProfile() {
    try {
      const data = await fetch(GITHUB_USER_API + GITHUB_USERNAME)
      const obj = await data.json()

      this.setState({
        userInfo: obj,
      })
    }
    catch (error) {
      console.error("Failed to get profile", error);
    }
  }

  componentDidMount() {
    this.getProfile();
  }

  render() {

    const {userInfo} = this.state

    return (
      <div className="flex justify-center items-center gap-[40px]">
        <div className="w-full overflow-hidden bg-white flex flex-col items-center justify-center gap-[20px] rounded-md p-[15px] shadow-2xl">
          <h1 className="text-[28px] font-bold text-center text-[#1e1e1e] overflow-y-hidden">About Me</h1>
          <UserProfileClass data={userInfo} />
        </div>        
      </div>
    )
  }
}

export default ProfileClass;