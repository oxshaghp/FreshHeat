import React from "react";
import Hero from "../../static/Hero";
import BlogCard from "./BlogCard";
import useBlogContext from "../../context/BlogContext/useBlogContext";
function BlogPage() {
  const { blogs } = useBlogContext();

  return (
    <div>
      <Hero title={"Blog"} left={"Home"} right={"Blog"} />

      <div className="mx-auto flex items-center justify-center gap-10 flex-wrap my-20">
        {blogs.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
