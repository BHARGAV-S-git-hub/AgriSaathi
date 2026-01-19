import React from 'react';
import { BookOpen, Leaf, Sun, Droplet, ArrowRight } from 'lucide-react';

const Guides: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">Farming Guides</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">Expert knowledge at your fingertips. Browse through our collection of seasonal and technical farming guides.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <GuideCard
                    category="Seasonal"
                    title="Wheat Cultivation: A to Z"
                    desc="Complete guide from soil preparation to harvesting for maximum yield."
                    icon={<Sun className="w-6 h-6 text-orange-500" />}
                    image="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=600"
                />
                <GuideCard
                    category="Organic"
                    title="Vermicompost Mastery"
                    desc="How to create rich organic fertilizer at home with low cost."
                    icon={<Leaf className="w-6 h-6 text-green-500" />}
                    image="https://images.unsplash.com/photo-1622383563227-0440114a6011?auto=format&fit=crop&q=80&w=600"
                />
                <GuideCard
                    category="Irrigation"
                    title="Drip Irrigation Setup"
                    desc="Save water and improve efficiency with modern irrigation techniques."
                    icon={<Droplet className="w-6 h-6 text-blue-500" />}
                    image="https://images.unsplash.com/photo-1615811361263-68f1847150c2?auto=format&fit=crop&q=80&w=600"
                />
                <GuideCard
                    category="Pest Control"
                    title="Natural Pest Repellents"
                    desc="Protect your crops using neem oil and other natural solutions."
                    icon={<Leaf className="w-6 h-6 text-emerald-500" />}
                    image="https://images.unsplash.com/photo-1599587440492-e427b370a256?auto=format&fit=crop&q=80&w=600"
                />
                <GuideCard
                    category="Technology"
                    title="Drone Farming Basics"
                    desc="Introduction to using drones for monitoring and spraying."
                    icon={<BookOpen className="w-6 h-6 text-purple-500" />}
                    image="https://images.unsplash.com/photo-1530267981375-f0de93cdf5b8?auto=format&fit=crop&q=80&w=600"
                />
                <GuideCard
                    category="Economics"
                    title="Profitable Crop rotation"
                    desc="Strategies to maintain soil health and maximize income year-round."
                    icon={<TrendingUp className="w-6 h-6 text-green-600" />} // Using TrendingUp locally defined or need import
                    image="https://images.unsplash.com/photo-1625246333195-bf436c927f91?auto=format&fit=crop&q=80&w=600"
                />
            </div>
        </div>
    );
};
import { TrendingUp } from 'lucide-react'; // Import needed for the last card

const GuideCard = ({ category, title, desc, icon, image }: any) => (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 group">
        <div className="h-48 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
                {icon}
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{category}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{desc}</p>
            <button className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                Read Guide <ArrowRight className="w-4 h-4" />
            </button>
        </div>
    </div>
);

export default Guides;
