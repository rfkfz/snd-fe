import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/Kucing.jpg';
import iconSide from '../assets/icons/icon-sidebar.svg';

const Sidebar: React.FC = () => {
    return (
        <aside className="bg-gray-100 h-screen w-56 fixed top-0 left-0 flex flex-col border-r-2">
            <ul className="pl-4 pt-3">
                <li className=" border-b-2">
                    <img src={logoImage} alt="Logo" className="h-[60px] shrink-0 border-gray-200/50 justify-between flex items-center px-1 mb-2" />
                </li>
            </ul>
            <ul className="pl-6 pt-3">
                <li className="mb-2 flex items-center text-sm">
                    <Link to="/dashboard" className="flex items-center">
                        <img src={iconSide} alt="none" className="h-5 w-5 mr-2 filter gra" />
                        Overview
                    </Link>
                </li>
            </ul>
            <p className='text-gray-400 text-xs pl-4'>CONFIGURE</p>
            <ul className='pl-6 pt-3'>
                <li className="mb-2 flex items-center text-sm font-bold">
                    <Link to="/index" className="flex items-center">
                        <img src={iconSide} alt="none" className="h-5 w-5 mr-2" />
                        Index
                    </Link>
                </li>
                <li className="mb-2 flex items-center text-sm">
                    <img src={iconSide} alt="none" className="h-5 w-5 mr-2" />
                    Query Suggestions
                </li>
                <li className="mb-2 flex items-center text-sm">
                    <img src={iconSide} alt="none" className="h-5 w-5 mr-2" />
                    Query Catagorization
                </li>
                <li className="mb-2 flex items-center text-sm">
                    <img src={iconSide} alt="none" className="h-5 w-5 mr-2" />
                    Dictionaries
                </li>
            </ul>
            <p className='text-gray-400 text-xs pl-4'>OBSERVE</p>
            <ul className='pl-6 pt-3'>
                <li className="mb-2 flex items-center text-sm">
                    <img src={iconSide} alt="none" className="h-5 w-5 mr-2" />
                    Analytics
                </li>
                <li className="mb-2 flex items-center text-sm">
                    <img src={iconSide} alt="none" className="h-5 w-5 mr-2" />
                    A/B Testing
                </li>
            </ul>
            <p className='text-gray-400 text-xs pl-4'>ENCHANCE</p>
            <ul className='pl-6 pt-3'>
                <li className="mb-2 flex items-center text-sm">
                    <img src={iconSide} alt="none" className="h-5 w-5 mr-2" />
                    Rules
                </li>
                <li className="mb-2 flex items-center text-sm">
                    <img src={iconSide} alt="none" className="h-5 w-5 mr-2" />
                    AI Synonyms
                </li>
                <li className="mb-2 flex items-center text-sm">
                    <img src={iconSide} alt="none" className="h-5 w-5 mr-2" />
                    Re-Ranking
                </li>
                <li className="mb-2 flex items-center text-sm">
                    <img src={iconSide} alt="none" className="h-5 w-5 mr-2" />
                    Personalization
                </li>
                <li className="mb-2 flex items-center text-sm">
                    <img src={iconSide} alt="none" className="h-5 w-5 mr-2" />
                    Nav Item
                </li>
            </ul>

        </aside>
    );
};

export default Sidebar;
