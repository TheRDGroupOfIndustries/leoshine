// File: src/pages/ProductDetailPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { bestsellers } from "../data/bestsellersData";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";
const ProductDetailPage = () => {
    const { addToCart } = useCart();
    const { id } = useParams();
    const product = bestsellers.find((item) => item._id === id);
    const [quantity, setQuantity] = useState(1);
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const [showWarranty, setShowWarranty] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!product) return <div className="p-4">Product not found.</div>;

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const images = product.images || [product.image];
    const handlePrevImage = () => setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const handleNextImage = () => setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    return (
        <>
            <Header />
            <div className="min-h-screen bg-white px-4 md:px-12 py-8">

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col gap-2 w-full md:w-1/2">
                        <div className="relative w-full h-[400px] rounded border overflow-hidden">
                            <img
                                src={images[currentImageIndex]}
                                alt={product.name}
                                className="w-full h-full object-contain"
                            />
                            <button
                                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 px-2 py-1"
                                onClick={handlePrevImage}
                            >
                                ◀
                            </button>
                            <button
                                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 px-2 py-1"
                                onClick={handleNextImage}
                            >
                                ▶
                            </button>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt="thumb"
                                    className={`w-full h-20 object-contain border rounded cursor-pointer ${currentImageIndex === i ? 'border-black' : ''}`}
                                    onClick={() => setCurrentImageIndex(i)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <p className="text-sm text-gray-500 mb-1">SKU #{product._id}</p>
                        <h1 className="text-xl font-semibold mb-2">{product.name}</h1>
                        <div className="flex items-center gap-2 text-sm mb-2">
                            <span>⭐ {product.rating}</span>
                            <span className="text-gray-500">({product.reviews} reviews)</span>
                        </div>

                        <p className="text-lg font-bold text-gray-800 mb-1">₹{product.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">(inclusive of taxes)</p>
                        <p className="text-green-600 text-sm font-medium mb-1">{product.discount}% off</p>
                        <p className="text-sm text-gray-500 mb-4">
                            M.R.P: <s>₹{product.originalPrice.toFixed(2)}</s>
                        </p>


                        <div className="flex items-center gap-2 mb-4">
                            <button onClick={decrement} className="px-3 py-1 border">-</button>
                            <span>{quantity}</span>
                            <button onClick={increment} className="px-3 py-1 border">+</button>
                        </div>


                        <div className="flex gap-4 mb-6">
                            <button
                                onClick={() => addToCart(product)}
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                            >
                                Wishlist
                            </button>
                            <button className=" bg-black hover:bg-gray-800 text-white text-sm py-2 px-4 rounded">Buy Now</button>
                        </div>
                    </div>
                </div>


                <div className="mt-8 space-y-4">
                    <div>
                        <button
                            className="w-full py-3 px-4 bg-gray-100 rounded text-lg font-semibold text-left"
                            onClick={() => setShowMoreInfo(!showMoreInfo)}
                        >
                            More Information
                        </button>
                        {showMoreInfo && (
                            <div className="p-4 border rounded border-t-0 text-sm text-gray-700">
                                <ul className="list-disc list-inside space-y-1">
                                    {product.moreInfo?.map((info, idx) => (
                                        <li key={idx}>{info}</li>
                                    )) || <li>No information available.</li>}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div>
                        <button
                            className="w-full py-3 px-4 bg-gray-100 rounded text-lg font-semibold text-left"
                            onClick={() => setShowWarranty(!showWarranty)}
                        >
                            Warranty and Care
                        </button>
                        {showWarranty && (
                            <div className="p-4 border rounded border-t-0 text-sm text-gray-700">
                                <p>{product.warranty || 'Standard 1-year warranty included.'}</p>
                            </div>
                        )}
                    </div>

                    <div>
                        <button
                            className="w-full py-3 px-4 bg-gray-100 rounded text-lg font-semibold text-left"
                            onClick={() => setShowAbout(!showAbout)}
                        >
                            About
                        </button>
                        {showAbout && (
                            <div className="p-4 border rounded border-t-0 text-sm text-gray-700">
                                <p>{product.about || 'No additional information available.'}</p>
                            </div>
                        )}
                    </div>
                </div>


                <div className="mt-10 border p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Ratings and Reviews</h2>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-4xl font-bold">{product.rating}</p>
                            <p className="text-sm text-gray-500">Based on {product.reviews} customer reviews</p>
                        </div>
                        <div className="flex-1 ml-6">
                            <div className="flex items-center gap-2 text-sm"><span>5★</span><div className="w-1/2 bg-orange-400 h-2"></div><span>{product.reviews}</span></div>
                            <div className="flex items-center gap-2 text-sm"><span>4★</span><div className="w-1/2 bg-gray-200 h-2"></div><span>0</span></div>
                            <div className="flex items-center gap-2 text-sm"><span>3★</span><div className="w-1/2 bg-gray-200 h-2"></div><span>0</span></div>
                            <div className="flex items-center gap-2 text-sm"><span>2★</span><div className="w-1/2 bg-gray-200 h-2"></div><span>0</span></div>
                            <div className="flex items-center gap-2 text-sm"><span>1★</span><div className="w-1/2 bg-gray-200 h-2"></div><span>0</span></div>
                        </div>
                    </div>

                    <div className="mt-6 border-t pt-4">
                        <div className="mb-4">
                            <p className="font-semibold">Sandhya <span className="text-green-600 text-sm ml-1">✔ Verified Buyer</span></p>
                            <p className="text-yellow-500">★★★★★ (5 out of 5)</p>
                            <p className="font-medium mt-2">{product.reviewTitle || 'Versatile Product'}</p>
                            <p className="text-sm text-gray-700">{product.reviewText || 'I can easily switch between modes for boiling, frying, and even making chapatis.'}</p>
                            <p className="text-xs text-blue-500 mt-1">{product.reviewDate || '16/02/2025'}</p>
                        </div>
                        <button className="text-red-500 text-xs font-semibold">VIEW ALL {product.reviews} REVIEWS &gt;</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailPage;
