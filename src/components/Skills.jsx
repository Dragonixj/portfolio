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
                </div>

                <div className="text-6xl">
                    <SiTailwindcss />
                    <SiJavascript />
                    <SiPython />
                    <SiC />
                    <FaReact />
                    <FaCss3 />
                    <FaHtml5 />
                    <SiLinux />
                    <SiNeovim />
                </div>
            </div>
        </div>
    );
}

export default Skills;
