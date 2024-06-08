import React from 'react';
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import {
    SiTailwindcss,
    SiJavascript,
    SiPython,
    SiC,
    SiLinux,
    SiNeovim,
    SiGit,
} from 'react-icons/si';

function Skills() {
    const Skill = ({ icon: Icon, name }) => {
        return (
            <div className="flex flex-col items-center">
                <Icon className="text-6xl" />
                <p className="mt-2 text-xl">{name}</p>
            </div>
        );
    };

    return (
        <div id="skills" className="h-screen w-full text-rosePine-text">
            {/* section header */}
            <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center px-4">
                <div>
                    <p className="inline text-5xl font-bold text-rosePine-pine">
                        Skills
                    </p>
                    <p className="py-4 text-2xl text-rosePine-muted">
                        These are the tools and technologies I've worked with
                    </p>
                </div>

                <div className="grid w-full grid-cols-2 gap-5 text-center sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5">
                    <Skill icon={SiTailwindcss} name="Tailwindcss" />
                    <Skill icon={SiJavascript} name="Javascript" />
                    <Skill icon={SiPython} name="Python" />
                    <Skill icon={SiC} name="C" />
                    <Skill icon={FaReact} name="React" />
                    <Skill icon={FaCss3} name="Css" />
                    <Skill icon={FaHtml5} name="Html" />
                    <Skill icon={SiLinux} name="Linux" />
                    <Skill icon={SiNeovim} name="Neovim" />
                    <Skill icon={SiGit} name="Git" />
                </div>
            </div>
        </div>
    );
}

export default Skills;
