import { useState } from "react"
import ContactUs from "../utils/images/contact-us.png"

const Contact = () => {

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const textData = (e) => {
    setDataForm(e.target.value)
  }

  const submitted = (e) => {
    e.preventDefault()
    alert("Thanks for contacting with DelishFeast, We will reply ASAP.")
    setDataForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="w-[100%] flex flex-wrap justify-evenly items-center">
      <div>
        <img className="w-[90%] object-cover" src={ContactUs} alt="ContactUs" />
      </div>

      <section className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-[3rem] font-semibold">Contact Us</h1>
        </div>

        <div>
          <form action="" onSubmit={submitted} className="flex flex-col justify-center items-center p-[10px]">
            <input className="w-[300px] bg-transparent text-[15px] px-[10px] py-[8px] m-[10px] rounded-md shadow-sm border border-[#818181] outline-none focus:border-[darkorange]" type="text" placeholder="Name" onChange={textData} value={dataForm.name} required />

            <input className="w-[300px] bg-transparent text-[15px] px-[10px] py-[8px] m-[10px] rounded-md shadow-sm border border-[#818181] outline-none focus:border-[darkorange]" type="email" placeholder="Email" onChange={textData} value={dataForm.email} required />

            <textarea className="w-[300px] bg-transparent text-[15px] px-[10px] py-[8px] m-[10px] rounded-md shadow-sm border border-[#818181] outline-none focus:border-[darkorange]" type="text" placeholder="Type your Message here..." onChange={textData} value={dataForm.message} required />
            
            <button className="text-white bg-[#d97919] text-[1.2rem] font-semibold py-2.5 px-5 border-none rounded-[5px] cursor-pointer hover:bg-[darkgreen] transition-all 0.3s ease-in-out" type="submit" >Submit</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact;