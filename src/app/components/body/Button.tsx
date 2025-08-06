'use client';

export default function Button() {
  return (
    <div className="flex flex-col gap-[10px] items-center md:items-start">
      <button
        onClick={() => alert('Get Started clicked!')}
        className="w-[313px] h-[40px] bg-[#FC004E] text-white font-figtree text-[20px] button-shadow-fametonic font-bold leading-[100%] tracking-normal rounded-[10px] px-[40px] py-[8px] flex items-center justify-center"
      >
        GET STARTED
      </button>

      <div className="w-[313px] h-[16px] text-center">
        <p
          style={{
            fontWeight: 400,
            fontStyle: 'normal',
            verticalAlign: 'middle',
          }}
          className="font-figtree font-normal text-[12px] leading-[16px] tracking-normal"
        >
          1-minute quiz for personalized Insights
        </p>
      </div>
    </div>
  );
}
