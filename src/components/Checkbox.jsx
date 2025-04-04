const Checkbox = ({ id, name, value, onChange, disabled }) => {
  return (
    <div className="flex items-center cursor-pointer">
      <input
        id={id}
        name={name}
        type="checkbox"
        className="hidden"
        disabled={disabled}
        checked={value}
        onChange={() => onChange(!value)}
      />
      <div
        className={`w-4 h-4 rounded border transition-colors duration-200 ${
          value ? "bg-[#7a5af8] border-[#7a5af8]" : "border-[#E2E4E9]"
        } flex items-center justify-center`}
      >
        {value && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
