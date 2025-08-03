'use client';

export default function Header() {
  return (
    <header className="w-full h-[76px] md:h-[46px] bg-[linear-gradient(to_right,#FC004E,#10CBE0)] text-white px-2 flex items-center justify-center overflow-x-auto">
      <div
        className="font-figtree font-extrabold leading-[100%] text-center px-2
  text-[16px] md:text-[22px] md:whitespace-nowrap text-white"
      >
        <span className="text-sky-400 uppercase">
          🚀 Fresh Beginnings Sale:
        </span>{' '}
        Extra 25% OFF, Limited Spots – start your journey today!
      </div>
    </header>
  );
}
