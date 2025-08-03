'use client';

import Image from 'next/image';
import { useState } from 'react';

type TopNavProps = {
  navItems?: React.ReactNode[];
};

export default function TopNav({
  navItems = ['About us', 'Contact'],
}: TopNavProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="absolute top-[81px] left-0 right-0 h-[74px] bg-black text-white px-6 md:px-[64px] z-50">
      <div className="h-full flex items-center md:items-start justify-between w-full">
        <div className="flex items-center justify-center relative flex-1 md:ml-[211px] md:justify-start">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={120}
            height={0}
            className="w-[107.78px] h-[46.07px] md:w-auto md:h-full"
            priority
          />

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="absolute right-0 p-2 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>

        {/* Desktop nav items */}
        <div className="hidden md:flex gap-10 items-start">
          {navItems.map((item, i) => (
            <button
              key={i}
              className="font-figtree font-semibold text-[18px] leading-[100%] text-center flex items-center justify-center"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile menu dropdown */}
        {showMenu && (
          <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-4 md:hidden">
            {navItems.map((item, i) => (
              <button
                key={i}
                className="font-figtree font-semibold text-lg"
                onClick={() => setShowMenu(false)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
