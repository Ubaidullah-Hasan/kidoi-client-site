import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full sm:w-auto mb-4 sm:mb-0">
                            <img src="logo.png" alt="Logo" className="h-8" />
                            <span className="text-white text-lg font-bold">My Website</span>
                        </div>
                        <div className="w-full sm:w-auto">
                            <nav>
                                <ul className="flex space-x-4">
                                    <li>
                                        <a href="/" className="text-white hover:text-gray-300">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about" className="text-white hover:text-gray-300">About</a>
                                    </li>
                                    <li>
                                        <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <div>
                            <p className="text-white">© {new Date().getFullYear()} My Website. All rights reserved.</p>
                            <p className="text-white">123 Street, City, State, ZIP Code</p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-300">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;