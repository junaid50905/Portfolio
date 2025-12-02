"use client";

export default function CircleIcon({
  icon,
  bg = "bg-gray-200",
  size = "w-10 h-10",
  className = "",
}) {
  return (
    <div
      className={`${bg} ${size} rounded-full flex items-center justify-center ${className}`}
    >
      {icon}
    </div>
  );
}
