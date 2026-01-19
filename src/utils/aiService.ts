// aiService.ts

// Initialize Hugging Face API Key
// We don't need the key here anymore as the backend handles it.
const API_KEY = "PROXY_MODE";

// Proxy Server Endpoint
const API_URL = "http://localhost:3000/api/chat";

export type Message = {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
};

export const generateResponse = async (query: string): Promise<string> => {
    // Demo Mode Logic if API Key is missing
    if (!API_KEY) {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

        const lowerQuery = query.toLowerCase();

        if (lowerQuery.includes("weather")) {
            return "Based on current forecasts, the weather in your region is sunny with a high of 32°C. No rain is expected for the next 3 days, so it's a good time for irrigation. \n\n_(Note: Demo Mode Data)_";
        }
        if (lowerQuery.includes("wheat") || lowerQuery.includes("crop")) {
            return "For wheat, ensure soil moisture is adequate. If you are in the sowing phase, use rotavator for seedbed preparation. Recommended varieties correspond to your local soil type. \n\n_(Note: Demo Mode Data)_";
        }
        if (lowerQuery.includes("scheme") || lowerQuery.includes("subsidy")) {
            return "You might be eligible for PM-KISAN (₹6000/year) or subsidy on drip irrigation under PMKSY. Please visit the 'Schemes' section for details. \n\n_(Note: Demo Mode Data)_";
        }

        return "I am AgriSaathi (Demo Mode). I can help with crop advice, weather, and schemes. Since I'm currently running in demo mode, my knowledge is limited, but I'm ready to assist! Try asking about 'wheat', 'weather', or 'schemes'.";
    }

    try {
        // Construct the prompt with context for the model
        // We structure it as a conversation to guide the completion
        const systemPrompt = `You are AgriSaathi, an intelligent and empathetic agricultural advisor for Indian farmers. 
        Answer questions about farming, crops (wheat, rice, cotton, etc.), weather, government schemes (PM-KISAN), and market prices.
        
        Guidelines:
        - Keep answers concise and actionable.
        - Use simple language suitable for farmers.
        - If the query is about suicide or deep distress, provide helpline numbers immediately.
        - If asked about non-farming topics, politely steer back to agriculture.
        
        User: ${query}
        AgriSaathi:`;

        const response = await fetch(API_URL, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                inputs: systemPrompt,
                parameters: {
                    max_new_tokens: 250,
                    return_full_text: false,
                }
            }),
        });

        if (!response.ok) {
            throw new Error(`Hugging Face API Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();

        // Hugging Face Inference API typically returns an array like [{ generated_text: "..." }]
        if (Array.isArray(result) && result.length > 0 && result[0].generated_text) {
            return result[0].generated_text.trim();
        } else {
            console.warn("Unexpected response format:", result);
            return "I understood your question, but I'm having trouble forming an answer right now.";
        }

    } catch (error) {
        console.error("Hugging Face API Error:", error);
        return "I'm having trouble connecting to the service (API Error). Please check your internet connection or try again later.";
    }
};
