// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import ImageGallery from '../components/ImageGallery';
import TopCategories from '../components/TopCategories';
import BestsellerPage from './BestsellerPage';
import TestimonialsSlider from '../components/TestimonialsSlider';
import Blog from '../components/Blogs';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <ImageGallery />
      <TopCategories />
      <BestsellerPage />
      <TestimonialsSlider />
      <Blog />
      <Footer />
    </>
  );
};

export default HomePage;
