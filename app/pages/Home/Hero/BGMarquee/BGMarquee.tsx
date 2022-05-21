import Image from "next/image";

import { IMarquee } from "@/types";

import { marquee } from "@/constants";

export const BGMarquee = () => {
  const getImageClassname = (item: IMarquee) => {
    let className = "hero__bg-marquee-image";

    if (item.hideImage.mobile) {
      className += " hero__bg-marquee-image--hide-mobile";
    }

    if (item.hideImage.tablet) {
      className += " hero__bg-marquee-image--hide-tablet";
    }

    return className;
  };

  return (
    <div className="hero__bg-marquee">
      {marquee.map((line, index) => (
        <div
          key={`line-${index}-${line[index].imageSrc}`}
          className="hero__bg-marquee-line"
        >
          <div className="hero__bg-marquee-item">
            {line.map((item, index) => (
              <div
                key={`item-1-${index}-${item.imageSrc}`}
                className={getImageClassname(item)}
              >
                <Image
                  src={item.imageSrc}
                  quality={10}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center top"
                  priority
                  draggable={false}
                />
              </div>
            ))}
          </div>
          <div className="hero__bg-marquee-item">
            {line.map((item) => (
              <div
                key={`item-2-${index}-${item.imageSrc}`}
                className={getImageClassname(item)}
              >
                <Image
                  src={item.imageSrc}
                  quality={10}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center top"
                  priority
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
