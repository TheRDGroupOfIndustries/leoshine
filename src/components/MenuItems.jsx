import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MenuItems = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showBurnersSub, setShowBurnersSub] = useState(false);
    const [hoverType, setHoverType] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
    const [burnersTimeoutId, setBurnersTimeoutId] = useState(null);

    const handleMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        if (burnersTimeoutId) clearTimeout(burnersTimeoutId);
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setIsDropdownOpen(false);
            setShowBurnersSub(false);
            setHoverType(null);
        }, 300);
        setTimeoutId(id);
    };

    const handleBurnersEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        if (burnersTimeoutId) clearTimeout(burnersTimeoutId);
        setShowBurnersSub(true);
    };

    const handleTypeEnter = (type) => {
        if (timeoutId) clearTimeout(timeoutId);
        if (burnersTimeoutId) clearTimeout(burnersTimeoutId);
        setHoverType(type);
    };

    const handleTypeLeave = () => {
        const id = setTimeout(() => {
            setHoverType(null);
        }, 100);
        setBurnersTimeoutId(id);
    };

    const handleBurnersContainerLeave = () => {
        const id = setTimeout(() => {
            setShowBurnersSub(false);
            setHoverType(null);
        }, 200);
        setBurnersTimeoutId(id);
    };

    const handleBurnersContainerEnter = () => {
        if (burnersTimeoutId) clearTimeout(burnersTimeoutId);
        setShowBurnersSub(true);
    };

    useEffect(() => {
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            if (burnersTimeoutId) clearTimeout(burnersTimeoutId);
        };
    }, [timeoutId, burnersTimeoutId]);

    return (
        <nav>
            <ul className="space-y-4">
                <li>
                    <Link to="/" className="hover:text-blue-400">Home</Link>
                </li>
                <li>
                    <span className="hover:text-blue-400">About Us</span>
                </li>
                <li
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className="hover:text-blue-400 flex items-center gap-1 cursor-pointer">
                        Products
                        <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>

                    <div className={`absolute top-8 left-0 bg-white text-black shadow-xl rounded-xl z-20 w-80 border border-gray-100 transition-all ${isDropdownOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                        <div className="p-6 space-y-6 bg-white rounded-xl relative">

                            <div
                                className="border-b pb-4"
                                onMouseEnter={handleBurnersContainerEnter}
                                onMouseLeave={handleBurnersContainerLeave}
                            >
                                <h3 
                                    className="font-bold text-gray-800 mb-3 text-base flex items-center gap-2 cursor-pointer"
                                    onMouseEnter={handleBurnersEnter}
                                >
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Burners
                                </h3>

                                {showBurnersSub && (
                                    <div className="space-y-3">
                                        <div 
                                            className="ml-4"
                                            onMouseEnter={() => handleTypeEnter("steel")}
                                            onMouseLeave={handleTypeLeave}
                                        >
                                            <h4 className="font-semibold text-gray-700 mb-1 text-sm cursor-pointer flex items-center gap-1">
                                                Stainless Steel
                                                {hoverType === "steel" ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                                            </h4>
                                            {hoverType === "steel" && (
                                                <ul className="ml-4 space-y-1 mt-1">
                                                    <li>
                                                        <a href="#" className="block text-gray-600 hover:text-blue-600 py-1 px-2 text-sm rounded-md">
                                                            2 Burner
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block text-gray-600 hover:text-blue-600 py-1 px-2 text-sm rounded-md">
                                                            3 Burner
                                                        </a>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>

                                        <div 
                                            className="ml-4"
                                            onMouseEnter={() => handleTypeEnter("glass")}
                                            onMouseLeave={handleTypeLeave}
                                        >
                                            <h4 className="font-semibold text-gray-700 mb-1 text-sm cursor-pointer flex items-center gap-1">
                                                Glass
                                                {hoverType === "glass" ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                                            </h4>
                                            {hoverType === "glass" && (
                                                <ul className="ml-4 space-y-1 mt-1">
                                                    <li>
                                                        <a href="#" className="block text-gray-600 hover:text-blue-600 py-1 px-2 text-sm rounded-md">
                                                            3 Burner
                                                        </a>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-3 pt-2">
                                {[
                                    'Electric Kettle – 2L',
                                    'Tri Core Kadhai',
                                    'Knife',
                                    'Lighters',
                                    'Push Chopper',
                                    'Chopping Board'
                                ].map((product, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 py-2 px-3 rounded-lg text-sm border border-transparent hover:border-blue-200"
                                    >
                                        {product}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <span className="hover:text-blue-400">Contact Us</span>
                </li>
                <li>
                    <span className="hover:text-blue-400">Media</span>
                </li>
                <li>
                    <span className="hover:text-blue-400">Blog</span>
                </li>
            </ul>
        </nav>
    );
};

export default MenuItems;