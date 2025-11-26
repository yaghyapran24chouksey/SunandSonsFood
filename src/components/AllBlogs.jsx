import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { BLOG_API } from "../config/blogApi";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await fetch(BLOG_API);
      let data = await res.json();
      data = data.map((b, i) => ({ id: b.id || i + 1, ...b }));
      setBlogs(data);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <div className="text-center py-20 text-xl mt-20">Loading blogs...</div>;

  return (
    <div className="pt-[120px] flex flex-wrap gap-10 justify-center py-16">
      {blogs.map(blog => <BlogCard blog={blog} key={blog.id} />)}
    </div>
  );
}
