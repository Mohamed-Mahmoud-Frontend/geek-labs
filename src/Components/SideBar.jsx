import logo from '../assets/street suite logo-04.svg'
import icons1 from '../assets/icons Q2.svg'
import icons2 from '../assets/Group 95.svg'
import icons3 from '../assets/Group 97.png'
import icons4 from '../assets/Group 99.png'
import icons5 from '../assets/Group 98.png'
import menu from '../assets/menu.svg'
import icons6 from '../assets/Group 101.png'
import { useState } from 'react'
const SideBar = () => {
const [hide, setHide] = useState(true);
const handleHidden= ()=> {
  setHide(!hide)
}
  return (
    <div className=" ">
    <div className='max-lg:hidden max-md:block' onClick={handleHidden}>
<img src={menu} className='w-5 absolute top-10 ' alt="" />
    </div>

    <div className={`sideBar max-md:${hide ? 'hidden' : 'block'}`}>
    <div className='logo'  >

    <img width="60px" src={logo} alt=""  onClick={handleHidden}/>
    </div>
<div className='flex flex-col justify-between h-screen'>
    <div className='groupIcon'>
    <div className='icons hover:text-[#53ACFF]'>
    <img className='' src={icons1} alt="" />
    <p  className='text-gray-50 hover:text-[#53ACFF] '>Alert</p>

    </div>
    <div className='icons'>
    <img  src={icons2} alt="" />
    <p  className='text-gray-50  hover:text-[#53ACFF] '>Training</p>

    </div>
    <div className='icons iconsHover  '>

        <img src={icons3} alt=""  />
        <p className='text-gray-400 '>Automation</p>

    </div>




    <div className='icons iconsHover'>
    <img  src={icons4} alt="" />
    <p className='text-gray-400'>Portfolio</p>

    </div>
    <div className='icons iconsHover'>
    <img  src={icons5} alt="" />
    <p className='text-gray-400'>Trading</p>

    </div>
    </div>


    <div className='profile flex gap-5 flex-col '>
    <div className='flex gap-3'>
    <img   src={icons6} alt="" />
    <div className='flex flex-col '>
    <p className='text-white '>MonI Roy</p>
    <p className='text-gray-300 '>Beginner</p>
    </div>
    </div>
<div className=''>
<p className='text-gray-700'>street suite. 2.0</p>
</div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default SideBar