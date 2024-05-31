'use client';
import React, { useState } from 'react';

export default function TestSection({ id, title, bgColor }) {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');

  return (
    <div id={id} className={`h-screen ${bgColor} grid grid-cols-4`}>
      <div className="col-span-1 flex flex-col justify-center p-8">
        <img src="/slack.png" alt="Slack Logo" className="mb-4 w-full h-auto object-contain" />
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg whitespace-pre-line">
          실제 SLACK 에서 순화되는 과정을 확인합니다.
        </p>
      </div>
      <div className="col-span-3 flex items-center justify-center p-4">
        <video
          className="w-full max-h-full rounded-lg shadow-lg"
          controls
          src="/aimyon.mp4"
          type="video/mp4"
          style={{ maxHeight: 'calc(100vh - 32px)' }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
