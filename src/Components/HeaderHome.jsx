import line from '../assets/Line.svg';
import pall from '../assets/Group 103.svg';
import search from '../assets/search.svg';

const HeaderHome = () => {
  return (
    <div className="header mt-3 w-full mx-4 md:m-0 flex items-center justify-between">
      <div className='flex items-center gap-3'>
        <img src={line} alt="" className="hidden md:block" />
        <h2 className='text-2xl md:text-5xl text-white font-bold' >ALERTS</h2>
      </div>

      <div className='w-3/4 max-md:w-3/4  flex gap-2'>
        <div className='w-full relative'>
          <input
            type="text"
            placeholder='Search by...'
            className='p-2 w-full bg-[#222] rounded text-white'
          />
          <img src={search} alt="" className='absolute right-[10px] top-[20%]' />
        </div>
        <img src={pall} alt="" className=' md:block' />
      </div>
    </div>
  );
};

export default HeaderHome;
