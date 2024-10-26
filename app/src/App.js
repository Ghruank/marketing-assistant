// App.jsx
import React, { useState } from 'react';
import PromptInputBar from './components/PromptInputBar';
// import Home from './components/Home';
// import InteractiveBackground from './components/interactivebg';
import { Bg } from './components/bg';

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
    <div >
      <Bg />
      {/* <PromptInputBar /> */}
    </div>
  );
}

export default App;
