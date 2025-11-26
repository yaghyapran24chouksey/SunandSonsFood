import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BLOG_API } from "../config/blogApi";

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function load() {
      const res = await fetch(BLOG_API);
      let data = await res.json();
      data = data.map((b,i)=>({id:b.id || i+1, ...b}));

      const current = data.find(b => String(b.id) === id);
      setBlog(current);
    }
    load();
  }, [id]);

  if (!blog) return <div className="text-center py-20 mt-20">Loading Blog...</div>;

  return (
    <div className="pt-[120px] max-w-4xl mx-auto px-6">
      <img src={blog.image} className="w-full rounded-lg" alt={blog.title} />
      <h1 className="text-3xl font-bold text-blue-900 mt-6">{blog.title}</h1>
      <p className="text-gray-600 mt-2">{blog.date}</p>
      <p className="text-lg mt-6 leading-7">{blog.description}</p>
    </div>
  );
}
