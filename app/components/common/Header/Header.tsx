import { useEffect, useState } from "react";

import { Burger, Container, Logo } from "@/ui";

import { Networks } from "../Networks/Networks";

import { Navigation } from "./Navigation/Navigation";
import { Wallets } from "./Wallets/Wallets";

export const Header = () => {
  // **Local state
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;

    if (isMenuOpened) {
      body.classList.add("lock");
    } else {
      body.classList.remove("lock");
    }
  }, [isMenuOpened]);

  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <Logo />
          <div
            className={
              isMenuOpened
                ? "header__content header__content--active"
                : "header__content"
            }
          >
            <Navigation menuHandler={setIsMenuOpened} />
            <Networks showTitle={false} />
          </div>
          <Wallets />
          <Burger isOpened={isMenuOpened} menuHandler={setIsMenuOpened} />
        </div>
      </Container>
    </header>
  );
};
