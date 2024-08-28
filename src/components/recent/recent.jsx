
import recent1 from '../photo/recent1.png'
import recent2 from '../photo/recent2.png'
import recent3 from '../photo/recent3.png'
import date1 from '../photo/date1.png'
import datee1 from '../photo/datee1.png'


function Recent() {
    return (
        <section className=''>
            <div className='hidden lg:flex bg-[#EDEFFA] shadow-[#FFFFFF]'>

            
            <div className="  container mx-auto   lg:w-[65%] mt-10 pt-3">
                <div className="  mx-auto text-center flex mb-4 ">
                    <h2 className=" mr-36 lg:ml-36 font-bold pl-20 text-1xl lg:text-3xl w-full lg:w-[60%] ">Our Recent Narratives</h2>
                    <p className='pr-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    </p>
                    <p className='bg-[#171151] rounded-[50%] text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg></p>
                </div>
                <div className=''>
                    <div className='flex p-2'>


                        <div className=' p-5 w-[49%]  ml-3  '>
                            <img src={recent1}></img>
                            <h3 className='font-bold bg-white text-[#6A0EFF] pl-2'>How to deal with common problems that come up when moving</h3>
                            <p className='bg-white pl-2'>Combining artificial intelligence (AI) and cloud computing is an unstoppable force that is reshaping industries.</p>
                            <div className='flex gap-5  pt-20 bg-white '>
                                <div className='flex mb-6 pl-2'>
                                    <img className='w-5 h-5 mr-2' src={date1}></img>
                                    <p className='text-sm text-[#0E63FF] font-bold'>DEC 28,2021</p>
                                </div>
                                <div className='flex'>
                                    <img className='w-4 h-4 mr-2' src={datee1}></img>
                                    <p className='text-sm text-[#0E63FF] font-bold'>1,111 VIEWS</p>
                                </div>
                            </div>
                        </div>
                        <div className='p-5 w-[49%]  ml-3'>
                            <img src={recent2}></img>
                            <h3 className='font-bold bg-white pl-2'>How to Move to the Cloud: The Complete Guide to the 6 R's</h3>
                            <p className='bg-white pl-2'>Generative AI empowers teams to break free from conventional thinking patterns</p>
                          
                            <div className='flex gap-5  pt-32  bg-white'>
                                <div className='flex mb-3 pl-2 '>
                                    <img className='w-5 h-5 mr-2 ' src={date1}></img>
                                    <p className='text-sm text-[#0E63FF] font-bold'>OCT 28,2022</p>
                                </div>
                                <div className='flex'>
                                    <img className='w-4 h-4 mr-2' src={datee1}></img>
                                    <p className='text-sm text-[#0E63FF] font-bold'>1,555 VIEWS</p>
                                </div>
                            </div>

                        </div >
                        <div className='p-5 w-[49%] ml-3'>
                            <img src={recent3}></img>
                            <h3 className='font-bold bg-white pl-2' >How do you move to the cloud? Plan, Method, and Tools</h3>
                            <p className='bg-white pl-2'>Unveiling Generative AI:A Comprehensive Guide to Innovative Technology</p>
                            <div className='flex gap-5 p-2 pt-32 bg-white'>
                                <div className='flex mb-3 pl-2'>
                                    <img className='w-5 h-5 mr-2' src={date1}></img>
                                    <p className='text-sm text-[#0E63FF] font-bold'>DEC 28,2023</p>
                                </div>
                                <div className='flex'>
                                    <img className='w-4 h-4 mr-2' src={datee1}></img>
                                    <p className='text-sm text-[#0E63FF] font-bold'>1,222 VIEWS</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            </div>

            <div className='ml-2 mr-2 '>
                <div className='lg:hidden text-center text-3xl font-bold mb-4 ml-9'>
                    <h2 className='w-[110%] '>Recent Blogs and Posts</h2>
                </div>
                <div className='lg:hidden flex  border rounded-2xl  w-[115%] mr-3'>
                    <div className='flex gap-1 pb-16'>
                        <div className='bg-gray-400 rounded-l-3xl w-[70%] '>

                        </div>
                        <p className='h-44  w-[100%] text-[#6A0EFF] text-lg font-bold '>How to deal with common problems that come up when moving to the cloud   
                            <span className='text-gray-400 '><br></br> <p className='text-sm'>Nam eget dui vel quam sodales semper quis</p></span></p><p className='mt-16 p-2  font-bold text-gray-700'>
                            <svg className='w-[30%] h-10 mt-12 ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg></p>


                    </div>

                </div>
            </div>
        </section>
    )
}

export default Recent;