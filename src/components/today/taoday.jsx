import don from "../photo/don.png"
import rearch from "../photo/rearch.png"


import today1 from "../photo/today1.png"
import today2 from "../photo/today2.png"
import today3 from "../photo/recent3.png"
import today4 from "../photo/today4.png"
import today5 from "../photo/today5.png"
import today6 from "../photo/today6.png"




function Today() {
    return (
        <section className=" p-5 lg:p-2  lg:mb-10  lg:m-0  bg-gray-100 lg:w-full  w-[115%] " >

            <div className=" lg:flex lg:p-14 container mx-auto bg-gray-100 ">
                <div className="  lg:w-[75%]  lg:w-1/2  justify-between lg:ml-10 lg:ml-1 ">
                    <h2 className="font-bold   lg:text-2xl lg:w-96 pt-2 lg:pb-4 ">
                        How We Do Cloud Migration Services
                    </h2 >
                    <p className="lg:w-96 mb-6 ">Our strategy in delivering cloud migration services involves meticulous planning, seamless execution, and a client-centric approach for optimized solutions.</p>
                </div>
                <div className=" w-full  lg:w-[65%] lg:w-1/2 bg-white shadow-2xl rounded-2xl lg:p-10  p-2 ">

                    <img className=" w-9 lg:w-20 " src={don}></img>

                    <h2 className="font-bold text-2xl pb-4">
                        Define Your Cloud Migration Strategy
                    </h2 >
                    <p className="">We meticulously craft and set the stage for your cloud migration strategy and objectives, aligning with your migration triggers, business goals, and workload priorities. Our expert cloud migration service ensures a tailored approach.</p>
                </div>





            </div>
            <div className="mt-4 container mx-auto borderc lg:gap-10 border-black flex lg:justify-normal justify-between lg:pl-24 ">
                <div>
                    <div>
                        <img className=' h-6 lg:mb-1 ml-10 lg:ml-20 rounded-2xl bg-white p-1 ' src={today1}>
                        </img>
                    </div>
                    <p className=" hidden lg:flex text-center text-sm  font-bold lg:w-48">Define Your Cloud Migration Strategy</p>

                </div>
                <div>
                    <div>
                        <img className=' h-6 ml-10 lg:mb-1 lg:ml-20 rounded-2xl bg-white p-1' src={today2}>
                        </img>
                    </div>
                    <p className="text-center hidden lg:flex text-sm font-bold lg:w-48 ">Strategize and Plan Your Cloud Migration</p>
                </div>
                <div >
                    <div className="hidden lg:flex">
                    <img className='bg-yellow-400 lg:mb-1 h-4 ml-10 lg:mt-1 lg:ml-16 rounded-2xl bg-white  ' src={rearch}></img>
                        
                    </div>
                    <p className="text-center hidden lg:flex  text-sm lg:pt-2 font-bold lg:w-40">Execute Your Migration Plan</p>
                </div>
                <div>
                    <div>
                        <img className=' h-6 ml-10 lg:mb-1 lg:ml-20 rounded-2xl bg-white p-1 ' src={today4}>
                        </img>
                    </div>
                    <p className="text-center hidden lg:flex text-sm  font-bold lg:w-48">Prepare Your Organization for Cloud Transition</p>
                </div>
                <div>
                    <div className="">
                        <img className=' h-6 lg:mb-1 ml-20 rounded-2xl bg-white p-1' src={today5}>
                        </img>
                    </div>
                    <p className=" hidden lg:flex text-sm  text-center font-bold w-48">Secure and Manage Your Cloud Workloads</p>
                </div>
                <div>
                    <div className="">
                        <img className='hidden lg:mb-1  lg:flex h-6 ml-20 rounded-2xl bg-white p-1' src={today6}>
                        </img>
                    </div>
                    <p className=" hidden lg:flex text-sm  text-center font-bold w-48">Define Your Cloud Migration Strategy</p>
                </div>
            </div>


        </section>
    )
}

export default Today;