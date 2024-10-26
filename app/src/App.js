// App.jsx
import React, { useState } from 'react';
import PromptInputBar from './components/PromptInputBar';
// import Home from './components/Home';
// import InteractiveBackground from './components/interactivebg';
import { Bg } from './components/bg';
import Inputpage from './components/inputpage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import InteractiveBackground from './components/interactivebg';

function App() {

  return (
    <div >
      {/* <Bg /> */}
      {/* <PromptInputBar /> */}
      {/* <Inputpage/> */}
        <Router>
            <Routes>
                <Route path="/" element={<Bg />} />
                <Route path="/main" element={<Inputpage/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
