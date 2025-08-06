export function MobileMenu({
  navItems,
  onClose,
}: {
  navItems: React.ReactNode[];
  onClose: () => void;
}) {
  return (
    <div className="absolute top-full left-0 w-full bg-black text-[#A9A9A9] flex flex-col items-center gap-4 py-4 md:hidden">
      {navItems.map((item, i) => (
        <button
          key={i}
          className="font-figtree font-semibold text-lg"
          onClick={onClose}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
