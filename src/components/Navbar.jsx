import React, { useState } from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import { BsCartFill, BsFillSave2Fill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdAccountBalanceWallet, MdFavorite, MdHelpCenter } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

const Navbar = () => {

    const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between p-4'>
        <div className='flex items-center'>
            <div className='cursor-pointer'>
                <AiOutlineMenu size={30} onClick={()=>setNav(!nav)}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Best <span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden md:flex items-center bg-gray-200 rounded-full text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>

        {/* Search Input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input className='bg-transparent p-2 focus:outline-none' type="text" placeholder='Search Food...' name="" id="" />
        </div>

        {/* Card Button */}
        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
            <BsCartFill size={25} className='mr-2'/> Cart
        </button>

        {/* MObile Menu */}
        {/* Overlay */}

        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
        

        {/* side drawer Menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={()=>setNav(!nav)}/>

        <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>

        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 px-2 flex'>
                    <TbTruckDelivery size={25} className='mr-4'/> Orders
                </li>
                <li className='text-xl py-4 px-2 flex'>
                    <MdFavorite  size={25} className='mr-4'/> Favorite
                </li>
                <li className='text-xl py-4 px-2 flex'>
                    <MdAccountBalanceWallet size={25} className='mr-4'/> Wallet
                </li>
                <li className='text-xl py-4 px-2 flex'>
                    <MdHelpCenter size={25} className='mr-4'/> Help
                </li>
                <li className='text-xl py-4 px-2 flex'>
                    <AiFillTag size={25} className='mr-4'/> Promotions
                </li>
                <li className='text-xl py-4 px-2 flex'>
                    <BsFillSave2Fill size={25} className='mr-4'/> Best Ones
                </li>
                <li className='text-xl py-4 px-2 flex'>
                    <FaUserFriends size={25} className='mr-4'/> Invite Friends
                </li>
            </ul>
        </nav>

        </div>

    </div>
  )
}

export default Navbar