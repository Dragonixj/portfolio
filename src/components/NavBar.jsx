import React from 'react';
import { FaGithub } from 'react-icons/fa';

function NavBar() {
    return (
        <nav className="bg-gray-900 fixed top-0 w-full">
            <div className="container mx-auto flex justify-between items-center py-2 px-6">
                <div className="flex flex-grow justify-center space-x-4 text-white">
                    <a href="#intro" className="font-bold">
                        Intro
                    </a>
                    <a href="#about" className="font-bold">
                        About
                    </a>
                    <a href="#projects" className="font-bold">
                        Projects
                    </a>
                </div>
                <div>
                    <NavBarIcon icon={<FaGithub size="20" />} />
                </div>
            </div>
        </nav>
    );
}

const NavBarIcon = ({ icon }) => <div className="navbar-icon">{icon}</div>;

export default NavBar;
