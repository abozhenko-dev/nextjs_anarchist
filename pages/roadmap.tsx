import type { NextPage } from "next";

import { Roadmap } from "@/pages/Roadmap/Roadmap";

import { Meta } from "@/common";

const RoadmapPage: NextPage = () => (
  <Meta title="Roadmap page" description="Roadmap page description">
    <Roadmap />
  </Meta>
);

export default RoadmapPage;
