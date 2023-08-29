import React, { useState } from 'react';
import iconD from '../assets/icons/icon-dropdown.svg';
import iconS from '../assets/icons/icon-server.svg';
import { Link } from "react-router-dom";
import jsonData from '../assets/dataTable.json';

const Navbar: React.FC = () => {
    const [selectedApp, setSelectedApp] = useState(jsonData.data[0]?.nama || 'My App');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const openDropdown = () => {
        setIsDropdownOpen(true);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const generateRandomColor = () => {
        const colors = ['bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-red-200', 'bg-blue-300', 'bg-green-300', 'bg-yellow-300', 'bg-red-300'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    const extractInitials = (text: string) => {
        const words = text.split(' ');
        return words.map(word => word.charAt(0)).join('').toUpperCase();
    };

    const randomColor = generateRandomColor();
    const initials = extractInitials(selectedApp);

    return (
        <nav className="pt-3">
            <div className="mx-auto ml-1 flex pl-52">
                <p className="text-black text-xs mx-10">Application</p>
                <p className="text-black text-xs mx-10">Index</p>
            </div>
            <div className="container mx-auto border-b-2 pb-6 flex pl-52">
                <div className="flex items-center pt-2 ml-8">
                    <div className={`relative inline-block text-left ${isDropdownOpen ? 'z-10' : ''}`}>
                        <div>
                            <button type="button" className="text-black text-sm flex items-center" onClick={openDropdown} id="appMenuButton">
                                <div className={`h-5 w-5 ${randomColor} rounded mr-2 flex items-center justify-center text-white text-xs font-semibold`}>
                                    {initials}
                                </div>
                                {selectedApp}
                                <img src={iconD} alt="none" className="h-5 w-5 ml-2" />
                            </button>
                        </div>
                        {isDropdownOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-46 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="appMenuButton" tabIndex={-1}>
                                <div className="py-1" role="none">
                                    {jsonData.data.map(app => (
                                        <button key={app.nama} onClick={() => { setSelectedApp(app.nama); closeDropdown(); }}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                            role="menuitem">
                                            {app.nama}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <img src={iconS} alt="none" className="h-4 w-4 ml-2 mx-2" />
                    <Link to="/indices" className="text-black text-sm">
                        My Index
                    </Link>
                    <img src={iconD} alt="none" className="h-5 w-5 ml-2 mx-10" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
