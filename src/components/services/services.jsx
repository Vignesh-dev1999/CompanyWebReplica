import cloud from "../photo/cloud.png"
import application from "../photo/application.png"
import infar from "../photo/infar.png"
import storage from "../photo/storage.png"
import implement from "../photo/implement.png"
import platform from "../photo/platform.png"


function Services() {
    return (

        <section className=" rounded-2xl p-3 lg:mb-1 w-[100%]  ">
            <div className="container mx-auto">
                <div className="mb-5">
                    <h2 className=" text-center text-lg  lg:ml-0 ml-16 lg:text-3xl  lg:pb-5 font-bold">The Services That We Provide</h2>
                </div>
                <div className=" hidden lg:flex rounded-2xl bg-[#F7F8FD] p-5 justify-between flex-wrap px-24  pb-7 lg:ml-20 lg:mr-20">
                    <div className="  text-center ">
                        <img className="px-3 pb-1 h-16" src={cloud}></img>
                        <p className="text-1xl font-bold text-center w-32">Cloud Migration Consulting</p>
                    </div>
                    <div className=" text-center  ">
                        <img className=" px-3 pb-1 h-14" src={application}></img>
                        <p className="text-1xl  font-bold text-center w-24" >Application Migration</p>
                    </div>
                    <div className=" text-center ">
                        <img className="px-6 pb-1 h-14" src={infar}></img>
                        <p className="text-1xl font-bold text-center w-24" >Infrastructure Migration</p>
                    </div>
                    <div className=" text-center ">
                        <img className="px-9 pb-1 h-16" src={storage}></img>
                        <p className="text-1xl font-bold text-center w-36" >Storage & Server Migration</p>
                    </div>
                    <div className=" text-center ">
                        <img className="px-3 pb-1 h-16" src={platform}></img>
                        <p className="text-1xl font-bold text-center w-24" >Platform Migration</p>
                    </div>
                    <div className=" text-center ">
                        <img className="px-3 pb-1 h-16" src={implement}></img>
                        <p className="text-1xl font-bold text-center  w-24" >Cloud Implementation</p>
                    </div>
                </div>
                <div className=" lg:hidden flex bg-[#FFFFFF] w-[120%] ">
                    <div className="flex gap-2 w-[130%] border rounded-2xl p-2">
                        
                    
                    <div className=" text-center ">
                        <img className="px-7 h-10" src={cloud}></img>
                        <p className=" text-center text-xs font-bold  w-28">Cloud Migration Consulting</p>
                    </div>
                    <div className=" text-center ">
                        <img className="px-4 h-9" src={application}></img>
                        <p className=" text-center text-xs font-bold" >Application Migration</p>
                    </div>
                    <div className=" text-center">
                        <img className="px-5 h-9" src={infar}></img>
                        <p className=" text-center text-xs font-bold" >Infrastructure Migration</p>
                    </div>
                    <div className=" text-center">
                        <img className="px-8 h-9" src={storage}></img>
                        <p className="text-center text-xs font-bold " >Storage & Server Migration</p>
                    </div>
                    </div>
                </div>
                <div className=" hidden lg:flex container mx-auto">
                    <div className=" flex justify-between px-40 gap-36 ">
                        <div className="p-20  ">
                            <h2 className="text-3xl w-60 font-bold text-purple-900">
                                Cloud Migration Consulting
                            </h2>
                        </div>

                        <div className=" p-10 text-1xl">
                            <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8A90A2" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            <p className="text-[#8A90A2] pl-2">Strategy for Cloud Migration</p>
                            </div>
                            <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1." stroke="#8A90A2" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            <p className="text-[#8A90A2] pl-2">Evaluation of cloud Readiness </p>
                            </div>
                            <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8A90A2" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            <p className="text-[#8A90A2] pl-2">implementing automated cloud infrastructure</p>
                            </div>
                            <div className="flex">
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8A90A2" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            <p className="text-[#8A90A2] pl-2 ">Organizing Work</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>

        // <div className=" pb-5 container mx-auto">
        //         <div>
        //     <h2 className="flex justify-center pb-5">The Services Thet we Provide</h2>
        // </div>
        // <div className="flex container mx-auto px-32 ">
        //     <div className="w-1/5">
        //     <img src={cloud}></img>
        //     <p>Cloud Migration Consulting</p>
        //     </div>
        //     <div className="w-1/5">
        //     <img src={application}></img>
        //     <p>Application Migration</p>
        //     </div>
        //    <div className="w-1/5"> 
        //    <img src={infar}></img>
        //    <p>Application Migration</p>
        //    </div>
        //     <div className="w-1/5">
        //     <img src={storage}></img>
        //     <p>Application Migration</p>
        //     </div>
        //   <div className="w-1/5">
        //   <img src={platform}></img>
        //   <p>Application Migration</p>
        //   </div>
        //    <div className="w-1/5">
        //    <img src={implement}></img>
        //    <p>Application Migration</p>
        //    </div>

        // </div>
        // </div>

    )
}

export default Services;