import React from 'react';
import projects from '../shared/data/projects';
import { MdFolderOpen } from 'react-icons/md';
import ExternalLinks from './ExternalLinks';

function Projects() {
    return (
        <div name="projects">
            {/*header for section*/}
            <div>
                <span>projects</span>
            </div>
            {/*projects container*/}
            <div>
                <ul className="grid grid-cols-3 gap-2 project-grid">
                    {projects.map((key, i) => (
                        <li className="projects-card">
                            <div className="-mt-[20px] flex py-[1.25rem] justify-between">
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

                            <div className="card-title">{key.title}</div>
                            <div className="card-desc">{key.desc}</div>
                            <div className="card-tech">{key.techStack}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Projects;
