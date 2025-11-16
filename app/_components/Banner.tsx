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


            <section className="relative w-full bg-[#f5ede7] overflow-hidden">
                <img
                    src="/Coffee.png"
                    alt="coffee"
                    className="hidden sm:block w-full h-[500px] md:h-[650px] object-cover"/>
                <img
                    src="/coffemobile.jpg"
                    alt="coffee-mobile"
                    className="block sm:hidden w-full h-[450px] object-cover opacity-30"/>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                    <h1 className="text-[#461901] font-bold text-3xl sm:text-3xl md:text-6xl drop-shadow">
                        Warmth and comfort with every sip
                    </h1>

                    <p className="text-black mt-3 max-w-[350px] sm:max-w-[450px] md:max-w-[550px] text-1xl sm:text-base">
                        Made from roasted coffee beans, it brings warmth and comfort with every sip,
                        whether enjoyed early in the morning or during a peaceful break.
                    </p>
                </div>
                <div className="absolute inset-x-0 bottom-10 sm:bottom-25 flex flex-col items-center gap-3">
                    <button className="bg-[#461901] text-white rounded-2xl px-14 py-2 text-sm sm:text-base">
                        Order Now
                    </button>
                    <button className="bg-[#461901] text-white rounded-2xl px-14 py-2 text-sm sm:text-base">
                        Best deal
                    </button>
                </div>
            </section>
        </div>
    )

}
export default Banner;