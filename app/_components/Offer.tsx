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
            <div className='flex col-sm-6'>
                <div>
                    <Image src={"/off1.jpg"} alt='area' width={100} height={100} />
                </div>
                <div>
                    <Image src={"/off2.jpg"} alt='area' width={100} height={100} />
                </div>
                <div>
                    <Image src={"/off3.webp"} alt='area' width={100} height={100} />
                </div>
                <div>
                    <Image src={"/off4.jpeg"} alt='area' width={100} height={100} />
                </div>
            </div>
            <div>
                <div>Timing schdle</div>
                <div>
                    <button>10.00AM</button>
                    <button>03.00PM</button>
                    <button>09.00PM</button>

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
