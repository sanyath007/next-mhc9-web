"use client"

import React from 'react'
import SwiperCore  from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'

/** Import Swiper styles */
import 'swiper/swiper-bundle.css'
import logos from '../data/logos.json'

const SlideLogos = () => {
    SwiperCore.use([Autoplay]);

    return (
        <div className="h-full">
            <Swiper
                modules={[FreeMode]}
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 2000
                }}
            >
                {logos.map(slide => (
                    <SwiperSlide
                        key={slide.id}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <div className="w-full flex justify-center">
                            <img src={slide.imgUrl} alt="logo-pic" className="h-[100px] object-contain" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SlideLogos