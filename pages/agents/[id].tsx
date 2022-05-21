import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Agent } from "@/pages/Agent/Agent";

import { Meta } from "@/common";

import { IAgent } from "@/types";

import agentsData from "../../data/agents.json";

const AgentPage: NextPage<{ agent: IAgent }> = (props) => {
  // **Props
  const { agent } = props;

  return (
    <Meta title={agent.name} description="Agents page description">
      <Agent agent={agent} />
    </Meta>
  );
};

export default AgentPage;

export const getStaticPaths: GetStaticPaths = () => {
  const agents = JSON.parse(JSON.stringify(agentsData)) as IAgent[];

  const paths = agents.map((agent) => ({
    params: { id: agent.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const agents = JSON.parse(JSON.stringify(agentsData)) as IAgent[];

  const agent = agents.find((agent) => agent.id.toString() === params?.id);

  return { props: { agent } };
};
