import { Link } from "react-router-dom";
import Layout from './Layout';

const RegisterForm = () => {
    return (
        <Layout>
            <div className="flex justify-center items-center h-screen p-8 sm:p-16 md:p-24 lg:p-32">
                <div className="w-full p-6 border border-gray-300 rounded-sm shadow-sm">
                    <h2 className="text-center text-3xl font-semibold mb-10 sm:mb-16">Get started for free</h2>
                    <form>
                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email address"
                                className="w-full px-3 py-2 border rounded-sm focus:border-black shadow-inner"
                            />
                        </div>
                        <div className="mb-10">
                            <input
                                type="password"
                                id="password"
                                placeholder="Password (8 characters minimum)"
                                className="w-full px-3 py-2 border rounded-sm focus:border-black shadow-inner"
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-sm border w-full py-2 bg-white text-black rounded-sm hover:bg-gray-50 mb-4"
                        >
                            Sign up with your email
                        </button>
                        <div className="flex items-center justify-center mb-2 text-sm">
                            <p>Already have an account?</p>
                            &nbsp; { }
                            <div>
                                <Link to="/login" className="text-blue-600 hover:underline">
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default RegisterForm;
