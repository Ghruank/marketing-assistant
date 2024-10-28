'use client';

import React, { useState } from 'react';
import { Camera, RotateCcw } from 'lucide-react';
import Input from './Input'; // Assuming Input is in the same folder
import Switch from './Switch'; // Assuming Switch component is in the same folder
import Loader from './Loader';
import './BackImage.css';
import Response from './Response';
export default function Inputpage() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [region, setRegion] = useState("");
  const [month, setMonth] = useState("");
  const [genz, setGenz] = useState(false);
  const [loading, setLoading] = useState(false); // State to track loading
const [k, setK] = useState(0);
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setK(1);// Set loading to true when submitting
    const res = await fetch("http://127.0.0.1:5000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, region, month, genz }),
    });
    const data = await res.json();
    setResponse(data.message);
    setLoading(false); // Set loading to false after receiving response
  };

  return (
    <div className=''>
      <div className="min-h-screen text-gray-100 p-4"style={{
      backgroundImage: "url('./grad.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100vw',
      fontFamily: "Ubuntu",
    }}>
      <div style={{ height: '100px' }}></div>
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              AI Marketing Companion
            </h1>
          </header>

          <form onSubmit={handleSubmit} className="mb-6 mt-12 flex flex-row align-middle items-center black" style={{ color: "black", caretColor: "black" }}>
            <Input value={query} onChange={handleQueryChange} onSubmit={handleSubmit} />
          </form>

          <div className="mb-6 mt-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg">Tune the parameters below</div>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-800 rounded-full" aria-label="Add image">
                  <Camera className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="flex justify-evenly align-middle items-center">
              {/* Region Input Box */}
              <div className="">
                {/* <label htmlFor="regionInput" className="block text-gray-700 p-1">Enter Region</label> */}
                <input
                  id="regionInput"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  placeholder="Type region here..."
                  className="bg-gray-800 text-white rounded-lg p-2 w-full"
                />
              </div>

              {/* Month Dropdown */}
              <div className="">
                {/* <label htmlFor="dropdownMonth" className="block text-gray-700 p-1">Select Month</label> */}
                <select
                  id="dropdownMonth"
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

              {/* Custom Switch Toggle */}
              <div className="flex items-center space-x-2">
                <span className="text-white-700">GenZ</span>
                <Switch checked={genz} onChange={() => setGenz(!genz)} />
              </div>
            </div>
          </div>

          {/* Response and Loader Handling */}
          <div className={k ? "bg-gray-800 rounded-lg p-6" : "rounded-lg p-0"} >
            {loading ? (
              <div>
                <Loader />
              </div>
            ) : (
              <>
                {response && (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-lg">Response</div>
                      <button
                        onClick={() => setResponse("")}
                        className="p-2 hover:bg-gray-800 rounded-full"
                        aria-label="Clear response"
                      >
                        <RotateCcw className="w-6 h-6" />
                      </button>
                    </div>
                    <div className="text-xl ">{response}</div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}