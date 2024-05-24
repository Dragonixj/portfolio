import React from 'react';

function NavBar() {
    return (
        <nav className="bg-blue-900 text-blue-200 font-bold">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-blue-200">
                    <a
                        href="#Brand"
                        className="text-blue-200 hover:text-green-400"
                    >
                        Brand
                    </a>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a
                        href="#Home"
                        className="text-blue-200 hover:text-green-400"
                    >
                        Home
                    </a>
                    <a
                        href="#About"
                        className="text-blue-200 hover:text-green-400"
                    >
                        About
                    </a>
                    <a
                        href="#Services"
                        className="text-blue-200 hover:text-green-400"
                    >
                        Services
                    </a>
                    <a
                        href="#Contact"
                        className="text-blue-200 hover:text-green-400"
                    >
                        Contact
                    </a>
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 600px) {
                    .navbar-brand,
                    .nav-link {
                        display: none;
                    }
                }
            `}</style>
        </nav>
    );
}

export default NavBar;
