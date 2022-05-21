import Link from "next/link";

import { Timeline } from "@/common";

import { Container, Typography } from "@/ui";

import { roadmapEvents } from "@/constants";

export const Roadmap = () => {
  return (
    <section className="roadmap">
      <Container>
        <Typography tag="h2" type="h2" isCenteredOnMobile>
          Roadmap
        </Typography>
      </Container>
      <div className="roadmap__wrapper">
        <Container>
          <Timeline events={roadmapEvents} />
        </Container>
      </div>
      <Container>
        <Link href="/roadmap">
          <a className="roadmap__btn">
            <span>More information</span>
          </a>
        </Link>
      </Container>
    </section>
  );
};
