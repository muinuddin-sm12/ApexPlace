import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="max-w-[1536px] mx-auto px-4 md:px-10 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="slide slide1 h-[20vh] md:h-[35vh] lg:h-[50vh]">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-white text-2xl lg:text-5xl font-semibold md:font-bold leading-6 md:leading-8 mb-3 md:mb-0 w-[90%] lg:w-[60%] mx-auto"
            >
              Invest in Your Future <br /> with Our Real Estate Deals.
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-white hidden md:block w-[90%] lg:w-[60%] mx-auto text-sm md:text-base leading-5 py-2 md:py-4"
            >
              At our platform, we prioritize your financial well-being with
              utmost dedication. Rest assured, every real estate deal is
              meticulously chosen to ensure your investment journey is both
              secure and prosperous.
            </p>
            <div className=" w-[90%] lg:w-[60%] mx-auto">
              <button className="btn animate__animated animate__pulse bg-sky-500 border-none text-white font-semibold text-lg">
                Expore
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2 h-[20vh] md:h-[35vh] lg:h-[50vh]">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-white text-2xl lg:text-5xl font-semibold md:font-bold leading-6 md:leading-8 mb-3 md:mb-0 w-[90%] lg:w-[60%] mx-auto"
            >
              Invest in Your Future <br /> with Our Real Estate Deals.
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-white hidden md:block w-[90%] lg:w-[60%] mx-auto text-sm md:text-base leading-5 py-2 md:py-4"
            >
              At our platform, we prioritize your financial well-being with
              utmost dedication. Rest assured, every real estate deal is
              meticulously chosen to ensure your investment journey is both
              secure and prosperous.
            </p>
            <div className=" w-[90%] lg:w-[60%] mx-auto">
              <button className="btn animate__animated animate__pulse bg-sky-500 border-none text-white font-semibold text-lg">
                Expore
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3 h-[20vh] md:h-[35vh] lg:h-[50vh]">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-white text-2xl lg:text-5xl font-semibold md:font-bold leading-6 md:leading-8 mb-3 md:mb-0 w-[90%] lg:w-[60%] mx-auto"
            >
              Invest in Your Future <br /> with Our Real Estate Deals.
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-white hidden md:block w-[90%] lg:w-[60%] mx-auto text-sm md:text-base leading-5 py-2 md:py-4"
            >
              At our platform, we prioritize your financial well-being with
              utmost dedication. Rest assured, every real estate deal is
              meticulously chosen to ensure your investment journey is both
              secure and prosperous.
            </p>
            <div className=" w-[90%] lg:w-[60%] mx-auto">
              <button className="btn animate__animated animate__pulse bg-sky-500 border-none text-white font-semibold text-lg">
                Expore
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
