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
    const Skill = ({icon: Icon, name}) => {
        return(
            <div className="flex flex-col items-center">
                <Icon  className="text-6xl"/>
                <p className='text-xl mt-2'>{name}</p>
            </div>
        );
    }
    
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

                <div className="w-full grid grid-cols-2 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-5 text-center">
                    <Skill icon={SiTailwindcss} name="Tailwindcss"/>
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
