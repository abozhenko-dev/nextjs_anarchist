import type { GetStaticProps, NextPage } from "next";

import { Agents } from "@/pages/Agents/Agents";

import { Meta } from "@/common";

import { IAgent, IFilter } from "@/types";

import agentsData from "../../data/agents.json";
import filterData from "../../data/filters.json";

const AgentsPage: NextPage<{ agents: IAgent[]; filter: IFilter[] }> = (
  props
) => {
  // **Props
  const { agents, filter } = props;

  return (
    <Meta title="Agents page" description="Agents page description">
      <Agents agents={agents} filter={filter} />
    </Meta>
  );
};

export default AgentsPage;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      agents: JSON.parse(JSON.stringify(agentsData)),
      filter: JSON.parse(JSON.stringify(filterData)),
    },
  };
};
