import React from 'react';
import '../App.css';
import GalleryCarousel from '../components/Home-Comp/GalleryCarousel';
import About from '../components/Home-Comp/About';
import HeroSection from '../components/Home-Comp/HomeSection';
import Footer from '../components/Home-Comp/Footer';
import ChatSection from '../components/Home-Comp/ChatSection';
import Discover from '../components/Home-Comp/DiscoverSection';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <GalleryCarousel />
      <ChatSection />
      <Discover />
      <Footer />
    </>
  );
}

export default Home;
