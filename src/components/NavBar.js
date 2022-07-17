import React from 'react';

export default function NavBar(props) {
    return (
        <header>
            <div id="header-bar">
                <div>
                    <h1>Chris&nbsp;Mullendore</h1>

                </div>
                <div></div>
                <div>
                    <nav>
                    <ul>
                        <li className={props.currentPage === 'About Me' ? 'nav-current' : ''}>
                                <a
                                href="#aboutme"
                                onClick={() => props.handlePageChange('About Me')}
                                >
                                About Me
                                </a>
                            </li>
                            <li className={props.currentPage === 'Portfolio' ? 'nav-current' : ''}>
                                <a
                                href="#portfolio"
                                onClick={() => props.handlePageChange('Portfolio')}
                                >
                                Portfolio
                                </a>
                            </li>
                            <li className={props.currentPage === 'Contact' ? 'nav-current' : ''}>
                                <a
                                href="#contact"
                                onClick={() => props.handlePageChange('Contact')}
                                >
                                Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
      );
}