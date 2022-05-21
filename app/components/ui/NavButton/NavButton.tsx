import { FC, HTMLAttributes, ReactNode } from "react";

import Link from "next/link";

interface NavButtonProps extends HTMLAttributes<HTMLButtonElement> {
  arrowColor?: string;
  direction?: "left" | "right" | "bottom" | "top";
  text?: string;
  link?: boolean;
  href?: string;
  children?: ReactNode;
}

export const NavButton: FC<NavButtonProps> = (props) => {
  // **Props
  const {
    arrowColor = "#999999",
    direction = "left",
    children,
    link = false,
    href = "",
    text = "",
    ...rest
  } = props;

  const getClassname = () => {
    let className = "nav-button";

    switch (direction) {
      case "bottom": {
        className += " nav-button__direction--bottom";
        break;
      }
      case "right": {
        className += " nav-button__direction--right";
        break;
      }
      case "top": {
        className += " nav-button__direction--top";
        break;
      }
      default: {
        className += " nav-button__direction--left";
        break;
      }
    }

    return className;
  };

  if (link) {
    return (
      <Link href={href}>
        <a className={getClassname()}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.37996 3.45326C6.25329 3.45326 6.12663 3.49992 6.02663 3.59992L1.97996 7.64659C1.78663 7.83992 1.78663 8.15992 1.97996 8.35326L6.02663 12.3999C6.21996 12.5933 6.53996 12.5933 6.73329 12.3999C6.92663 12.2066 6.92663 11.8866 6.73329 11.6933L3.03996 7.99992L6.73329 4.30659C6.92663 4.11326 6.92663 3.79326 6.73329 3.59992C6.63996 3.49992 6.50663 3.45326 6.37996 3.45326Z"
              fill={arrowColor}
            />
            <path
              d="M13.6667 7.5L2.44666 7.5C2.17332 7.5 1.94666 7.72667 1.94666 8C1.94666 8.27333 2.17332 8.5 2.44666 8.5L13.6667 8.5C13.94 8.5 14.1667 8.27333 14.1667 8C14.1667 7.72667 13.94 7.5 13.6667 7.5Z"
              fill={arrowColor}
            />
          </svg>
          {text && <span>{text}</span>}
        </a>
      </Link>
    );
  }

  return (
    <button className={getClassname()} {...rest}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.37996 3.45326C6.25329 3.45326 6.12663 3.49992 6.02663 3.59992L1.97996 7.64659C1.78663 7.83992 1.78663 8.15992 1.97996 8.35326L6.02663 12.3999C6.21996 12.5933 6.53996 12.5933 6.73329 12.3999C6.92663 12.2066 6.92663 11.8866 6.73329 11.6933L3.03996 7.99992L6.73329 4.30659C6.92663 4.11326 6.92663 3.79326 6.73329 3.59992C6.63996 3.49992 6.50663 3.45326 6.37996 3.45326Z"
          fill={arrowColor}
        />
        <path
          d="M13.6667 7.5L2.44666 7.5C2.17332 7.5 1.94666 7.72667 1.94666 8C1.94666 8.27333 2.17332 8.5 2.44666 8.5L13.6667 8.5C13.94 8.5 14.1667 8.27333 14.1667 8C14.1667 7.72667 13.94 7.5 13.6667 7.5Z"
          fill={arrowColor}
        />
      </svg>
      {text && <span>{text}</span>}
    </button>
  );
};
