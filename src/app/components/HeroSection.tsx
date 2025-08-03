'use client';

export default function HeroSection() {
  return (
    <section className="pt-[212px] flex flex-col md:flex-row ml-[211px] items-center justify-between px-6 md:px-16 py-12 gap-10">
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Want to Turn Social Media Into a <br />
          <span className="text-cyan-400">Profitable Career?</span>
        </h1>
        <p className="text-xl text-cyan-300 font-semibold">
          Discover your way to success with Fametonic:
        </p>
        <ul className="space-y-2 text-lg">
          <li>
            ✨ Start growing your influence right away—no waiting required
          </li>
          <li>✨ Create viral TikToks and Reels step by step</li>
          <li>✨ Use a Personal AI Worker to boost your content</li>
          <li>✨ Learn from expert-led courses for aspiring influencers</li>
        </ul>
        <button
          onClick={() => alert('Get Started clicked!')}
          className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
        >
          GET STARTED
        </button>
        <p className="text-sm text-gray-400">
          1-minute quiz for personalized Insights
        </p>
      </div>
      <div className="md:w-1/2 w-full">
        {/* Placeholder for image */}
        <div className="w-full aspect-[16/9] bg-gradient-to-tr from-cyan-500 to-pink-500 rounded-3xl shadow-lg" />
      </div>
    </section>
  );
}
