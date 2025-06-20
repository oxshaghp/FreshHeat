import React, { useEffect } from "react";
import Hero from "/src/component/static/Hero";
import BlogCard from "./BlogCard";
import useBlogContext from "/src/component/context/BlogContext/useBlogContext";
function BlogPage() {
  const { blogs } = useBlogContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
