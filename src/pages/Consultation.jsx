import React from "react";
import kitchen from "../assets/moduler.webp";


const Consultation = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="block md:hidden bg-[#e8f4f0]  overflow-hidden">
          <div className="relative">
            <img
              src={kitchen}
              alt="Modern Kitchen Design"
              className="w-full h-[250px] sm:h-[300px] object-cover"
            />
          </div>
          
          <div className="px-6 py-8 bg-[#e8f4f0]">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-xl font-extrabold tracking-wide text-red-600">
                LEOSHINE
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-black mb-4 leading-tight">
              Your Dream Home is Just<br />A Click Away
            </h1>
            
            <p className="text-black mb-8 leading-relaxed text-sm">
              TTK Prestige has officially joined hands with ULTRAFRESH, one of India's leading modular kitchen brands. ULTRAFRESH has successfully executed 10,000+ modular kitchens; and now combined with the power of Prestige, it has become a complete one-stop kitchen shop.
            </p>
            
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold flex items-center gap-2 transition-all duration-200 shadow-lg">
              Book Consultation <span className="text-lg">→</span>
            </button>
          </div>
        </div>


        <div className="hidden md:grid md:grid-cols-2 bg-[#e8f4f0] overflow-hidden  min-h-[450px]">
     
          <div className="p-8 lg:p-12 flex flex-col justify-center bg-[#e8f4f0]">
            <div className="flex items-center gap-4 mb-8">
           
                    <div className="text-xl font-extrabold tracking-wide text-red-600">
                LEOSHINE
              </div>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
              Your Dream Home is Just<br />A Click Away
            </h1>
            
            <p className="text-black mb-8 lg:mb-10 leading-relaxed text-base max-w-lg">
              TTK Prestige has officially joined hands with ULTRAFRESH, one of India's leading modular kitchen brands. ULTRAFRESH has successfully executed 10,000+ modular kitchens; and now combined with the power of Prestige, it has become a complete one-stop kitchen shop.
            </p>
            
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold flex items-center gap-2 w-fit transition-all duration-200 shadow-lg">
              Book Consultation <span className="text-lg">→</span>
            </button>
          </div>


          <div className="relative ">
            <img
              src={kitchen}
              alt="Modern Kitchen Design"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;