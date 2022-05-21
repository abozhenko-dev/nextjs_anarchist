import Image from "next/image";

import { Button, Container, Typography } from "@/ui";

import { BGMarquee } from "./BGMarquee/BGMarquee";
import { BGStatic } from "./BGStatic/BGStatic";

export const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__wrapper">
          <div className="hero__card">
            <Image
              src="/hero/static-bg-mobile.png"
              width={209}
              height={333}
              objectFit="cover"
              quality={30}
              priority
              draggable={false}
            />
          </div>
          <Typography tag="h1" type="h1" isCenteredOnMobile>
            Join the Revolution
          </Typography>
          <div className="hero__subtitle">
            1,720 Terra NFTs fighting for financial freedom and autonomy for all.
          </div>
          <Button link href="/agents">
            See Collection
          </Button>
        </div>
      </Container>
      <BGStatic />
      <BGMarquee />
    </section>
  );
};
