import React from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      <div className="px-4 md:px-8 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
 
          <div className="hidden md:grid md:grid-cols-6 gap-8">
        
            <div className="col-span-1">
              <h3 className="text-white font-semibold mb-4 text-sm">Shopping</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Pressure Cooker</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Cookware</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Cooking Appliances</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Food Preparation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Breakfast and Snacks</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Chimney/ Kitchen Hood</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Home Appliances</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Accessories</a></li>
              </ul>
            </div>

       
            <div className="col-span-1">
              <h3 className="text-white font-semibold mb-4 text-sm">Brand</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Investor Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Our Stores</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">People & Careers</a></li>
              </ul>
            </div>

  
            <div className="col-span-1">
              <h3 className="text-white font-semibold mb-4 text-sm">Community</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Food & Recipe</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Cooking Tips</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Blogs</a></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-white font-semibold mb-4 text-sm">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Store Locator</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Service Locator</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Register a complaint</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Contact Us</a></li>
              </ul>
            </div>

          
            <div className="col-span-1">
              <h3 className="text-white font-semibold mb-4 text-sm">Account</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">My Profile</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Addresses</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Orders</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Track my order</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">My repair & inquiry status</a></li>
              </ul>
            </div>

       
            <div className="col-span-1">
              <h3 className="text-white font-semibold mb-4 text-sm">Policies</h3>
              <ul className="space-y-3 mb-6">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Return Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms and conditions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Payment modes accepted</a></li>
              </ul>
              
              <h3 className="text-white font-semibold mb-4 text-sm">More</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Shop Prestige</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Shop Judge</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Prestige Smartchef</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Corporate</a></li>
              </ul>
            </div>
          </div>

 
          <div className="md:hidden space-y-4">
            {[
              {
                title: "Shopping",
                items: ["Pressure Cooker", "Cookware", "Cooking Appliances", "Food Preparation", "Breakfast and Snacks", "Chimney/ Kitchen Hood", "Home Appliances", "Accessories"]
              },
              {
                title: "Brand",
                items: ["About Us", "Investor Center", "Our Stores", "People & Careers"]
              },
              {
                title: "Community",
                items: ["Food & Recipe", "Cooking Tips", "Blogs"]
              },
              {
                title: "Support",
                items: ["Store Locator", "Service Locator", "Register a complaint", "Contact Us"]
              },
              {
                title: "Account",
                items: ["My Profile", "Addresses", "Orders", "Track my order", "My repair & inquiry status"]
              },
              {
                title: "Policies",
                items: ["Return Policy", "Privacy Policy", "Terms and conditions", "Payment modes accepted"]
              },
              {
                title: "More",
                items: ["Shop Prestige", "Shop Judge", "Prestige Smartchef", "Corporate"]
              }
            ].map((section, index) => (
              <details key={index} className="group">
                <summary className="flex justify-between items-center cursor-pointer text-white font-semibold py-3 border-b border-gray-700">
                  {section.title}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <ul className="mt-3 space-y-2 pl-2">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors block py-1">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </div>

 
      <div className="border-t border-gray-700">
        <div className="px-4 md:px-8 lg:px-12 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-4 text-base">Customer Care</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-gray-400 text-sm" />
                    <span className="text-gray-300 text-sm">+918060004411</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-gray-400 text-sm" />
                    <span className="text-gray-300 text-sm">+918046824000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-gray-400 text-sm" />
                    <span className="text-gray-300 text-sm">customercare@ttkprestige.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaWhatsapp className="text-green-500 text-sm" />
                    <span className="text-gray-300 text-sm">+919742334411</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-gray-400 text-sm" />
                    <span className="text-gray-300 text-sm">8:00 am - 8:00 pm</span>
                  </div>
                </div>
              </div>

              
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-4 text-base">Website Order Support</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-gray-400 text-sm" />
                    <span className="text-gray-300 text-sm">+919535621112</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-gray-400 text-sm" />
                    <span className="text-gray-300 text-sm">+918056777073</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-gray-400 text-sm" />
                    <span className="text-gray-300 text-sm">care@ttkprestige.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-gray-400 text-sm" />
                    <span className="text-gray-300 text-sm">9:30 am - 6:30 pm</span>
                  </div>
                </div>
              </div>

         
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-4 text-base">Bulk Orders</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-gray-400 text-sm" />
                    <span className="text-gray-300 text-sm">rk.gupta@ttkprestige.com</span>
                  </div>
                </div>
                
                <h3 className="text-white font-semibold mb-4 text-base">Export Enquiry</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-gray-400 text-sm" />
                    <span className="text-gray-300 text-sm">rajkumar@ttkprestige.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-700 py-4">
        <div className="px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400 text-sm">
              © 2025 TTK Prestige. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;