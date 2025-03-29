const StatusBadge = ({ status }) => {
  const statusColors = {
    approved: "bg-green-100 text-green-700",
    successful: "bg-green-100 text-green-700",
    failed: "bg-red-100 text-red-700",
    pending: "bg-amber-100 text-amber-700",
    rejected: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        statusColors[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

//   // Example usage
//   const StatusList = ({ statuses }) => (
//     <div className="space-y-2">
//       {statuses.map((status, index) => (
//         <StatusBadge key={index} status={status} />
//       ))}
//     </div>
//   );

export default StatusBadge;
