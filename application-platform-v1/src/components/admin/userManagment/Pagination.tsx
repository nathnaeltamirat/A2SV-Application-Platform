import { PaginationProps } from "@/types/admin.type";


const Pagination = ({
  usersPerPage,
  totalUsers,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  if (totalPages <= 1) return null; // don't show pagination for 1 page

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="text-sm text-gray-700">
        Showing page {currentPage} of {totalPages}
      </div>

      <div className="flex space-x-1">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          Previous
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`px-3 py-1 rounded-md ${
              currentPage === number
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
