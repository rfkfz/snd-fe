import { Link } from "react-router-dom";
import iconDoc from "../assets/icons/icon-doc.svg"
import illustration from "../assets/icons/illustration.svg"

const BerandaForm = () => {
    return (
    <div className="bg-[#040034] h-screen">
        <nav className="bg-[#040034] p-3 border-b border-b-solid border-b-[#191F74] fixed top-0 left-0 w-full">
            <div className="container mx-auto flex items-center justify-between">
                <p className="text-white ">Logo</p>
                <div className="space-x-6 flex items-center">
                    <button className="text-white flex items-center">
                        <img src={iconDoc} alt="none" className="w-7 h-7 p-2" />
                        Documentation
                    </button>
                    <button className="text-white border rounded-md  border-neutral-500 hover:border-white py-1 px-3">Get a Demo</button>
                    <Link to="/login">
                        <button className="text-[#040034] bg-neutral-200 rounded-md hover:bg-white py-1 px-3">Login</button>
                    </Link>
                </div>
            </div>
        </nav>

    <div className="bg-[#040034] lg:flex md:flex flex-row pt-4">
        <div className="justify-center sm:p-16 md:p-24 lg:p-32">
            <p className="text-[#67AED7] text-lg font-semibold pb-2">AI SEARCH & DISCOVERY PLATFORM</p>
            <p className="text-white text-6xl">Powering</p>
            <p className="text-white text-6xl">Discovery</p>
            <p className="text-white text-6xl">for your world</p>
            <div className="space-x-6 pt-14 flex text-white">
                <button className="text-white bg-[#353AFF] rounded-md hover:bg-[#1E24F2] py-2 px-4">
                    Get a Demo
                </button>
                <button className="text-white border rounded-md py-2 px-4 border-neutral-500 hover:border-white">Start Building
                </button>
            </div>

        </div>
        <div className="bg-[#040034] flex items-center justify-center ">
            {/*ilustrasi */}
            <img src={illustration} alt="none" width="530" height="530"  />
        </div>
        
    </div>
    

    </div>
    );
};

export default BerandaForm;
