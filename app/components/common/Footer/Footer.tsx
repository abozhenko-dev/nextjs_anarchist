import { Container, Logo, NavButton } from "@/ui";

import { Networks } from "../Networks/Networks";

export const Footer = () => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrapper">
          <div className="footer__logo">
            <Logo size="small" />
            <p className="footer__credentials">© 2022 Anarchists on Terra</p>
          </div>
          <Networks />
          <div className="footer__action">
            <div className="footer__action-text">Back to top</div>
            <NavButton direction="top" onClick={scrollToTop} />
          </div>
        </div>
      </Container>
    </footer>
  );
};
