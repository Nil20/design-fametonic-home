'use client';

export default function Footer() {
  return (
    <div className="mt-4 flex flex-col items-center md:items-start w-[350px] md:w-[516px] gap-[12px]">
      <p
        className="font-figtree font-medium tracking-normal text-[#ABABAB] text-[12px] leading-[16px] break-normal"
        style={{
          fontWeight: 500,
          fontStyle: 'normal',
          verticalAlign: 'middle',
        }}
      >
        By clicking &quot;Get Started&quot;, you agree with Terms and
        Conditions, Privacy Policy, Subscription Terms
      </p>

      <p
        className="font-figtree font-medium tracking-normal text-[#ABABAB] text-[10px] leading-[14px] mt-1 break-normal"
        style={{
          fontWeight: 500,
          fontStyle: 'normal',
          verticalAlign: 'middle',
        }}
      >
        Fametonic 2025 ©All Rights Reserved.
      </p>
    </div>
  );
}
