import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="/assets/logo.svg"
      alt="Logo"
      width={120}
      height={0}
      className="w-[107.78px] h-[46.07px] md:w-auto md:h-full"
      priority
    />
  );
}
