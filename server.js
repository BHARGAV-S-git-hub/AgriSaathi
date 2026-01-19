import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { HfInference } from "@huggingface/inference";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

const API_KEY = process.env.VITE_HUGGING_FACE_API_KEY;
const client = new HfInference(API_KEY);
const MODEL_ID = "Qwen/Qwen2.5-1.5B-Instruct";
// Backup model if Phi-3.5 fails
// const MODEL_ID = "HuggingFaceH4/zephyr-7b-beta";

console.log(`Using model: ${MODEL_ID}`);

app.post('/api/chat', async (req, res) => {
    try {
        const { inputs } = req.body; // inputs is now the messages array or prompt

        // Convert string input to chat format if needed, or expect array
        let messages = [];
        if (typeof inputs === 'string') {
            // Simple parsing to extract the user's last message if it's formatted
            // But better to expect the frontend to send the raw user query
            // Let's assume 'inputs' is just the user query for now based on aiService.ts
            // Actually aiService sends a big prompt string. We should adapt to receive messages properly in future
            // For now, let's just make it a user message.
            messages = [
                { role: "user", content: inputs }
            ];
        } else {
            messages = inputs;
        }

        const completion = await client.chatCompletion({
            model: MODEL_ID,
            messages: messages,
            max_tokens: 500,
        });

        const generatedText = completion.choices[0].message.content;

        // Return format matching what frontend expects (extracted text)
        // Adjusting frontend expectation: Frontend expects { generated_text: ... } or just returns text?
        // Wait, frontend aiService.ts expects: 
        // if (Array.isArray(result) && result[0].generated_text) ...
        // So I need to return that format to avoid changing frontend again.

        res.json([{ generated_text: generatedText }]);

    } catch (error) {
        console.error('Server Error:', JSON.stringify(error, null, 2));
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
