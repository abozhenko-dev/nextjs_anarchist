import { useSwiper } from "swiper/react";

import { NavButton } from "@/ui";

export const Navigation = () => {
  const swiper = useSwiper();

  return (
    <div className="collection__slider-navigation">
      <NavButton
        direction="left"
        aria-label="Slide to previous slide"
        onClick={() => swiper.slidePrev()}
      />
      <NavButton
        direction="right"
        aria-label="Slide to next slide"
        onClick={() => swiper.slideNext()}
      />
    </div>
  );
};
