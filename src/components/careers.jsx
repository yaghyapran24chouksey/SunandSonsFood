import React from "react";

export default function Careers() {
  return (
    <div className="font-sans">

      {/* CONTENT SECTION */}
      <section 
        className="
          text-[#003E8B]

          /* -------- Responsive Padding -------- */
          px-6 py-14               /* Mobile */
          sm:px-10 sm:py-16        /* Tablets */
          md:px-20 md:py-24        /* Medium screens */
          lg:px-32 lg:py-32        /* Desktop */
          xl:px-40 xl:py-40        /* Large Desktop */
        "
      >

        {/* Heading */}
        <div className="flex justify-between items-center">
          <h1
            className="
              font-bold font-clover
              text-[32px] sm:text-[40px] md:text-[48px] 
            "
          >
            Careers
          </h1>
        </div>

        <h3 className="text-[20px] sm:text-[22px] font-bold mt-10 font-poppins">
          Work with The Happy Makers
        </h3>
        <p className="mt-2 text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] font-poppins">
          Let your potential and your experience work for you where you really deserve to be.
          There’s no limit to the growth in your career when you are with us. We always welcome
          and honour the innovative thinkers and democratic leaders who can spearhead the growth
          of Govind Milk and Milk Products Pvt. Ltd. along with individual achievements.
        </p>

        <h3 className="text-[20px] sm:text-[22px] font-bold mt-10 font-poppins">
          All About Govind Milk
        </h3>
        <p className="mt-2 text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] font-poppins">
          Govind Milk isn’t just a name in the dairy industry; it’s a legacy of quality, innovation,
          and progress. Nestled in the heart of Phaltan, Govind Milk has been the pride of India’s dairy
          landscape. But we aren’t stopping there. Ambitious plans are brewing, and innovation is our compass.
        </p>

        <p className="mt-2 text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] font-poppins">
          Our journey is rich with history, but the passion and talent of individuals like you fuels our future.
        </p>

        <h3 className="text-[20px] sm:text-[22px] font-bold mt-10 font-poppins">
          Who Are We Looking For?
        </h3>
        <p className="mt-2 text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] font-poppins">
          We’re on the lookout for individuals who align with our values and our ethos – young,
          enthusiastic, and ready to make a mark. Whether you’re a seasoned professional or a fresh
          talent, your place in our team is defined by your potential and zeal.
        </p>

        <p className="mt-2 text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] font-poppins">
          Experience matters at Govind Milk, but so does the hunger for growth. We offer a highly conducive
          environment for learning and development.
        </p>

        <h3 className="text-[20px] sm:text-[22px] font-bold mt-10 font-poppins">
          What to Expect?
        </h3>
        <p className="mt-2 text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] font-poppins">
          Govind is a reputed name in the dairy industry in India and is located in Phaltan. We also have
          a well-equipped office in Baner, Pune and have ambitious and innovative plans to expand.
        </p>

        <p className="mt-2 text-[16px] sm:text-[18px] leading-[30px] font-poppins font-semibold">
          Interested candidates can mail their resume to{" "}
          <a
            href="mailto:hrd@govindmilk.com"
            className="text-[#003E8B] underline font-bold"
          >
            hrd@govindmilk.com
          </a>
        </p>

      </section>
    </div>
  );
}
