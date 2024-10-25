'use client'

import { useState } from 'react'

export default function PromptInput() {
  const [prompt, setPrompt] = useState('')
  const [submittedPrompt, setSubmittedPrompt] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // setSubmittedPrompt(prompt)
    // setPrompt('')
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Prompt Input</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="promptInput" className="block text-sm font-medium text-gray-700 mb-1">
              Enter your prompt:
            </label>
            <input
              type="text"
              id="promptInput"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              aria-describedby="promptDescription"
            />
            <p id="promptDescription" className="sr-only">
              Enter the prompt you want to submit
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </form>
        {submittedPrompt && (
          <div className="mt-4 p-3 bg-gray-100 rounded-md">
            <p className="text-sm text-gray-600">
              Submitted Prompt: <span className="font-medium">{submittedPrompt}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}