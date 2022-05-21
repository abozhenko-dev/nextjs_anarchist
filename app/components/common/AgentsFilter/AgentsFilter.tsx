import { ChangeEvent, FC, useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";

import { NavButton } from "@/ui";

import { useDebounce } from "@/hooks";

import { IFilter, IFilterOptions } from "@/types";

import { FilterItem } from "./FilterItem/FilterItem";

interface AgentsFilterProps {
  title?: string;
  filter?: IFilter[];
  agentsLength?: number;
  filterOptions?: IFilterOptions;
  filterHandler?: Function;
  searchHandler: (value: string) => void;
}

export const AgentsFilter: FC<AgentsFilterProps> = (props) => {
  // **Props
  const {
    title = "Filter",
    filter = [],
    agentsLength = 0,
    filterOptions,
    filterHandler,
    searchHandler,
  } = props;
  const { query } = useRouter();

  // **Local state
  const [isFilterShown, setIsFilterShown] = useState(false);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  // **Ref
  const filterListRef = useRef<HTMLUListElement>(null);

  const resetHandler = (): void => {
    if (filterHandler && filterListRef?.current) {
      filterHandler({});
    }
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    e.target.value = e.target.value.replace(/\D/g, "");

    if (e.target.value.length > 4) {
      return;
    }

    setSearch(e.target.value);
  };

  const toggleHandler = () => {
    setIsFilterShown(!isFilterShown);
  };

  useEffect(() => {
    searchHandler(debouncedSearch);
  }, [debouncedSearch]);

  useEffect(() => {
    if (query?.search) {
      setSearch(query.search as string);
    }
  }, [query?.search]);

  return (
    <aside className="agents__filter">
      {filter.length === 0 && <NavButton link href="/agents" text="Back" />}
      <div className="agents__filter-top">
        <div className="agents__filter-title">{title}</div>
        {agentsLength !== 0 && <span>{agentsLength}</span>}
      </div>
      <div className="agents__filter-search">
        <input
          type="text"
          placeholder="Search by ID"
          value={search}
          onInput={inputHandler}
        />
      </div>
      {filter.length !== 0 && (
        <div
          className={
            isFilterShown
              ? "agents__filter-content agents__filter-content--active"
              : "agents__filter-content"
          }
        >
          <button className="agents__filter-head" onClick={toggleHandler}>
            Traits
          </button>
          <div className="agents__filter-body">
            <ul ref={filterListRef} className="agents__filter-list">
              {filter.map((item) => (
                <FilterItem
                  key={item.trait}
                  item={item}
                  filterOptions={filterOptions}
                  filterHandler={filterHandler}
                />
              ))}
            </ul>
            <button className="agents__filter-btn" onClick={resetHandler}>
              Reset
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
