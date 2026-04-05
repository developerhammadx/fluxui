"use client";

export function NeonSpinner({ size = 64 }: { size?: number }) {
  return (
    <div
      className="relative"
      style={{ width: size, height: size }}
      role="status"
      aria-label="Loading"
    >
      <div
        className="absolute inset-0 rounded-full border-2 border-[#222] border-t-[#00D9A3] animate-spin"
        style={{ animationDuration: "1s" }}
      />
      <div
        className="absolute inset-1 rounded-full border-2 border-[#222] border-b-[#00D9A3] animate-spin"
        style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
      />
    </div>
  );
}
