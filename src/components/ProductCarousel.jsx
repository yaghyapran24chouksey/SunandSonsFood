import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const IMAGES = [
  "/img/Wheypowder.png",
  "/img/Wheypowder(1).png",
  "/img/Wheypowder(3).jpg",
  "/img/Wheypowder(4).jpg",
  "/img/Wheypowder(5).jpg",
  "/img/Wheypowder(6).jpg",
  "/img/Wheypowder(7).jpg",
  "/img/Wheypowder(8).jpg",
  "/img/Wheypowder(9).jpg",
  "/img/Wheypowder(10).jpg",
];

const AUTOPLAY_MS = 2500;

const ProductCarousel = () => {
  const wrapRef = useRef(null);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);

  const origCount = IMAGES.length;

  // Build 3× list: reversed originals + originals + originals
  const cardsData = useMemo(() => {
    const originals = IMAGES.map((src, origIndex) => ({
      src,
      origIndex,
    }));
    const prefix = [...originals].reverse().map((c) => ({
      ...c,
      clone: true,
    }));
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

  const totalCards = cardsData.length;
  const middleStart = origCount; // start of middle block

  // Center active card by measuring its offset
  const recenter = useCallback(() => {
    const wrap = wrapRef.current;
    const activeCard = cardRefs.current[currentAbs];

    if (!wrap || !activeCard) return;

    const containerWidth = wrap.clientWidth;
    const offset =
      activeCard.offsetLeft - (containerWidth / 2 - activeCard.clientWidth / 2);

    setOffsetX(offset);
  }, [currentAbs]);

  // Recenter on index change
  useLayoutEffect(() => {
    recenter();
  }, [currentAbs, recenter]);

  // Recenter on resize
  useEffect(() => {
    const handleResize = () => {
      setInstant(true);
      recenter();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [recenter]);

  // Infinite loop fix after transitions end
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

        if (changed) {
          setInstant(true);
          // recenter will run because index changes
        }
        return next;
      });
    };

    el.addEventListener("transitionend", handleTransitionEnd);
    return () => el.removeEventListener("transitionend", handleTransitionEnd);
  }, [origCount]);

  // Helper: move by delta
  const goToOffset = useCallback((delta) => {
    setInstant(false);
    setCurrentAbs((prev) => prev + delta);
  }, []);

  // Helper: go to middle copy of original index
  const goToOriginal = useCallback(
    (origIndex) => {
      setInstant(false);
      setCurrentAbs(middleStart + origIndex);
    },
    [middleStart]
  );

  // Keyboard arrows
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") {
        goToOffset(-1);
        restartAutoplay();
      }
      if (e.key === "ArrowRight") {
        goToOffset(1);
        restartAutoplay();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goToOffset]);

  // Autoplay
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) return;
    autoplayRef.current = setInterval(() => {
      goToOffset(1);
    }, AUTOPLAY_MS);
  }, [goToOffset]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const restartAutoplay = useCallback(() => {
    stopAutoplay();
    startAutoplay();
  }, [startAutoplay, stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  // Touch swipe
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartXRef.current;
    if (dx > 40) {
      goToOffset(-1);
      restartAutoplay();
    } else if (dx < -40) {
      goToOffset(1);
      restartAutoplay();
    }
  };

  // Card variant styles (active / adjacent / inactive)
  const getCardStyleAndClass = (idx) => {
    const baseStyle = {
      backfaceVisibility: "hidden",
      transformOrigin: "center center",
      transition:
        "transform .45s cubic-bezier(.22,.9,.3,1), filter .35s, opacity .35s, box-shadow .35s",
    };

    const leftIdx = currentAbs - 1;
    const rightIdx = currentAbs + 1;

    // inactive
    let style = {
      ...baseStyle,
      transform: "scale(0.70) translateY(18px)",
      filter: "brightness(.9) blur(3px)",
      opacity: 0.45,
      boxShadow: "0 6px 18px rgba(9,20,30,0.04)",
      zIndex: 1,
    };
    let extraClass = "";

    if (idx === currentAbs) {
      // active
      style = {
        ...baseStyle,
        transform: "scale(1.14) translateY(-12px)",
        filter: "none",
        opacity: 1,
        boxShadow: "0 28px 60px rgba(11,28,45,0.18)",
        zIndex: 5,
      };
      extraClass = "card-active";
    } else if (idx === leftIdx) {
      // adj-left
      style = {
        ...baseStyle,
        transform: "scale(0.92) translateY(6px) rotateY(10deg) translateX(-8px)",
        filter: "brightness(.95) blur(0.6px)",
        opacity: 0.85,
        boxShadow: "0 8px 20px rgba(8,20,30,0.06)",
        zIndex: 3,
      };
      extraClass = "card-adj-left";
    } else if (idx === rightIdx) {
      // adj-right
      style = {
        ...baseStyle,
        transform: "scale(0.92) translateY(6px) rotateY(-10deg) translateX(8px)",
        filter: "brightness(.95) blur(0.6px)",
        opacity: 0.85,
        boxShadow: "0 8px 20px rgba(8,20,30,0.06)",
        zIndex: 3,
      };
      extraClass = "card-adj-right";
    }

    return { style, extraClass };
  };

  return (
    <section
      ref={wrapRef}
      className="relative overflow-visible py-4 pb-9 select-none"
    >
      {/* Carousel track */}
      <div
        ref={carouselRef}
        className="flex items-center gap-[22px] py-4"
        style={{
          transform: `translateX(-${offsetX}px)`,
          transition: instant
            ? "none"
            : "transform .5s cubic-bezier(.22,.9,.3,1)",
          willChange: "transform",
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {cardsData.map((card, idx) => {
          const { style, extraClass } = getCardStyleAndClass(idx);
          return (
            <article
              key={`${card.origIndex}-${idx}`}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`relative block h-[380px] w-[260px] flex-shrink-0 overflow-hidden rounded-[14px] bg-white ${extraClass}
              shadow-[0_8px_20px_rgba(8,20,30,0.06)]`}
              style={style}
              onClick={() => {
                goToOriginal(card.origIndex);
                restartAutoplay();
              }}
            >
              <img
                src={card.src}
                alt=""
                className="h-full w-full object-cover pointer-events-none"
                draggable="false"
              />
            </article>
          );
        })}
      </div>

      {/* Controls (centered) */}
      <div className="mt-3 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-800 shadow-[0_8px_20px_rgba(8,20,30,0.08)] transition-transform duration-150 hover:scale-[1.04]"
          onClick={() => {
            goToOffset(-1);
            restartAutoplay();
          }}
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-800 shadow-[0_8px_20px_rgba(8,20,30,0.08)] transition-transform duration-150 hover:scale-[1.04]"
          onClick={() => {
            goToOffset(1);
            restartAutoplay();
          }}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;
