import { useEffect, useState } from "react";

type Props = {
    images: string[];

    settings?: {
        autoplay?: boolean;
        delay?: number;
    };
};

export default function Slideshow({
    images,
    settings,
}: Props) {
    const [index, setIndex] = useState(0);

    const autoplay =
        settings?.autoplay ?? true;

    const delay =
        settings?.delay ?? 3000;

    function next() {
        setIndex((prev) =>
            prev === images.length - 1
                ? 0
                : prev + 1
        );
    }

    function prev() {
        setIndex((prev) =>
            prev === 0
                ? images.length - 1
                : prev - 1
        );
    }

    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(
            next,
            delay
        );

        return () => clearInterval(interval);
    }, [index, autoplay, delay]);

    return (
        <div className="relative w-full overflow-hidden rounded-2xl">

            <img
                src={images[index]}
                alt=""
                className="
          w-full
          object-cover
          transition-all
          duration-500
        "
            />

            <button
                onClick={prev}
                className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-white
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                hover:scale-110
                hover:text-white/90
                active:scale-95
                transition-all
                duration-300
                "
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
                
            </button>

            <button
                onClick={next}
                className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-white
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                hover:scale-110
                hover:text-white/90
                active:scale-95
                transition-all
                duration-300
                "
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
            </button>

            <div
                className="
                    absolute
                    bottom-3
                    left-1/2
                    -translate-x-1/2

                    flex
                    gap-2
                    "
                 >
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`
                        w-3
                        h-3
                        rounded-full

                        ${i === index
                            ? "bg-white"
                            : "bg-white/40"
                            }
                        `}
                    />
                ))}
            </div>
        </div>
    );
}