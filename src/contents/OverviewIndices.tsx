import { Fragment, useState } from 'react';
import iconS from '../assets/icons/icon-server.svg';
import icondelete from '../assets/icons/icon-delete.svg';
import DeleteIndex from '../components/DeleteIndex';
import AddIndex from '../components/AddIndex';
//import iconSearch from "../assets/icons/icon-search.svg"

const OverviewIndices = () => {
    const [showDeleteIndex, setShowDeleteIndex] = useState(false);
    const [showAddIndex, setShowAddIndex] = useState(false);

    return (
        <Fragment>
            <div className="ml-56 mt-4 mr-12">
                <div className="flex justify-between items-center">
                    <div className="p-2 ml-10">
                        <p className="mb-2 text-3xl font-semibold ">Indices</p>
                    </div>
                    <button className="p-2 pl-5 pr-5 bg-blue-700 rounded-md text-white text-sm" onClick={() => setShowAddIndex(true)}>
                        Create Index
                    </button>
                </div>
                

                <div className="h-full px-4 py-2 ml-10 border rounded-md shadow-sm">
                    <div className="p-4 flex justify-between items-center border-b-2">
                        <p className="text-gray-600">1 / 10 indices total</p>
                        <div className="flex">
                            <select className="border p-3 rounded-md text-sm w-full">
                                <option value="Add">Last updated</option>
                                <option value="Add">Oldest updated</option>
                                <option value="Add">Number of Records</option>
                                <option value="Add">Name</option>
                            </select>
                            <input type="text" name="" id="" className="input w-full border rounded-sm text-sm p-3" placeholder="Filter indices..."/>
                        </div>
                    </div>

                    <div className="p-4">
                        <button className="text-sm border rounded-md px-3 py-1 shadow-sm hover:bg-slate-50">
                            Select Page
                        </button>
                    </div>

                    <div>
                        <table className="w-full border-collapse">
                            <tr className="border-y-2">
                                <th className="p-2 font-normal w-14"></th>
                                <th className="p-2 font-normal text-left">Index</th>
                                <th className="p-2 font-normal text-right">Last build</th>
                                <th className="p-2 pr-6 font-normal text-right">Records</th>
                                <th className="p-2 w-28"></th>
                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="bg-gray-100 w-8 h-8 rounded-full flex items-center">
                                        <img src={iconS} alt="none" className="h-8 w-8 p-2" />
                                    </div>
                                </td>
                                <td className="p-2">Index</td>
                                <td className="text-sm p-2 text-right">4 days ago</td>
                                <td className="text-sm p-2 pr-6 text-right">0</td>
                                <td className="text-sm p-2 pr-6 text-right">
                                    <button onClick={() => setShowDeleteIndex(true)}>
                                        <img src={icondelete} alt="none" className="w-8 h-8 p-2" />
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <AddIndex isVisible={showAddIndex} onClose={() => setShowAddIndex(false)}/>
            <DeleteIndex isVisible={showDeleteIndex} onClose={() => setShowDeleteIndex(false)}/>
        </Fragment>
    );
};

export default OverviewIndices;

