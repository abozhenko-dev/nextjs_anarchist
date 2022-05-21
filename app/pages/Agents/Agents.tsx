import { FC, useCallback, useEffect, useState } from "react";

import { useRouter } from "next/router";

import { AgentsFilter, AgentsProvider } from "@/common";

import { IAgent, IFilter, IFilterOptions } from "@/types";

import { AgentsList } from "./AgentsList/AgentsList";

interface AgentsProps {
  agents: IAgent[];
  filter: IFilter[];
}

export const Agents: FC<AgentsProps> = (props) => {
  // **Props
  const { agents, filter } = props;
  const { query, push } = useRouter();

  // **Local state
  const [userTokens, setUserTokens] = useState<string[]>([]);
  const [filterOptions, setFilterOptions] = useState<IFilterOptions>({});
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(12);

  const getFilteredAgents = useCallback(
    (agents: IAgent[], search: string, tokens: string[]): IAgent[] => {
      if (
        Object.keys(filterOptions).length === 0 &&
        !search &&
        tokens.length === 0
      ) {
        return agents;
      }

      if (tokens && Object.keys(filterOptions).length === 0 && !search) {
        return agents.filter((agent) => tokens.includes(agent.id.toString()));
      }

      if (search) {
        return agents.filter((agent) => agent.id.toString().includes(search));
      }

      return agents.filter((agent) => {
        const traits = agent.traits.reduce((acc, trait) => {
          acc[trait.name] = trait.value;

          return acc;
        }, {} as { [key: string]: string });

        return Object.entries(filterOptions).every(([key, vals]: any) => {
          if (!traits.hasOwnProperty(key) || !vals.includes(traits[key])) {
            return false;
          }

          return true;
        });
      });
    },
    [filterOptions, search, userTokens]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filterOptions]);

  useEffect(() => {
    if (query?.update === "no") {
      setUserTokens([]);
      push({
        query: {},
      });
    }

    if (sessionStorage?.getItem("tokens")) {
      setUserTokens(JSON.parse(sessionStorage.getItem("tokens")!));
      push({
        query: {},
      });
    }
  }, [query?.update]);

  return (
    <AgentsProvider>
      <div className="agents__wrapper">
        <AgentsFilter
          filter={filter}
          agentsLength={agents.length}
          filterOptions={filterOptions}
          filterHandler={setFilterOptions}
          searchHandler={setSearch}
        />
        <AgentsList
          agents={getFilteredAgents(agents, search, userTokens)}
          currentPage={currentPage}
          pageHandler={setCurrentPage}
          pageSize={pageSize}
        />
      </div>
    </AgentsProvider>
  );
};
