import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import usersData from '../assets/dataUser.json';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setEmailError('');
        setSuccessMessage('');
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setPasswordError('');
        setSuccessMessage('');
    };

    useEffect(() => {

        if (successMessage === 'Registration successful! Redirecting to dashboard...') {
            const newUser = { email, password };
            const existingUsers = JSON.parse(localStorage.getItem('usersData') || '[]');
            const updatedUsers = [...existingUsers, newUser];
            localStorage.setItem('usersData', JSON.stringify(updatedUsers));
        }
    }, [successMessage]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let isValid = true;

        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Email is not valid');
            isValid = false;
        } else if (usersData.some(user => user.email === email)) {
            setEmailError('Email yang dimasukkan sudah terdaftar!');
            isValid = false;
        }

        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        } else if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters');
            isValid = false;
        }

        if (isValid) {

            setSuccessMessage('Registration successful! Redirecting to dashboard...');

            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);
        }
    };
    return (
        <Layout>
            <div className="flex justify-center items-center h-screen p-8 sm:p-16 md:p-24 lg:p-32">
                <div className="w-full p-6 border border-gray-300 rounded-sm shadow-sm">
                    <h2 className="text-center text-3xl font-semibold mb-10 sm:mb-16">Get started for free</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email address"
                                className="w-full px-3 py-2 border rounded-sm focus:border-black shadow-inner"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                        </div>
                        <div className="mb-10">
                            <input
                                type="password"
                                id="password"
                                placeholder="Password (8 characters minimum)"
                                className="w-full px-3 py-2 border rounded-sm focus:border-black shadow-inner"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
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
                        {successMessage && <p className="text-green-500 text-xs mt-1">{successMessage}</p>}
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default RegisterForm;
