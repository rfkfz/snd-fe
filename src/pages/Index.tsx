import Navbar from '../components/NavbarB';
import Sidebar from '../components/SidebarB';
import OverviewIndex from '../contents/OverviewIndex';
//import AddIndex from './AddIndex';

const Index = () => {

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow">
                <Navbar />
                <OverviewIndex />
            </div>
        </div>
    );
};

export default Index;
