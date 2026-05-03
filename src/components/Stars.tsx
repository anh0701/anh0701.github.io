function generateStars(count: number, color = "white") {
  let stars = "";
  for (let i = 0; i < count; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    stars += `${x}px ${y}px ${color}, `;
  }
  return stars.slice(0, -2);
}

export default function Stars() {
  return (
    <div className="h-[90vh]">
      <div
        className="bg-black/40 absolute inset-0 z-0 pointer-events-none animate-[twinkle_2s_infinite_alternate]"
        style={{
          boxShadow: generateStars(200),
          width: "1px",
          height: "1px",
          background: "white",
          filter: "blur(0.5px)",
          borderRadius: "50%",
        }}
      />

      <div
        className="bg-black/40 absolute inset-0 z-0 pointer-events-none animate-[twinkle_3s_infinite_alternate]"
        style={{
          boxShadow: generateStars(100),
          width: "2px",
          height: "2px",
          background: "white",
          opacity: 0.7,
          filter: "blur(0.5px)",
          borderRadius: "50%",
        }}
      />

      <div
        className="bg-black/40 absolute inset-0 z-0 pointer-events-none animate-[twinkle_4s_infinite_alternate]"
        style={{
          boxShadow: generateStars(50, "#60a5fa"), 
          width: "3px",
          height: "3px",
          background: "#60a5fa",
          opacity: 0.9,
          filter: "blur(0.5px)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}