import React from 'react';
import { TrendingUp, DollarSign, ArrowUpRight, Award, PieChart, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Income: React.FC = () => {
    const opportunities = [
        {
            title: "Direct-to-Consumer Sales",
            desc: "Skip middlemen and sell your produce directly to urban consumers via digital platforms. Increases profit margins by up to 40%.",
            icon: <TrendingUp className="h-6 w-6 text-primary" />,
            potential: "High",
            type: "Market Linkage"
        },
        {
            title: "Animal Husbandry",
            desc: "Integrated farming with dairy, poultry, or goat rearing provides a steady daily income stream and organic manure for crops.",
            icon: <Award className="h-6 w-6 text-green-600" />,
            potential: "Daily",
            type: "Diversification"
        },
        {
            title: "Crop Residue Utilization",
            desc: "Convert stubble or husk into bio-fuel, compost, or packaging material to generate value from what was previously considered waste.",
            icon: <PieChart className="h-6 w-6 text-amber-600" />,
            potential: "Seasonal",
            type: "Sustainability"
        },
        {
            title: "Agro-Tourism",
            desc: "Open your farm for educational tours, organic picking experiences, and rural stays for urban dwellers seeking connection with nature.",
            icon: <Briefcase className="h-6 w-6 text-blue-600" />,
            potential: "Premium",
            type: "Service"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <header className="mb-12">
                <h1 className="text-4xl font-bold font-heading text-gray-900 mb-4">Maximizing Farm Income</h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                    AgriSaathi helps you look beyond traditional harvest cycles. Explore new revenue streams and clever ways to increase your farm's profitability.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {opportunities.map((opt, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="bg-gray-50 p-3 rounded-xl group-hover:bg-primary/10 transition-colors">
                                {opt.icon}
                            </div>
                            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-100">
                                {opt.type}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{opt.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {opt.desc}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center text-sm font-medium text-gray-500">
                                <DollarSign className="h-4 w-4 mr-1 text-primary" />
                                Profit Potential: <span className="text-primary ml-1">{opt.potential}</span>
                            </div>
                            <button className="flex items-center text-primary font-bold text-sm hover:underline">
                                Learn More <ArrowUpRight className="ml-1 h-4 w-4" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <section className="mt-16 bg-primary/5 rounded-3xl p-8 lg:p-12 border border-primary/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Need a Personalized Financial Plan?</h2>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-gray-700">
                                <div className="bg-primary/20 p-1 rounded-full mr-3"><ArrowUpRight className="h-4 w-4 text-primary" /></div>
                                Custom ROI analysis for your specific land size.
                            </li>
                            <li className="flex items-center text-gray-700">
                                <div className="bg-primary/20 p-1 rounded-full mr-3"><ArrowUpRight className="h-4 w-4 text-primary" /></div>
                                Market demand forecasting for next 6 months.
                            </li>
                            <li className="flex items-center text-gray-700">
                                <div className="bg-primary/20 p-1 rounded-full mr-3"><ArrowUpRight className="h-4 w-4 text-primary" /></div>
                                Access to micro-loans and credit facilities.
                            </li>
                        </ul>
                        <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-green-700 transition-all">
                            Speak to a Farm Consultant
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-4">Earnings Projection (Example)</h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between pb-2 border-b border-gray-50">
                                <span className="text-gray-500">Traditional Wheat</span>
                                <span className="font-bold">₹15,000 / acre</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-gray-50">
                                <span className="text-gray-500 text-primary">Multi-crop + Market Link</span>
                                <span className="font-bold text-primary">₹24,500 / acre</span>
                            </div>
                            <p className="text-xs text-gray-400 italic">
                                *Projections based on regional averages and AgriSaathi implementation metrics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Income;
