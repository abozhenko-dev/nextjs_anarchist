import { FC, ReactNode } from "react";

import Link from "next/link";

interface ButtonProps {
  type?: "tall" | "short";
  link?: boolean;
  href?: string;
  position?: "left" | "center" | "right";
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  // **Props
  const { type, link = false, href = "/", position = "left", children } = props;

  const getClassname = () => {
    let className = "button";

    switch (type) {
      case "short": {
        className += " button__type--short";
        break;
      }
      default: {
        className += " button__type--tall";
        break;
      }
    }

    switch (position) {
      case "center": {
        className += " button__position--center";
        break;
      }
      case "right": {
        className += " button__position--right";
        break;
      }
      default: {
        className += " button__position--left";
        break;
      }
    }

    return className;
  };

  if (link) {
    return (
      <Link href={href}>
        <a className={getClassname()}>{children}</a>
      </Link>
    );
  }

  return <button className={getClassname()}>{children}</button>;
};
