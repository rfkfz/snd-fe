import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import usersData from "../assets/dataUser.json";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const user = usersData.find((user) => user.email === email);

        if (email.trim() === "" || password.trim() === "") {
            setErrorMessage("Email and password are required!");
            return;
        }

        if (!user) {
            setErrorMessage("Email yang dimasukkan tidak ditemukan!");
            return;
        }

        if (user.password !== password) {
            setErrorMessage("Password yang dimasukkan salah!");
            return;
        }

        setErrorMessage("");
        navigate("/dashboard");

        setEmail("");
        setPassword("");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-8 sm:p-16 md:p-24 lg:p-32">
            <div className="w-full md:w-96 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
                <div className="flex items-center justify-between mb-4 text-base">
                    <h1 className="text-xl font-bold">Log in</h1>
                    <div>
                        <Link to="/register" className="text-blue-600 hover:underline text-xs font-semibold">
                            NO ACCOUNT YET?
                        </Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="w-full px-3 py-2 border rounded-sm focus:border-black shadow-inner"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-3 py-2 border rounded-sm focus:border-black shadow-inner"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {errorMessage && (
                        <p className="text-red-500 text-xs mb-2">{errorMessage}</p>
                    )}
                    <div className="flex items-center justify-between mb-4 text-base">

                        <div>
                            <Link to="" className="text-blue-600 hover:underline text-xs">
                                Forgot Password?
                            </Link>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
