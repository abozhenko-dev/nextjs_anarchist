import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { ITimelineEvent } from "@/types";
import { shimmer } from "@/helpers";

interface TimelineEventProps {
  event: ITimelineEvent;
}

export const TimelineEvent: FC<TimelineEventProps> = (props) => {
  // **Props
  const { event } = props;

  return (
    <li className="timeline__event">
      <div className="timeline__event-date">{event.date}</div>
      <div className="timeline__event-content">
        <div className="timeline__event-inner">
          <h3 className="timeline__event-title">{event.title}</h3>
          <div className="timeline__event-date">{event.date}</div>
          {event.subtitle && (
            <div className="timeline__event-subtitle">{event.subtitle}</div>
          )}
          {event.image && (
            <div className="timeline__event-image">
              <Image
                src={event.image.src}
                width={event.image.width}
                height={event.image.height}
                layout="responsive"
                draggable={false}
                quality={30}
                placeholder="blur"
                blurDataURL={shimmer(event.image.width, event.image.height)}
              />
            </div>
          )}
        </div>
      </div>
    </li>
  );
};
