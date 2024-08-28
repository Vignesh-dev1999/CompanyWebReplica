
import left from '../photo/left.png'
import rearch from '../photo/rearch.png'
import replat from '../photo/replat.png'
import ret from '../photo/ret.png'



function Different() {
    return (
        <section className='container mx-auto  lg:w-[80%]'>
            <div className="">
                <div className="lg:text-center text-center lg:ml-0 ml-10 lg:pt-0 pt-2 font-bold text-2xl mb-5">
                    <h2 className='lg:text-3xl'>Different Type of Cloud Migration</h2>
                </div>
                <div className=" w-[70%] mx-auto text-center  ">
                    <p className='text-gray-500 hidden lg:flex' >Cloud migration refers to the process of moving an organization's data, applications, and IT processes from on-premises infrastructure to a cloud computing environment. There are various types of cloud 
                        migration strategies, each with its unique approach to ensure a seamless transition.</p>

                </div>

            </div>
            <div className="">
                <div className="container  mx-auto">
                    <div className=" justify-between p-10 hidden lg:flex  " >
                        <div className='mr-3 bg-pink-300 h-11 rounded-3xl p-1 '>
                            <img  className=' h-8 w-32 pt-2   p-1 ' src={left}></img>
                        </div>
                        <div className='pl-2'>
                            <h2 className='font-bold pb-3'>Left and Shift(Rehostinh)</h2>
                            <p className='w-[75%] text-gray-500'>This method involves moving existing applications and their data to the cloud without making any significant changes. It's a rapid migration option but may not fully utiize cloud-native features. Opt for our cloud migration service for efficient lift and shift with minut

                                disruptions</p>
                        </div>
                        <div className='mr-3 bg-cyan-100 h-11 rounded-3xl p-1'>
                            <img className='   h-8 w-32 pt-2 p-1' src={replat}></img>
                        </div>
                        <div className='pl-2'>
                            <h2 className='font-bold pb-3'>Replatforming(Refactoring)</h2>
                            <p className='w-[75%] text-gray-500'>Replatforming focuses on optimizing applications for the cloud environment, making adjustments for better performance and cost-effectiveness. Leverage our cloud migration solutions
                                 to refactor applications with the expertise of the best cloud migration company</p>
                        </div>


                    </div>
                    <div className=" justify-between p-10 hidden lg:flex" >
                        <div className='mr-3 bg-yellow-200 h-11 rounded-3xl p-1'>
                            <img className='h-8 w-32 pt-2 p-1' src={rearch}></img>
                        </div>
                        <div className='pl-2'>
                            <h2 className='font-bold pb-3'>Rearchitecting</h2>
                            <p className='w-[75%] text-gray-500'>This approach involves redesigning and rebuilding applications to fully leverage cloud-native features. Our cloud migration service provides a comprehensive solution for rearchitecting,
                                 ensuring optimal performance and scalability with the support of the best cloud migration services</p>
                        </div>
                        <div className='mr-3 bg-indigo-200 h-11 rounded-3xl p-1'>
                            <img className='h-8 w-32 pt-2 p-1  ' src={ret}></img>
                        </div>
                        <div className='pl-2'>
                            <h2 className='font-bold pb-3'>Retiring</h2>
                            <p className='w-[75%] text-gray-500'>Retiring involves decommissioning or phasing out applications or components that are no longer needed. Our cloud migration company offers strategic retirement plans 
                                to streamline your cloud environment, ensuring cost-effectiveness and resource optimization.</p>
                        </div>


                    </div>
                   
                <div className='lg:hidden flex justify-between '>
                    <div className='flex p-4 bg-gray-200 mt-4 ml-6 rounded-3xl  '>
                        <div className='w-14'>
                            <img className='w-10 p-1  bg-pink-300  rounded-2xl mr-2' src={left}></img>
                        </div>
                        <div className=''>
                            <h2 className='font-bold w-28  text-sm '>Lift and Shift(Rehosing)</h2>
                        </div>
                    </div>
                    <div className='flex p-3 bg-gray-200 mt-4 ml-3 rounded-3xl'>
                        <div className='w-14'>
                            <img className='w-10 p-1 bg-cyan-100  rounded-2xl mr-2' src={replat}></img>
                        </div>
                        <div>
                            <h2 className='font-bold w-24 text-sm'>Lift and Shift(Rehosing)</h2>
                        </div>
                    </div>

                </div>
                </div>


            </div>
        </section>
    )
}

export default Different;