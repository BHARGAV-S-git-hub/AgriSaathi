import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageSquare, Sun, BookOpen, Users, TrendingUp, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero-image.png';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Farming Field"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
                    >
                        Revolutionizing <span className="text-primary text-green-400">Indian Agriculture</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light"
                    >
                        Your AI-powered companion for smarter farming, sustainable practices, and profitable harvests.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button
                            onClick={() => navigate('/chat')}
                            className="bg-primary hover:bg-green-700 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-green-500/30 flex items-center justify-center gap-2"
                        >
                            <MessageSquare className="w-5 h-5" />
                            Ask AI Agronomist
                        </button>
                        <button
                            onClick={() => navigate('/register')}
                            className="bg-white hover:bg-gray-100 text-gray-900 text-lg px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                        >
                            Start Your Journey
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">Everything You Need to Succeed</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">From weather forecasts to government schemes, AgriSaathi provides a holistic ecosystem for modern farming.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<MessageSquare className="w-8 h-8 text-white" />}
                            title="AI Farming Assistant"
                            description="Get instant answers to your farming queries in your local regional language, 24/7."
                            color="bg-blue-500"
                        />
                        <FeatureCard
                            icon={<BookOpen className="w-8 h-8 text-white" />}
                            title="Comprehensive Guides"
                            description="Step-by-step tutorials for seasonal crops, organic farming, and modern techniques."
                            color="bg-green-600"
                        />
                        <FeatureCard
                            icon={<Sun className="w-8 h-8 text-white" />}
                            title="Weather & Alerts"
                            description="Real-time weather updates and pest alerts to protect your crops timely."
                            color="bg-orange-500"
                        />
                        <FeatureCard
                            icon={<TrendingUp className="w-8 h-8 text-white" />}
                            title="Government Schemes"
                            description="Direct access to subsidies, insurance, and financial aid tailored for you."
                            color="bg-purple-600"
                        />
                        <FeatureCard
                            icon={<Users className="w-8 h-8 text-white" />}
                            title="Community Network"
                            description="Connect with successful farmers, share experiences, and grow together."
                            color="bg-pink-500"
                        />
                        <FeatureCard
                            icon={<Sprout className="w-8 h-8 text-white" />} // Imported from Lucide? Sprout needs to be passed or generic icon
                            title="Urban Farming"
                            description="Turn your balcony or terrace into a green paradise with specialized guides."
                            color="bg-teal-500"
                        />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-secondary py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <StatCard number="10k+" label="Farmers Empowered" />
                        <StatCard number="500+" label="Farming Guides" />
                        <StatCard number="50+" label="Government Schemes" />
                        <StatCard number="24/7" label="AI Support" />
                    </div>
                </div>
            </section>
        </div>
    );
};

// Helper Components
const FeatureCard = ({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-gray-200 transition-all"
    >
        <div className={`${color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold font-heading text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
);

const StatCard = ({ number, label }: { number: string, label: string }) => (
    <div>
        <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{number}</div>
        <div className="text-gray-300 font-medium">{label}</div>
    </div>
);

export default Home;
