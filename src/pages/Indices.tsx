import Navbar from '../components/NavbarB';
import Sidebar from '../components/SidebarB';
import OverviewIndices from '../contents/OverviewIndices';
//import AddIndex from './AddIndex';

const indices = () => {

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow">
                <Navbar />
                <OverviewIndices />
            </div>
        </div>
    );
};

export default indices;
