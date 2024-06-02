import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';

function Intro() {
    return (
        <div id="intro" className="w-full h-screen bg-rosePine-base">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-rosePine-text">
                <p className="text-4xl">Hey It's</p>
                <h1 className="font-bold text-4xl sm:text-7xl">
                    <ReactTyped
                        strings={[`<span class="text-rosePine-love">Elvis</span> here`]}
                        typeSpeed={100}
                        backDelay={70}
                    />
                </h1>
                <h2 className="font-bold text-3xl sm:text-5xl text-rosePine-muted">
                    A software engineer student.....
                </h2>
            </div>
        </div>
    );
}

export default Intro;
