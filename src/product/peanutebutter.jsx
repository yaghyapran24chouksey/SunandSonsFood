import React from "react";

export default function peanutebutter() {
  const products = [
    { img: "/25kg-Prabhat-Whey-Permeate-Powder (1)-Photoroom.png", name: "Sams Momos" },
    { img: "/images (5)-Photoroom.png", name: "MR. POTATO", imgStyle: "h-[150px] w-[100px] -mr-2" },
    { img: "/b4db21ba-551f-42a7-8a8c-c8e36850cdc1-Photoroom.png", name: "TOM YUM", imgStyle: "h-[150px] w-[190px] -mr-14" },

    // Row 2
    { img: "/enka-whey-powder-Photoroom.png", name: "BLACK BARBECUE", row: 2 },
    { img: "/enka-whey-powder-Photoroom.png", name: "MR. POTATO", row: 2 },
    { img: "/enka-whey-powder-Photoroom.png", name: "TOM YUM", row: 2 },
  ];

  const phone = "916262873483"; // WHATSAPP NUMBER

  const orderNow = (name) => {
    const msg = encodeURIComponent(`Hi, I'd like to order: ${name}`);
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  const rowOne = products.filter(p => !p.row);
  const rowTwo = products.filter(p => p.row === 2);

  const RowComponent = ({ items }) => (
    <div className="bg-[#003B8E] p-10 md:p-20 rounded-[40px] w-[90%] mx-auto flex flex-wrap md:flex-nowrap justify-between items-center gap-6">
      {items.map((p, i) => (
        <div key={i} className="flex items-start relative gap-0">
          <img
            src={p.img}
            alt={p.name}
            className={`w-[150px] relative -translate-y-[2px] z-10 ${p.imgStyle || ""}`}
          />

          <div className="bg-white px-7 py-6 rounded-[25px] w-[180px] shadow-xl mt-2 -ml-[14px] relative z-[1]">
            <h3 className="text-[18px] font-bold mb-1">{p.name}</h3>

            <button
              onClick={() => orderNow(p.name)}
              className="mt-2 w-[120px] py-2 rounded-full bg-[#ff0a63] hover:bg-[#c2185b] text-white font-bold transition"
            >
              ORDER NOW
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-[#e6eef9] min-h-screen w-full py-35 font-sans text-center">

      {/* ROW 1 */}
      <RowComponent items={rowOne} />

      {/* White gap */}
      <div className="h-[40px] w-full bg-white my-6"></div>

      {/* ROW 2 */}
      <RowComponent items={rowTwo} />

    </div>
  );
}
