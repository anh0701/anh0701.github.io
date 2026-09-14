import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Props = {
  images: string[];
};

export default function Slideshow({ images }: Props) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const hasMultipleImages = images.length > 1;

  const next = () => {
    setIndex((current) => (current + 1) % images.length);
  };

  const previous = () => {
    setIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  useEffect(() => {
    if (!hasMultipleImages || isPaused) {
      return;
    }

    const timer = setInterval(next, 3000);

    return () => clearInterval(timer);
  }, [hasMultipleImages, isPaused, images.length]);

  if (!images.length) {
    return null;
  }

  return (
    <div
      className="my-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image */}
      <div className="group relative flex justify-center">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="
            max-h-[600px]
            max-w-full
            rounded-xl
            object-contain
          "
        />

        {hasMultipleImages && (
          <>
            {/* Previous */}
            <button
              type="button"
              onClick={previous}
              aria-label="Previous image"
              className="
                absolute
                left-3
                top-1/2
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-black/50
                text-white/70
                opacity-0
                backdrop-blur-sm
                transition
                group-hover:opacity-100
                hover:bg-black/70
                hover:text-white
              "
            >
              <FiChevronLeft size={20} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="
                absolute
                right-3
                top-1/2
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-black/50
                text-white/70
                opacity-0
                backdrop-blur-sm
                transition
                group-hover:opacity-100
                hover:bg-black/70
                hover:text-white
              "
            >
              <FiChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Controls */}
      {hasMultipleImages && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((_, imageIndex) => (
            <button
              key={imageIndex}
              type="button"
              aria-label={`Go to slide ${imageIndex + 1}`}
              onClick={() => setIndex(imageIndex)}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  imageIndex === index
                    ? "w-6 bg-white/80"
                    : "w-1.5 bg-white/25 hover:bg-white/50"
                }
              `}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {/* {hasMultipleImages && (
        <p className="mt-2 text-center text-xs text-zinc-600">
          {index + 1} / {images.length}
        </p>
      )} */}
    </div>
  );
}
