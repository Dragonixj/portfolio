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
                    I am a tech and software enthusiast passionate about
                    learning and coding. I enjoy learning new things and facing
                    unfamiliar challenges.
                </p>
            </div>
        </div>
    );
}

export default About;
