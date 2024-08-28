
import about from "../photo/about.png"
import ab from "../photo/ab.png"

function Aboutus() {
    return (

        <div className= " ">
            <div className=" hidden lg:flex justify-between bg-[#F3F0FF] lg:ml-10 lg:mr-10 rounded-b-xl lg:h-96">


                <div className=" flex justify-between container  ">
                    <div className=" ml-10 mt-12  hidden lg:flex">
                        <img className=" h-[50vh]" src={about}></img>
                    </div>
                    <div className=" lg:w-[70%]  lg:p-16 ">
                        <h2 className="font-bold text-3xl pb-2">Simplifying, Faster, and Secure Cloud Migration Services for Businesses</h2>
                        <p className="pb-5 text-gray-500">In the digital transformation era, enterprises prioritize Cloud Migration for enhanced agility and growth. This pivotal shift involves transferring critical workloads from on- premise infrastructure to the Cloud. Akkenna. a top-tier Cloud Migration company facilitates this journoy with cost-offective solutions. Our Cloud Migration services contribute to increased sperational efficiendy, the modernization of legacy portfolios, and accelerating develooment cycles.</p>
                        <p className="text-gray-500">We ensure o seamiess tansition to the Cloud onvponment through expert Cloud Migration consulting and a strategic 6-R approach (Re Host Re-Architecture/Re Facton Be Planiorm Re Turchase Ratain, and Retire), Choose Akkenna for the best Cloud Migration Services and uniock the potanta of your digital tronsformation</p>
                    </div>
                </div>


            </div>
            <div className=" lg:hidden flex  mt-0 w-[115%]">
                <div className="flex border bg-[#FFFFFF] rounded-3xl w-[115%] ">
                    <div>
                        <img className="p-5 w-36  h-32" src={ab}></img>
                    </div>
                    <div>
                        <h2>About Us</h2>
                        <p className="font-bold w-52">Simplifying, Faster, and Secure Cloud Migration Services for Businesses</p>
                    </div>
                    <div className=" mt-12 ml-3">
                    <svg className="h-[48%]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        
                    </div>

                </div>
            </div>

        </div>

    )
}
export default Aboutus;