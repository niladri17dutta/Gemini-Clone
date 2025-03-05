# Gemini Clone

This is a Gemini AI clone built using React and integrated with the Gemini API. The app replicates the functionality of the original Gemini chatbot, allowing users to interact with AI seamlessly.

## Features

- 🌟 **Real-time AI interaction** powered by the Gemini API
- ⚛️ **React-based front-end** for smooth and dynamic UI
- 🚀 **Fast and responsive** design
- 🔒 **API integration** with secure key handling

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/niladri17dutta/Gemini-Clone.git
cd Gemini-Clone
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file** in the root directory and add your Gemini API key:

```
REACT_APP_GEMINI_API_KEY=your_api_key_here
```

4. **Start the development server**

```bash
npm start dev
```

The app should now be running at `http://localhost:3000`

## Usage

- Type your prompt in the input field
- Press "Submit" to send the prompt to the Gemini API
- Receive AI-generated responses instantly

## Project Structure

```
.
├── public
├── src
|   ├── assets
│   ├── components
│   │   ├── Main
│   │   |   |── Main.css
│   │   |   └── Main.jsx
|   |   ├── Sidebar
│   │   |   |── Sidebar.css
│   │   |   └── Sidebar.jsx
│   ├── config
│   │   └── gemini.js
│   ├── context
│   │   └── Context.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

## API Integration

The API requests are handled in `src/config/gemini.js`:

```javascript
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
```

## Contributing

Feel free to fork this repository, open an issue, or submit a pull request if you'd like to enhance the app!

## License

This project is licensed under the MIT License.

---

### ✨ Happy Coding! ✨
