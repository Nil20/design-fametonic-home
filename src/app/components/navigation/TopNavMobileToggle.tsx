export function MobileMenuToggle({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 p-2 md:hidden"
      aria-label="Toggle menu"
    >
      <span className="text-xl">☰</span>
    </button>
  );
}
