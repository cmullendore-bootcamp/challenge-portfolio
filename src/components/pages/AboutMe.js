import React from 'react';

export default function AboutMe() {
    return (
        <section id="about-me" className="">
            <div className="section-title col-1">
                <h2>About</h2>
            </div>
            <div className="section-content about-me-content col">
                <img src="./images/ifly-standing.png" alt="Headshot" />
                <div className="section-content col">
                    <p>
                        This site demonstrates several projects worked on during my Columbia full stack coding bootcamp. It includes the guided, individual from-scratch, and collaboration projects I worked on and completed during the bootcamp. Many include additional capabilities
                        and features that are beyond the scoped design of the bootcamp and may contain additional features designed by me to increase my skills and practice.
                    </p>
                    <p>
                        As I learn I may continue to expand some of these products into new areas. At this point though please do remember that they're just starter/learning projects and generally only represent my skill as of the time they were originally completed.
                    </p>
                </div>
            </div>
        </section>
    );
}
