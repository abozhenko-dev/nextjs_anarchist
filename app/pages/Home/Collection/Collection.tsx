import { Button, Container, Typography } from "@/ui";

import { Slider } from "./Slider/Slider";

export const Collection = () => {
  return (
    <section className="collection">
      <Container>
        <div className="collection__wrapper">
          <Typography tag="h2" type="h2">
            Meet the <span>2,500 Agents</span>
          </Typography>
        </div>
      </Container>
      <Slider />
      <Container>
        <Button link href="/agents" type="short" position="center">
          See Collection
        </Button>
      </Container>
    </section>
  );
};
