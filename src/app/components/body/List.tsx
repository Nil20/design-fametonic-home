'use client';

export default function List() {
  return (
    <div className="w-[350px] md:w-[516px] md:h-[149px] opacity-100">
      <ul className="font-figtree text-[16px] leading-[22px] tracking-normal font-medium md:font-semibold flex flex-col gap-[13px] align-middle">
        <li className="flex items-start">
          <span className="mr-2">✨</span>
          <span className="font-medium md:font-semibold">
            Start growing your influence right away—no waiting required
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">✨</span>
          <span className="font-medium md:font-semibold">
            Create viral TikToks and Reels step by step with easy-to-follow
            lessons
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">✨</span>
          <span className="font-medium md:font-semibold">
            Use a Personal AI Worker to boost your content
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2">✨</span>
          <span className="font-medium md:font-semibold">
            Learn from expert-led courses designed for aspiring influencers
          </span>
        </li>
      </ul>
    </div>
  );
}
