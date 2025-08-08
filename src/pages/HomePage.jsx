// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import ImageGallery from '../components/ImageGallery';
import TopCategories from '../components/TopCategories';
import BestsellerPage from './BestsellerPage';

const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <ImageGallery />
      <TopCategories />
      <BestsellerPage />
      
    </>
  );
};

export default HomePage;
