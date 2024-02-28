import search from '../assets/search.svg'

const FIlterComponent = () => {
  return (
    <div className="filter rounded ">

    <div className="w-full">
<h3 className="text-center mt-10 text-3xl text-white">Filters</h3>
    </div>

    <div className="mt-2 w-full p-3">
<div className="text-white flex items-center justify-between w-full">
<p className="text-gray-400 text-sm">Filters Applied</p>
<p className="text-gray-50 text-base">Clear All</p>
</div>
<div className="w-full">

<input type="text" className="w-full p-3 bg-[#333] rounded" />
</div>

    </div>






    <div className='w-full p-2'>
<span className='text-white font-semibold text-[15px]'>stock</span>
<div className='w-full relative'>
<input type="text" placeholder='$ tICKER'  className='px-2 py-1 w-full bg-[#333] rounded ' />
<img src={search} alt=""  className='absolute w-4 right-[10px] top-[20%]'/>

</div>
    </div>
    <div className='flex items-center mt-3 justify-evenly text-white text-sm font-light  w-full  '>
<div className='border-r pr-4'>
<p>Health care</p>
<p>Health care</p>
<p>Health care</p>
<p>Health care</p>
<p>Health care</p>
</div>
<div className='border-r pr-4'>
<p>Health care</p>
<p>Health care</p>
<p>Health care</p>
<p>Health care</p>
<p>Health care</p>
</div>
</div>

    </div>


  )
}

export default FIlterComponent