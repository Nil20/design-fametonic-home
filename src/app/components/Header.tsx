'use client';

export default function Header() {
  return (
    <header className="w-full h-[76px] md:h-[46px] bg-[linear-gradient(to_right,#FC004E,#10CBE0)] text-white px-2 flex items-center justify-center overflow-x-auto">
      <div className="text-center">
        <span className="font-figtree font-extrabold uppercase text-[22px] leading-[100%] text-sky-400 whitespace-nowrap hidden md:inline">
          🚀 Fresh Beginnings Sale:
        </span>
        <span className="font-figtree font-extrabold text-[22px] leading-[100%] whitespace-nowrap text-white ml-1 hidden md:inline">
          Extra 25% OFF, Limited Spots – start your journey today!
        </span>

        {/* Mobile version */}
        <div className="font-figtree font-extrabold text-[16px] leading-[100%] text-white md:hidden text-center px-2">
          <span className="text-sky-400 uppercase">
            🚀 Fresh Beginnings Sale:
          </span>{' '}
          Extra 25% OFF, Limited Spots – start your journey today!
        </div>
      </div>
    </header>
  );
}
