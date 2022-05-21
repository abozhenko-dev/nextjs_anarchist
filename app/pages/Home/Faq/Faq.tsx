import { Accordion } from "@/common";

import { Container, Typography } from "@/ui";

import { faq } from "@/constants";

export const Faq = () => {
  return (
    <section className="faq padding__top--20">
      <Container>
        <div className="faq__wrapper">
          <Typography tag="h2" type="h2" isCenteredOnMobile>
            FA<span>Q</span>
          </Typography>
          <Accordion items={faq} />
        </div>
      </Container>
    </section>
  );
};
