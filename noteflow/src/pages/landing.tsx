import img1 from "../images/landing/intro/Gemini_Generated_Image_3q5xfo3q5xfo3q5x (1).svg";
import img2 from "../images/landing/intro/Gemini_Generated_Image_f81gnxf81gnxf81g (1).svg";
import img3 from "../images/landing/intro/Gemini_Generated_Image_yxhb1uyxhb1uyxhb (1).svg";
export default function Landing() {
  return (
    <>
      <div className=' flex w-full h-[90svh] overflow-hidden justify-between px-24'>
        <div className='w-full text-left space-y-10 py-16'>
          <h1 className='font-bold text-6xl text-pretty tracking-tight'>
            UNLEASH YOUR IDEAS TO FIND YOUR FLOW
          </h1>
          <p className='text-pretty text-base dark:text-white/90 pr-15'>
            Your all-in-one solution for capturing, organizing, and bringing
            your ideas to life
          </p>
          <div className='flex gap-8 items-center'>
            <button className='p-4 bg-sky-700 dark:bg-sky-500 shadow-md shadow-blue-500/50 dark:shadow-sky-500/50 font-bold text-lg rounded-2xl cursor-pointer text-white hover:bg-blue-600 transition duration-300 ease-out'>
              GET STARTED
            </button>
            <p className='dark:text-white/90'>
              Used by 3M+ users around the world
            </p>
          </div>
        </div>
        <div className='w-full relative h-100'>
          <img
            src={img1}
            alt='image1'
            className='w-100 absolute top-1/2 -translate-y-1/2 -right-20'
          />
          <img
            src={img2}
            alt='img2'
            className='w-60 absolute top-1/2 -translate-y-1/2 left-0'
          />
          <img
            src={img3}
            alt='img3'
            className='w-200 absolute top-1/2 -translate-y-3/5 -z-1'
          />
        </div>
      </div>
      <div className='w-full dark:bg-sky-600'>
        <h4 className='text-lg font-bold tracking-tight text-center py-6'>
          TRUSTED BY
        </h4>
        <div className='flex justify-between text-white p-6'>

        </div>
      </div>
      <div>
        <h4>FEATURES</h4>
      </div>
    </>
  );
}
