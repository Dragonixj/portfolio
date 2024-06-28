import React from 'react';
import { projects } from '../constants';
import { github } from '../assets';

const ProjectCard = ({ title, desc, techstack, link, image }) => {
    return (
        <div className="rounded-2xl bg-rosePine-overlay p-5 md:p-6">
            <div className="relative w-full">
                <img
                    src={image}
                    alt={`${title}`}
                    className="h-48 w-full rounded-xl object-cover"
                />
                <div className="absolute inset-0 m-3 flex justify-end">
                    <div
                        onClick={() => window.open(link, '_blank')}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black"
                    >
                        <img
                            src={github}
                            alt="gitrepo"
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h3 className="text-lg font-bold text-rosePine-text sm:text-xl md:text-2xl lg:text-3xl">
                    {title}
                </h3>
                <p className="mt-2 text-sm text-rosePine-foam">{desc}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {techstack.map((tech, index) => (
                    <p key={index} className={`text-[14px] ${tech.color}`}>
                        #{tech.name}
                    </p>
                ))}
            </div>
        </div>
    );
};

function Projects() {
    return (
        <div
            id="projects"
            className="mx-auto w-full max-w-[1000px] px-8 pt-[50px] sm:pt-[75px] md:pt-[100px]"
        >
            {/*header for section*/}
            <div className="flex w-full pb-[42px]">
                <span className="text-5xl font-bold text-rosePine-pine">
                    projects
                </span>
            </div>
            {/*projects container*/}
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
