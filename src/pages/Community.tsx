import React from 'react';
import { MessageSquare, Heart, Share2, Users, Search, PlusCircle, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const Community: React.FC = () => {
    const posts = [
        {
            user: "Ramesh Kumar",
            role: "Rice Farmer",
            time: "2h ago",
            content: "Has anyone tried the new bio-fertilizer from the government scheme? Seeing great results in my neighbor's plot. Any advice on the application timing for Basmati?",
            likes: 24,
            comments: 8,
            tags: ["Query", "Fertilizer"]
        },
        {
            user: "Sarah Chen",
            role: "Agro-Scientist",
            time: "5h ago",
            content: "Tip of the day: Ensure your soil pH is between 6.0 and 7.5 for optimal nutrient uptake in wheat. Testing kits are available at the local coop!",
            likes: 156,
            comments: 12,
            tags: ["Expert Advice", "Soil Health"]
        },
        {
            user: "Anita Patil",
            role: "Organic Farmer",
            time: "1d ago",
            content: "Successfully harvested our first batch of organic tomatoes! Transitioning to organic takes patience but the market premium is worth it. 🍅",
            likes: 89,
            comments: 21,
            tags: ["Success Story", "Organic"]
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <aside className="hidden lg:block space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 font-heading">My Community</h3>
                            <nav className="space-y-2">
                                <a href="#" className="flex items-center space-x-3 p-2 bg-primary/10 text-primary font-bold rounded-xl">
                                    <Users className="h-5 w-5" />
                                    <span>All Topics</span>
                                </a>
                                <a href="#" className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
                                    <MessageSquare className="h-5 w-5" />
                                    <span>My Queries</span>
                                </a>
                                <a href="#" className="flex items-center space-x-3 p-2 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
                                    <Heart className="h-5 w-5" />
                                    <span>Saved Posts</span>
                                </a>
                            </nav>
                        </div>

                        <div className="bg-gradient-to-br from-primary to-green-700 p-6 rounded-2xl text-white shadow-lg">
                            <h4 className="font-bold mb-2">Join Expert Webinar</h4>
                            <p className="text-xs text-white/80 mb-4">Live session on Sustainable Pest Management tomorrow at 10 AM.</p>
                            <button className="w-full bg-white text-primary font-bold py-2 rounded-lg text-sm shadow-md">
                                Set Reminder
                            </button>
                        </div>
                    </aside>

                    {/* Main Feed */}
                    <main className="lg:col-span-2 space-y-6">
                        {/* Post Creator Box */}
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                                <button className="flex-1 bg-gray-50 text-left px-5 py-2.5 rounded-full text-gray-400 text-sm hover:bg-gray-100 transition-colors">
                                    Ask a question or share a tip...
                                </button>
                                <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                                    <PlusCircle className="h-6 w-6" />
                                </button>
                            </div>
                        </div>

                        {/* Search & Filter (Mobile/Tablet visible) */}
                        <div className="flex gap-2 lg:hidden mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm" />
                            </div>
                            <button className="bg-white p-2 border border-gray-200 rounded-xl"><Filter className="h-4 w-4 text-gray-600" /></button>
                        </div>

                        {/* Posts Feed */}
                        {posts.map((post, idx) => (
                            <motion.article
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                                            {post.user.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 leading-tight">{post.user}</h4>
                                            <p className="text-xs text-gray-400 font-medium">{post.role} • {post.time}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        {post.tags.map((tag, i) => (
                                            <span key={i} className="px-2 py-0.5 bg-gray-50 text-gray-500 text-[10px] font-bold rounded-full border border-gray-100">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {post.content}
                                </p>
                                <div className="flex items-center space-x-6 border-t border-gray-50 pt-4">
                                    <button className="flex items-center space-x-1 text-gray-400 hover:text-red-500 transition-colors">
                                        <Heart className="h-5 w-5" />
                                        <span className="text-sm font-bold">{post.likes}</span>
                                    </button>
                                    <button className="flex items-center space-x-1 text-gray-400 hover:text-primary transition-colors">
                                        <MessageSquare className="h-5 w-5" />
                                        <span className="text-sm font-bold">{post.comments}</span>
                                    </button>
                                    <button className="flex items-center space-x-1 text-gray-400 hover:text-primary transition-colors ml-auto">
                                        <Share2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </main>

                    {/* Right Sidebar - Trending/Experts */}
                    <aside className="hidden lg:block space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 font-heading">Trending Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {["#PM-KISAN", "#OrganicFarming", "#WeatherAlert", "#MarketPrices", "#DroneTech"].map(t => (
                                    <span key={t} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg border border-gray-100 hover:border-primary/50 cursor-pointer transition-colors">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 font-heading">Active Experts</h3>
                            <div className="space-y-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex items-center space-x-3">
                                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold text-xs italic">
                                            Dr.
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-xs font-bold text-gray-900">Dr. Viney Bansal</p>
                                            <p className="text-[10px] text-gray-400">Soil Specialist</p>
                                        </div>
                                        <button className="text-[10px] text-primary font-bold hover:underline">Follow</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Community;
