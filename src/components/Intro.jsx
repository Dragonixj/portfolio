import React, { useState } from 'react';

function Intro() {
    return (
        <div id="intro" className="w-full h-screen bg-rosePine-base">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-rosePine-text">
                <p>Hey It's</p>
                <h1 className="font-bold text-4xl sm:text-7xl">Elvis</h1>
                <h2 className="font-bold text-3xl sm:text-5xl text-rosePine-muted">
                    A software engineer .....
                </h2>
            </div>
        </div>
    );
}

export default Intro;
