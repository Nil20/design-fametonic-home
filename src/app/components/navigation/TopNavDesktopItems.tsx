export function DesktopNavItems({ navItems }: { navItems: React.ReactNode[] }) {
  return (
    <div className="hidden md:flex gap-[40px] pt-1 md:pr-[330px]">
      {navItems.map((item, i) => (
        <button
          key={i}
          className="font-figtree font-semibold text-[18px] text-[#A9A9A9] leading-[100%] text-center flex items-center justify-center"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
