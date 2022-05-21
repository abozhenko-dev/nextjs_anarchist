import { FC } from "react";

import { Collection } from "./Collection/Collection";
import { Faq } from "./Faq/Faq";
import { Hero } from "./Hero/Hero";
import { Roadmap } from "./Roadmap/Roadmap";
import { Team } from "./Team/Team";

export const Home: FC = () => {
  return (
    <>
      <Hero />
      <Collection />
      <Roadmap />
      <Team />
      <Faq />
    </>
  );
};
