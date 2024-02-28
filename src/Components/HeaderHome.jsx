import line from '../assets/Line.svg'
import pall from '../assets/Group 103.svg'
import search from '../assets/search.svg'
const HeaderHome = () => {
  return (
    <div className="header mt-3 w-full ml-10 flex items-center  justify-between">
<div className='flex items-center gap-3'>
<img src={line} alt="" />
<h2 className='text-5xl text-white font-bold' >ALERTS</h2>
</div>

<div className='w-[70%] flex gap-2'>
<div className='w-full relative'>
<input type="text" placeholder='Search by...'  className='p-2 w-full bg-[#222] rounded ' />
<img src={search} alt=""  className='absolute right-[10px] top-[20%]'/>
</div>
<img src={pall} alt="" />
</div>
</div>
  )
}

export default HeaderHome