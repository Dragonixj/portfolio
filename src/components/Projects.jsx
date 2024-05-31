import React from 'react';
import projects from '../shared/data/projects';
import { MdFolderOpen } from 'react-icons/md';
import ExternalLinks from './ExternalLinks';

function Projects() {
    return (
        <div id="projects">
            {/*header for section*/}
            <div className="flex pb-[42px] w-[100vw]">
                <span className="text-rosePine-pine text-[46px] font-bold">
                    projects
                </span>
            </div>
            {/*projects container*/}
            <div>
                <ul className="grid grid-cols-3 auto-cols-min gap-2 project-grid">
                    {projects.map((key, i) => (
                        <li className="projects-card">
                            <div className="-mt-[20px] flex py-5 px-0 justify-between !border-b-0">
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

                            <div className="text-rosePine-text text-2xl font-bold">
                                {key.title}
                            </div>
                            <div className="text-rosePine-text text-lg pb-10">
                                {key.desc}
                            </div>
                            <div className="text-rosePine-text text-base">
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
