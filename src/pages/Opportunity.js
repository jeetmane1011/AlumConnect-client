import React from 'react';
import '../App.css';
import Footer from '../components/Home-Comp/Footer';
import ImageSection from '../components/Home-Comp/ImageSection';
import OpportunitySection from '../components/Home-Comp/OpportunitySection';

function Opportunity() {
  return (
    <div>
      <ImageSection page="opportunity" title="Opportunities"/>
      <OpportunitySection />
      <Footer />
    </div>
  );
}

export default Opportunity;