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
            <div className="grid grid-cols-2 gap-4 justify-items-center mt-6">
                <div>
                    <Image src={"/off1.jpg"} alt='area' width={150} height={150} />
                </div>
                <div>
                    <Image src={"/off2.jpg"} alt='area' width={150} height={150} />
                </div>
                <div>
                    <Image src={"/off3.webp"} alt='area' width={150} height={150} />
                </div>
                <div>
                    <Image src={"/off4.jpeg"} alt='area' width={150} height={200} />
                </div>
            </div>
            <br />
            <hr />
            <div>
                <div>
                    <div className='flex items-center justify-center mt-7'>
                        <h1 className='text-[#461901] font-bold text-4xl'>Timing schedule</h1>
                    </div>
                </div>
                <div className='flex items-center justify-center m-6'>
                    <button className='bg-[#461901] color-white rounded-2xl px-5 py-2 m-2'>10.00AM</button>
                    <button className='bg-[#461901] color-white rounded-2xl px-5 py-2 m-2'>03.00PM</button>
                    <button className='bg-[#461901] color-white rounded-2xl px-5 py-2 m-2'>09.00PM</button>
                </div>
            </div>
            <div>
                <div>image</div>
                <div>
                    <h1>Tommy james</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}

export default Offer
