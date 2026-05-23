import { useEffect, useState } from "react";

type Props = {
  images: string[];
};

export default function Slideshow({ images }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 2500);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="my-10 rounded-2xl overflow-hidden border border-white/10 bg-black/30">
      <img
        src={images[index]}
        className="w-full h-[420px] object-cover transition-opacity duration-500"
      />

      <div className="p-3 text-center text-white/60 text-sm">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
