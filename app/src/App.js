// App.jsx
import React, { useState } from 'react';

function App() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://127.0.0.1:5000/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt }),
        });
        const data = await res.json();
        console.log(data);
        setResponse(data.message);  // Display the response from MetaAI
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter prompt"
                />
                <button type="submit">Send</button>
            </form>
            <div>{response}</div>
        </div>
    );
}

export default App;