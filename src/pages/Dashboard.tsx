import React from 'react';
import { Sun, CloudRain, Droplets, Wind, TrendingUp, Calendar, AlertTriangle } from 'lucide-react';

const Dashboard: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-heading text-gray-900">Farmer Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome back! Here's your farming summary.</p>
            </div>

            {/* Weather Widget Section */}
            <section className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl mb-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-1">Today's Weather</h2>
                        <p className="text-blue-100">Bhopal, Madhya Pradesh</p>
                        <div className="flex items-center mt-4">
                            <Sun className="w-16 h-16 text-yellow-300 mr-4" />
                            <div>
                                <span className="text-5xl font-bold">32°C</span>
                                <p className="text-blue-100">Sunny</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 text-center md:text-left">
                        <div>
                            <div className="flex items-center mb-1 text-blue-100">
                                <Droplets className="w-5 h-5 mr-2" /> Humidity
                            </div>
                            <span className="text-xl font-bold">45%</span>
                        </div>
                        <div>
                            <div className="flex items-center mb-1 text-blue-100">
                                <Wind className="w-5 h-5 mr-2" /> Wind
                            </div>
                            <span className="text-xl font-bold">12 km/h</span>
                        </div>
                        <div>
                            <div className="flex items-center mb-1 text-blue-100">
                                <CloudRain className="w-5 h-5 mr-2" /> Rain Chance
                            </div>
                            <span className="text-xl font-bold">10%</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <DashboardCard
                    icon={<TrendingUp className="w-6 h-6 text-green-600" />}
                    title="Market Prices"
                    value="Wheat: ₹2,125/q"
                    trend="+5%"
                    trendUp={true}
                />
                <DashboardCard
                    icon={<Calendar className="w-6 h-6 text-orange-600" />}
                    title="Next Task"
                    value="Fertilizer"
                    subtext="Due in 2 days"
                />
                <DashboardCard
                    icon={<AlertTriangle className="w-6 h-6 text-red-600" />}
                    title="Pest Alert"
                    value="Low Risk"
                    subtext="Check updated daily"
                />
                <DashboardCard
                    icon={<CloudRain className="w-6 h-6 text-blue-600" />}
                    title="Rainfall"
                    value="12mm"
                    subtext="Last 24 hours"
                />
            </div>

            {/* Recent Activity / News */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Actions</h3>
                <div className="space-y-4">
                    <ActionItem
                        title="Sowing Preparation"
                        desc="Optimal time for wheat sowing requires soil moisture check."
                        date="Today"
                    />
                    <ActionItem
                        title="PM-KISAN Update"
                        desc="Check your installment status for the upcoming quarter."
                        date="Yesterday"
                    />
                    <ActionItem
                        title="Market Trend"
                        desc="Soybean prices are expected to rise next week."
                        date="2 days ago"
                    />
                </div>
            </div>
        </div>
    );
};

const DashboardCard = ({ icon, title, value, subtext, trend, trendUp }: any) => (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
            {trend && (
                <span className={`text-sm font-bold ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
                    {trend}
                </span>
            )}
        </div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className="text-2xl font-bold text-gray-900 mt-1">{value}</div>
        {subtext && <div className="text-gray-400 text-sm mt-1">{subtext}</div>}
    </div>
);

const ActionItem = ({ title, desc, date }: any) => (
    <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
        <div>
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <p className="text-sm text-gray-600 mt-1">{desc}</p>
        </div>
        <span className="text-xs text-gray-400 whitespace-nowrap ml-4">{date}</span>
    </div>
);

export default Dashboard;
