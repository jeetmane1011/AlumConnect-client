import React from 'react';
import '../App.css';
import Footer from '../components/Home-Comp/Footer';
import ImageSection from '../components/Home-Comp/ImageSection';
import ResourceSection from '../components/Home-Comp/ResourceSection'

function Resources() {
  return (
    <div>
      <ImageSection page="resources" title="Resources"/>
      {/* <ResourcesImageSection /> */}
      <ResourceSection />
      <Footer />
    </div>
  );
}

export default Resources;
