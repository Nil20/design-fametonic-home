'use client';

import Image from 'next/image';

type TopNavProps = {
  navItems?: React.ReactNode[];
};

export default function TopNav({
  navItems = ['About us', 'Contact'],
}: TopNavProps) {
  return (
    <nav className="absolute top-[81px] left-0 right-0 h-[74px] ml-[211px] bg-black text-white px-6 md:px-[64px] z-50">
      <div className="h-full flex justify-between items-start">
        <div className="flex items-start h-full w-full justify-between">
          <div className="h-full flex items-start">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={120}
              height={0}
              className="h-full w-auto"
              priority
            />
          </div>

          <div className="flex gap-[40px] pt-1 pr-[330px]">
            {navItems.map((item, i) => (
              <button
                key={i}
                className="font-figtree font-semibold text-[18px] leading-[100%] text-center flex items-center justify-center"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
