import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Clock, PlusCircle, MoreVertical, Image as ImageIcon, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import { generateResponse, type Message } from '../utils/aiService';

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'assistant',
            content: 'Namaste! I am AgriSaathi AI. I can help you with crop advice, weather updates, government schemes, and more. What would you like to know today?',
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        try {
            const responseText = await generateResponse(userMsg.content);
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: responseText,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error("AI Error", error);
        } finally {
            setIsTyping(false);
        }
    };

    const suggestions = [
        "Best crops for sandy soil?",
        "How to apply for PM-KISAN?",
        "Treatment for wheat rust?",
        "Tomorrow's weather forecast?"
    ];

    return (
        <div className="flex bg-gray-50 h-[calc(100vh-64px)]"> {/* Subtract Header Height */}

            {/* Sidebar - History (Hidden on mobile) */}
            <div className="hidden md:flex flex-col w-80 bg-white border-r border-gray-200">
                <div className="p-4 border-b border-gray-200">
                    <button className="w-full flex items-center justify-center space-x-2 bg-primary/10 text-primary p-3 rounded-lg hover:bg-primary/20 transition-colors font-medium">
                        <PlusCircle className="h-5 w-5" />
                        <span>New Conversation</span>
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Today</div>
                    <div className="space-y-2">
                        <div className="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors text-sm text-gray-700 truncate">
                            Crop advice for wheat
                        </div>
                        <div className="p-3 bg-white hover:bg-gray-50 rounded-lg cursor-pointer transition-colors text-sm text-gray-700 truncate border border-transparent hover:border-gray-200">
                            Weather in Punjab
                        </div>
                    </div>
                </div>
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <User className="h-5 w-5" />
                        <div className="flex-1">
                            <div className="font-medium text-gray-900">Farmer John</div>
                            <div className="text-xs">Free Plan</div>
                        </div>
                        <MoreVertical className="h-5 w-5 cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col h-full relative">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
                    {messages.map((msg) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            key={msg.id}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`flex max-w-[85%] md:max-w-[70%] space-x-3 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                                <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center shadow-sm ${msg.role === 'user' ? 'bg-secondary' : 'bg-primary'}`}>
                                    {msg.role === 'user' ? <User className="h-6 w-6 text-white" /> : <Bot className="h-6 w-6 text-white" />}
                                </div>

                                <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                    <div className={`p-4 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed ${msg.role === 'user'
                                        ? 'bg-secondary text-white rounded-tr-none'
                                        : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                                        }`}>
                                        {msg.content}
                                    </div>
                                    <span className="text-xs text-gray-400 mt-1 flex items-center">
                                        <Clock className="w-3 h-3 mr-1" />
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-start"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-sm">
                                    <Bot className="h-6 w-6 text-white" />
                                </div>
                                <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none shadow-sm flex space-x-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-200">
                    <div className="max-w-4xl mx-auto">
                        {/* Quick Suggestions */}
                        {messages.length < 3 && (
                            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
                                {suggestions.map((s, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            const userMsg: Message = {
                                                id: Date.now().toString(),
                                                role: 'user',
                                                content: s,
                                                timestamp: new Date()
                                            };

                                            setMessages(prev => [...prev, userMsg]);
                                            setIsTyping(true);

                                            generateResponse(s).then(responseText => {
                                                const aiMsg: Message = {
                                                    id: (Date.now() + 1).toString(),
                                                    role: 'assistant',
                                                    content: responseText,
                                                    timestamp: new Date()
                                                };
                                                setMessages(prev => [...prev, aiMsg]);
                                                setIsTyping(false);
                                            });
                                        }}
                                        className="whitespace-nowrap px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm hover:bg-green-100 border border-green-200 transition-colors"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}

                        <form onSubmit={handleSend} className="relative flex items-center">
                            <button type="button" className="absolute left-3 text-gray-400 hover:text-primary transition-colors">
                                <ImageIcon className="w-6 h-6" />
                            </button>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask AgriSaathi anything about farming..."
                                className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-700 placeholder-gray-400"
                            />
                            <button
                                type="button"
                                className="absolute right-14 text-gray-400 hover:text-primary transition-colors"
                            >
                                <Mic className="w-6 h-6" />
                            </button>
                            <button
                                type="submit"
                                disabled={!input.trim() || isTyping}
                                className="absolute right-3 bg-primary text-white p-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                        <p className="text-center text-xs text-gray-400 mt-2">
                            AgriSaathi AI can make mistakes. Always verify important farming decisions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
