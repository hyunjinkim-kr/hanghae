'use client'
import Image from "next/image";
import React, { useState } from 'react';

export default function Home({title}) {
  const [question, setQuestion] = useState('');

  return (
    <div>
      <div className="p-10 min-h-screen flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg  border border-gray-300">
          <h1 className="text-3xl font-bold mb-6 text-center">{title}</h1>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Project Name</label>
              <input 
                type="text" 
                id="question" 
                name="question" 
                placeholder="글 제목을 입력해주세요." 
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2" 
                onChange={(e)=>{setQuestion(e.target.value)}}
              />
            </div>
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Save
            </button>
            <button onClick={(e)=>{
                      fetch(`http://ec2-3-35-9-74.ap-northeast-2.compute.amazonaws.com:8080/purify?text=${question}`,{
                        method : 'GET'
                      })
                      .then((r)=> r.json())
                      .then((data)=>{ 
                        console.log(data)
                      })
                    }}>
            </button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}
