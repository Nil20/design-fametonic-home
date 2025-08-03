'use client';

export default function Header() {
  return (
    <header className="w-full h-[46px] bg-[linear-gradient(to_right,#FC004E,#10CBE0)] text-white px-2 flex items-center justify-center overflow-x-auto">
      <div className="font-figtree font-extrabold uppercase text-[22px] leading-[100%] text-sky-400 whitespace-nowrap text-center">
        🚀 Fresh Beginnings Sale
      </div>
      <div className="font-figtree font-extrabold text-[22px] leading-[100%] whitespace-nowrap text-white ml-1">
        : Extra 25% OFF, Limited Spots – start your journey today!
      </div>
    </header>
  );
}
