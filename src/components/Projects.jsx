import React from 'react';
import projects from '../shared/data/projects';
import { MdFolderOpen } from 'react-icons/md';
import ExternalLinks from './ExternalLinks';

function Projects() {
    return (
        <div
            id="projects"
            className="mx-auto min-h-[50vh] w-full max-w-[1000px] pt-[100px] md:h-screen"
        >
            {/*header for section*/}
            <div className="flex w-full pb-[42px]">
                <span className="text-5xl font-bold text-rosePine-pine">
                    projects
                </span>
            </div>
            {/*projects container*/}
            <div>
                <ul className="project-grid grid auto-cols-min grid-cols-3 gap-2">
                    {projects.map((key, i) => (
                        <li className="projects-card relative flex h-full cursor-default flex-col rounded-2xl bg-rosePine-overlay px-7 py-8 hover:translate-y-[-7px] hover:bg-rosePine-highlightMed">
                            <div className="-mt-[20px] flex justify-between !border-b-0 px-0 py-5">
                                <div className="text-rosePine-foam">
                                    <MdFolderOpen
                                        style={{ fontSize: 35 }}
                                    ></MdFolderOpen>
                                </div>
                                <ExternalLinks
                                    githubLink={key.link}
                                    openLink={key.open}
                                ></ExternalLinks>
                            </div>

                            <div className="text-2xl font-bold text-rosePine-text">
                                {key.title}
                            </div>
                            <div className="pb-10 text-lg text-rosePine-text">
                                {key.desc}
                            </div>
                            <div className="text-base text-rosePine-text">
                                {key.techStack}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Projects;
