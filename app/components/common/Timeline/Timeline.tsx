import { FC, useEffect } from "react";



import { ITimelineEvent } from "@/types";



import { TimelineEvent } from "./TimelineEvent/TimelineEvent";


interface TimelineProps {
  events: ITimelineEvent[];
}

export const Timeline: FC<TimelineProps> = (props) => {
  // **Props
  const { events } = props;

  useEffect(() => {
    // Getting all items
    const items = document.querySelectorAll(".timeline__event");

    // Initialize observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Checking for intersection and element has already been scrolled, if yes, setting active class
          if (
            entry.isIntersecting ||
            entry.rootBounds!.y > entry.boundingClientRect?.y
          ) {
            entry.target.classList.add("timeline__event--active");
          } else {
            entry.target.classList.remove("timeline__event--active");
          }
        });
      },
      {
        rootMargin: "-50% 0% -50% 0%",
      }
    );

    // Made observer to observe
    items.forEach((item) => observer.observe(item));

    // Cleaning useEffect by disconnecting the observer
    return (): void => observer.disconnect();
  }, []);

  return (
    <div className="timeline">
      <div className="timeline__bar-outer">
        <div className="timeline__bar-inner"></div>
      </div>
      <ul>
        {events.map((event) => (
          <TimelineEvent key={event.title} event={event} />
        ))}
      </ul>
    </div>
  );
};