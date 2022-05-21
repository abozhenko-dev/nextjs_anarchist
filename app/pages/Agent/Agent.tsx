import { FC, useEffect, useState } from "react";

import { useRouter } from "next/router";

import { AgentsFilter, AgentsProvider } from "@/common";

import { IAgent } from "@/types";

import { AgentContent } from "./AgentContent/AgentContent";

export const Agent: FC<{ agent: IAgent }> = (props) => {
  // **Props
  const { agent } = props;
  const { push } = useRouter();

  // **Local state
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      push({ pathname: "/agents", query: { search } });
    }
  }, [search]);

  return (
    <AgentsProvider>
      <div className="agents__wrapper">
        <AgentsFilter title="Search" searchHandler={setSearch} />
        <AgentContent agent={agent} />
      </div>
    </AgentsProvider>
  );
};
