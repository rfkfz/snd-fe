import { Link } from "react-router-dom";

const BerandaForm = () => {
    return (
    <div className="bg-[#040034] sm:p-16 md:p-24 lg:p-32">
        <nav className="bg-[#040034] p-2 fixed top-0 left-0 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">
                ""
                </div>
                <ul className="flex pr-4">
                    <li><a href="#" className="text-white w-24 flex items-center hover:font-semibold">Company</a></li>
                    <li><a href="#" className="text-white w-20 flex items-center hover:font-semibold">Partner</a></li>
                    <li><a href="#" className="text-white w-24 flex items-center hover:font-semibold">Support</a></li>
                    <Link to="/login">
                        <li><a className="text-white w-16 flex items-center hover:font-semibold">Login</a></li>
                    </Link>
                </ul>
            </div>
        </nav>
        <nav className="bg-[#040034] p-6 border-t border-t-solid border-t-[#191F74] fixed top-11 left-0 w-full">
            <div className="container mx-auto flex justify-start items-center">
                <ul className="flex pl-8 ">
                    <li><a href="#" className="text-white w-28 flex items-center hover:font-semibold">Platform</a></li>
                    <li><a href="#" className="text-white w-24 flex items-center hover:font-semibold">Pricing</a></li>
                    <li><a href="#" className="text-white w-32 flex items-center hover:font-semibold">Developers</a></li>
                    <li><a href="#" className="text-white w-28 flex items-center hover:font-semibold">Resource</a></li>
                </ul>
            </div>
        </nav>

        <div className="flex flex-col min-h-screen mt-14 p-6">
            <p className="text-[#67AED7] text-lg font-semibold">AI SEARCH & DISCOVERY PLATFORM</p>
            <p className="text-white text-6xl">Powering</p>
            <p className="text-white text-6xl">Discovery</p>
            <p className="text-white text-6xl">for your world</p>
        </div>
    </div>
    );
};

export default BerandaForm;
