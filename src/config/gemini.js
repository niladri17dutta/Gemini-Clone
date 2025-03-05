import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const API_kEY = "YOUR-API-KEY";
const genAI = new GoogleGenerativeAI(API_kEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });

const generationConfig = {
    temperature: 0.9,
    topP: 1,
    topK: 1,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    console.log(result.response.text());
    return response.text();
}

export default run;