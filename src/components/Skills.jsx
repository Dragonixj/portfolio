import React from 'react';
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import {
    SiTailwindcss,
    SiJavascript,
    SiPython,
    SiC,
    SiLinux,
    SiNeovim,
} from 'react-icons/si';

function Skills() {
    return (
        <div id="skills" className="w-full h-screen text-rosePine-text">
            {/* section header */}
            <div className="max-w-[1000px] justify-center mx-auto px-4 w-full h-full flex flex-col">
                <div>
                    <p className="text-5xl text-rosePine-pine font-bold inline">
                        Skills
                    </p>
                    <p className='py-4 text-rosePine-muted text-2xl'>
                        These are the tools and technologies I've worked with
                    </p>
                </div>

                <div className="text-6xl w-full grid grid-cols-5 sm:grid-cols-5 gap-4 text-center">
                    <div><SiTailwindcss /></div>
                    <div><SiJavascript /></div>
                    <div><SiPython /></div>
                    <div><SiC /></div>
                    <div><FaReact /></div>
                    <div><FaCss3 /></div>
                    <div><FaHtml5 /></div>
                    <div><SiLinux /></div>
                    <div><SiNeovim /></div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
