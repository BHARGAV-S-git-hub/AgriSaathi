import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

const Schemes: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold font-heading text-gray-900 mb-8">Government Schemes</h1>

            <div className="space-y-6">
                <SchemeCard
                    title="Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)"
                    desc="Income support of ₹6,000 per year for all landholding farmers families, released in three installments."
                    tags={['Financial Aid', 'Central Govt']}
                    link="https://pmkisan.gov.in/"
                />
                <SchemeCard
                    title="Pradhan Mantri Fasal Bima Yojana (PMFBY)"
                    desc="Crop insurance scheme supporting farmers in case of non-preventable natural risks, pests, and diseases."
                    tags={['Insurance', 'Crop Safety']}
                    link="https://pmfby.gov.in/"
                />
                <SchemeCard
                    title="Soil Health Card Scheme"
                    desc="Schemes to help farmers know their soil health and fertility status to use fertilizers effectively."
                    tags={['Soil Health', 'Subsidies']}
                    link="https://soilhealth.dac.gov.in/"
                />
                <SchemeCard
                    title="Kisan Credit Card (KCC)"
                    desc="Timely and adequate credit to farmers to meet their production credit needs at low interest rates."
                    tags={['Credit', 'Finance']}
                    link="#"
                />
            </div>
        </div>
    );
};

const SchemeCard = ({ title, desc, tags, link }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:border-primary/50 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{desc}</p>
            <div className="flex gap-2">
                {tags.map((tag: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
        <div>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 shadow-sm whitespace-nowrap"
            >
                View Details <ExternalLink className="ml-2 w-4 h-4" />
            </a>
        </div>
    </div>
);

export default Schemes;
