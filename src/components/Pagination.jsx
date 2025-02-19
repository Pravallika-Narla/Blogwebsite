const Pagination = ({ currentPage, onPageChange, blogs, category, pageSize }) => {
    // Filter blogs based on category
    const filteredBlogs = blogs.filter(blog => !category || blog.category === category);

    // Calculate total pages based on filtered results
    const totalBlogs = filteredBlogs.length;
    const totalPages = Math.ceil(totalBlogs / pageSize);

    console.log("Filtered Blogs:", filteredBlogs);
    console.log("Total Blogs:", totalBlogs, "Total Pages:", totalPages);

    if (totalPages <= 1) return null; // Hide pagination if only one page

    const renderPaginationLinks = () => {
        const pages = [];
        const maxPagesToShow = 5;

        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }

        return pages.map((page, index) => (
            <li key={index} className={page === currentPage ? "activePagination" : ""}>
                {page === "..." ? (
                    <span className="ellipsis">...</span>
                ) : (
                    <a href="#" onClick={() => onPageChange(page)}>{page}</a>
                )}
            </li>
        ));
    };

    return (
        <ul className="pagination my-8 flex-wrap gap-4">
            <li>
                <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
            </li>

            <div className="flex gap-1">{renderPaginationLinks()}</div>

            <li>
                <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </li>
        </ul>
    );
};

export default Pagination;
