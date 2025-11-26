import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";

// 🔥 Images + Product Page Links
const IMAGES = [
  { src: "/img/Wheypowder.png", link: "/product/whey-1" },
  { src: "/img/Wheypowder(1).png", link: "/product/whey-2" },
  { src: "/img/Wheypowder(3).jpg", link: "/product/whey-3" },
  { src: "/img/Wheypowder(4).jpg", link: "/product/whey-4" },
  { src: "/img/Wheypowder(5).jpg", link: "/product/whey-5" },
  { src: "/img/Wheypowder(6).jpg", link: "/product/whey-6" },
  { src: "/img/Wheypowder(7).jpg", link: "/product/whey-7" },
  { src: "/img/Wheypowder(8).jpg", link: "/product/whey-8" },
  { src: "/img/Wheypowder(9).jpg", link: "/product/whey-9" },
  { src: "/img/Wheypowder(10).jpg", link: "/product/whey-10" },
];

const AUTOPLAY_MS = 2500;

const ProductCarousel = () => {
  const wrapRef = useRef(null);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);

  const origCount = IMAGES.length;

  const cardsData = useMemo(() => {
    const originals = IMAGES.map((item, origIndex) => ({
      ...item,
      origIndex,
    }));
    const prefix = [...originals].reverse().map((c) => ({ ...c, clone: true }));
    const suffix = originals.map((c) => ({ ...c, clone: true }));
    return [...prefix, ...originals, ...suffix];
  }, []);

  const [currentAbs, setCurrentAbs] = useState(
    origCount + Math.floor(origCount / 2)
  );
  const [offsetX, setOffsetX] = useState(0);
  const [instant, setInstant] = useState(true);

  const autoplayRef = useRef(null);
  const touchStartXRef = useRef(0);

  const recenter = useCallback(() => {
    const wrap = wrapRef.current;
    const activeCard = cardRefs.current[currentAbs];

    if (!wrap || !activeCard) return;

    const containerWidth = wrap.clientWidth;
    const offset =
      activeCard.offsetLeft - (containerWidth / 2 - activeCard.clientWidth / 2);

    setOffsetX(offset);
  }, [currentAbs]);

  useLayoutEffect(() => {
    recenter();
  }, [currentAbs, recenter]);

  useEffect(() => {
    const handleResize = () => {
      setInstant(true);
      recenter();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [recenter]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const handleTransitionEnd = () => {
      setCurrentAbs((prev) => {
        let next = prev;
        let changed = false;

        if (next >= origCount * 2) {
          next = next - origCount;
          changed = true;
        } else if (next < origCount) {
          next = next + origCount;
          changed = true;
        }

        if (changed) setInstant(true);
        return next;
      });
    };

    el.addEventListener("transitionend", handleTransitionEnd);
    return () => el.removeEventListener("transitionend", handleTransitionEnd);
  }, [origCount]);

  const goToOffset = useCallback((delta) => {
    setInstant(false);
    setCurrentAbs((prev) => prev + delta);
  }, []);

  const goToOriginal = useCallback(
    (origIndex) => {
      setInstant(false);
      setCurrentAbs(origCount + origIndex);
    },
    [origCount]
  );

  useEffect(() => {
    autoplayRef.current = setInterval(() => goToOffset(1), AUTOPLAY_MS);
    return () => clearInterval(autoplayRef.current);
  }, [goToOffset]);

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartXRef.current;
    if (dx > 40) goToOffset(-1);
    else if (dx < -40) goToOffset(1);
  };

  const getCardStyleAndClass = (idx) => {
    const baseStyle = {
      backfaceVisibility: "hidden",
      transformOrigin: "center center",
      transition:
        "transform .45s cubic-bezier(.22,.9,.3,1), filter .35s, opacity .35s, box-shadow .35s",
    };

    const leftIdx = currentAbs - 1;
    const rightIdx = currentAbs + 1;

    let style = {
      ...baseStyle,
      transform: "scale(0.70) translateY(18px)",
      filter: "brightness(.9) blur(3px)",
      opacity: 0.45,
      zIndex: 1,
    };
    let extraClass = "";

    if (idx === currentAbs) {
      style = {
        ...baseStyle,
        transform: "scale(1.14) translateY(-12px)",
        filter: "none",
        opacity: 1,
        zIndex: 5,
        boxShadow: "0px 28px 60px rgba(11,28,45,0.18)",
      };
      extraClass = "card-active";
    } else if (idx === leftIdx) {
      style = {
        ...baseStyle,
        transform: "scale(0.92) translateY(6px) rotateY(10deg) translateX(-8px)",
        opacity: 0.85,
        zIndex: 3,
      };
      extraClass = "card-adj-left";
    } else if (idx === rightIdx) {
      style = {
        ...baseStyle,
        transform: "scale(0.92) translateY(6px) rotateY(-10deg) translateX(8px)",
        opacity: 0.85,
        zIndex: 3,
      };
      extraClass = "card-adj-right";
    }

    return { style, extraClass };
  };

  return (
    <section ref={wrapRef} className="relative overflow-visible py-4 pb-9 select-none">

      <div
        ref={carouselRef}
        className="flex items-center gap-[22px] py-4 mt-40"
        style={{
          transform: `translateX(-${offsetX}px)`,
          transition: instant ? "none" : "transform .5s cubic-bezier(.22,.9,.3,1)",
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {cardsData.map((card, idx) => {
          const { style, extraClass } = getCardStyleAndClass(idx);
          return (
            <Link
              key={`${card.origIndex}-${idx}`}
              ref={(el) => (cardRefs.current[idx] = el)}
              to={card.link} // 🔥 OPENS PRODUCT PAGE
              onClick={() => goToOriginal(card.origIndex)}
              className={`block h-[380px] w-[260px] flex-shrink-0 overflow-hidden rounded-[14px] bg-white ${extraClass}`}
              style={style}
            >
              <img
                src={card.src}
                className="h-full w-full object-cover"
                draggable="false"
              />
            </Link>
          );
        })}
      </div>

      <div className="mt-3 flex items-center justify-center gap-4">
        <button
          className="h-11 w-11 rounded-full bg-white shadow-md"
          onClick={() => goToOffset(-1)}
        >‹</button>

        <button
          className="h-11 w-11 rounded-full bg-white shadow-md"
          onClick={() => goToOffset(1)}
        >›</button>
      </div>
    </section>
  );
};

export default ProductCarousel;
