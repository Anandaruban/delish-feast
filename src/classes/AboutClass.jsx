import React from 'react';
import burgerimage from "../utils/images/burger-image.png"
import ProfileClass from './ProfileClass';

class AboutClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showProfile: false,
    }
  }

  render() {

    const {showProfile} = this.state

    return (
      <div className="flex flex-col justify-center items-center gap-[40px]">
        <div className="flex flex-col justify-center flex-wrap gap-[40px]">
          <button
            onClick={() => this.setState({showProfile: !showProfile})} 
            className="p-4 shadow-2xl bg-[#5e548e] text-white font-semibold text-lg rounded-md hover:bg-[#be95c4] transition-all">
              {showProfile ? "Hide My Profile" : "Show My Profile"}
          </button>
        </div>
        {showProfile && (
            <ProfileClass />
          )}
  
        <section className="flex items-center flex-wrap gap-[40px]">
          <div className="text-[4rem] font-medium w-[38rem]">
            <p className="h-20">Hi, Guest User</p>
            <div>
              <p className="">Welcome to <br />The world of<br />Delish & Fresh Food</p>
            </div>
            <p className="text-[30px] w-[48rem]">Better you will feel if you eat a DelishFeast healthy meal</p>
          </div>
  
          <div>
            <img src={burgerimage} alt="burgerImage" />
          </div>
        </section>
      </div>
    )
  }

}

export default AboutClass;