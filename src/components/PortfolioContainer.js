import React, { useState } from 'react';
import Header from './Header';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer'



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (   
    <div>
      <div className="center">
        <Header />
      </div>
      {/* We are passing the currentPage from state and the function to update it */}
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      {/* Here we are calling the renderPage method which will return a component  */}
      <div>
        {renderPage()}
      </div>
      <div className="center">
        <Footer />
      </div>
    </div>
  );
}
