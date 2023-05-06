
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination } from "swiper";


const Testimonial = () => {
    return (
        <>

            <section id="testimonial" className="h-[75vh] md:h-[50vh] w-full flex justify-center items-center px-3 md:px-0">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="review-item max-w-md w-full bg-white drop-shadow-lg py-3 px-6 justify-center rounded-xl flex flex-col items-center">
                            <div className="review-pic -mt-20 mb-8">
                                <img src="images/Ellipse.png" alt="" />
                            </div>
                            <h2 className="text-2xl font-bold text-[#2D3150]">Rocky Dixon</h2>
                            <p className="text-xl text-[#3C405F] mt-5">“The features on monday.com make our team work faster and easier to organize”</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="review-item max-w-md w-full bg-white drop-shadow-lg py-3 px-6 justify-center rounded-xl flex flex-col items-center">
                            <div className="review-pic -mt-20 mb-8">
                                <img src="images/Ellipse.png" alt="" />
                            </div>
                            <h2 className="text-2xl font-bold text-[#2D3150]">Rocky Dixon</h2>
                            <p className="text-xl text-[#3C405F] mt-5">“The features on monday.com make our team work faster and easier to organize”</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="review-item max-w-md w-full bg-white drop-shadow-lg py-3 px-6 justify-center rounded-xl flex flex-col items-center">
                            <div className="review-pic -mt-20 mb-8">
                                <img src="images/Ellipse.png" alt="" />
                            </div>
                            <h2 className="text-2xl font-bold text-[#2D3150]">Rocky Dixon</h2>
                            <p className="text-xl text-[#3C405F] mt-5">“The features on monday.com make our team work faster and easier to organize”</p>
                        </div>
                    </SwiperSlide>

                </Swiper>



            </section>
        </>
    );
};

export default Testimonial;