import { useState } from 'react';
import delishFeastLogo from '../utils/images/delish-feast-logo.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiShoppingCart } from "react-icons/fi";
import useOnlineStatus from '../hooks/useOnlineStatus';
import { HiOutlineStatusOnline } from "react-icons/hi";
import { HiOutlineStatusOffline } from "react-icons/hi";

const Header = () => {

  const [log, setLog] = useState('LogIn');
  const isOnline = useOnlineStatus()

  const toggle = () => log === 'LogIn' ? setLog('LogOut') : setLog('LogIn');

  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className='flex justify-between m-4 h-[6rem] border-b-2 shadow-[0_15px_40px_20px_rgba(40,44,63,.15)] items-center'>
      <div className='pl-20'>
        <Link to={"/"}><img src={delishFeastLogo} alt="delishFeastLogo" className='h-20 rounded-full ' /></Link>
      </div>
      <div>
        <ul className="flex gap-8 text-[#3d4152] font-medium text-[20px] items-center pr-7">
          <Link to={"/"}><li className='hover:text-[#bc6c25] transition-all'>Home</li></Link>
          <Link to={"/about"}><li className='hover:text-[#bc6c25] transition-all'>About</li></Link>
          <Link to={"/contact"}><li className='hover:text-[#bc6c25] transition-all'>Contact</li></Link>
          <div className='flex items-center relative'>
            <Link to={"/cart"}><FiShoppingCart className='hover:text-[#bc6c25] transition-all' /></Link>
            {cartItems.length > 0 && <span className='bg-green-300 rounded-full px-2 text-[16px]'>{cartItems.length}</span>}
          </div>
          <button onClick={toggle} className='hover:text-[#bc6c25] transition-all'>{log}</button>
          {isOnline ? <HiOutlineStatusOnline className='text-green-500' /> : <HiOutlineStatusOffline className='text-red-600' />}
        </ul>
      </div>
    </div>
  )
}

export default Header;