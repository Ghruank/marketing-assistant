// App.jsx
import React, { useState } from 'react';
import PromptInputBar from './components/PromptInputBar';


function App() {

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const res = await fetch("http://127.0.0.1:5000/", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ prompt }),
    //     });
    //     const data = await res.json();
    //     console.log(data);
    //     setResponse(data.message);  
    // };

    return (
        <div>
        <PromptInputBar/>
        </div>
    );
}

export default App;
