import React from 'react';

function About() {
    return (
        <div
            id="about"
            className="w-full h-screen mx-auto pt-[100px] max-w-[1000px] min-h-[50vh] text-rosePine-rose"
        >
            <div className="flex pb-[42px] w-full">
                <span className="text-rosePine-pine text-bold text-5xl">
                    About
                </span>
            </div>
            <div className="text-4xl">
                <p>
                    I am very passionate about building excellent and cool
                    projects.
                </p>
            </div>
        </div>
    );
}

export default About;
