import { ElementType, FC, HTMLAttributes, ReactNode, useCallback } from "react";

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  type?: "h1" | "h2" | "h3";
  tag?: ElementType;
  children?: ReactNode;
  isCenteredOnMobile?: boolean;
}

export const Typography: FC<TypographyProps> = (props) => {
  // **Props
  const {
    tag: Tag = "div",
    type,
    children,
    isCenteredOnMobile = false,
  } = props;

  const getClassname = useCallback(() => {
    let className = "typography";

    switch (type) {
      case "h1": {
        className += " typography__type--h1";
        break;
      }
      case "h2": {
        className += " typography__type--h2";
        break;
      }
      case "h3": {
        className += " typography__type--h3";
        break;
      }
      default: {
        className += " typography__type--default";
        break;
      }
    }

    if (isCenteredOnMobile) {
      className += " typography__mobile--centered";
    }

    return className;
  }, [type]);

  return <Tag className={getClassname()}>{children}</Tag>;
};
