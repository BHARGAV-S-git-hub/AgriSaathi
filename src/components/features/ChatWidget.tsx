import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateResponse } from '../../utils/aiService';

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
        { role: 'assistant', content: 'Namaste! I am your AgriSaathi AI assistant. How can I help you with your farming today?' }
    ]);
    const [input, setInput] = useState('');

    const [isTyping, setIsTyping] = useState(false);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInput('');
        setIsTyping(true);

        try {
            const response = await generateResponse(userMsg);
            setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error." }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 bg-white rounded-2xl shadow-2xl w-80 sm:w-96 border border-gray-100 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex justify-between items-center text-white">
                            <div className="flex items-center space-x-2">
                                <div className="bg-white/20 p-1.5 rounded-lg">
                                    <MessageSquare className="h-5 w-5" />
                                </div>
                                <span className="font-semibold font-heading">AgriSaathi Assistant</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/20 p-1 rounded-full transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                            ? 'bg-primary text-white rounded-tr-none'
                                            : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none p-3 rounded-2xl text-sm italic text-gray-400">
                                        Typing...
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about crops, weather..."
                                className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                            <button
                                type="submit"
                                className="bg-primary text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                                disabled={!input.trim()}
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </form>

                        <div className="bg-gray-50 p-2 text-center border-t border-gray-100">
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    navigate('/chat');
                                }}
                                className="text-xs text-primary font-medium hover:underline"
                            >
                                Open Full Chat Experience
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-primary hover:bg-green-700 text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition-all transform hover:scale-110"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
            </button>
        </div>
    );
};

export default ChatWidget;
