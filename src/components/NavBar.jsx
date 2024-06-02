import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';

function NavBar() {
    return (
        <nav className="bg-rosePine-surface fixed top-0 w-full">
            <div className="container mx-auto flex justify-between items-center py-2 px-6">
                <div className="flex flex-grow justify-center space-x-8 text-rosePine-text">
                    <a href="#intro" className="font-bold">
                        Intro
                    </a>
        {/*<a href="#about" className="font-bold" to="intro">
                        About
                    </a> */}
                    <a href="#skills" className="font-bold">
                        Skills
                    </a>
                    <a href="#projects" className="font-bold">
                        Projects
                    </a>
                </div>
                <div className="space-x-2 flex">
                    <NavBarIcon
                        icon={<FaGithub size="20" />}
                        link="https://github.com/m0nztrum"
                    />
                    <NavBarIcon
                        icon={<CgMail size="20" />}
                        link="mailto:delafiado@gmail.com"
                    />
                </div>
            </div>
        </nav>
    );
}

const NavBarIcon = ({ icon, link }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-icon text-rosePine-text"
    >
        {icon}
    </a>
);

export default NavBar;
