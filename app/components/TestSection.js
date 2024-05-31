'use client';
import React, { useState } from 'react';

export default function TestSection({ id, title, bgColor }) {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');

  return (
    <div id={id} className={`h-screen flex items-center justify-center ${bgColor}`}>
      <div className="h-full w-full flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl border border-gray-300">
          <h1 className="text-4xl font-bold mb-6 text-center">Write</h1>
          <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-inner">
            <label htmlFor="question" className="block text-2xl font-semibold mb-4">Input</label>
            <input 
              type="text" 
              id="question" 
              name="question" 
              placeholder="순화시킬 말을 입력하쇼" 
              className="block w-full mt-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-lg border-gray-300 rounded-md px-4 py-3" 
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button 
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded w-full text-lg"
              onClick={() => {
                fetch(`http://ec2-3-35-9-74.ap-northeast-2.compute.amazonaws.com:8080/purify?text=${question}`, {
                  method: 'GET'
                })
                .then((r) => r.json())
                .then((data) => {
                  setResult(data.data);
                })
                .catch((error) => {
                  console.error('Error:', error);
                  setResult('An error occurred while fetching the result.');
                });
              }}>
              Translate
            </button>
          </div>
          <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-4">Result</h2>
            <textarea
              className="block w-full mt-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-lg border-gray-300 rounded-md px-4 py-3"
              rows="5"
              readOnly
              value={result}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
