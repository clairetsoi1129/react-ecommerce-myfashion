import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

import Item from "./Item";

export const SwiperSlider = ({items}) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        width="60%"
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >

        {items?.length > 0 && items.map((item, i) => (    

     
            // <SwiperSlide key={`sw${item.name}-${i}`}>
                <Item key={`${item.name}-${i}`} item={item} showAddToBag={false} />
            // </SwiperSlide> 

        ))}
      </Swiper>
    </>
  );
}
