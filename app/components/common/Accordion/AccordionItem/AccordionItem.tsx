import { FC, useEffect, useRef, useState } from "react";

import { IFaq } from "@/types";

export const AccordionItem: FC<{ item: IFaq }> = (props) => {
  // **Props
  const { item } = props;

  // **Local state
  const [isActive, setIsActive] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);

  // **Ref
  const bodyRef = useRef<HTMLDivElement>(null);

  const toggleHandler = () => {
    setIsActive(!isActive);

    if (bodyRef.current?.scrollHeight) {
      setMaxHeight(!isActive ? bodyRef.current?.scrollHeight : 0);
    }
  };

  return (
    <li
      className={
        isActive ? "accordion__item accordion__item--active" : "accordion__item"
      }
    >
      <button className="accordion__item-head" onClick={toggleHandler}>
        {item.title}
      </button>
      <div ref={bodyRef} className="accordion__item-body" style={{ maxHeight }}>
        {item.body.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </li>
  );
};
