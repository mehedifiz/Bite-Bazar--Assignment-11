import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-lg font-bold mb-2">Bite-Bazar</h2>
                        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                    <div className="flex flex-col md:flex-row mb-6 md:mb-0">
                        <a href="/about" className="hover:underline mx-2">About Us</a>
                        <a href="/contact" className="hover:underline mx-2">Contact</a>
                        <a href="/privacy" className="hover:underline mx-2">Privacy Policy</a>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-lg font-bold mb-2">Contact Us</h2>
                        <p>Email: info@allyouthsociety.org</p>
                        <p>Phone: +1 (234) 567-890</p>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>Follow us on:</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="#" className="hover:text-gray-400">Facebook</a>
                        <a href="#" className="hover:text-gray-400">Twitter</a>
                        <a href="#" className="hover:text-gray-400">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
