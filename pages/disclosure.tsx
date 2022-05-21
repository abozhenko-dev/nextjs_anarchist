import type { NextPage } from "next";

import { Disclosure } from "@/pages/Disclosure/Disclosure";

import { Meta } from "@/common";

const DisclosurePage: NextPage = () => (
  <Meta title="Disclosure page" description="Disclosure page description">
    <Disclosure />
  </Meta>
);

export default DisclosurePage;
