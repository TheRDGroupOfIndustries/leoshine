import React from "react";
import img1 from "../assets/1.png";


const influencers = [
    {
        followers: "IG Followers: 211K+",
        title: "Smart pre-set menus that bring the science of Indian cooking to your fingertips.",
        img: img1,
    },
    {
        followers: "IG Followers: 211K+",
        title: "Bringing breakthrough non-stick tech to the heart of your kitchen.",
        img: img1,
    },
    {
        followers: "IG Followers: 116K+",
        title: "Precision-driven innovation meets mess-free design so that spills never slow you down.",
        img: img1,
    },
];

const InfluencersChoice = () => {
    return (
        <div className="py-8 px-4 lg:px-16">
            <h2 className="text-2xl font-semibold mb-8">Influencer's Choice</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {influencers.map((item, index) => (
                    <div
                        key={index}
                        className="relative border-2 border-red-600 rounded-2xl p-4 bg-white overflow-visible"
                        style={{ height: '280px' }}
                    >

                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full flex items-center gap-1 z-30">
                            <span>👥</span>
                            {item.followers}
                        </div>


                        <div className="flex items-center h-full pt-4">

                            <div className="flex-1 pr-3">
                                <p className="text-gray-800 text-sm leading-relaxed font-medium mb-4">
                                    {item.title}
                                </p>
                                <button className="bg-red-600 text-white px-4 py-2 rounded text-xs font-semibold hover:bg-red-700 transition">
                                    KNOW MORE
                                </button>
                            </div>


                            <div className="flex-1 relative flex justify-center items-center">
                           
                                <div className="w-46 h-46 bg-red-600 rounded-full absolute"></div>

                       
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="relative z-10 w-48 h-48 object-cover rounded-full -mt-8 "
                                />
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfluencersChoice;