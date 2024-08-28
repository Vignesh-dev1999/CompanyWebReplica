import theme from "../photo/theme.png"


function Migrat() {
    return (
        <section className=" lg:flex justify-center rounded-sm   ">

            <div className=" w-[115%]  lg:w-[75%] h-24 lg:h-40 lg:rounded-2xl  lg:flex  lg:justify-center gap-28 lg:py-14" style={{ backgroundImage: `url(${theme})` }}>
                <div className="lg:w-1/2 ">
                    <h3 className="font-bold text-white text-base lg:text-2xl lg:text-center text-center p-1 lg:p-0">
                        Efficiency Redefined: Choose Our Expert Cloud Migration Services
                    </h3>
                </div>
                <div className=" text-center p-5 lg:p-1 ">
                    <button className="text-white text-left lg:text-lg bg-[#702DF6] lg:bg-[#A158FF] font-bold rounded-[8px] lg:rounded-[19.09px] p-3 ">Migrate Today</button>
                </div>

            </div>

            {/* <section>
        <div className="">
            <div>
                    <h2>
                    How We Do Cloud Migration Services
                    </h2>
                    <p>Our strategy in delivering cloud migration services involves meticulous planning, seamless execution, and a client-centric approach for optimized solutions.</p>
            </div>
            <div>
                <h2>
                Define Your Cloud Migration Strategy
                </h2>
                    <p>We meticulously craft and set the stage for your cloud migration strategy and objectives, aligning with your migration triggers, business goals, and workload priorities. Our expert cloud migration service ensures a tailored approach.</p>
            </div>
        </div>
        </section> */}




        </section>

    )
}

export default Migrat;