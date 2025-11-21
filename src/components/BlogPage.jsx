import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgJEUHG3xsp5TixHprG3YZXsngwEOa0B4aGrkpKYcx0HzQrC1i2lPwnbOGC6bwq_H-NY8w3HqmA1GWu9LEskE_5an9LgxXNQ5O2A6y3VyJ43J_4myRWGWBuhcVRA5mhVHzb6W8z29LHPJkiDtpFhB97862r2HtGuLQEEMpSwGWZhHGop4uZkpCo5FHyNUhR-obKuvq80s_jHtpCtSFQn8y60D9pUOeWKHJFdTkpW0wP-OYPJXoB0Bs_nlitvlUhhyvPQYQ8_JQfwqWUFSgTybb4qkUyypRXaTNBzNwu&lib=MT1fAD_d6theg03qYNC2TnS0cRxA0As0W";

    useEffect(() => {
        async function loadBlogs() {
            try {
                const res = await fetch(API_URL);
                const data = await res.json();
                setBlogs(data);
            } catch (err) {
                console.error("Failed to load blogs", err);
            }
            setLoading(false);
        }

        loadBlogs();
    }, []);

    if (loading) {
        return <div className="text-center py-20 text-xl">Loading blogs...</div>;
    }

    return (
        <div id="blog-page" className="flex flex-wrap gap-10 justify-center py-16">
            {blogs
                ?.filter(blog => blog && blog.title && blog.image && blog.link)
                .map((blog, idx) => (
                    <BlogCard blog={blog} key={idx} />
                ))
            }
        </div>
    );
}
