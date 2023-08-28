import { Fragment, useState } from 'react';
import iconC from '../assets/icons/icon-copy.svg';
import iconR from '../assets/icons/icon-refresh.svg';
import AddIndex from '../components/AddIndex';

const Overview = () => {
    const [showAddIndex, setShowAddIndex] = useState(false);

    return (
        <Fragment>
            <div className="ml-56 mt-4 mr-12 ">
                <div className="p-2 ml-10">
                    <p className="mb-2 text-3xl font-semibold ">Index</p>
                    
                    <div className="mb-2 pt-2 flex">
                        <p className="text-black text-xs mr-7 "># records 0</p>
                        <p className="text-black text-xs mr-7 "># event 0 </p>
                        <p className="text-black text-xs mr-7 ">index size 0B </p>
                        <p className="text-black text-xs mr-7 ">avg.record size 0B </p>
                    </div>

                    <div className="mb-2 pt-2 mx-auto flex text-sm">
                        <button className="border p-1 rounded-md mr-4" onClick={() => setShowAddIndex(true)}>
                            New Index
                        </button>
                        <select className="border p-1 rounded-md mr-4">
                            <option value="Add">Add records</option>
                        </select>
                        <select className="border p-1 rounded-md mr-4">
                            <option value="Manage">Manage index</option>
                        </select>
                        <img src={iconC} alt="none" className="h-8 w-8 p-1 mr-4 border rounded-md" />
                        <img src={iconR} alt="none" className="h-8 w-8 p-1 mr-4 border rounded-md" />
                    </div>
                </div>

                <div className="pl-2 ml-10 ">
                    <aside className="flex text-slate-500 p-2 border-b-2">
                        <ul className="mr-6 hover:text-black">
                            <li>Browse</li>
                        </ul>
                        <ul className="mr-6 hover:text-black">
                            <li>Configuration</li>
                        </ul>
                        <ul className="mr-6 hover:text-black">
                            <li>Replicas</li>
                        </ul>
                        <ul className="mr-6 hover:text-black">
                            <li>Search API Logs</li>
                        </ul>
                        <ul className="mr-6 hover:text-black">
                            <li>Stats</li>
                        </ul>
                        <ul className="mr-6 hover:text-black">
                            <li>UI Demos</li>
                        </ul>
                    </aside>
                </div>

                <div className="p-4 ml-10 flex justify-center items-center h-full ">
                    <div className="text-center">
                        <p className="text-xl mb-4 mt-10">
                            No records yet
                        </p>
                        <p className="text-sm mb-1 text-gray-500">
                            A record is an object you add to an index and want 
                        </p>
                        <p className="text-sm mb-4 text-gray-500">
                            to search for. It can contain any number of attributes.
                        </p>
                        <button className="p-2 pl-5 pr-5 bg-blue-700 rounded-md text-white text-sm">
                            Upload records
                        </button>
                    </div>
                </div>
            </div>
            <AddIndex isVisible={showAddIndex} onClose={() => setShowAddIndex(false)}/>
        </Fragment>
    );
};

export default Overview;

