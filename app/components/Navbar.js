'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
<nav className="fixed w-full bg-white shadow-md z-10">
  <ul className="flex items-center space-x-12 p-4 pl-8"> {/* 여백 추가 */}
    <li>
      <Link href="#home">
        <div className="text-xl font-bold text-gray-800 hover:text-blue-500 cursor-pointer">Home</div>
      </Link>
    </li>
    <li>
      <Link href="#about">
        <div className="text-xl font-bold text-gray-800 hover:text-blue-500 cursor-pointer">About</div>
      </Link>
    </li>
    <li>
      <Link href="#test">
        <div className="text-xl font-bold text-gray-800 hover:text-blue-500 cursor-pointer">Test</div>
      </Link>
    </li>
    <li>
      <Link href="#team">
        <div className="text-xl font-bold text-gray-800 hover:text-blue-500 cursor-pointer">Team</div>
      </Link>
    </li>
  </ul>
</nav>
  );
}
