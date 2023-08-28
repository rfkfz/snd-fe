import { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import React from 'react';

import iconCross from '../assets/icons/icon-cross.svg';

import jsonData from '../assets/dataTable.json';

interface UnsavedChangesPopupProps {
    onClose: () => void;
    onDiscard: () => void;
}

const UnsavedChangesPopup: React.FC<UnsavedChangesPopupProps> = ({ onClose }) => {
    return (
        <div className="popup w-500">
            <div className="popup-header border-b-2 font-semibold mb-4 flex justify-between items-center">
                Unsaved changes
                <img
                    src={iconCross}
                    alt="none"
                    className="h-5 w-5 cursor-pointer"
                    onClick={onClose}
                />
            </div>
            <div className="popup-body mb-8 mt-10">
                <p className='text-sm font-semibold'>Are you sure you want to exit?</p>
                <p className='text-sm '>If you leave this page, your application will not be created.</p>
            </div>
            <Link to="/settings">
                <button className="popup-button hover:bg-blue-800 bg-blue-700 w-full py-2 rounded-md shadow-md text-white text-sm">
                    Discard & Leave
                </button>
            </Link>
        </div>
    );
};

const CreateApplication = () => {
    const [selectedCluster, setSelectedCluster] = useState('');

    const [showPopup, setShowPopup] = useState(false);


    const clusters = [...new Set(jsonData.data.map(item => item.cluster))];

    const handleClusterChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCluster(event.target.value);
    };

    const handleIconCrossClick = () => {
        setShowPopup(true);
    };

    const handleDiscard = () => {
        setShowPopup(false);

    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <div className="ml-56 mt-14 mr-12 flex">
                <div className="flex-grow">
                    <div className="p-4 ml-10 mb-4">
                        <p className="text-2xl font-semibold mb-2">Select your new application</p>
                        <p className="text-md text-gray-400">
                            Create a new standalone application
                        </p>
                    </div>
                </div>

                <div className="pr-44">
                    <img
                        src={iconCross}
                        alt="none"
                        className="h-5 w-5 cursor-pointer"
                        onClick={handleIconCrossClick}
                    />
                </div>
                {showPopup && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                        <div className="popup bg-white p-6 rounded shadow-md">
                            <UnsavedChangesPopup onClose={handleClosePopup} onDiscard={handleDiscard} />
                        </div>
                    </div>
                )}

            </div>

            <div className=" ml-56 mr-12 flex">
                <form className="p-4 ml-10 mb-4 w-1/2">
                    <label className="block mb-2 font-semibold text-sm" htmlFor="name">1. Name your Application</label>
                    <input className="w-full border rounded p-2" type="text" id="name" name="name" />
                    <label className="block mb-2 font-semibold text-sm mt-6" htmlFor="cluster">2. Select a Region for your Data center:</label>
                    <select
                        className="w-full border rounded p-2"
                        id="cluster"
                        name="cluster"
                        value={selectedCluster}
                        onChange={handleClusterChange}
                    >
                        <option value="">Select a Region</option>
                        {clusters.map(cluster => (
                            <option key={cluster} value={cluster}>
                                {cluster}
                            </option>
                        ))}
                    </select>
                    <button className="bg-gray-700 text-white px-4 py-2 rounded-md text-md mt-12" id='btnCreate'>
                        Create Application
                    </button>

                </form>
            </div>
        </div>

    );
};

export default CreateApplication;
