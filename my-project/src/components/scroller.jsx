import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    alt: "Mountain Lake",
    title: "Mountain Lake",
    description: "A tranquil mountain lake at sunrise."
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1000&q=80",
    alt: "Desert Road",
    title: "Desert Road",
    description: "A long road through the desert."
  },
  {
    src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1000&q=80",
    alt: "Forest Waterfall",
    title: "Forest Waterfall",
    description: "A beautiful waterfall in a lush forest."
  },
  {
    src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1000&q=80",
    alt: "City Night",
    title: "City at Night",
    description: "A vibrant city skyline at night."
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1000&q=80",
    alt: "Tropical Beach",
    title: "Tropical Beach",
    description: "A pristine tropical beach with turquoise water."
  }
];

const scrollingTexts = [
  "Breaking News: New features coming soon!",
  "Special offer: 50% discount for early birds",
  "Join our community today for exclusive benefits",
  "Upcoming event: Annual developer conference",
  "Latest update: Version 2.0 released"
];

const Scroller = () => {
  // Duplicate slides to make loop work properly
  const slides = [...images, ...images];
  
  return (
    <div className="w-full mx-auto relative overflow-hidden">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        loopAdditionalSlides={images.length}
        className="w-full h-[300px]"
      >
        {slides.map((img, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-full">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
              <div className="max-w-2xl mx-auto">
                {img.title && (
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                    {img.title}
                  </h3>
                )}
                {img.description && (
                  <p className="text-sm md:text-base opacity-90">
                    {img.description}
                  </p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !left-2 !text-white !w-10 !h-10 after:!text-xl"></div>
        <div className="swiper-button-next !right-2 !text-white !w-10 !h-10 after:!text-xl"></div>
      </Swiper>
      
      {/* Continuous Scrolling Text - perfectly attached */}
      <div className="w-full bg-gray-900 text-white overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-3">
          {[...scrollingTexts, ...scrollingTexts].map((text, index) => (
            <span key={index} className="mx-8 inline-block">
              {text}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee ${scrollingTexts.length * 5}s linear infinite;
        }
        .swiper-button-prev,
        .swiper-button-next {
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Scroller;