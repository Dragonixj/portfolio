import React from 'react';
import { ReactTyped } from 'react-typed';

function Intro() {
    return (
        <div id="intro" className="h-screen w-full bg-rosePine-base">
            <div className="mx-auto flex h-full max-w-[1000px] flex-col justify-center px-8 text-rosePine-text">
                <p className="text-4xl">Hey It's</p>
                <h1 className="text-4xl font-bold sm:text-7xl">
                    <ReactTyped
                        strings={[
                            `<span class="text-rosePine-love">Elvis</span> here`,
                        ]}
                        typeSpeed={100}
                        backDelay={70}
                        smartBackspace={true}
                    />
                </h1>
                <h2 className="text-3xl font-bold text-rosePine-muted sm:text-5xl">
                    A software engineer student.....
                </h2>
            </div>
        </div>
    );
}

export default Intro;
