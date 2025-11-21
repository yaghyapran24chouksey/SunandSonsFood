export default function BlogCard({ blog }) {
  if (!blog || !blog.title || !blog.link) return null;
  return (
    <div className="bg-[#E6F2FF] rounded-md shadow-md w-[560px] overflow-hidden">
      
      {/* IMAGE + WAVE + LOGO */}
      <div className="relative h-[350px]">
        <a href={blog.link}>
          <img
            src={blog.image}
            className="w-full h-full object-cover"
            alt={blog.title}
          />
        </a>

        {/* Wave */}
        <div className="absolute -bottom-3 left-0 px-8 pointer-events-none">
          <svg
            width="127"
            height="47"
            viewBox="0 0 300 105"
            className="fill-[#E6F2FF]"
          >
            <path d="M0,104.9h300V79.8h-17.9c-26.1,0-49.8-14.6-62.1-37.6c-13.4-25-39.9-42.1-70.3-42.1s-56.8,17-70.3,42.1  
            c-12.3,23-36,37.6-62.1,37.6H0V104.9z"></path>
          </svg>

          {/* Logo */}
          <img
            src="/img/sunandsonsfood_logo.png"
            className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full z-10 object-cover"
            alt="logo"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-8 py-6">
        <h1 className="text-[24px] font-bold text-[#003E8B] leading-tight">
          <a href={blog.link} className="hover:text-blue-700">
            {blog.title}
          </a>
        </h1>

        <p className="text-[13px] text-[#003E8B] mt-2 leading-[1.4]">
          {blog.description}
        </p>
      </div>

      {/* DATE */}
      <div className="border-t px-8 py-3">
        <p className="text-[#003E8B] text-[14px]">{blog.date}</p>
      </div>

    </div>
  );
}
