import React, { useState, useEffect } from 'react';

import NavBar from './NavBar';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function Main() {

    useEffect(() => {
        document.title = `${currentPage} - Chris Mullendore`;
      });

    const [currentPage, setCurrentPage] = useState('About Me');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'About Me') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <AboutMe />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="body-div">
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            <div className="header-left-corner row">

            </div>
                {renderPage()}
            <footer>
                <div className="footer-left-corner">

                </div>
            </footer>
        </div>
    );
}