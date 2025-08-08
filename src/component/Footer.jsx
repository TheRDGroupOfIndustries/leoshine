import React from 'react'
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
        <div>
       <footer className="bg-black text-white py-8 px-4">
      {/* Main Navigation Links */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 mb-8">
          {/* Shopping */}
          <div>
            <h3 className="font-semibold mb-4">Shopping</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">Pressure Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">Cookware</a></li>
              <li><a href="#" className="hover:text-gray-300">Cooking Appliances</a></li>
              <li><a href="#" className="hover:text-gray-300">Food Preparation</a></li>
              <li><a href="#" className="hover:text-gray-300">Breakfast and Snacks</a></li>
              <li><a href="#" className="hover:text-gray-300">Chimney/ Kitchen Hood</a></li>
              <li><a href="#" className="hover:text-gray-300">Home Appliances</a></li>
              <li><a href="#" className="hover:text-gray-300">Accessories</a></li>
            </ul>
          </div>

          {/* Brand */}
          <div>
            <h3 className="font-semibold mb-4">Brand</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Investor Center</a></li>
              <li><a href="#" className="hover:text-gray-300">Our Stores</a></li>
              <li><a href="#" className="hover:text-gray-300">People & Careers</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">Food & Recipe</a></li>
              <li><a href="#" className="hover:text-gray-300">Cooking Tips</a></li>
              <li><a href="#" className="hover:text-gray-300">Blogs</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">Store Locator</a></li>
              <li><a href="#" className="hover:text-gray-300">Service Locator</a></li>
              <li><a href="#" className="hover:text-gray-300">Register a complaint</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">My Profile</a></li>
              <li><a href="#" className="hover:text-gray-300">Addresses</a></li>
              <li><a href="#" className="hover:text-gray-300">Orders</a></li>
              <li><a href="#" className="hover:text-gray-300">Track my order</a></li>
              <li><a href="#" className="hover:text-gray-300">My repair & inquiry status</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">Return Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms and conditions</a></li>
              <li><a href="#" className="hover:text-gray-300">Payment modes accepted</a></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-semibold mb-4">More</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-300">Shop Prestige</a></li>
              <li><a href="#" className="hover:text-gray-300">Shop Judge</a></li>
              <li><a href="#" className="hover:text-gray-300">Prestige Smartchef</a></li>
              <li><a href="#" className="hover:text-gray-300">Corporate</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-gray-900 p-6 rounded-lg">
          {/* Customer Care */}
          <div>
            <h3 className="font-semibold mb-4">Customer Care</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+918066004411</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+918066824600</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>customercare@ttkprestige.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">📱</span>
                <span>+919742334411</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>8:00 am - 8:00 pm</span>
              </div>
            </div>
          </div>

          {/* Website Order Support */}
          <div>
            <h3 className="font-semibold mb-4">Website Order Support</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+919535631112</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+918066777073</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>care@ttkprestige.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>9:30 am - 6:30 pm</span>
              </div>
            </div>
          </div>

          {/* Bulk Orders */}
          <div>
            <h3 className="font-semibold mb-4">Bulk Orders</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>rk.gupta@ttkprestige.com</span>
              </div>
            </div>
            <h4 className="font-semibold mt-4 mb-2">Export Enquiry</h4>
            <div className="flex items-center gap-2 text-sm">
              <Mail size={16} />
              <span>rajkumar@ttkprestige.com</span>
            </div>
          </div>
        </div>

        {/* Office Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-gray-900 p-6 rounded-lg">
          {/* Corporate Office */}
          <div>
            <h3 className="font-semibold mb-4">Corporate Office</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Nagarjuna Castle, No.1/1 & 1/2, Wood Street, Ashok Nagar, Richmond Town, Bengaluru - 560025.</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+918066847100</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">📱</span>
                <span>+919742334411</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>customercare@ttkprestige.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>9:30 am - 6:30 pm</span>
              </div>
            </div>
          </div>

          {/* Branch Regional Office */}
          <div>
            <h3 className="font-semibold mb-4">Branch Regional Office</h3>
            <div className="space-y-2 text-sm">
              <p className="font-medium">Branch Locator</p>
              <p className="font-medium">Jobs & Careers</p>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>hr@ttkprestige.com</span>
              </div>
              <p className="font-medium">Opportunities</p>
            </div>
          </div>

          {/* Prestige Xclusive Franchise */}
          <div>
            <h3 className="font-semibold mb-4">Prestige Xclusive Franchise Enquiry</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-500">📱</span>
                <span>+917742334411</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>siddharth.shah@ttkprestige.com</span>
              </div>
              <p className="font-medium">Fill Enquiry form</p>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Pressure Cooker */}
          <div>
            <h3 className="font-semibold mb-4">Pressure Cooker</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-gray-300">Inner Lid Pressure Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">Outer Lid Pressure Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">Clip On/Flip On Pressure Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">Hard Anodised Pressure Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">Stainless Steel Pressure Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">Aluminium Pressure Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">Triply Pressure Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">2 Litre Pressure Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">3 Litre Pressure Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">5 Litre Pressure Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">6.5 Litre and Above Pressure Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">Straight Pressure Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">Handi Pressure Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">Pan Pressure Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">Pressure Cooker Collections</a></li>
            </ul>
          </div>

          {/* Cookware */}
          <div>
            <h3 className="font-semibold mb-4">Cookware</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-gray-300">Non-Stick Cookware</a></li>
              <li><a href="#" className="hover:text-gray-300">Ceramic Non-Stick Cookware</a></li>
              <li><a href="#" className="hover:text-gray-300">Triply Cookware</a></li>
              <li><a href="#" className="hover:text-gray-300">Hard Anodised Cookware</a></li>
              <li><a href="#" className="hover:text-gray-300">Stainless Steel Cookware</a></li>
              <li><a href="#" className="hover:text-gray-300">Cast Iron Cookware</a></li>
              <li><a href="#" className="hover:text-gray-300">Dosa Tawa</a></li>
              <li><a href="#" className="hover:text-gray-300">Roti Tawa</a></li>
              <li><a href="#" className="hover:text-gray-300">Frying Pan</a></li>
              <li><a href="#" className="hover:text-gray-300">Kadai</a></li>
              <li><a href="#" className="hover:text-gray-300">Casserole</a></li>
              <li><a href="#" className="hover:text-gray-300">Idli Maker</a></li>
              <li><a href="#" className="hover:text-gray-300">Paniyarakkal</a></li>
              <li><a href="#" className="hover:text-gray-300">Grill Pan</a></li>
              <li><a href="#" className="hover:text-gray-300">Tadka Pan</a></li>
              <li><a href="#" className="hover:text-gray-300">Appachetty</a></li>
              <li><a href="#" className="hover:text-gray-300">Deep Pot</a></li>
              <li><a href="#" className="hover:text-gray-300">Biryani Pot</a></li>
              <li><a href="#" className="hover:text-gray-300">Milk Pan</a></li>
              <li><a href="#" className="hover:text-gray-300">Sauce Pans</a></li>
              <li><a href="#" className="hover:text-gray-300">Induction Base Cookware</a></li>
              <li><a href="#" className="hover:text-gray-300">Non-Induction Base Cookware</a></li>
            </ul>
          </div>

          {/* Kitchen Appliances */}
          <div>
            <h3 className="font-semibold mb-4">Kitchen Appliances</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-gray-300">Gas Stove</a></li>
              <li><a href="#" className="hover:text-gray-300">Stainless Steel Gas Stove</a></li>
              <li><a href="#" className="hover:text-gray-300">Glass Top Gas Stove</a></li>
              <li><a href="#" className="hover:text-gray-300">Convertible Hob Gas Stove</a></li>
              <li><a href="#" className="hover:text-gray-300">Combination Hob Gas Stove</a></li>
              <li><a href="#" className="hover:text-gray-300">2 Burner Gas Stove</a></li>
              <li><a href="#" className="hover:text-gray-300">3 Burner Gas Stove</a></li>
              <li><a href="#" className="hover:text-gray-300">4 Burner Gas Stove</a></li>
              <li><a href="#" className="hover:text-gray-300">5 Burner Gas Stove</a></li>
              <li><a href="#" className="hover:text-gray-300">Swach Gas Stove</a></li>
              <li><a href="#" className="hover:text-gray-300">Non-Swach Gas Stove</a></li>
              <li><a href="#" className="hover:text-gray-300">Cooktop</a></li>
              <li><a href="#" className="hover:text-gray-300">Induction Cooktop</a></li>
              <li><a href="#" className="hover:text-gray-300">Infrared Cooktop</a></li>
              <li><a href="#" className="hover:text-gray-300">Cooktop Collections</a></li>
              <li><a href="#" className="hover:text-gray-300">1200 Watt Cooktop</a></li>
              <li><a href="#" className="hover:text-gray-300">1200 Watt to 1500 Watt Cooktop</a></li>
              <li><a href="#" className="hover:text-gray-300">1600 Watt to 1800 Watt Cooktop</a></li>
              <li><a href="#" className="hover:text-gray-300">1900 Watt to 2000 Watt Cooktop</a></li>
              <li><a href="#" className="hover:text-gray-300">2000 Watt and Above Cooktop</a></li>
              <li><a href="#" className="hover:text-gray-300">Rice Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">Open Type Rice Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">Close Type Rice Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">0.4 Litre to 0.6 Litre Rice Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">0.7 Litre to 1 Litre Rice Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">1.1 Litre to 1.8 Litre Rice Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">2 Litre to 4.2 Litre Rice Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">Stainless Steel Rice Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">Aluminium Rice Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">Triply Rice Cooker</a></li>
              <li><a href="#" className="hover:text-gray-300">OTG Oven</a></li>
              <li><a href="#" className="hover:text-gray-300">Air Fryer</a></li>
            </ul>
          </div>

          {/* Food Preparation Appliances */}
          <div>
            <h3 className="font-semibold mb-4">Food Preparation Appliances</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-gray-300">Mixer Grinder</a></li>
              <li><a href="#" className="hover:text-gray-300">Mixer Grinder Collections</a></li>
              <li><a href="#" className="hover:text-gray-300">Juicer Mixer Grinder</a></li>
              <li><a href="#" className="hover:text-gray-300">Wet Processor</a></li>
              <li><a href="#" className="hover:text-gray-300">500 Watt to 550 Watt Mixer Grinder</a></li>
              <li><a href="#" className="hover:text-gray-300">750 Watt Mixer Grinder</a></li>
              <li><a href="#" className="hover:text-gray-300">1000 Watt Mixer Grinder</a></li>
              <li><a href="#" className="hover:text-gray-300">2 to 3 Jars Mixer Grinder</a></li>
              <li><a href="#" className="hover:text-gray-300">4 Jars Mixer Grinder</a></li>
              <li><a href="#" className="hover:text-gray-300">5 Jars Mixer Grinder</a></li>
              <li><a href="#" className="hover:text-gray-300">6 Jars Mixer Grinder</a></li>
              <li><a href="#" className="hover:text-gray-300">6+ Jars Mixer Grinder</a></li>
              <li><a href="#" className="hover:text-gray-300">Wet Grinder</a></li>
              <li><a href="#" className="hover:text-gray-300">Dough Blender</a></li>
              <li><a href="#" className="hover:text-gray-300">Hand Mixer</a></li>
              <li><a href="#" className="hover:text-gray-300">Electric Chopper</a></li>
              <li><a href="#" className="hover:text-gray-300">Grain Grinder</a></li>
            </ul>
          </div>

          {/* Small Appliances & Kitchen Accessories */}
          <div>
            <h3 className="font-semibold mb-4">Small Appliances</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-gray-300">Toaster</a></li>
              <li><a href="#" className="hover:text-gray-300">Pop-Up Toasters</a></li>
              <li><a href="#" className="hover:text-gray-300">Sandwich Maker</a></li>
              <li><a href="#" className="hover:text-gray-300">Griller Toaster</a></li>
              <li><a href="#" className="hover:text-gray-300">Waffle Maker</a></li>
              <li><a href="#" className="hover:text-gray-300">Interchangeable Plates Toasters</a></li>
              <li><a href="#" className="hover:text-gray-300">Single Toaster</a></li>
              <li><a href="#" className="hover:text-gray-300">Double Toaster</a></li>
              <li><a href="#" className="hover:text-gray-300">Large Toaster</a></li>
              <li><a href="#" className="hover:text-gray-300">Electric Kettle</a></li>
              <li><a href="#" className="hover:text-gray-300">Stainless Steel Kettle</a></li>
              <li><a href="#" className="hover:text-gray-300">Double Walled Kettle</a></li>
              <li><a href="#" className="hover:text-gray-300">Glass Kettle</a></li>
              <li><a href="#" className="hover:text-gray-300">Upto 1 Litre Kettle</a></li>
              <li><a href="#" className="hover:text-gray-300">1 Litre Kettle</a></li>
              <li><a href="#" className="hover:text-gray-300">1.5 Litre Kettle</a></li>
              <li><a href="#" className="hover:text-gray-300">1.7 Litre to 1.8 Litre Kettle</a></li>
              <li><a href="#" className="hover:text-gray-300">2 Litre and Above Kettle</a></li>
              <li><a href="#" className="hover:text-gray-300">Juicer</a></li>
              <li><a href="#" className="hover:text-gray-300">Coffee Maker</a></li>
            </ul>

            <h3 className="font-semibold mb-4 mt-8">Kitchen Chimney</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-gray-300">Curved Shape Chimney</a></li>
              <li><a href="#" className="hover:text-gray-300">T-type Shape Chimney</a></li>
              <li><a href="#" className="hover:text-gray-300">Slant Shape Chimney</a></li>
              <li><a href="#" className="hover:text-gray-300">Conical Shape Chimney</a></li>
              <li><a href="#" className="hover:text-gray-300">Other Shapes Chimney</a></li>
              <li><a href="#" className="hover:text-gray-300">60 CM Chimney</a></li>
              <li><a href="#" className="hover:text-gray-300">90 CM Chimney</a></li>
              <li><a href="#" className="hover:text-gray-300">Glass Finish Chimney</a></li>
              <li><a href="#" className="hover:text-gray-300">Black Chimney</a></li>
              <li><a href="#" className="hover:text-gray-300">Steel Chimney</a></li>
            </ul>

            <h3 className="font-semibold mb-4 mt-8">Home Appliances</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-gray-300">Irons</a></li>
              <li><a href="#" className="hover:text-gray-300">Water Purifier</a></li>
              <li><a href="#" className="hover:text-gray-300">Vacuum Cleaner</a></li>
              <li><a href="#" className="hover:text-gray-300">Roti Maker</a></li>
              <li><a href="#" className="hover:text-gray-300">Fruit and Vegetable Cleaner</a></li>
            </ul>

            <h3 className="font-semibold mb-4 mt-8">Kitchen Accessories</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-gray-300">Bottles and Flasks</a></li>
              <li><a href="#" className="hover:text-gray-300">Water Bottles</a></li>
              <li><a href="#" className="hover:text-gray-300">Flasks</a></li>
              <li><a href="#" className="hover:text-gray-300">Stainless Steel Bottles and Flasks</a></li>
              <li><a href="#" className="hover:text-gray-300">Copper Bottles and Flasks</a></li>
              <li><a href="#" className="hover:text-gray-300">500 ML to 750 ML Bottles and Flasks</a></li>
              <li><a href="#" className="hover:text-gray-300">900 ML to 1500 ML Bottles and Flasks</a></li>
              <li><a href="#" className="hover:text-gray-300">1600 ML to 2000 ML Bottles and Flasks</a></li>
              <li><a href="#" className="hover:text-gray-300">Tiffin Sets</a></li>
              <li><a href="#" className="hover:text-gray-300">Knife Set</a></li>
              <li><a href="#" className="hover:text-gray-300">Vegetable Cutter</a></li>
              <li><a href="#" className="hover:text-gray-300">Cooker Separator</a></li>
              <li><a href="#" className="hover:text-gray-300">Barbeque Grill Set</a></li>
              <li><a href="#" className="hover:text-gray-300">Cooker Gasket</a></li>
              <li><a href="#" className="hover:text-gray-300">Cleaning Tools</a></li>
              <li><a href="#" className="hover:text-gray-300">Ladders</a></li>
              <li><a href="#" className="hover:text-gray-300">Dustbin</a></li>
              <li><a href="#" className="hover:text-gray-300">Copper Water Dispenser</a></li>
              <li><a href="#" className="hover:text-gray-300">Gas Lighter</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
           Copyright © 2025 Leoshine Ltd. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm hover:text-gray-300">Site Map</a>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700">
                <Youtube size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
</div>
  )
}
