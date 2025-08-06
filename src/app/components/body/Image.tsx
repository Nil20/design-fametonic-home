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
        priority
      />

      <div className="block md:hidden w-full flex justify-center mb-6 z-0">
        <Image
          src="/assets/image.svg"
          alt="Hero Graphic"
          width={0}
          height={0}
          className="w-[390px] h-[426px] z-0"
          priority
        />
      </div>
    </>
  );
}
