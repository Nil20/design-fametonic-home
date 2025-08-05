'use client';

import Image from 'next/image';

export default function Body() {
  return (
    <section className="relative overflow-hidden md:min-h-[805px] md:pt-[212px] flex flex-col md:flex-row md:ml-[211px] items-center justify-between px-6 md:px-16 py-12 md:gap-10 gap-6">
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

      <div className="flex flex-col top-[418px] md:top-[212px] h-[511px] w-[516px] gap-[30px] z-10 flex-col">
        <div className="flex flex-col">
          <h1 className="text-[25px] md:text-[35px] font-extrabold md:font-bold  leading-[40px] text-left w-[350px] md:w-[516px] h-[60px] md:h-[84px]">
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          <p className="text-[25px] md:text-[35px] font-extrabold md:font-bold text-left text-[#00E7F9] text-shadow-fametonic leading-[40px] z-10 w-[350px] md:w-[516px] h-[60px] md:h-[84px]">
            Discover your way to success with Fametonic:
          </p>
        </div>

        <div className="w-[350px] md:w-[516px] md:h-[149px] opacity-100">
          <ul className="font-figtree text-[16px] leading-[22px] tracking-normal font-semibold flex flex-col gap-[13px]">
            <li className="flex items-start">
              <span className="mr-2">✨</span>
              <span>
                Start growing your influence right away—no waiting required
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✨</span>
              <span>
                Create viral TikToks and Reels step by step with easy-to-follow
                lessons
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✨</span>
              <span>Use a Personal AI Worker to boost your content</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✨</span>
              <span>
                Learn from expert-led courses designed for aspiring influencers
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col top-[418px] md:top-[212px] h-[511px] w-[516px] gap-[30px] z-10 flex-col">
          <button
            onClick={() => alert('Get Started clicked!')}
            className="w-[313px] h-[40px] bg-[#FC004E] text-white font-figtree text-[20px] font-bold leading-[100%] tracking-normal rounded-[10px] px-[40px] py-[8px] flex items-center justify-center"
          >
            GET STARTED
          </button>

          <div className="w-[313px] h-[16px] text-center mt-2">
            <p className="font-figtree font-normal text-[12px] leading-[16px] tracking-normal text-gray-400">
              1-minute quiz for personalized Insights
            </p>
          </div>
          <div className="mt-4 flex flex-col items-start w-[516px]">
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
        </div>
      </div>

      <div className="md:w-1/2 w-full z-10" />
    </section>
  );
}
