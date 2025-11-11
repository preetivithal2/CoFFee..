import Image from 'next/image';
import react from 'react'

function Banner() {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <Image src={"/coff.jpg"} alt='Banner Image' width={1000} height={1000} />
                </div>
                <div className='flex items-center justify-center flex-col mx-6'>
                    <h1 className='text-[#461901] font-bold text-4xl mt-3'>Coffee</h1>
                <p className='text-black flex items-center justify-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. temporibus voluptas qui aliquam saepe? Dolorem eligendi cum voluptatem.</p>

                </div>
            </div>

            <div className='flex flex-col w-[350px]'>
                <button className='bg-[#461901] color-white rounded-2xl px-10 py-2 m-2 '>Order Now</button>
                <button className='bg-[#461901] color-white rounded-2xl px-6 py-2 m-2'>Best deal</button>
            </div>
        </div>
    )

}
export default Banner;