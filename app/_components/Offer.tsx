import Image from 'next/image'
import React from 'react'

const Offer = () => {
    return (
        <div>
            <div>
                <div className='flex items-center justify-center mt-7 flex-col'>
                    <h1 className='text-[#461901] font-bold text-2xl'>Get the best offer here!</h1>
                    <h4 className='text-[#461901] font-bold text-1xl'>Choose you fav one</h4>
                </div>

            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 justify-items-center mt-6 px-2 sm:px-6 lg:px-8">
                <div>
                    <Image src={"/off1.jpg"} alt='area' width={360} height={250} />
                </div>
                <div>
                    <Image src={"/off2.jpg"} alt='area' width={350} height={150} />

                </div>
                <div>
                    <Image src={"/off3.webp"} alt='area' width={350} height={100} />
                </div>
                <div>
                    <Image src={"/off4.jpeg"} alt='area' width={350} height={300} />
                </div>
            </div>
            <br />
            <hr />
            <div>
                <div>
                    <div className='flex items-center justify-center mt-7'>
                        <h1 className='text-[#461901] font-bold text-3xl'>Timing schedule</h1>
                    </div>
                </div>
                <div className='flex items-center justify-center m-6 flex-wrap'>
                    <button className='bg-[#461901] color-white rounded-2xl px-5 py-2 m-2'>10.00AM</button>
                    <button className='bg-[#461901] color-white rounded-2xl px-5 py-2 m-2'>03.00PM</button>
                    <button className='bg-[#461901] color-white rounded-2xl px-5 py-2 m-2'>09.00PM</button>
                </div>
            </div>

            <div className='bg-white text-black flex items-center justify-center rounded-4xl m-5 p-3'>
                <div>
                    <Image src={"/feedback.jpg"} alt="serice image" width={300} height={300} />
                </div>
                <div>
                    <div className='mx-6 shadow z-50'>
                        <h1 className='text-1xl font-bold'>Tommy james</h1>
                        <p className='text-[13px] text-gray'>Lorem ipsum dolor sit ametmagnam placeat !</p>
                    </div>
                    <div className='bg-amber-950 text-amber-50 rounded-full flex items-center justify-center w-25 px-2 mx-6 mt-2' >
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Offer
