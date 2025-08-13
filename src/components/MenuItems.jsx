import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from 'react-icons/fa';

const MenuItems = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showBurnersSub, setShowBurnersSub] = useState(false);
    const [hoverType, setHoverType] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
    const [burnersTimeoutId, setBurnersTimeoutId] = useState(null);


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [mobileBurnersOpen, setMobileBurnersOpen] = useState(false);
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(null);


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


    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset';
        setMobileProductsOpen(false);
        setMobileBurnersOpen(false);
        setMobileSubMenuOpen(null);
    };

    useEffect(() => {
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
            if (burnersTimeoutId) clearTimeout(burnersTimeoutId);
            document.body.style.overflow = 'unset';
        };
    }, [timeoutId, burnersTimeoutId]);

    return (
        <>
 
            <nav className="hidden lg:block">
                <ul className="flex items-center gap-8">
                    <li>
                        <a href="/" className="hover:text-blue-400">Home</a>
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

            <div className="block lg:hidden">
                {!isMobileMenuOpen && (
                    <button
                        onClick={toggleMobileMenu}
                        className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                        aria-label="Open menu"
                    >
                        <FaBars className="w-6 h-6" />
                    </button>
                )}
            </div>
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
                        onClick={closeMobileMenu}
                    ></div>


                    <div className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-xl transform transition-transform">

                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                            <button
                                onClick={closeMobileMenu}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Close menu"
                            >
                                <FaTimes className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>


                        <div className="overflow-y-auto h-full pb-20">
                            <div className="p-6 space-y-4">

                                <div className="border-b border-gray-100 pb-4">
                                    <a
                                        href="/"
                                        className="block text-lg font-medium text-gray-800 hover:text-blue-600 py-2"
                                        onClick={closeMobileMenu}
                                    >
                                        Home
                                    </a>
                                </div>

                                <div className="border-b border-gray-100 pb-4">
                                    <span className="block text-lg font-medium text-gray-800 hover:text-blue-600 py-2 cursor-pointer">
                                        About Us
                                    </span>
                                </div>


                                <div className="border-b border-gray-100 pb-4">
                                    <button
                                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                        className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-blue-600 py-2"
                                    >
                                        Products
                                        <FaChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {mobileProductsOpen && (
                                        <div className="mt-4 pl-4 space-y-4">

                                            <div>
                                                <button
                                                    onClick={() => setMobileBurnersOpen(!mobileBurnersOpen)}
                                                    className="flex items-center justify-between w-full text-base font-semibold text-gray-700 hover:text-blue-600 py-2"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                                        Burners
                                                    </div>
                                                    <FaChevronDown className={`w-3 h-3 transition-transform ${mobileBurnersOpen ? 'rotate-180' : ''}`} />
                                                </button>

                                                {mobileBurnersOpen && (
                                                    <div className="mt-3 pl-4 space-y-3">

                                                        <div>
                                                            <button
                                                                onClick={() => setMobileSubMenuOpen(mobileSubMenuOpen === 'steel' ? null : 'steel')}
                                                                className="flex items-center justify-between w-full text-sm font-medium text-gray-600 hover:text-blue-600 py-2"
                                                            >
                                                                Stainless Steel
                                                                <FaChevronDown className={`w-3 h-3 transition-transform ${mobileSubMenuOpen === 'steel' ? 'rotate-180' : ''}`} />
                                                            </button>
                                                            {mobileSubMenuOpen === 'steel' && (
                                                                <div className="mt-2 pl-4 space-y-2">
                                                                    <a href="#" className="block text-sm text-gray-500 hover:text-blue-600 py-1">2 Burner</a>
                                                                    <a href="#" className="block text-sm text-gray-500 hover:text-blue-600 py-1">3 Burner</a>
                                                                </div>
                                                            )}
                                                        </div>


                                                        <div>
                                                            <button
                                                                onClick={() => setMobileSubMenuOpen(mobileSubMenuOpen === 'glass' ? null : 'glass')}
                                                                className="flex items-center justify-between w-full text-sm font-medium text-gray-600 hover:text-blue-600 py-2"
                                                            >
                                                                Glass
                                                                <FaChevronDown className={`w-3 h-3 transition-transform ${mobileSubMenuOpen === 'glass' ? 'rotate-180' : ''}`} />
                                                            </button>
                                                            {mobileSubMenuOpen === 'glass' && (
                                                                <div className="mt-2 pl-4 space-y-2">
                                                                    <a href="#" className="block text-sm text-gray-500 hover:text-blue-600 py-1">3 Burner</a>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>


                                            <div className="border-t border-gray-100 pt-4">
                                                <h4 className="text-sm font-semibold text-gray-700 mb-3">Other Products</h4>
                                                <div className="space-y-2">
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
                                                            className="block text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 py-2 px-3 rounded-md transition-colors"
                                                        >
                                                            {product}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>


                                <div className="border-b border-gray-100 pb-4">
                                    <span className="block text-lg font-medium text-gray-800 hover:text-blue-600 py-2 cursor-pointer">
                                        Contact Us
                                    </span>
                                </div>


                                <div className="border-b border-gray-100 pb-4">
                                    <span className="block text-lg font-medium text-gray-800 hover:text-blue-600 py-2 cursor-pointer">
                                        Media
                                    </span>
                                </div>


                                <div className="pb-4">
                                    <span className="block text-lg font-medium text-gray-800 hover:text-blue-600 py-2 cursor-pointer">
                                        Blog
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MenuItems;