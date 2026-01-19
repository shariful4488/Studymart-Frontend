import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523240715639-963c9a0b4740?q=80&w=2070",
      title: "Find Your Ideal \n Study Partner",
      description: "Don't study alone! Connect with peers who share your goals and excel together. Collaboration is the key to mastering complex subjects.",
      btnText: "Get Started",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071",
      title: "Collaborate & \n Learn Better",
      description: "Join study groups, share resources, and crack complex topics with real-time peer support. Learning is more fun when done together.",
      btnText: "Find Partners",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
      title: "Any Subject, \n Any Time",
      description: "From programming to physics, find partners across various disciplines worldwide. Flexibility and accessibility at your fingertips.",
      btnText: "Explore Now",
    },
  ];

  return (
    <div className="w-full h-[500px] md:h-[650px] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark Gradient Overlay for high contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

              {/* Content Container */}
              <div className="relative z-10 container mx-auto px-6 md:px-12">
                <div className="max-w-3xl animate-in fade-in slide-in-from-left-12 duration-1000">
                  
                  {/* Title with extra line-height and spacing */}
                  <h2 className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 whitespace-pre-line">
                    {slide.title}
                  </h2>

                  {/* Description with improved line-height (relaxed) and width control */}
                  <p className="text-base md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl font-light">
                    {slide.description}
                  </p>

                  {/* Buttons with hover scaling */}
                  <div className="flex flex-wrap gap-5">
                    <button className="btn bg-indigo-600 hover:bg-indigo-700 border-none text-white px-10 h-14 rounded-full font-bold shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95">
                      {slide.btnText}
                    </button>
                    <button className="btn btn-outline border-white/50 text-white hover:bg-white hover:text-indigo-600 px-10 h-14 rounded-full font-bold hidden sm:flex backdrop-blur-sm transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Styles for better navigation visibility */}
      <style>{`
        .swiper-button-next, .swiper-button-prev { 
            color: white !important; 
            background: rgba(255, 255, 255, 0.1);
            width: 50px !important;
            height: 50px !important;
            border-radius: 50%;
            backdrop-filter: blur(5px);
            transform: scale(0.5);
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
            background: rgba(79, 70, 229, 0.8);
        }
        .swiper-pagination-bullet { background: rgba(255,255,255,0.5) !important; opacity: 1; }
        .swiper-pagination-bullet-active { background: #4f46e5 !important; width: 25px; border-radius: 10px; transition: width 0.3s; }
      `}</style>
    </div>
  );
};

export default Banner;