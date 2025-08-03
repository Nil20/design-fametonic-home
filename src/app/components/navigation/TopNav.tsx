'use client';

import { useState } from 'react';
import { DesktopNavItems } from './TopNavDesktopItems';
import { Logo } from './TopNavLogo';
import { MobileMenu } from './TopNavMobileMenu';
import { MobileMenuToggle } from './TopNavMobileToggle';

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
          <Logo />
          <MobileMenuToggle onClick={() => setShowMenu((prev) => !prev)} />
        </div>

        <DesktopNavItems navItems={navItems} />

        {showMenu && (
          <MobileMenu navItems={navItems} onClose={() => setShowMenu(false)} />
        )}
      </div>
    </nav>
  );
}
