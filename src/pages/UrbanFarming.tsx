import React from 'react';
import { Leaf, Sun, Droplets, Home, LayoutGrid, Zap, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

const UrbanFarming: React.FC = () => {
    const techniques = [
        {
            title: "Hydroponics",
            desc: "Grow crops in nutrient-rich water instead of soil. Perfect for indoor setups and uses 90% less water.",
            icon: <Droplets className="h-6 w-6 text-blue-500" />,
            difficulty: "Medium",
            space: "Small"
        },
        {
            title: "Vertical Gardening",
            desc: "Maximized wall space using modular containers. Ideal for balconies and small apartment exteriors.",
            icon: <LayoutGrid className="h-6 w-6 text-green-500" />,
            difficulty: "Easy",
            space: "Minimal"
        },
        {
            title: "Smart Irrigation",
            desc: "IoT-enabled sensors that water your plants only when they need it. Control everything from your phone.",
            icon: <Zap className="h-6 w-6 text-amber-500" />,
            difficulty: "Medium",
            space: "Any"
        },
        {
            title: "Microgreens",
            desc: "High-nutrient greens that take only 7-14 days to harvest. Can be grown on window sills.",
            icon: <Leaf className="h-6 w-6 text-primary" />,
            difficulty: "Very Easy",
            space: "Window Sill"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <header className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-6"
                    >
                        <Home className="h-4 w-4" />
                        <span>Farming in the City</span>
                    </motion.div>
                    <h1 className="text-5xl font-bold font-heading text-gray-900 mb-6 italic">Urban Farming Solutions</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Transform your balcony, terrace, or backyard into a lush food forest. Modern solutions for the modern city dweller.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {techniques.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
                        >
                            <div className="mb-6 bg-gray-50 p-4 rounded-2xl shadow-inner">
                                {tech.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                {tech.desc}
                            </p>
                            <div className="mt-auto flex gap-4 text-xs font-bold text-gray-400">
                                <span className="flex items-center capitalize"><Sun className="h-3 w-3 mr-1" /> {tech.difficulty}</span>
                                <span className="flex items-center capitalize"><Home className="h-3 w-3 mr-1" /> {tech.space}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-gray-900 text-white rounded-[2rem] overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 lg:p-20 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-6 font-heading">The Urban Grower's Kit <span className="text-primary text-xl font-normal">(Coming Soon)</span></h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Everything you need to start your first hydroponics setup in one box. Seeds, nutrients, and the smart monitor.
                            </p>
                            <div className="flex space-x-4">
                                <button className="bg-primary hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
                                    Join Waitlist
                                </button>
                                <button className="border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-full font-bold transition-all">
                                    Watch Video
                                </button>
                            </div>
                        </div>
                        <div className="relative h-64 lg:h-auto bg-gray-800 flex items-center justify-center p-12">
                            {/* Mock for an image or graphic */}
                            <div className="relative">
                                <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-50 rounded-full"></div>
                                <Sprout className="h-32 w-32 text-primary animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UrbanFarming;
