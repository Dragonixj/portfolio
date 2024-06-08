import React from 'react';

function About() {
    return (
        <div
            id="about"
            className="mx-auto h-screen min-h-[50vh] w-full max-w-[1000px] pt-[100px] text-rosePine-rose"
        >
            <div className="flex w-full pb-[42px]">
                <span className="text-bold text-5xl text-rosePine-pine">
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
