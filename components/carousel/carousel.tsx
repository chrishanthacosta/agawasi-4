"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import React from 'react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Image from "next/image";

const gallery = [{ id: 1, imgUrl: "/aw-1.jpg" }, { id: 2, imgUrl: "/aw-2.jpg" }]


const Carousel = () => {
    return (
        <div className="  sm:w-[40%]   w-full rounded-md border-2 ">
      <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          // pagination={{ type:"fraction" }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        //   className=" lg:w-[40%]"
        //   className="container mx-auto sm:w-full sm:h-full "
        //   className="container mx-auto h-full"
        //   className="h-max flex justify-center items-center"
          autoplay={{ delay: 2000 }}
          speed={2000}
        //   width={1000}
                // height={665}
                centeredSlides={true}
      >

          {gallery?.map((item) => (
              <SwiperSlide
                  key={`product-gallery-${item.id}`}
                  className="container mx-auto rounded-md"
              >
                  <Image
                      src={item.imgUrl}
                      alt={`Product gallery ${item.id}`}
                      width={720}
                      height={494}
                      className="block sm:w-full sm:h-full object-fit rounded-md"
                  />
              </SwiperSlide>
          ))}
          {/* // <SwiperSlide>Slide 1</SwiperSlide>
              // <SwiperSlide>Slide 2</SwiperSlide>
              // <SwiperSlide>Slide 3</SwiperSlide>
              // <SwiperSlide>Slide 4</SwiperSlide> */}

            </Swiper>
            </div>
  )
}

export default Carousel