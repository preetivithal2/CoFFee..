import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div>
            <div className='flex items-center justify-center mt-7'>
                <h1 className='text-[#461901] font-bold text-4xl'>Flavours</h1>
            </div>
            <div className='bg-white text-black flex items-center justify-center rounded-4xl m-5 p-3'>
                <div>
                    <Image src={"/s-1.png"} alt="serice image" width={500} height={500} />
                </div>
                <div>
                    <div className='mx-6'>
                        <h1 className='text-1xl font-bold'>Beans Coffee</h1>
                        <p className='text-[13px] text-gray'>Lorem ipsum dolor sit ametmagnam placeat reiciendis sunt impedit excepturi numquam rem earum, iusto veniam! Quo!</p>
                    </div>
                    <div className='bg-amber-950 text-amber-50 rounded-full flex items-center justify-center w-25 px-2 mx-6 mt-2' >
                        <button className=''>Order Now</button>
                    </div>
                </div>
            </div>

                 <div className='bg-white text-black flex items-center justify-center rounded-4xl m-5 p-3'>
                <div>
                    <Image src={"/s-3.jpg"} alt="serice image" width={500} height={500} />
                </div>
                <div>
                    <div className='mx-6'>
                        <h1 className='text-1xl font-bold'>Black Coffee</h1>
                        <p className='text-[13px] text-gray'>Lorem ipsum dolor sit ametmagnam placeat reiciendis sunt impedit excepturi numquam rem earum, iusto veniam! Quo!</p>
                    </div>
                    <div className='bg-amber-950 text-amber-50 rounded-full flex items-center justify-center w-25 px-2 mx-6 mt-2' >
                        <button className=''>Order Now</button>
                    </div>
                </div>
            </div>

                 <div className='bg-white text-black flex items-center justify-center rounded-4xl m-5 p-3'>
                <div>
                    <Image src={"/s-2.png"} alt="serice image" width={500} height={500} />
                </div>
                <div>
                    <div className='mx-6'>
                        <h1 className='text-1xl font-bold'>Expresso</h1>
                        <p className='text-[13px] text-gray'>Lorem ipsum dolor sit ametmagnam placeat reiciendis sunt impedit excepturi numquam rem earum, iusto veniam! Quo!</p>
                    </div>
                    <div className='bg-amber-950 text-amber-50 rounded-full flex items-center justify-center w-25 px-2 mx-6 mt-2' >
                        <button className=''>Order Now</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-[350px]'>
                <button className='bg-[#461901] color-white rounded-2xl px-10 py-2 m-2 '>Read more..</button>
            </div>

        </div>
    )
}

export default Services
