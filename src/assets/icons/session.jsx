export default function SessionIcon({ className = "w-6 h-6 text-gray-700" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      {/* Calendar Icon */}
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        ry="2"
        className="fill-current"
      />
      <path d="M8 2v4M16 2v4" className="stroke-current stroke-2" />
      <line
        x1="3"
        y1="10"
        x2="21"
        y2="10"
        className="stroke-current stroke-2"
      />

      {/* Plus Sign for Adding a Session */}
      <circle
        cx="18"
        cy="16"
        r="5"
        className="fill-white stroke-current stroke-2"
      />
      <line
        x1="18"
        y1="14"
        x2="18"
        y2="18"
        className="stroke-current stroke-2"
      />
      <line
        x1="16"
        y1="16"
        x2="20"
        y2="16"
        className="stroke-current stroke-2"
      />
    </svg>
  );
}
