
import Navbar from '../components/NavbarB';
import Sidebar from '../components/SidebarB';
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
