'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-10">
      <ul className="flex items-center p-4 pl-8 space-x-4 md:space-x-12">
        <li>
          <Link href="#home">
            <div className="text-lg md:text-xl font-bold text-gray-800 hover:text-blue-500 cursor-pointer">Home</div>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <div className="text-lg md:text-xl font-bold text-gray-800 hover:text-blue-500 cursor-pointer">About</div>
          </Link>
        </li>
        <li>
          <Link href="#test">
            <div className="text-lg md:text-xl font-bold text-gray-800 hover:text-blue-500 cursor-pointer">Demo</div>
          </Link>
        </li>
        <li>
          <Link href="#testing">
            <div className="text-lg md:text-xl font-bold text-gray-800 hover:text-blue-500 cursor-pointer">Testing</div>
          </Link>
        </li>
        <li>
          <Link href="#team">
            <div className="text-lg md:text-xl font-bold text-gray-800 hover:text-blue-500 cursor-pointer">Team</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}