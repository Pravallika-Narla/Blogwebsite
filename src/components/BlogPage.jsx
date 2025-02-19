import React, { useState, useEffect } from "react";
import CategorySelection from "./CategorySelection";
import Pagination from "./Pagination";
import BlogCards from "./BlogCards";
import Sidebar from "./Sidebar";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; // Number of blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [totalBlogs, setTotalBlogs] = useState(0); // Total number of blogs

    useEffect(() => {
        async function fetchBlogs() {
            let url = `https://blogverse-bkend.onrender.com/blogs?page=${currentPage}&limit=${pageSize}`;
            
            if (selectedCategory) {
                url += `&category=${selectedCategory}`;
            }

            const response = await fetch(url);
            const data = await response.json();

            

            setBlogs(data);  // Assuming backend returns { blogs: [], total: number }
            setTotalBlogs(data.length); // Store the total count for pagination
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        
      
        setCurrentPage(1); // Reset to page 1 when category changes
        setActiveCategory(category);
    };
    // console.log(blogs);
    // console.log(totalBlogs);
    
    

    return (
        <div>
            <CategorySelection onSelectCategory={handleCategoryChange} activeCategory={activeCategory} />

            <div className="flex flex-col lg:flex-row gap-12">
                <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}  />
                <Sidebar />
            </div>

            <Pagination
    currentPage={currentPage}
    onPageChange={handlePageChange}
    category={selectedCategory}
    blogs={blogs} // Pass blogs to allow filtering inside Pagination
    pageSize={pageSize}
/>
        </div>
    );
};

export default BlogPage;
