import React from "react";
import PageHeroSection from "../../static/PageHeroSection";
import BlogCard from "./BlogCard";
import useAppContext from "../../context/useAppContext";
function BlogPage() {
  const { blogs } = useAppContext();

  return (
    <div>
      <PageHeroSection text="Blog" />

      <div className="mx-auto flex items-center justify-center gap-10 flex-wrap my-20">
        {blogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
