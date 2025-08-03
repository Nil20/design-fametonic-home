'use client';

import Image from 'next/image';

export default function Body() {
  return (
    <section className="relative overflow-hidden md:min-h-[805px] md:pt-[212px] flex flex-col md:flex-row md:ml-[211px] items-center justify-between px-6 md:px-16 py-12 md:gap-10 gap-6">
      {/* Desktop SVG Image */}
      <Image
        src="/assets/image.svg"
        alt="Hero Graphic"
        width={666}
        height={679}
        className="hidden md:block absolute top-[126px] right-[280px] z-0"
        priority
      />

      {/* Mobile SVG Image */}
      <div className="block md:hidden w-full flex justify-center mb-6 z-0">
        <Image
          src="/assets/image.svg"
          alt="Hero Graphic"
          width={0}
          height={0}
          className="w-[50%] h-[]"
          priority
        />
      </div>

      {/* Text content */}
      <div className="z-10">
        <h1 className="text-[25px] md:text-[35px] font-extrabold md:font-bold leading-[100%] text-center md:text-left w-[350px] md:w-[516px] h-[60px] md:h-[84px]">
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <p className="text-[25px] md:text-[35px] font-extrabold md:font-bold text-center md:text-left text-[#00E7F9] text-shadow-fametonic leading-[100%] z-10 w-[350px] md:w-[516px] h-[60px] md:h-[84px]">
          Discover your way to success with Fametonic:
        </p>

        <div className="w-[318px] md:w-[516px] md:h-[149px] opacity-100">
          <ul
            className="
              font-figtree
              text-[16px]
              leading-[22px]
              tracking-normal
              align-middle
              list-disc
              pl-5
              gap-[13px]

              md:font-[600]
              md:font-semibold

              font-normal md:font-semibold
              md:leading-[22px]
              md:gap-[13px]

              md:font-semibold
              md:leading-[22px]
              
              md:flex
              flex-col
            "
            style={{ fontStyle: 'normal' }}
          >
            {/* MOBILE: plain text lines, DESKTOP: bullet list */}
            <div className="flex flex-col gap-[13px] text-[16px] leading-[22px] font-normal md:font-semibold font-figtree">
              <p className="md:hidden">
                ✨ Start growing your influence right away—no waiting required
              </p>
              <p className="md:hidden">
                ✨ Create viral TikToks and Reels step by step
              </p>
              <p className="md:hidden">
                ✨ Use a Personal AI Worker to boost your content
              </p>
              <p className="md:hidden">
                ✨ Learn from expert-led courses for aspiring influencers
              </p>

              <ul className="hidden md:flex flex-col gap-[13px] list-disc pl-5">
                <li>
                  ✨ Start growing your influence right away—no waiting required
                </li>
                <li>✨ Create viral TikToks and Reels step by step</li>
                <li>✨ Use a Personal AI Worker to boost your content</li>
                <li>
                  ✨ Learn from expert-led courses for aspiring influencers
                </li>
              </ul>
            </div>

            <button
              onClick={() => alert('Get Started clicked!')}
              className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
            >
              GET STARTED
            </button>
          </ul>
          <p className="text-sm text-gray-400">
            1-minute quiz for personalized Insights
          </p>
        </div>
      </div>

      {/* Placeholder for right-side flex space */}
      <div className="md:w-1/2 w-full z-10" />
    </section>
  );
}
