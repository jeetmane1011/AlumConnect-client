import React from 'react';
import '../App.css';
import CalendarSection from '../components/Home-Comp/CalendarSection';
import Footer from '../components/Home-Comp/Footer';
import ImageSection from '../components/Home-Comp/ImageSection';

function Events() {
  return (
    <div>
      <ImageSection page="events" title="Events"/>
      <CalendarSection />
      <Footer />
    </div>
  );
}

export default Events;
