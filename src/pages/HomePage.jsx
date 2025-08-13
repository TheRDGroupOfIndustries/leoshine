// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import ImageGallery from '../components/ImageGallery';
import TopCategories from '../components/TopCategories';
import BestsellerPage from './BestsellerPage';
import NewArrivalsPage from './NewArrivalsPage';
import InfluencersChoice from '../components/InfluencersChoice';
import Customers from '../components/Customers';
import ExploreBlogs from './ExploreBlogs';
import Consultation from './Consultation';
import MostViewed from './MostViewed'
import Footer from '../components/Footer';
import Video from '../components/Video';
import VideoGallery from '../components/VideoGallery';

const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <ImageGallery />
      <TopCategories />
      <BestsellerPage />
      <NewArrivalsPage/>
      <Video/>
      <VideoGallery/>
      <InfluencersChoice/>
      <Customers/>
      <ExploreBlogs/>
      <Consultation/>  
      <MostViewed/> 
      <Footer/>   
    </>
  );
};

export default HomePage;
