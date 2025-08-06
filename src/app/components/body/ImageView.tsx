'use client';

import Image from 'next/image';

export default function ImageView() {
  return (
    <>
      <Image
        src="/assets/image.svg"
        alt="Hero Graphic"
        width={666}
        height={679}
        className="hidden md:block absolute top-[126px] right-[280px] z-0"
      />

      {/* Mobile Image - flows normally */}
      <div className="block md:hidden flex justify-center w-full mb-6 z-0">
        <Image
          src="/assets/image.svg"
          alt="Hero Graphic"
          width={390}
          height={426}
          className="w-[390px] h-[426px] z-0"
        />
      </div>
    </>
  );
}
