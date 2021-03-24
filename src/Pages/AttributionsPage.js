import React from 'react';
// Components
import Attributions from '../components/Attributions';
import Footer from '../components/Footer';
import ScrollToTopOfPage from '../components/ScrollToTopOfPage';

const AttributionsPage = () => {
  return (
    <>
      <ScrollToTopOfPage />
      <Attributions />
      <Footer />
    </>
  );
};

export default AttributionsPage;
