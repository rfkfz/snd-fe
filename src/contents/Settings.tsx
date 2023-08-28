
import Navbar from '../components/NavbarB';
import Sidebar from '../components/SidebarB';
import iconLeft from '../assets/icons/icon-left-arrow.svg';
import dataTable from '../assets/dataTable.json';
import { Link } from 'react-router-dom';
import iconSearch from '../assets/icons/icon-search.svg';

const Settings = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow">
                <Navbar />
                <div className="ml-56 mt-4 mr-12">
                    <div className="flex text-sm pb-2 text-gray-400 ml-10" id='backArrow'>
                        <Link to="/dashboard" className="flex items-center">
                            <img src={iconLeft} alt="none" className="h-5 w-5" />
                            Back to dashboard
                        </Link>

                    </div>

                    <div className="pl-4 ml-10 mb-4">
                        <p className="text-2xl font-normal mb-4">Applications</p>
                        <div className="flex justify-end items-center">
                            <div className="relative pr-4 shadow-sm ml-4">
                                <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                                    <img src={iconSearch} alt="none" className="h-5 w-5 justify-start" />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="shadow-sm border border-gray-300 rounded-md px-10 py-1 w-64 text-md"
                                />
                            </div>
                            <Link to="/create" className="flex items-center">
                                <button className="bg-blue-700 text-white px-4 py-1 rounded-md text-md" id='btnCreate'>
                                    Create Application
                                </button>
                            </Link>
                        </div>
                        <table className="w-full border-2 rounded-lg shadow-sm mt-4">
                            <thead className='bg-gray-100 border rounded-lg py-4'>
                                <tr className='py-4'>
                                    <th className='text-start pl-2 font-normal'>Applications</th>
                                    <th className='font-normal'>Plan</th>
                                    <th className='font-normal'>Indices</th>
                                    <th className='font-normal'>Usage</th>
                                    <th className='font-normal'>Records</th>
                                    <th className='font-normal'>Cluster</th>
                                </tr>
                            </thead>
                            <tbody className='text-center rounded-lg'>
                                {dataTable.data.map((item) => (
                                    <tr key={item.indeces}>
                                        <td className='text-start pl-2'>{item.nama}</td>
                                        <td>{item.plan}</td>
                                        <td>{item.indeces}</td>
                                        <td>{item.usage}</td>
                                        <td>{item.records}</td>
                                        <td>{item.cluster}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
