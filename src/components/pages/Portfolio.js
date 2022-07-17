import React from 'react';
import Project from './Project';

export default function Portfolio() {
    return (
        <section id="portfolio" className="">
            <div className="section-title col-1">
                <h2>Portfolio</h2>
            </div>
            <div className="section-content col">
                <Project image="./images/yakety-sm.png"
                    imgAlt="Yakety"
                    link="https://yakety-chat.herokuapp.com/"
                    linkAlt="Link to the main Yakety application"
                    title="Yakety"
                    description="Yakety is a one-on-one chat application using common web technologies as well as being database backed and leveraging realtime streaming APIs via socket.io."
                    />
                <Project image="./images/portfolio-screenshot.png"
                    imgAlt="Chris Mullendore Portfolio"
                    link="https://portfolio.vindage.com/"
                    linkAlt="Link to the main portfolio site"
                    title="Portfolio"
                    description="The Project Portfolio project is a collection of projects created during the bootcamp, currently using React on Node.js."
                    />
                <Project image="./images/my-lifestyle-preview.png"
                    imgAlt="My Lifestyle"
                    link="https://lifestyle.portfolio.vindage.com"
                    linkAlt="My Lifestyle"
                    title="My Lifestyle"
                    description="The Project Portfolio project is my first attempt at showcasing various styles and implementations in HTML, CSS, and Javascript."
                    />
                <Project image="./images/run-buddy-preview.png"
                    imgAlt="Run Buddy Snapshot"
                    link="https://cmullendore-bootcamp.github.io/run-buddy/"
                    linkAlt="Run Buddy"
                    title="Run Buddy"
                    description="First project focusing on basic layout."
                    />
            </div>
        </section>
    );
}
