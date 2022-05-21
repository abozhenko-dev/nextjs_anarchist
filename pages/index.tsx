import type { NextPage } from "next";

import { Home } from "@/pages/Home/Home";

import { Meta } from "@/common";

const HomePage: NextPage = () => (
  <Meta title="Main page" description="Main page description">
    <Home />
  </Meta>
);

export default HomePage;
