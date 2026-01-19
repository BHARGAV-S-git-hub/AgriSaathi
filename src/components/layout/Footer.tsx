import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="bg-primary p-2 rounded-lg">
                                <Sprout className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold font-heading">AgriSaathi<span className="text-primary">AI</span></span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering Indian farmers with AI-driven insights, comprehensive guides, and community support for a sustainable future.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                                <Linkedin className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Farming Guides', 'Government Schemes', 'Urban Farming', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to="/" className="text-gray-400 hover:text-primary transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {['AI Chatbot', 'Crop Advisory', 'Soil Testing', 'Market Prices', 'Weather Alerts', 'Community Forum'].map((item) => (
                                <li key={item}>
                                    <Link to="/" className="text-gray-400 hover:text-primary transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400 text-sm">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>123 Agriculture Way, Tech Park,<br />New Delhi, India 110001</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 text-sm">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span>+91 1800-123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 text-sm">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span>support@agrisaathi.ai</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} AgriSaathi AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
