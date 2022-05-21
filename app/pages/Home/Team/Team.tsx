import { Container, Typography } from "@/ui";

import { team } from "@/constants";

import { TeamItem } from "./TeamItem/TeamItem";

export const Team = () => {
  return (
    <section id="team" className="team padding__top--20">
      <Container>
        <Typography tag="h2" type="h2" isCenteredOnMobile>
          Our team
        </Typography>
        <ul className="team__list">
          {team.map((person) => (
            <TeamItem key={person.name} person={person} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
