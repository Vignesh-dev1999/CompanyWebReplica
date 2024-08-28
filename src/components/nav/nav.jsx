import akkenna from '../photo/akkenna.png'


function Navbar() {
    return (
        <div className=" flex justify-between lg:pl-20 lg:py-3 px-7">
            <div className=" flex  justify-between container border border-white">
               
                <img className='lg:w-40 lg:h-8 lg:p-2 lg:mt-2 ml-24 w-40 h-10 p-2 mt-2  ' src={akkenna}></img>
                


               
                <ul className="hidden lg:flex gap-6 mt-3 ">
                    <li className='text-[#000000]'>About Us</li>
                    <li className='text-[#000000]'>Services</li>
                    <li className='text-[#000000]'>Developers</li>
                    <li className='text-[#000000]'>Animation</li>
                    <li className='text-[#000000]'>Products</li>
                    <li className='text-[#000000]'>Blogs</li>
                    <li className='text-[#000000]'>Portfolio</li>
                    <li className='text-[#000000]'>careers</li>
                </ul>
                <div className=" hidden lg:flex gap-1 bg-[#00005B] p-2 mr-6  " style={{borderRadius: "25px 0px 25px 26px / 25px 0px 25px 25px"}}>
                    <span className="lg:flex hidden lg:block text-white font-bold mr-2 " >Contact Us</span>
                   <p className='text-white'> <svg className='hidden lg:flex' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg></p>
                </div>

            </div>

        </div>



    )
}

export default Navbar;