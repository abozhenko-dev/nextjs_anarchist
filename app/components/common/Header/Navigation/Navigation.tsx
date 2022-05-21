import { FC } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { navigation } from "@/constants";

interface NavigationProps {
  menuHandler: (value: boolean) => void;
}

export const Navigation: FC<NavigationProps> = (props) => {
  // **Props
  const { menuHandler } = props;
  const { asPath } = useRouter();

  const clickHandler = () => {
    menuHandler(false);
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigation.map((navItem) => (
          <li
            key={navItem.route}
            className={
              asPath === navItem.route
                ? "navigation__item navigation__item--active"
                : "navigation__item"
            }
          >
            <Link href={navItem.route}>
              <a onClick={clickHandler}>{navItem.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
