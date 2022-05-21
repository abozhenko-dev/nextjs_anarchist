import { FC, useEffect, useState } from "react";

import { IFilterOptions } from "@/types";

interface FilterButtonProps {
  value: string;
  trait: string;
  filterOptions?: IFilterOptions;
  filterHandler?: Function;
}

export const FilterButton: FC<FilterButtonProps> = (props) => {
  // **Props
  const { value, trait, filterOptions, filterHandler } = props;

  // **Local state
  const [isChecked, setIsChecked] = useState(false);

  const toggleHandler = () => {
    // Check for availability of filterOptions and handler
    if (!filterOptions || !filterHandler) {
      return null;
    }

    // Check if in filterOptions KEY exist the trait
    if (filterOptions.hasOwnProperty(trait)) {
      // Check if value by KEY contains value which was choose
      const isValueInArray = filterOptions[trait].some(
        (traitValue) => traitValue === value
      );

      if (isValueInArray) {
        // Filter array without value which was choose
        const newTraitsArray = filterOptions[trait].filter(
          (traitValue) => traitValue !== value
        );

        if (newTraitsArray.length !== 0) {
          // Refresh trait with filtered array
          filterHandler({
            ...filterOptions,
            [trait]: newTraitsArray,
          });
        } else {
          // If "newTraitsArray" is empty, deleting TRAIT KEY from object
          let newFilterOptions = filterOptions;

          delete newFilterOptions[trait];

          filterHandler({
            ...newFilterOptions,
          });
        }
      } else {
        filterHandler({
          ...filterOptions,
          [trait]: [...filterOptions[trait], value],
        });
      }
    } else {
      // Add new trait
      filterHandler({ ...filterOptions, [trait]: [value] });
    }

    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (!filterOptions || !Object.keys(filterOptions).length) {
      setIsChecked(false);
    }
  }, [filterOptions]);

  return (
    <li>
      <button className={isChecked ? "active" : ""} onClick={toggleHandler}>
        <span></span>
        {value}
      </button>
    </li>
  );
};
