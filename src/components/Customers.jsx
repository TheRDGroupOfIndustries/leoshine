import React, { useState, useEffect } from 'react';
import { CustomersData } from '../data/customers';
import { FaStar, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const Customers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [cardsPerPage, setCardsPerPage] = useState(3);

 
  const getCardsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // Small devices: 1 card
      if (window.innerWidth < 1024) return 2; // Medium devices: 2 cards
      return 3; // Large devices: 3 cards
    }
    return 3;
  };

  useEffect(() => {
    const updateCardsPerPage = () => {
      const newCardsPerPage = getCardsPerPage();
      setCardsPerPage(newCardsPerPage);
      
  
      if (currentIndex >= CustomersData.length - newCardsPerPage + 1) {
        setCurrentIndex(Math.max(0, CustomersData.length - newCardsPerPage));
      }
    };

    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(CustomersData.length - cardsPerPage, 0) : prev - cardsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + cardsPerPage >= CustomersData.length ? 0 : prev + cardsPerPage
    );
  };

  const visibleCards = CustomersData.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <div className="py-8 px-4 md:px-10 flex flex-col items-center">
      <h2 className="text-2xl font-medium mb-2 text-center">
        Loved By Millions Of Happy Customers
      </h2>
      <h6 className="text-sm font-semibold mb-8 text-center">
        Heart warming experiences shared by our customers
      </h6>

      <div className="relative w-full max-w-7xl">
   
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
        >
          <FaChevronLeft />
        </button>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-8">
          {visibleCards.map((customer, index) => (
            <div
              key={index}
              onClick={() => setSelectedCustomer(customer)}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start text-left cursor-pointer hover:shadow-xl transition-all"
            >

              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < Math.floor(customer.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              <h3 className="text-base italic text-gray-800 mb-3">
                "{customer.review}"
              </h3>

              <p className="text-sm text-gray-600 mb-4 truncate w-full">
                {customer.description}
              </p>

              <span className="text-red-500 text-sm font-semibold mb-4 hover:underline">
                Read More &gt;
              </span>

              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={customer.image}
                  alt={customer.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <p className="font-semibold text-sm">{customer.name}</p>
                  <p className="text-xs text-gray-500">{customer.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
        >
          <FaChevronRight />
        </button>
      </div>

 
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-full relative">
            <button
              onClick={() => setSelectedCustomer(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>

            {/* Stars */}
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < Math.floor(selectedCustomer.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            <h3 className="text-base italic text-gray-800 mb-3">
              "{selectedCustomer.review}"
            </h3>

     
            <p className="text-sm text-gray-600 mb-4">
              {selectedCustomer.description}
            </p>

          
            <div className="flex items-center gap-3">
              <img
                src={selectedCustomer.image}
                alt={selectedCustomer.name}
                className="w-12 h-12 rounded-full object-cover border"
              />
              <div>
                <p className="font-semibold text-sm">{selectedCustomer.name}</p>
                <p className="text-xs text-gray-500">{selectedCustomer.address}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;