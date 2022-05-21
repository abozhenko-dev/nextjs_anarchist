import Image from "next/image";
import Link from "next/link";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { collection } from "@/constants";

import { shimmer } from "@/helpers";

import { Navigation } from "./Navigation/Navigation";

export const Slider = () => {
  return (
    <div className="collection__slider">
      <Swiper
        modules={[Autoplay]}
        speed={1000}
        autoplay={{
          delay: 5000,
          waitForTransition: false,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          1540: {
            spaceBetween: 40,
            slidesPerView: 4.5,
          },
          767: { spaceBetween: 20, slidesPerView: 3.5 },
          576: { spaceBetween: 15, slidesPerView: 2.5 },
          320: { spaceBetween: 15, slidesPerView: 1.5 },
        }}
      >
        <Navigation />
        {collection.map((slide) => (
          <SwiperSlide key={slide.agentId}>
            <Link href={`/agents/${slide.agentId}`}>
              <a>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${slide.image}`}
                  width={376}
                  height={452}
                  placeholder="blur"
                  blurDataURL={shimmer(376, 452)}
                  layout="responsive"
                  quality={55}
                  objectFit="cover"
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
