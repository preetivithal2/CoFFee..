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


            <section className="w-full bg-[#f5ede7] flex flex-col items-center">
                <img src="/Coffee.png" alt="coffee" className="w-full object-cover" />
                <h2 className="text-3xl font-bold text-brown-800 mt-4">Coffee</h2>
                <p className="text-center max-w-2xl">Lorem ipsum dolor sit amet...</p>
            </section>


            <div className='flex flex-col w-[300px] '>
                <button className='bg-[#461901] color-white rounded-2xl px-6 py-2 m-2 '>Order Now</button>
                <button className='bg-[#461901] color-white rounded-2xl px-6 py-2 m-2'>Best deal</button>
            </div>
        </div>
    )

}
export default Banner;