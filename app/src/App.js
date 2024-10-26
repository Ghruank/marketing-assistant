// App.jsx
import React, { useState } from 'react';
import PromptInputBar from './components/PromptInputBar';
// import Home from './components/Home';
// import InteractiveBackground from './components/interactivebg';
import { Bg } from './components/bg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import InteractiveBackground from './components/interactivebg';

function App() {

  return (
    <div >
        <Router>
            <Routes>
                <Route path="/" element={<Bg />} />
                <Route path="/main" element={<PromptInputBar/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
