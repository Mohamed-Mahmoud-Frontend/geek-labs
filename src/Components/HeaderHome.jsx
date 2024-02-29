import line from '../assets/Line.svg';
import pall from '../assets/Group 103.svg';
import search from '../assets/search.svg';

const HeaderHome = () => {
  return (
    <div className="header mt-3 w-full mx-4 md:m-0 flex items-center justify-between">
      <div className='flex items-center gap-3 max-md:gap-1'>
        <img src={line} alt="" className="max-md:w-1 " />
        <h2 className='text-5xl max-md:text-xl text-white font-bold max-md:' >ALERTS</h2>
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

        <img src={pall} alt="" className='max-md:w-10 ' />

      </div>
    </div>
  );
};

export default HeaderHome;
