'use client';

import React, { useState } from 'react';
import { Camera, Paperclip, X, RotateCcw } from 'lucide-react';

export default function AIAssistant() {
  const [query, setQuery] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted query:', query);
    // Here you would typically send the query to your AI service
  };

  const [dropdown1, setDropdown1] = useState("");
  const [dropdown2, setDropdown2] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-8">
          {/* <div className="inline-block bg-gray-800 rounded-full px-4 py-1 text-sm mb-4">
            Using limited free plan{' '}
            <button className="text-purple-400 ml-1 hover:underline focus:outline-none">
              Upgrade
            </button>
          </div> */}
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            <span className="text-orange-400 mr-2" aria-hidden="true">
              ✻
            </span>{' '}
            Happy late night Mohammed
          </h1>
        </header>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <input
              type="text"
              value={query}
              onChange={handleQueryChange}
              placeholder="How can ZaverAI help you today?"
              className="w-full bg-transparent text-xl placeholder-gray-500 focus:outline-none"
              aria-label="Enter your query for Claude"
            />
            {/* <div className="text-gray-500 mt-2">Claude 3.5 Sonnet (New)</div> */}
          </div>
        </form>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg">Get started with an example below</div>
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-gray-800 rounded-full" aria-label="Add image">
                <Camera className="w-6 h-6" />
              </button>
              <button className="flex items-center space-x-1 bg-gray-800 hover:bg-gray-700 rounded-full px-4 py-2">
                <Paperclip className="w-4 h-4" />
                <span>Add content</span>
              </button>
            </div>
          </div>


          <div className="">
          <div className="flex justify-evenly align-middle items-center">
      {/* Dropdown 1 */}
      <div className = "">
        <label htmlFor="dropdown1" className="block text-gray-700 p-1">Select Option 1</label>
        <select
          id="dropdown1"
          value={dropdown1}
          onChange={(e) => setDropdown1(e.target.value)}
          className="bg-gray-800 text-white rounded-lg p-2 w-full"
        >
          <option value="" disabled>Select an option</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>

      {/* Dropdown 2 */}
      <div  className = "">
        <label htmlFor="dropdown1" className="block text-gray-700 p-1">Select Option 1</label>
        <select
          id="dropdown1"
          value={dropdown1}
          onChange={(e) => setDropdown1(e.target.value)}
          className="bg-gray-800 text-white rounded-lg p-2 w-full"
        >
          <option value="" disabled>Select an option</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>

      {/* Slider-styled Checkbox */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Toggle Option</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-all">
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                isChecked ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </div>
        </label>
      </div>
    </div>
          </div>
        </div>

        <div className="fixed bottom-4 right-4 flex space-x-2">
          <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full" aria-label="Close">
            <X className="w-6 h-6" />
          </button>
          <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full" aria-label="Refresh">
            <RotateCcw className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
