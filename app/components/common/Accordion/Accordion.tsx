import { FC } from "react";

import { IFaq } from "@/types";

import { AccordionItem } from "./AccordionItem/AccordionItem";

interface AccordionProps {
  items: IFaq[];
}

export const Accordion: FC<AccordionProps> = (props) => {
  // **Props
  const { items } = props;

  return (
    <ul className="accordion">
      {items.map((item) => (
        <AccordionItem key={item.title} item={item} />
      ))}
    </ul>
  );
};
