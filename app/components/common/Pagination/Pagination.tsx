import { FC } from "react";

interface PagenationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  hideOnSinglePage?: boolean;
}

export const Pagination: FC<PagenationProps> = (props) => {
  // **Props
  const {
    totalPages,
    currentPage,
    onPageChange,
    hideOnSinglePage = false,
  } = props;

  const pageHandler = (page: number) => () => {
    if (page <= 0 || page > Math.ceil(totalPages)) {
      return;
    }

    onPageChange(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderPagination = (): number[] => {
    const paginationArray = [] as number[];

    for (let i = 1; i <= Math.ceil(totalPages); i++) {
      if (i === 1) {
        paginationArray.push(i);
      }

      if (i === currentPage - 1 && i !== 1) {
        paginationArray.push(i);
      }

      if (i === currentPage) {
        paginationArray.push(i);
      }

      if (i === currentPage + 1 && i !== Math.ceil(totalPages)) {
        paginationArray.push(i);
      }

      if (i === Math.ceil(totalPages)) {
        paginationArray.push(i);
      }
    }

    const filteredArray = Array.from(new Set(paginationArray));

    if (filteredArray[1] >= 3) {
      filteredArray.splice(1, 0, 0);
    }

    if (
      filteredArray[filteredArray.length - 2] + 1 !==
      filteredArray[filteredArray.length - 1]
    ) {
      filteredArray.splice(filteredArray.length - 1, 0, 0);
    }

    return filteredArray;
  };

  if (totalPages <= 1 && hideOnSinglePage) {
    return null;
  }

  return (
    <div className="pagination">
      <div className="pagination__list">
        <button
          className="pagination__item pagination__item--prev"
          aria-label="Go to previous page"
          onClick={pageHandler(currentPage - 1)}
        ></button>
        {renderPagination().map((pagination, index) => {
          if (pagination) {
            return (
              <button
                key={`number-${pagination}-${index}`}
                className={
                  currentPage === pagination
                    ? "pagination__item pagination__item--active"
                    : "pagination__item"
                }
                aria-label={`Go to ${pagination} page`}
                onClick={pageHandler(pagination)}
              >
                {pagination}
              </button>
            );
          }

          return (
            <button
              key={`dots-${pagination}-${index}`}
              className="pagination__item pagination__item--divider"
              onClick={pageHandler(pagination)}
            >
              ...
            </button>
          );
        })}
        <button
          className="pagination__item pagination__item--next"
          aria-label="Go to next page"
          onClick={pageHandler(currentPage + 1)}
        ></button>
      </div>
    </div>
  );
};
