
import Navbar from '../components/NavbarA';
import Sidebar from '../components/SidebarA';
import Overview from '../contents/Overview';

const Dashboard = () => {

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow">
                <Navbar />
                <Overview />
            </div>
        </div>
    );
};

export default Dashboard;
