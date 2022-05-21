import { FC } from "react";

interface BurgerProps {
  isOpened: boolean;
  menuHandler: (value: boolean) => void;
}

export const Burger: FC<BurgerProps> = (props) => {
  // **Props
  const { isOpened, menuHandler } = props;

  const toggleHandler = () => {
    menuHandler(!isOpened);
  };

  return (
    <button
      className={isOpened ? "burger burger--active" : "burger"}
      onClick={toggleHandler}
      aria-label={isOpened ? "Close menu" : "Open menu"}
      aria-expanded={isOpened ? "true" : "false"}
    >
      <span></span>
    </button>
  );
};
