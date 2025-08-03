'use client';

export default function TopNav() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 text-white bg-black">
      <div className="text-2xl font-bold text-pink-500">
        <span className="text-cyan-300">fame</span>tonic
      </div>
      <div className="space-x-6 text-lg">
        <button className="hover:text-cyan-400">About us</button>
        <button className="hover:text-cyan-400">Contact</button>
      </div>
    </nav>
  );
}
