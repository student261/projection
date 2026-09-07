"use client";

export default function BackgroundAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu">
      {/* Soft Ambient Projection Light Beam Orbs */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full opacity-30 animate-pulse pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(240, 240, 240, 0.03) 50%, transparent 70%)",
          animationDuration: "12s",
        }}
      />

      <div
        className="absolute top-[40%] right-[-10%] w-[650px] h-[650px] rounded-full opacity-25 animate-pulse pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(230, 230, 230, 0.02) 50%, transparent 70%)",
          animationDuration: "16s",
        }}
      />

      {/* Lightweight Architectural Projection Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
    </div>
  );
}
