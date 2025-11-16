import Image from 'next/image';
import react from 'react'

function Banner() {
    return (
        <div className="flex items-center justify-center flex-col">
            {/*<div className='flex flex-col items-center justify-center'>
                <div>
                     <Image className='coffee' src={"/Coffee.png"} alt='Banner Image' /> 

                    <img src="/Coffee.png" alt="coffee" className='w-full object-cover' />
                </div>
                <div className='flex items-center justify-center flex-col  '>
                    <h1 className='text-[#461901] font-bold text-4xl mt-3'>Coffee</h1>
                <p className='text-black flex items-center justify-center mx-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. temporibus voluptas qui aliquam saepe? Dolorem eligendi cum voluptatem.</p>

                </div>
            </div>*/}
<section className="w-full bg-[#f5ede7] flex flex-col items-center relative">
    {/* Background Image */}
    <img 
      src="/Coffee.png" 
      alt="coffee" 
      className="w-full h-[400px] object-cover md:h-[550px]"
    />

    {/* Text Content */}
    <div className="absolute top-[30%] md:top-[40%] flex flex-col items-center px-4 text-center">
      <h1 className="text-[#461901] font-bold text-4xl md:text-6xl">
        CoFFee
      </h1>

      <p className="text-black mt-4 max-w-[350px] md:max-w-[500px] text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        voluptas qui aliquam saepe? Dolorem eligendi cum voluptatem.
      </p>
    </div>

    {/* Buttons */}
    <div className="absolute bottom-[20px] flex flex-col items-center space-y-3">
      <button className="bg-[#461901] text-white rounded-2xl px-16 py-2">
        Order Now
      </button>
      <button className="bg-[#461901] text-white rounded-2xl px-16 py-2">
        Best deal
      </button>
    </div>
</section>


            {/* <section className="w-full bg-[#f5ede7] flex flex-col items-center">
                <img src="/Coffee.png" alt="coffee" className="w-full object-cover" />
                <div className='flex items-center justify-center flex-col relative w-100 sm:not-[relative]:'>
                    <h1 className='text-[#461901] font-bold text-6xl absolute bottom-[300px]'>CoFFee</h1>
                    <p className='text-black flex text-center items-center justify-content-center mx-5 absolute bottom-[220px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. temporibus voluptas qui aliquam saepe? Dolorem eligendi cum voluptatem.</p>
                </div>
            </section>


            <div className='flex flex-col w-[300px] relative '>
                <button className='bg-[#461901] color-white rounded-2xl px-[100px] py-2 m-2 absolute bottom-[150px]'>Order Now</button>
                <button className='bg-[#461901] color-white rounded-2xl px-[103px] py-2 m-2 absolute bottom-[100px]'>Best deal</button>
            </div> */}
            



        </div>
    )

}
export default Banner;