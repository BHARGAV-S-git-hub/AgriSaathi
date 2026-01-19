import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { isLoggedIn, user, logout } = useAuth();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Farming Guides', path: '/guides' },
        { name: 'Government Schemes', path: '/schemes' },
        { name: 'Urban Farming', path: '/urban-farming' },
        { name: 'Income', path: '/income' },
        { name: 'Community', path: '/community' },
    ];

    return (
        <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="bg-primary p-2 rounded-lg">
                            <Sprout className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-primary font-heading">AgriSaathi<span className="text-secondary">AI</span></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6 items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                        {isLoggedIn ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-sm font-bold text-gray-700">Hi, {user?.name}</span>
                                <button
                                    onClick={() => {
                                        logout();
                                        navigate('/');
                                    }}
                                    className="text-gray-500 hover:text-red-500 text-sm font-medium transition-colors"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => navigate('/login')}
                                className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
                            >
                                Login
                            </button>
                        )}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="block text-gray-700 hover:text-primary font-medium py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-100">
                                <button
                                    onClick={() => {
                                        navigate('/login');
                                        setIsOpen(false);
                                    }}
                                    className="w-full bg-primary text-white px-5 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                                >
                                    Login / Register
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
