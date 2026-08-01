import { useState, useEffect } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=420&fit=crop",
    overlay:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=420&fit=crop",
    overlay:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&h=60&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=420&fit=crop",
    overlay:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop",
  },
];

export default function PhoneMockup() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-[340px] h-[400px] mt-6">
      {/* Left background card */}
      <div className="absolute left-0 top-10 w-[200px] h-[280px] p-[6px] bg-white rounded-[16px] shadow-lg transform -rotate-6 z-0">
        <div className="w-full h-full rounded-[12px] overflow-hidden bg-gray-100">
          <img
            src={slides[(currentSlide + 1) % slides.length].image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right background card */}
      <div className="absolute right-0 top-6 w-[200px] h-[280px] p-[6px] bg-white rounded-[16px] shadow-lg transform rotate-6 z-0">
        <div className="w-full h-full rounded-[12px] overflow-hidden bg-gray-100">
          <img
            src={slides[(currentSlide + 2) % slides.length].image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main center card */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[240px] h-[320px] p-[6px] bg-white rounded-[16px] shadow-xl z-10">
        <div className="relative w-full h-full rounded-[12px] overflow-hidden bg-gray-100">
          <img
            src={slide.image}
            alt="Instagram post"
            className="w-full h-full object-cover"
          />

          {/* Floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top reaction bar */}
            <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 shadow-md">
              <div className="flex -space-x-1">
                <img
                  src={slide.overlay}
                  alt=""
                  className="w-4 h-4 rounded-full border border-white"
                />
                <img
                  src={slides[(currentSlide + 1) % slides.length].overlay}
                  alt=""
                  className="w-4 h-4 rounded-full border border-white"
                />
                <img
                  src={slides[(currentSlide + 2) % slides.length].overlay}
                  alt=""
                  className="w-4 h-4 rounded-full border border-white"
                />
              </div>
              <span className="text-[10px]">🔥</span>
            </div>

            {/* Heart */}
            <div className="absolute top-14 left-2">
              <div className="w-7 h-7 bg-gradient-to-br from-[#ff6b9d] to-[#e91e63] rounded-full flex items-center justify-center shadow-md">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>

            {/* Star with checkmark */}
            <div className="absolute top-10 right-2">
              <div className="w-8 h-8 bg-[#00C853] rounded-full flex items-center justify-center shadow-md">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>

            {/* Bottom profile ring */}
            <div className="absolute bottom-14 right-2">
              <div className="w-9 h-9 rounded-full overflow-hidden border-[2px] border-white shadow-md">
                <img
                  src={slide.overlay}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom story bar */}
            <div className="absolute bottom-4 left-2 right-12 flex items-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-md">
                <div className="w-5 h-5 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={slide.overlay}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-0.5 w-8 bg-gray-300 rounded-full" />
              </div>
            </div>

            {/* Bottom heart */}
            <div className="absolute bottom-4 right-3">
              <svg
                className="w-4 h-4 text-white drop-shadow-md"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 rounded-full transition-all duration-300 ${
              idx === currentSlide ? "w-4 bg-[#8E8E8E]" : "w-1 bg-[#DBDBDB]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
