import React from 'react';
import iconD from '../assets/icons/icon-dropdown.svg';

const Navbar: React.FC = () => {
    const generateRandomColor = () => {
        const colors = ['bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-red-200'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    const extractInitials = (text: string) => {
        const words = text.split(' ');
        return words.map(word => word.charAt(0)).join('').toUpperCase();
    };

    var itemInitials = ['My App'];

    const randomColor = generateRandomColor();
    const initials = extractInitials(itemInitials[0]);


    return (
        <nav className="pt-3">
            <div className=" mx-auto ml-1 flex pl-52">
                <p className="text-black text-xs mx-10 ">Application</p>
            </div>
            <div className="container mx-auto border-b-2 pb-6 flex pl-52">
                <div className="flex items-center pt-2">
                    <div className={`h-5 w-5 ${randomColor} rounded mr-2 flex items-center justify-center text-white text-xs font-semibold`}>
                        {initials}
                    </div>
                    <p className="text-black text-sm">My App</p>
                    <img src={iconD} alt="none" className="h-5 w-5 ml-2" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
