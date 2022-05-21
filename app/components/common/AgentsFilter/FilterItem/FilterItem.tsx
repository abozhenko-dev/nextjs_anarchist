import { FC, useEffect, useRef, useState } from "react";

import { IFilter, IFilterOptions } from "@/types";

import { FilterButton } from "../FilterButton/FilterButton";

interface FilterItemProps {
  item: IFilter;
  filterOptions?: IFilterOptions;
  filterHandler?: Function;
}

export const FilterItem: FC<FilterItemProps> = (props) => {
  // **Props
  const { item, filterOptions, filterHandler } = props;

  // **Local state
  const [isActive, setIsActive] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);

  // **Ref
  const contentRef = useRef<HTMLUListElement>(null);

  const toggleHandler = () => {
    setIsActive(!isActive);

    if (contentRef?.current?.scrollHeight) {
      setMaxHeight(!isActive ? contentRef.current.scrollHeight : 0);
    }
  };

  useEffect(() => {
    if (!filterOptions || !Object.keys(filterOptions).length) {
      setIsActive(false);
      setMaxHeight(0);
    }
  }, [filterOptions]);

  return (
    <li
      className={
        isActive
          ? "agents__filter-item agents__filter-item--active"
          : "agents__filter-item"
      }
    >
      <button className="agents__filter-item-head" onClick={toggleHandler}>
        {item.trait}
        <span>{item.values.length}</span>
      </button>
      <ul
        ref={contentRef}
        className="agents__filter-item-content"
        style={{ maxHeight }}
      >
        {item.values.map((value) => (
          <FilterButton
            key={value}
            value={value}
            trait={item.trait}
            filterOptions={filterOptions}
            filterHandler={filterHandler}
          />
        ))}
      </ul>
    </li>
  );
};
