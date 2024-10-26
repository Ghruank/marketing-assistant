'use client';

import React, { useState } from 'react';
import { Camera, Paperclip, X, RotateCcw } from 'lucide-react';

export default function AIAssistant() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [region, setRegion] = useState("");
  const [month, setMonth] = useState("");
  const [genz, setGenz] = useState(false);


  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:5000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, region, month, genz }),
    });
    const data = await res.json();
    console.log(data);
    setResponse(data.message);
    console.log({ response })
  };



  return (
    <div className=''>
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
              {/* <span className="text-orange-400 mr-2" aria-hidden="true">
              ✻
            </span>{' '} */}
              AI Powered Marketing Assistant
            </h1>
          </header>

          <form onSubmit={handleSubmit} className="mb-6 mt-12 flex flex-row align-middle items-center">
            <div className="bg-gray-800 rounded-lg p-6 w-[90%]">
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
            <button
              type="submit"
              className="ml-2 px-4 py-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>


          <div className="mb-6 mt-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg">Tune the parameters below</div>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-800 rounded-full" aria-label="Add image">
                  <Camera className="w-6 h-6" />
                </button>
                {/* <button className="flex items-center space-x-1 bg-gray-800 hover:bg-gray-700 rounded-full px-4 py-2">
                {/* <Paperclip className="w-4 h-4" />
                <span>Add content</span> */}
                {/* </button> */}
              </div>
            </div>


            <div className="">
              <div className="flex justify-evenly align-middle items-center">
                {/* Dropdown 1 */}
                <div className="">
                  <label htmlFor="dropdown1" className="block text-gray-700 p-1">Select Region</label>
                  <select
                    id="dropdown1"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="bg-gray-800 text-white rounded-lg p-2 w-full"
                  >
                    <option value="" disabled>Select Region</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="kerala">Kerala</option>
                  </select>
                </div>

                {/* Dropdown 2 */}
                <div className="">
                  <label htmlFor="dropdown1" className="block text-gray-700 p-1">Select Month</label>
                  <select
                    id="dropdown1"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="bg-gray-800 text-white rounded-lg p-2 w-full"
                  >
                    <option value="" disabled>Select month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>



                  </select>
                </div>

                {/* Slider-styled Checkbox */}
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700">GenZ</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={genz}
                      onChange={() => setGenz(!genz)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-all">
                      <div
                        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${genz ? 'translate-x-5' : 'translate-x-0'
                          }`}
                      />
                    </div>
                  </label>
                </div>


              </div>
            </div>

          </div>

          {
            response && (
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg">Response</div>
                  <button
                    onClick={() => setResponse("")}
                    className="p-2 hover:bg-gray-800 rounded-full"
                    aria-label="Clear response"
                  >
                    <RotateCcw className="w-6 h-6" onClick={handleSubmit} />
                  </button>
                </div>
                <div className="text-xl">{response}</div>
              </div>
            )
          }




        </div>
      </div>
    </div>
  );
}
