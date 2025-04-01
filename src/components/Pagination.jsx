import React, { useEffect } from "react";
import ArrowLeftCircle from "../assets/icons/arrow-left-circle";
import ArrowRightCircle from "../assets/icons/arrow-right-circle";

const Pagination = ({
  onPageChange,
  currentPage,
  totalPages,
  itemsPerPage,
  setCurrentPage,
  setItemsPerPage,
}) => {
  useEffect(() => {
    onPageChange(currentPage, itemsPerPage);
  }, [currentPage, itemsPerPage, onPageChange]);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    let pages = [];
    let start = Math.max(1, currentPage - 4);
    let end = Math.min(totalPages, currentPage + 4);

    if (start > 1) pages.push(<span key="start">...</span>);
    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-2 ${
            currentPage === i
              ? "bg-white text-black rounded-full px-3 py-1.5 shadow-md"
              : ""
          }`}
        >
          {i}
        </button>
      );
    }
    if (end < totalPages) pages.push(<span key="end">...</span>);

    return pages;
  };

  return (
    <div className="flex sm:flex-row flex-col gap-y-5 justify-between items-center p-4 mt-4">
      {/* Items Per Page Dropdown */}
      <select
        className="border border-[#E2E4E9] bg-white focus:oultine-none focus:ring-2 ring-purple-500 rounded-md p-2"
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
      >
        {[...Array(20).keys()].map((i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1} per page
          </option>
        ))}
      </select>

      {/* Pagination Controls */}
      <div className="flex items-center overflow-x-auto sm:px-0 px-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 mx-1 rounded-md"
        >
          <ArrowLeftCircle />
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 mx-1 rounded-md"
        >
          <ArrowRightCircle />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
