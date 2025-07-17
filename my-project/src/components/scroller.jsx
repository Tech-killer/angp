import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  {
    src: "Scroll1.jpeg",
  },
  {
    src: "Scroll2.png",
  },
  {
    src: "Scroll3.png",
  },
    {
    src: "Scroll4.png",
  },
    {
    src: "Scroll5.png",
  },
    {
    src: "Scroll6.png",
  },
    {
    src: "Scroll7.png",
  },
    {
    src: "Scroll8.png",
  },
    {
    src: "Scroll9.png",
  },
    {
    src: "Scroll10.png",
  },
    {
    src: "Scroll11.png",
  },
  {
    src: "Scroll12.png",
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
        slidesPerView={3}
        spaceBetween={2}
        className="w-full h-[300px]"
      >
        {slides.map((img, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-full">
            <img
              src={img.src}
              alt={img.alt || `Slide ${idx + 1}`}
              className="w-full h-full object-contain bg-black"
              style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#000' }}
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