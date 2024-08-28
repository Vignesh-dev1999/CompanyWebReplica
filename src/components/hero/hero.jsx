import hero from "../photo/hero.png"
import hero1 from "../photo/hero1.png"




function Hero() {
    return (
        <section className="lg:p-5  justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... w-[115%]  lg:w-full lg:h-[70vh] h-96">
                <div className="flex" >

                
            <div className=" w-[85%] lg:w-1/2 ml-5 lg:p-20 py-1 lg:py-20 ">
                <h1 className=" m-0 font-bold text-2xl lg:text-4xl  text-white">Make Use of Akkenna's Efficient Cloud Migration Services</h1>
                <p className="flex justify-center text-white mt-2 pb-2">Smooth Cloud Journey-Enhance Your Business Agility with Our Cloud Migration Service. Secure,Cost-Effective, and tailored to your unigue requirements.</p>
                <button className="bg-slate-200 py-2  font-bold rounded-[12px] w-[140px] ">Act Now</button>
            </div>
            <div className=" w-1/2 hidden lg:flex">

                <img className="h-[50vh]   " src={hero} />
            </div>
            
            </div>
            <div className="lg:hidden ml-32 ">
            <img className="   " src={hero1} />
            </div>
        </section>

    )
} 

export default Hero