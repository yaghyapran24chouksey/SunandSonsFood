import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { BLOG_API } from "../config/blogApi";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await fetch(BLOG_API);
      let data = await res.json();

      // generate id if missing
      data = data.map((b, i) => ({ id: b.id || i + 1, ...b }));

      setBlogs(data);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <div className="text-center py-20 text-xl mt-20">Loading blogs...</div>;

  return (
    <>
      {/* SHOW ONLY FIRST 3 BLOGS */}
      <div className="flex flex-wrap gap-10 justify-center py-16">
        {blogs.slice(0, 3).map(blog => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>

      {/* MORE BLOGS BUTTON */}
      <div className="w-full flex justify-center mb-10">
        <a href="/blogs" className="px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-900">
          More Blogs 
        </a>
      </div>
    </>
  );
}
