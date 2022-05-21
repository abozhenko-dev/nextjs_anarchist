import { FC, ReactNode } from "react";

import { Container, Typography } from "@/ui";

interface AgentsProviderProps {
  children?: ReactNode;
}

export const AgentsProvider: FC<AgentsProviderProps> = (props) => {
  // **Props
  const { children } = props;

  return (
    <section className="agents">
      <Container>
        <div className="agents__top">
          <Typography tag="h1" type="h1">
            The Agents
          </Typography>
          <div className="agents__subtitle">
            Anarchists & Renegades on #TerraLuna
          </div>
        </div>
        {children}
      </Container>
    </section>
  );
};
